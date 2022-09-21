import * as yup from "yup";

export const validationSchema = yup.object().shape({
  tarefa: yup.string().required("Campo vazio"),
});
