import * as yup from "yup";

export const EmployeeValidation = yup.object().shape({
  fullname: yup.string().required("fullname is required"),
  occupation: yup.string().required("occupation is required"),
  imageURL:yup.string(),
  linkF:yup.string(),
  linkI:yup.string(),
  linkT:yup.string()
});