"use client";
import { useFormManager } from "@/lib/formManager/useFormManager";
import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/api/api";
import toast from "react-hot-toast";
import { API_ROUTES } from "../../../routes";
import { SuccessResponse } from "../../../types";
import { useSignUpFormValidator } from "./useSignUpFormValidator";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";
import appRoutes from "@/constants/AppRoutes";

interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: "user" | "admin" | "agent" | "investor";
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface SignUpResponse {
  access_token: string;
  user: User;
}

export const useSignUp = () => {
  const { push } = useRouter();
  const { setAuth } = useAuthStore();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormManager({
    validator: useSignUpFormValidator,
  });

  const { mutate: signUp, isPending } = useMutation({
    mutationFn: async (formData: Record<string, any>) => {
      // Transform form data to match API schema
      const apiPayload: SignUpRequest = {
        firstName: formData.first_name,
        lastName: formData.last_name,
        email: formData.email,
        phone: formData.phone,
        password: formData.password,
        role: "user",
      };

      const response = await api.post<
        SignUpRequest,
        SuccessResponse<SignUpResponse>
      >(API_ROUTES.auth.createAccount, apiPayload);
      return response;
    },
    onSuccess: (data) => {
      // Store auth token and user data in Zustand (which auto-syncs to localStorage)
      setAuth(data.data.access_token, data.data.user);

      reset();
      push(appRoutes.dashboard.user.index)
      toast.success("registered successfully", {
        duration: 5000,
      });
    },
    onError: (error: any) => {
      // if user already exists
      if (error?.response?.status === 409) {
        toast.error("User with this email already exists", {
          duration: 5000,
        });
        return;
      }

      // Handle other errors
      toast.error(
        error?.response?.data?.message ??
          error?.message ??
          "Something went wrong",
        {
          duration: 5000,
        }
      );
    },
  });

  const submitSignUp = handleSubmit((formData) => signUp(formData));

  return {
    control,
    errors,
    submitSignUp,
    isPending,
  };
};
