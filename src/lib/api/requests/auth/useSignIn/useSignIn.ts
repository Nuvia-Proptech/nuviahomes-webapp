import { api } from "@/lib/api/api";
import { useFormManager } from "@/lib/formManager/useFormManager";
import appRoutes from "@/constants/AppRoutes";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { API_ROUTES } from "@/lib/api/routes"; // Assuming routes is in lib/api
import { SuccessResponse } from "@/lib/api/types"; // Assuming types is in lib/api
import { useSignInFormValidator } from "./useSignInFormValidator";

interface SignInRequest {
  email: string;
  password: string;
}

interface SignInResponse {
  token: string;
  data: SignInRequest;
}

export const useSignIn = () => {
  const { push } = useRouter();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormManager({
    validator: useSignInFormValidator,
  });

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: async (formData: Record<string, unknown>) => {
      const response = await axios.post<
        SignInRequest,
        SuccessResponse<SignInResponse>
      >(API_ROUTES.auth.signIn, formData);
      return response.data;
    },
    onSuccess: (data) => {
      api.setAuthToken(data.token);

      push(appRoutes.home.index);

      reset();

      toast.success(`Successfully signed in as ${data.data.email}`);
    },
    onError: (error: any) => {
      const message =
        error?.response?.data?.message ??
        error?.message ??
        "Something went wrong";
      toast.error(message);
    },
  });

  const submitSignIn = handleSubmit((formData) => signIn(formData));

  return {
    control,
    errors,
    submitSignIn,
    isPending,
  };
};
