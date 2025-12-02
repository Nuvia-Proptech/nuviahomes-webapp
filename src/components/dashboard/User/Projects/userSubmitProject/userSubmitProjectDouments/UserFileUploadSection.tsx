import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { CloseCircleIcon } from "@/components/shared/Icons/CloseCircleIcon";
import { DocumentUploadIcon } from "@/components/shared/Icons/DocumentUploadIcon";
import React, { useState, useRef } from "react";

export const UserFileUploadSection = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [fileUrl, setFileUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isAddingWithUrl, setIsAddingWithUrl] = useState(false);
  const fileInputRef = useRef(null);

  const predefinedNames = ['Lease Agreement', 'Land Deeds', 'Plan Survey'];

  const isImageUrl = (url) => {
    const imageExtensions = ['.jpg', '.jpeg', '.png', '.gif', '.bmp', '.webp', '.svg', '.ico'];
    const imagePatterns = ['image/', 'img.', 'images.', 'photobucket', 'flickr', 'imgur'];
    
    const lowerUrl = url.toLowerCase();
    return imageExtensions.some(ext => lowerUrl.includes(ext)) || 
           imagePatterns.some(pattern => lowerUrl.includes(pattern));
  };

  const getFileNameByIndex = (index) => {
    return predefinedNames[index] || `Document ${index + 1}`;
  };

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    handleFiles(files);
  };

  const handleFiles = (files) => {
    // Check file limit
    if (selectedFiles.length + files.length > 3) {
      alert("Maximum 3 files allowed. Please select fewer files.");
      return;
    }

    // Filter out image files
    const nonImageFiles = files.filter((file) => !file.type.startsWith("image/"));

    // Show alert if any images were filtered out
    if (nonImageFiles.length < files.length) {
      alert("Image files are not allowed. Please select document files only.");
    }

    // Check limit again after filtering
    if (selectedFiles.length + nonImageFiles.length > 3) {
      const filesToAdd = nonImageFiles.slice(0, 3 - selectedFiles.length);
      filesToAdd.forEach((file, index) => processFile(file, selectedFiles.length + index));
      if (nonImageFiles.length > filesToAdd.length) {
        alert("Maximum 3 files reached. Some files were not added.");
      }
    } else {
      nonImageFiles.forEach((file, index) => processFile(file, selectedFiles.length + index));
    }
  };

  const processFile = (file, globalIndex) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedFiles((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          url: e.target.result,
          name: getFileNameByIndex(globalIndex),
          originalName: file.name,
          type: "file",
          size: file.size,
          fileType: file.type,
        },
      ]);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleAddFromUrl = () => {
    if (selectedFiles.length >= 3) {
      alert("Maximum 3 files allowed. Please remove a file before adding a new one.");
      return;
    }

    if (fileUrl.trim()) {
      if (isImageUrl(fileUrl)) {
        alert("Image URLs are not allowed. Please provide a URL to a document file.");
        return;
      }

      setSelectedFiles((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          url: fileUrl.trim(),
          name: getFileNameByIndex(selectedFiles.length),
          type: "url",
        },
      ]);
      setFileUrl("");
    }
  };

  const handleBrowseClick = () => {
    if (selectedFiles.length >= 3) {
      alert("Maximum 3 files allowed. Please remove a file before adding a new one.");
      return;
    }
    fileInputRef.current?.click();
  };

  const removeFile = (id) => {
    setSelectedFiles((prev) => {
      const updatedFiles = prev.filter((file) => file.id !== id);
      
      // Reassign names based on new order
      return updatedFiles.map((file, index) => ({
        ...file,
        name: getFileNameByIndex(index)
      }));
    });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddFromUrl();
    }
  };

  const getFileIcon = (fileType) => {
    if (fileType?.includes('pdf')) return 'PDF';
    if (fileType?.includes('word') || fileType?.includes('document')) return 'Word';
    if (fileType?.includes('sheet') || fileType?.includes('excel')) return 'Sheet';
    if (fileType?.includes('zip') || fileType?.includes('rar')) return 'Zip';
    return 'Doc';
  };

  return (
    <div className="grid grid-cols-1 sm:flex gap-8 font-urbanist my-5">
      {/* Left Side - Upload Area */}
      <div className="space-y-2 bg-secondaryColor rounded-xl p-2 w-full sm:w-80 flex flex-col justify-center items-center">
        {/* URL Input Section */}
        <div className="flex flex-col justify-end items-end gap-1">
          <button 
            onClick={() => setIsAddingWithUrl(prev => !prev)} 
            className="text-xs font-urbanist font-normal text-primaryColor/80"
            disabled={selectedFiles.length >= 3}
          >
            Add document from URL
          </button>

          {isAddingWithUrl && (
            <div className="flex gap-2 w-full">
              <AppInput
                type="url"
                onChange={(e) => setFileUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-[220px]"
                placeholder="https://example.com/document.pdf"
                value={fileUrl}
                disabled={selectedFiles.length >= 3}
              />
              <button
                onClick={handleAddFromUrl}
                disabled={!fileUrl.trim() || selectedFiles.length >= 3}
                className="px-4 py-2 bg-primaryColor/80 text-white rounded-lg hover:bg-primaryColor/80 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-normal text-sm w-fit h-fit cursor-pointer"
              >
                Add
              </button>
            </div>
          )}
        </div>

        {/* Drag and Drop Area */}
        <div
          className={`w-full border border-dashed rounded-xl p-4 text-center transition-colors flex flex-col gap-2 justify-center items-center border-[#A8B6B8] max-w-2xs ${
            isDragging ? "border-primaryColor/50 bg-blue-50" : ""
          } ${selectedFiles.length >= 3 ? "opacity-50 cursor-not-allowed" : ""}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={selectedFiles.length >= 3 ? undefined : handleDrop}
        >
          <DocumentUploadIcon />

          <p className="text-sm font-semibold text-textColor">
            Drag and drop document here
          </p>
          <p className="text-[#22303E38] text-sm font-normal">or</p>

          <button
            onClick={handleBrowseClick}
            disabled={selectedFiles.length >= 3}
            className="py-2 px-3 bg-[#7B43EA1A] text-primaryColor/80 rounded-sm transition-colors font-normal text-sm w-fit h-fit cursor-pointer disabled:bg-gray-300 disabled:text-gray-500"
          >
            Browse
          </button>

          <AppInput
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept=".pdf,.doc,.docx,.txt,.zip,.rar,.excel,.word,.sheet,.document"
            multiple
            className="hidden"
            disabled={selectedFiles.length >= 3}
          />
        </div>
      </div>

      {/* Right Side - File Gallery */}
      <div className="flex justify-start items-center overflow-hidden w-full">
        {selectedFiles.length > 0 ? (
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto overflow-hidden bg-secondaryColor rounded-sm p-2.5 w-full">
            {selectedFiles.map((file, index) => (
             <div>
                <p className="text-textColor text-sm font-normal font-urbanist mb-1">{file.name}</p>
                 <div key={index} className="relative w-full border border-dashed border-gray-200">
                <div className="rounded-xl p-4 max-w-36 h-36 flex flex-col items-center justify-center">
                  <div className="flex flex-col gap-2 justify-center items-center text-sm text-dangerColor font-urbanist font-bold">
                    <DocumentUploadIcon />
                    <p>
                      {getFileIcon(file.fileType)}
                    </p>       
                  </div>
                </div>
                <button
                  onClick={() => removeFile(file.id)}
                  className="absolute w-7 h-7 md:w-10.5 md:h-10.5 -top-1.5 sm:-top-2.5 right-0 rounded-full bg-[#FFFFFFBD] transition-opacity z-20"
                >
                  <div className="flex justify-center items-center">
                    <CloseCircleIcon />
                  </div>
                </button>
              </div>
             </div>
            ))}
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};