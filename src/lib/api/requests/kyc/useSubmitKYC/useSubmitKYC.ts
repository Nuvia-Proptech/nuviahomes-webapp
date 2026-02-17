import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { API_ROUTES } from "@/lib/api/routes";
import { api } from "@/lib/api/api";

export interface KYCFormData {
  fullName: string;
  dob: string;
  gender: string;
  nationality: string;
  residentialAddress: string;
  applyingAs: "agent" | "owner";
  idType: string;
  idNumber: string;
  idIssueDate: string;
  idExpiryDate: string;
  phone: string;
  email: string;
  addressProofType: string;
  bankName: string;
  accountNumber: string;
  accountName: string;
  sourceOfFunds: string;
  transactionPurpose: string;
  businessName?: string;
  registrationNumber?: string;
  businessAddress?: string;
  directorDetails?: string;
  // Files
  idFront?: FileList;
  addressProof?: FileList;
  selfie?: FileList;
  incorporationCert?: FileList;
}

interface UseSubmitKYCOptions {
  onSuccess?: (data: any) => void;
  onError?: (error: unknown) => void;
}

export const useSubmitKYC = (options?: UseSubmitKYCOptions) => {
  const { mutate, mutateAsync, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (data: KYCFormData) => {
      const formData = new FormData();

      // Append text fields
      Object.entries(data).forEach(([key, value]) => {
        if (value instanceof FileList) {
            // Skip files here, handle them below
            return;
        }
        if (value !== undefined && value !== null) {
          formData.append(key, value as string);
        }
      });

      // Append files
      if (data.idFront?.[0]) formData.append("idFront", data.idFront[0]);
      if (data.addressProof?.[0]) formData.append("addressProof", data.addressProof[0]);
      if (data.selfie?.[0]) formData.append("selfie", data.selfie[0]);
      if (data.incorporationCert?.[0]) formData.append("incorporationCert", data.incorporationCert[0]);

      // We use api.instance directly or a custom wrapper because api.post expects JSON by default unless we handle FormData explicitly.
      // However, looking at api.ts, api.post can handle standard requests. 
      // But typically for FormData we need to set 'Content-Type': 'multipart/form-data'.
      // api.upload is for single file. api.uploadMultiple is for array of files.
      // Since we have mixed fields and files, we can use api.post with FormData and manual header, 
      // OR let axios handle it (axios automatically sets Content-Type to multipart/form-data if data is FormData).
      // Let's us api.post but cast to any to avoid generic constraints if needed, or better, just use the axios instance directly if api.post forces JSON.
      // Checking api.ts again: 
      // api.post does: response = await this.instance.post<Response>(url, data, config);
      // It sets 'Content-Type': 'application/json' in constructor but we can override it in config.
      
      const response = await api.post(API_ROUTES.kyc.submit, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response;
    },
    onSuccess: (data) => {
      toast.success("KYC Submitted successfully!");
      options?.onSuccess?.(data);
    },
    onError: (error: unknown) => {
      const apiError = error as {
        status?: number;
        data?: { message?: string };
        message?: string;
      };
      const message =
        apiError?.data?.message ??
        apiError?.message ??
        "Failed to submit KYC application.";
      toast.error(message);
      options?.onError?.(error);
    },
  });

  return {
    submitKYC: mutate,
    submitKYCAsync: mutateAsync,
    isPending,
    isSuccess,
    isError,
  };
};
