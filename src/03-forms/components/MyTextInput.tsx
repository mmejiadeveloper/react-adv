import { ErrorMessage, useField } from "formik"

interface Props {
  name: string;
  label: string;
  type?: string
  placeholder?: string
  [x:string] : any;
}

export const MyTextInput = ({label, ...props} : Props) => {

  const [ field ] = useField(props);
  return (
    <>
      <label htmlFor={ props.id || props.name }> { label } </label>
      <input type="text" {...field} {...props} />
      <ErrorMessage name={props.name} component="span" />
    </>
  )
}
