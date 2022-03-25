import { Formik, Form } from 'formik';
import * as Yup from 'yup'


import '../styles/styles.css'
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {

  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password1: '',
          password2: ''
        }}
        onSubmit ={values => {
          console.log(values);
        }}
        validationSchema={
            Yup.object({
            name: Yup.string()
              .min(2, 'aleast 2 characters are required')
              .max(15, 'must be 15 characters as maximum')
              .required(),
            email: Yup.string()
              .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'correo invalido')
              .required(),
            password1: Yup.string()
              .min(6, 'must contain aleast 6 characteres')
              .required(),
            password2: Yup.string()
              .oneOf([Yup.ref('password1'), null], 'Passwords must match')
              .required()
          })
        }
      >

        {
          ( { handleReset } ) => (
            <Form>
              <MyTextInput 
                name='name' 
                label='User Name'
                placeholder='john doe'
              />

              <MyTextInput 
                name='email' 
                label='Email Address'
                placeholder='Email Address'
                type='email'
              />

              <MyTextInput 
                name='password1' 
                label='Password'
                placeholder='*****'
                type='password'
              />

              <MyTextInput 
                name='password2' 
                label='Confirm Password'
                placeholder='*****'
                type='password'
              />
              
              <button type="submit">Submit</button>
              <button type="button" onClick={handleReset} >reset</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
