import { api } from '@/base/api/api';
import { useFormManager } from '@/base/formManager/useFormManager';
import appRoutes from '@/constants/appRoutes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import { API_ROUTES } from '../../../routes';
import { SuccessResponse } from '../../../types';
import { useSignInFormValidator } from './useSignInFormValidator';
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
    mutationFn: async (formData: Record<string, any>) => {
      const response = await axios.post<SignInRequest, SuccessResponse<SignInResponse>>(
        API_ROUTES.auth.signIn,
        formData
      );
      return response.data;
    },
    onSuccess: (data) => {
      api.setAuthToken(data.token);

      push(appRoutes.home.index);

      reset();

      Toast.show({
        type: 'successToast',
        text1: `successfully signed in as ${data.data.email}`,
      });
    },
    onError: (error: any) => {
      Toast.show({
        type: 'errorToast',
        text1: error?.response?.data?.message ?? error?.message ?? 'Something went wrong',
      });
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
