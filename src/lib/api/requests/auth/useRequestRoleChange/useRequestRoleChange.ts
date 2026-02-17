import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { API_ROUTES } from "@/lib/api/routes";
import { api } from "@/lib/api/api";

interface RequestRoleChangePayload {
  newRole: string;
  reason: string;
}

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
}

interface RequestRoleChangeResponse {
  message: string;
  user: User;
}

interface UseRequestRoleChangeOptions {
  onSuccess?: (data: RequestRoleChangeResponse) => void;
  onError?: (error: unknown) => void;
}

export const useRequestRoleChange = (options?: UseRequestRoleChangeOptions) => {
  const { mutate, mutateAsync, isPending, isSuccess, isError } = useMutation({
    mutationFn: async (newRole: string) => {
      const payload: RequestRoleChangePayload = {
        newRole,
        reason: "User requested role change via dashboard",
      };

      const response = await api.post<
        RequestRoleChangePayload,
        RequestRoleChangeResponse
      >(API_ROUTES.users.requestRoleChange, payload);

      return response;
    },
    onSuccess: (data: RequestRoleChangeResponse) => {
      toast.success(data.message || "Role change request successful!");
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
        "Role change request failed";
      toast.error(message);
      options?.onError?.(error);
    },
  });

  return {
    requestRoleChange: mutate,
    requestRoleChangeAsync: mutateAsync,
    isPending,
    isSuccess,
    isError,
  };
};
