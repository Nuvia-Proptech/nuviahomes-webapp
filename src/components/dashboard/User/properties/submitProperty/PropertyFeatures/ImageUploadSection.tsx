import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { CloseCircleIcon } from "@/components/shared/Icons/CloseCircleIcon";
import { DocumentUploadIcon } from "@/components/shared/Icons/DocumentUploadIcon";
import React, { useState, useRef } from "react";

export const ImageUploadSection = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isAddingWithUrl, setIsAddingWithUrl] = useState(false);
  const fileInputRef = useRef(null);

  const handleFileSelect = (event) => {
    const files = Array.from(event.target.files);
    handleImageFiles(files);
  };

  const handleImageFiles = (files) => {
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    imageFiles.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImages((prev) => [
          ...prev,
          {
            id: Date.now() + Math.random(),
            url: e.target.result,
            name: file.name,
            type: "file",
          },
        ]);
      };
      reader.readAsDataURL(file);
    });
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
    handleImageFiles(files);
  };

  const handleAddFromUrl = () => {
    if (imageUrl.trim()) {
      setSelectedImages((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          url: imageUrl.trim(),
          name: "From URL",
          type: "url",
        },
      ]);
      setImageUrl("");
    }
  };

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const removeImage = (id) => {
    setSelectedImages((prev) => prev.filter((img) => img.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleAddFromUrl();
    }
  };

  return (
    <div className="grid grid-cols-1 sm:flex gap-8 font-urbanist my-5">
      {/* Left Side - Upload Area */}
      <div className="space-y-2 bg-secondaryColor rounded-xl p-2 w-full sm:w-80 flex flex-col justify-center items-center">
        {/* URL Input Section */}
        <div className="flex flex-col justify-end items-end gap-1">
          <button onClick={() => setIsAddingWithUrl(prev => !prev)} className="text-xs font-urbanist font-normal text-primaryColor/80">
            Add media from URL
          </button>

          {isAddingWithUrl && (
            <div className="flex gap-2 w-full">
              <AppInput
                type="url"
                onChange={(e) => setImageUrl(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-[220px]"
                placeholder="https://example.com/image.jpg"
                value={imageUrl}
              />
              <button
                onClick={handleAddFromUrl}
                disabled={!imageUrl.trim()}
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
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <DocumentUploadIcon />

          <p className="text-sm font-semibold text-textColor">
            Drag and drop image here
          </p>
          <p className="text-[#22303E38] text-sm font-normal">or</p>

          <button
            onClick={handleBrowseClick}
            className="py-2 px-3 bg-[#7B43EA1A] text-primaryColor/80 rounded-sm transition-colors font-normal text-sm w-fit h-fit cursor-pointer"
          >
            Browse Image
          </button>

          <AppInput
            type="file"
            ref={fileInputRef}
            onChange={handleFileSelect}
            accept="image/*"
            multiple
            className="hidden"
          />
        </div>
      </div>

      {/* Right Side - Image Gallery */}
      <div className="flex justify-start items-center overflow-hidden">
        {selectedImages.length > 0 ? (
          <div className="grid grid-cols-3 gap-2 sm:gap-4 max-h-96 overflow-y-auto overflow-hidden">
            {selectedImages.map((image, index) => (
              <div key={image.id} className="relative w-full">
                <div className="rounded-xl overflow-hidden">
                  <img
                    src={image.url}
                    alt={`Uploaded ${index + 1}`}
                    className="w-full max-w-36 h-36 object-cover"
                    onError={(e) => {
                      e.target.src =
                        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI2YzZjNmMyIvPjx0ZXh0IHg9IjEwMCIgeT0iMTAwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMTQiIGZpbGw9IiM5OTkiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBFcnJvcjwvdGV4dD48L3N2Zz4=";
                    }}
                  />
                </div>
                <button
                  onClick={() => removeImage(image.id)}
                  className="absolute w-7 h-7 md:w-10.5 md:h-10.5 -top-1.5 sm:-top-2.5 right-0 rounded-full bg-[#FFFFFFBD] transition-opacity z-20"
                >
                  <div className="flex justify-center items-center"><CloseCircleIcon /></div>
                  
                </button>
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
