"use client";
import { useFormManager } from "@/lib/formManager/useFormManager";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { API_ROUTES } from "@/lib/api/routes";
import { useResetPasswordFormValidator } from "./useResetPasswordFormValidator";
import { api } from "@/lib/api/api";

interface ResetPasswordRequest {
  token: string;
  newPassword: string;
}

interface ResetPasswordResponse {
  message?: string;
}

export const useResetPassword = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormManager({
    validator: useResetPasswordFormValidator,
  });

  const {
    mutate: resetPassword,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (formData: { newPassword: string }) => {
      if (!token) {
        throw new Error("Reset token is missing. Please use the link from your email.");
      }

      const payload: ResetPasswordRequest = {
        token,
        newPassword: formData.newPassword,
      };

      const response = await api.post<ResetPasswordRequest, ResetPasswordResponse>(
        API_ROUTES.auth.resetPassword,
        payload
      );
      return response;
    },
    onSuccess: () => {
      reset();
      toast.success("Password reset successful! Please sign in with your new password.", {
        duration: 6000,
      });
      push("/user-login");
    },
    onError: (error: unknown) => {
      const apiError = error as {
        status?: number;
        data?: { message?: string };
        message?: string;
      };
      
      // Handle specific error cases
      if (apiError?.status === 400) {
        toast.error("Invalid or expired reset token. Please request a new password reset.", {
          duration: 6000,
        });
      } else {
        const message =
          apiError?.data?.message ?? apiError?.message ?? "Something went wrong. Please try again.";
        toast.error(message);
      }
    },
  });

  const submitResetPassword = handleSubmit((formData) =>
    resetPassword({ newPassword: formData.newPassword })
  );

  return {
    control,
    errors,
    submitResetPassword,
    isPending,
    isSuccess,
    hasToken: !!token,
  };
};
