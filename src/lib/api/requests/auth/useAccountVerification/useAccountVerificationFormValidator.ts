import * as yup from 'yup';

export const useAccountVerificationFormValidator = yup.object({
  token: yup.string().required('code is required'),
});
