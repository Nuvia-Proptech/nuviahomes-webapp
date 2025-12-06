import * as yup from 'yup';

export const useSignInFormValidator = yup.object({
  email: yup
    .string()
    .nullable()
    .email()
    .required('Email is required')
    .typeError('Invalid email address'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'Password must be at least 5 characters long')
    .typeError('Password must be a string'),
});
