import { Formik, Form } from 'formik'
import { MySelect, MyTextInput } from '../components'
import formJson from '../data/custom-form.json'
import * as Yup from 'yup';

const initialValues: { [key: string]: string | number | boolean } = {}
const requiredFields: { [key: string]: any } = {}

for (const field of formJson) {
  initialValues[field.name] = field.value
  if (!field.validations) continue

  let schema = Yup.string()

  for (const rule of field.validations) {
    if ( rule.type === 'required' )
      schema = schema.required('Este campo es requerido')

    if ( rule.type === 'minLength' )
      schema = schema.min( (rule as any).value || 2, `Minimo de ${(rule as any).value || 2} caracteres `)

    if ( rule.type === 'email' )
      schema = schema.matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'correo invalido')
  }

  requiredFields[field.name] = schema
}
const validationSchema = Yup.object({...requiredFields})

const supportedInputs = ['email', 'text', 'password', 'select'];

export const DynamicForm = () => {
  return (
    <div>
      <h1>DynamicForm</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={ (values) => {
          console.log(values)
        } }
      >
          { (formik) => (
            <Form noValidate >
             { formJson.map(  ( { label, name, placeHolder, type, options } ) => {
               if (!supportedInputs.includes(type) ) throw new Error(`${type} not supported`);
               
               if ( type === "select") 
               return (<MySelect
                  key={name}
                  label={label}
                  name={name}
                >
                <option value="">Select a game</option>
                 { options?.map(option => 
                  <option
                    id={option.id} 
                    key={option.id}
                  >
                   {option.text}
                 </option>) }
               </MySelect>)

               return <MyTextInput
                key={name}
                type={type}
                label={label}
                placeholder={placeHolder}
                name={name}
               />
             } ) }
              <button type='submit' > Submit </button>
            </Form>
          ) }
      </Formik>
    </div>
  )
}
