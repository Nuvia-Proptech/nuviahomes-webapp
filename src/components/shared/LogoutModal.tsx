"use client";
import React from "react";
import { LogOut, X } from "lucide-react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoggingOut?: boolean;
}

export const LogoutModal = ({
  isOpen,
  onClose,
  onConfirm,
  isLoggingOut = false,
}: LogoutModalProps) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4 animate-in fade-in duration-200"
      onClick={handleBackdropClick}
    >
      <div
        className="bg-white rounded-2xl max-w-sm w-full shadow-2xl overflow-hidden scale-in-center animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header/Icon */}
        <div className="flex justify-center pt-8 pb-4">
          <div className="w-16 h-16 bg-red-50 rounded-full flex items-center justify-center text-red-500">
            <LogOut className="h-8 w-8 ml-1" />
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-4 text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Confirm Logout
          </h3>
          <p className="text-gray-500">
            Are you sure you want to log out? You will need to sign in again to
            access your account.
          </p>
        </div>

        {/* Actions */}
        <div className="px-6 py-6 flex flex-col gap-3">
          <button
            onClick={onConfirm}
            disabled={isLoggingOut}
            className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-100 disabled:opacity-50"
          >
            {isLoggingOut ? "Logging out..." : "Logout"}
          </button>
          <button
            onClick={onClose}
            disabled={isLoggingOut}
            className="w-full py-3 px-4 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-xl font-bold transition-colors disabled:opacity-50"
          >
            Cancel
          </button>
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};
