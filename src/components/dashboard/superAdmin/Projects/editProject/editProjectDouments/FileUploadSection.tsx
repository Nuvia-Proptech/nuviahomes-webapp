import { AppInput } from "@/components/shared/AppSetup/AppInput";
import { CloseCircleIcon } from "@/components/shared/Icons/CloseCircleIcon";
import { DocumentUploadIcon } from "@/components/shared/Icons/DocumentUploadIcon";
import { useFileUpload } from "@/hooks/useFileUpload";
import React from "react";

export const FileUploadSection = () => {
  const {
    selectedFiles,
    fileUrl,
    setFileUrl,
    isDragging,
    isAddingWithUrl,
    setIsAddingWithUrl,
    fileInputRef,
    handleFileSelect,
    handleAddFromUrl,
    handleDragOver,
    handleDragLeave,
    handleDrop,
    handleBrowseClick,
    deleteFile,
    getFileIcon,
  } = useFileUpload();

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddFromUrl();
    }
  };

  return (
    <div className="grid grid-cols-1 md:flex gap-8 font-urbanist my-5">
      {/* Left Side - Upload Area */}
      <div className="space-y-2 bg-secondaryColor rounded-xl p-2 w-80 flex flex-col justify-center items-center">
        {/* URL Input Section */}
        <div className="flex flex-col justify-end items-end gap-1">
          <button
            onClick={() => setIsAddingWithUrl((prev) => !prev)}
            className="text-xs font-urbanist font-normal text-primaryColor/80"
            disabled={selectedFiles.length >= 3}
          >
            Add document from URL
          </button>

          {isAddingWithUrl && (
            <div className="flex gap-2 w-full">
              <AppInput
                type="url"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setFileUrl(e.target.value)
                }
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
          } ${
            selectedFiles.length >= 3 ? "opacity-50 cursor-not-allowed" : ""
          }`}
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
            // @ts-ignore
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
      <div className="flex justify-start items-center overflow-hidden w-fit">
        {selectedFiles.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-h-96 overflow-y-auto overflow-hidden bg-secondaryColor rounded-sm p-2.5p">
            {selectedFiles.map((file: any) => (
              <div key={file.id}>
                <p className="text-textColor text-sm font-normal font-urbanist mb-1">
                  {file.name}
                </p>
                <div className="relative w-full">
                  <div className="rounded-xl border border-dashed border-gray-200 p-4 w-36 h-36 flex flex-col items-center justify-center">
                    <div className="flex flex-col gap-2 justify-center items-center text-sm text-dangerColor font-urbanist font-bold">
                      <DocumentUploadIcon />
                      <p>{getFileIcon(file.fileType)}</p>
                    </div>
                  </div>
                  <button
                    onClick={(event: any) => deleteFile(event, file)}
                    className="absolute w-10.5 h-10.5 rounded-full bg-[#FFFFFFBD] -top-2.5 -right-2.5 transition-opacity z-20"
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
