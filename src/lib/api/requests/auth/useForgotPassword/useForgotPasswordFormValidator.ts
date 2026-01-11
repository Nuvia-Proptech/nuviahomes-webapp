import * as yup from 'yup';

export const useForgotPasswordFormValidator = yup.object({
  email: yup
    .string()
    .nullable()
    .email('Please enter a valid email address')
    .required('Email is required')
    .typeError('Invalid email address'),
});
