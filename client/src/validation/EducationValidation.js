import * as yup from "yup"

export const EducationValidation = yup.object().shape({
    email:yup.string().required("required email").email('Invalid email')
})