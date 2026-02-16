import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { API_ROUTES } from "@/lib/api/routes";
import { api } from "@/lib/api/api";

interface AdminChangeUserRolePayload {
  newRole: string;
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface AdminChangeUserRoleResponse {
  message: string;
  user: User;
}

interface AdminChangeUserRoleInput {
  userId: string;
  newRole: string;
}

interface UseAdminChangeUserRoleOptions {
  onSuccess?: (data: AdminChangeUserRoleResponse) => void;
  onError?: (error: unknown) => void;
}

export const useAdminChangeUserRole = (
  options?: UseAdminChangeUserRoleOptions
) => {
  const { mutate, mutateAsync, isPending, isSuccess, isError } = useMutation({
    mutationFn: async ({ userId, newRole }: AdminChangeUserRoleInput) => {
      const payload: AdminChangeUserRolePayload = { newRole };

      const response = await api.post<
        AdminChangeUserRolePayload,
        AdminChangeUserRoleResponse
      >(API_ROUTES.users.changeRole(userId), payload);

      return response;
    },
    onSuccess: (data: AdminChangeUserRoleResponse) => {
      toast.success(data.message || "User role changed successfully!");
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
        "Failed to change user role";
      toast.error(message);
      options?.onError?.(error);
    },
  });

  return {
    changeUserRole: mutate,
    changeUserRoleAsync: mutateAsync,
    isPending,
    isSuccess,
    isError,
  };
};
