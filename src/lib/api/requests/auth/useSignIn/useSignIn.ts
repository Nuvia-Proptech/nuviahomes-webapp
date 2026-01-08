import { useFormManager } from "@/lib/formManager/useFormManager";
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import toast from "react-hot-toast";
import { API_ROUTES } from "@/lib/api/routes";
import { useSignInFormValidator } from "./useSignInFormValidator";
import { useAuthStore } from "@/store/useAuthStore";
import { defaultRedirects } from "@/config/routeConfig";
import { api } from "@/lib/api/api";

interface SignInRequest {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface SignInResponse {
  access_token: string;
  user: User;
}

export const useSignIn = () => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const setAuth = useAuthStore((state) => state.setAuth);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormManager({
    validator: useSignInFormValidator,
  });

  const {
    mutate: signIn,
    isPending,
    isSuccess,
  } = useMutation({
    mutationFn: async (formData: SignInRequest) => {
      const response = await api.post<SignInRequest, SignInResponse>(
        API_ROUTES.auth.signIn,
        formData
      );
      return response;
    },
    onSuccess: (data: SignInResponse) => {
      // Store token and user in Zustand store (also persists to cookie for middleware)
      // The schema shows access_token and user are at the root
      setAuth(data.access_token, data.user);

      // Check for redirect parameter, otherwise use role-based default
      const redirectPath = searchParams.get("redirect");
      const userRole = data.user
        .role as keyof typeof defaultRedirects.authenticated;
      const defaultPath =
        defaultRedirects.authenticated[userRole] ||
        defaultRedirects.authenticated.user;

      push(redirectPath || defaultPath);
      reset();
      toast.success(`Welcome back!`);
    },
    onError: (error: unknown) => {
      const apiError = error as {
        status?: number;
        data?: { message?: string };
        message?: string;
      };
      const message =
        apiError?.data?.message ?? apiError?.message ?? "Something went wrong";
      toast.error(message);
    },
  });

  const submitSignIn = handleSubmit((formData) =>
    signIn(formData as unknown as SignInRequest)
  );

  return {
    control,
    errors,
    submitSignIn,
    isPending,
    isSuccess,
  };
};
