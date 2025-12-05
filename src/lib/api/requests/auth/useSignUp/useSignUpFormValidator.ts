import * as yup from "yup";

export const useSignUpFormValidator = yup.object({
  first_name: yup
    .string()
    .required("First Name is required")
    .min(3, "First Name must be at least 3 characters long"),
  last_name: yup
    .string()
    .required("Last Name is required")
    .min(3, "Last Name must be at least 3 characters long"),
  email: yup
    .string()
    .nullable()
    .email()
    .required("Email is required")
    .typeError("Invalid email address"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(\+?[0-9]{1,4})?[-.\s]?(\(?[0-9]{1,4}\)?)?[-.\s]?[0-9]{1,4}[-.\s]?[0-9]{1,9}$/,
      "Please enter a valid phone number"
    )
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .typeError("Password must be a string"),
  password_confirmation: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password"), ""], "Confirm Password must match Password")
    .min(8, "Confirm password must be at least 8 characters long")
    .typeError("Confirm password must be a string"),
});
