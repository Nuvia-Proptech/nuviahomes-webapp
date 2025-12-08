import { useState, useRef } from "react";

export interface UploadedFile {
  id: number;
  url: string | ArrayBuffer | null;
  name: string;
  originalName?: string;
  type: string;
  size?: number;
  fileType?: string;
}

interface UseFileUploadOptions {
  maxFiles?: number;
  predefinedNames?: string[];
}

export const useFileUpload = ({
  maxFiles = 3,
  predefinedNames = ["Lease Agreement", "Land Deeds", "Plan Survey"],
}: UseFileUploadOptions = {}) => {
  const [selectedFiles, setSelectedFiles] = useState<UploadedFile[]>([]);
  const [fileUrl, setFileUrl] = useState("");
  const [isDragging, setIsDragging] = useState(false);
  const [isAddingWithUrl, setIsAddingWithUrl] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const isImageUrl = (url: string) => {
    const imageExtensions = [
      ".jpg",
      ".jpeg",
      ".png",
      ".gif",
      ".bmp",
      ".webp",
      ".svg",
      ".ico",
    ];
    const imagePatterns = [
      "image/",
      "img.",
      "images.",
      "photobucket",
      "flickr",
      "imgur",
    ];

    const lowerUrl = url.toLowerCase();
    return (
      imageExtensions.some((ext) => lowerUrl.includes(ext)) ||
      imagePatterns.some((pattern) => lowerUrl.includes(pattern))
    );
  };

  const getFileNameByIndex = (index: number) => {
    return predefinedNames[index] || `Document ${index + 1}`;
  };

  const handleFiles = (files: File[]) => {
    // Check file limit
    if (selectedFiles.length + files.length > maxFiles) {
      alert(`Maximum ${maxFiles} files allowed. Please select fewer files.`);
      return;
    }

    // Filter out image files
    const nonImageFiles = files.filter(
      (file) => !file.type.startsWith("image/")
    );

    // Show alert if any images were filtered out
    if (nonImageFiles.length < files.length) {
      alert("Image files are not allowed. Please select document files only.");
    }

    // Check limit again after filtering
    if (selectedFiles.length + nonImageFiles.length > maxFiles) {
      const filesToAdd = nonImageFiles.slice(
        0,
        maxFiles - selectedFiles.length
      );
      filesToAdd.forEach((file, index) =>
        processFile(file, selectedFiles.length + index)
      );
      if (nonImageFiles.length > filesToAdd.length) {
        alert(`Maximum ${maxFiles} files reached. Some files were not added.`);
      }
    } else {
      nonImageFiles.forEach((file, index) =>
        processFile(file, selectedFiles.length + index)
      );
    }
  };

  const processFile = (file: File, globalIndex: number) => {
    const reader = new FileReader();
    reader.onload = (e: ProgressEvent<FileReader>) => {
      setSelectedFiles((prev) => [
        ...prev,
        {
          id: Date.now() + Math.random(),
          url: e.target?.result || null,
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];
    handleFiles(files);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);

    const files = Array.from(e.dataTransfer.files);
    handleFiles(files);
  };

  const handleAddFromUrl = () => {
    if (selectedFiles.length >= maxFiles) {
      alert(
        `Maximum ${maxFiles} files allowed. Please remove a file before adding a new one.`
      );
      return;
    }

    if (fileUrl.trim()) {
      if (isImageUrl(fileUrl)) {
        alert(
          "Image URLs are not allowed. Please provide a URL to a document file."
        );
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
    if (selectedFiles.length >= maxFiles) {
      alert(
        `Maximum ${maxFiles} files allowed. Please remove a file before adding a new one.`
      );
      return;
    }
    fileInputRef.current?.click();
  };

  const deleteFile = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    fileToDelete: UploadedFile
  ) => {
    if (event) event.stopPropagation();
    setSelectedFiles((prev) => {
      const updatedFiles = prev.filter((file) => file.id !== fileToDelete.id);
      return updatedFiles.map((file, index) => ({
        ...file,
        name: getFileNameByIndex(index),
      }));
    });
  };

  const getFileIcon = (fileType?: string) => {
    if (fileType?.includes("pdf")) return "PDF";
    if (fileType?.includes("word") || fileType?.includes("document"))
      return "Word";
    if (fileType?.includes("sheet") || fileType?.includes("excel"))
      return "Sheet";
    if (fileType?.includes("zip") || fileType?.includes("rar")) return "Zip";
    return "Doc";
  };

  return {
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
  };
};
