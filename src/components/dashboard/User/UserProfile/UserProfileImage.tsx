"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import defaultProfile from "@/assets/images/profile.png";

export const UserProfileImage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleUploadPhoto = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file || !file.type.startsWith("image/")) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      setSelectedImage(event.target?.result);
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setSelectedImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-5 font-urbanist">
      {/* Profile Image */}
      <div className="relative w-28 h-28 rounded-xl overflow-hidden bg-transparent">
        <Image
          src={selectedImage || defaultProfile}
          alt="User profile"
          fill
          className="object-cover"
          sizes="96px"
        />
      </div>

      {/* Upload and Reset Buttons */}
      <div className="flex flex-col gap-2.5 font-urbanist ">
        <div className="flex gap-3">
          <button
            onClick={handleUploadPhoto}
            className="text-white text-base bg-textColor px-4 py-2 rounded-md font-medium cursor-pointer"
          >
            Upload New Photo
          </button>
          <button
            onClick={handleReset}
            className="bg-neutralColor-900 text-textColor px-4 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Reset
          </button>
        </div>

        <p className="text-sm text-grayColor/70 font-medium mt-1">
          Allowed JPG, GIF or PNG. Max size of 800K
        </p>
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleImageChange}
      />
    </div>
  );
};
