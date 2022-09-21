import { Field } from "formik";
import { InputProps } from "reactstrap";

export type TextFieldProps = InputProps & {};

export default function TextField(props: TextFieldProps) {
  return (
    <Field {...props}/>
  );
}
