import * as yup from "yup";

export const useResetPasswordFormValidator = yup.object({
  newPassword: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .typeError("Password must be a string"),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword"), ""], "Passwords must match")
    .min(8, "Confirm password must be at least 8 characters long")
    .typeError("Confirm password must be a string"),
});
