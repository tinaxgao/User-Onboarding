import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Username is required")
    .min(2, "Username must be 2 or more characters"),
  email: yup
    .string()
    .email("must be a valid email address")
    .required("email is required"),
  password: yup.string().required("A valid password is required"),
  tos: yup.boolean().required("Agreement with the TOS is required"),
});

export default formSchema;