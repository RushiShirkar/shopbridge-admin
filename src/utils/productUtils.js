import * as yup from "yup";

export const productUtils = yup.object().shape({
  name: yup.string().required("Please enter name"),
  description: yup.string().required("Please enter description"),
  category: yup.string().required("Please enter category"),
  price: yup.string().required("Please enter price")
});