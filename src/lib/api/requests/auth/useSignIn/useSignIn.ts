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

interface UseSignInOptions {
  portalType: "admin" | "user";
}

export const useSignIn = (options?: UseSignInOptions) => {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const setAuth = useAuthStore((state) => state.setAuth);
  const portalType = options?.portalType || "user";

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
      // Get role and normalize it (handle underscores and hyphens)
      const rawRole = (data.user?.role || "user").toLowerCase();
      let normalizedRole = rawRole.replace("_", "-");

      // Verify role mapping for redirection
      const userRole =
        normalizedRole as keyof typeof defaultRedirects.authenticated;

      console.log("--- Login Success Verification ---");
      console.log("Portal Type Requested:", portalType);
      console.log("User Data Received:", data.user);
      console.log("Raw Role from API:", rawRole);
      console.log("Normalized Role for App:", normalizedRole);

      // --- Portal Validation ---
      const isAdminRole =
        normalizedRole === "admin" || normalizedRole === "super-admin";

      if (portalType === "admin" && !isAdminRole) {
        toast.error("Access denied. Administrator privileges required.");
        return;
      }

      if (portalType === "user" && isAdminRole) {
        toast.error("Please use the Administrator Portal for this account.");
        return;
      }

      // If validation passed, store token and user
      setAuth(data.access_token, data.user);

      // Console all details as requested
      console.log("Access Token:", data.access_token);
      console.log("User Details (Stored):", data.user);

      // Check for redirect parameter, otherwise use role-based default
      const redirectPath = searchParams.get("redirect");

      // Determine final path
      const defaultPath =
        defaultRedirects.authenticated[userRole] ||
        (isAdminRole
          ? defaultRedirects.authenticated.admin
          : defaultRedirects.authenticated.user);

      console.log("Final Redirect Path:", redirectPath || defaultPath);

      push(redirectPath || defaultPath);
      reset();
      toast.success(`Welcome back, ${data.user.firstName}!`);
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
