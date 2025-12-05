import { api } from '@/base/api/api';
import { API_ROUTES } from '@/base/api/routes';
import { SuccessResponse } from '@/base/api/types';
import { useFormManager } from '@/base/formManager/useFormManager';
import appRoutes from '@/constants/appRoutes';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Toast from 'react-native-toast-message';
import { useAccountVerificationFormValidator } from './useAccountVerificationFormValidator';

interface AccountVerificationRequest {
  token: string;
}

interface AccountVerificationResponse {
  token: string;
}

export const useAccountVerification = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useFormManager({
    validator: useAccountVerificationFormValidator,
  });

  const { push } = useRouter();
  const { email } = useLocalSearchParams<{ email: string }>();

  const { mutate: accountVerification, isPending } = useMutation({
    mutationFn: async (formData: Record<string, any>) => {
      const response = await axios.post<
        AccountVerificationRequest,
        SuccessResponse<AccountVerificationResponse>
      >(API_ROUTES.auth.verifyAccount, formData);
      return response.data;
    },
    onSuccess: (data) => {
      api.setAuthToken(data.token);

      reset();

      push({
        pathname: appRoutes.home.index,
      });

      Toast.show({
        type: 'successToast',
        text1: 'successfully signed up',
      });
    },
    onError: (error: any) => {
      Toast.show({
        type: 'errorToast',
        text1: error?.response?.data?.message ?? error?.message ?? 'Something went wrong',
      });
    },
  });

  const submitAccountVerification = handleSubmit((formData) => {
    accountVerification({
      ...formData,
      email,
    });
  });

  return {
    control,
    submitAccountVerification,
    errors,
    isPending,
    email,
  };
};
