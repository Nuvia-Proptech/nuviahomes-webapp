"use client";
import { useFormManager } from "@/lib/formManager/useFormManager";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { API_ROUTES } from "@/lib/api/routes";
import { useForgotPasswordFormValidator } from "./useForgotPasswordFormValidator";
import { api } from "@/lib/api/api";

interface ForgotPasswordRequest {
  email: string;
}

interface ForgotPasswordResponse {
  message?: string;
}

export const useForgotPassword = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormManager({
    validator: useForgotPasswordFormValidator,
  });

  const {
    mutate: forgotPassword,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (formData: ForgotPasswordRequest) => {
      const response = await api.post<ForgotPasswordRequest, ForgotPasswordResponse>(
        API_ROUTES.auth.forgotPassword,
        formData
      );
      return response;
    },
    onSuccess: () => {
      reset();
      toast.success(
        "If an account exists with that email, you will receive password reset instructions.",
        { duration: 6000 }
      );
    },
    onError: (error: unknown) => {
      const apiError = error as {
        status?: number;
        data?: { message?: string };
        message?: string;
      };
      const message =
        apiError?.data?.message ?? apiError?.message ?? "Something went wrong. Please try again.";
      toast.error(message);
    },
  });

  const submitForgotPassword = handleSubmit((formData) =>
    forgotPassword(formData as unknown as ForgotPasswordRequest)
  );

  return {
    control,
    errors,
    submitForgotPassword,
    isPending,
    isSuccess,
  };
};
