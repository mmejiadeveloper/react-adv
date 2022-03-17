import { Formik, Form } from 'formik'
import * as Yup from 'yup'

import { MyTextInput,MySelect, MyCheckbox } from '../components'

import '../styles/styles.css'

export const FormikAbstraction = () => {

  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          jobType: '',
          terms: false
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={
          Yup.object({
            firstName: Yup.string().max(15, 'Debe tener 15 caracteres o menos')
              .required(),
            lastName: Yup.string().max(10, 'Debe tener 10 caracteres o menos')
              .required(),
            email: Yup.string().matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, 'correo invalido')
              .required(),
            terms: Yup.boolean().oneOf([true], 'Debe aceptar las condiciones'),
            jobType: Yup.string().required()
          })
        }
      >
          {
            (formik) => (
              <Form>
                <MyTextInput 
                  name='firstName' 
                  label='First Name'
                  placeholder='First Name'
                />

                <MyTextInput 
                  name='lastName' 
                  label='Last Name'
                  placeholder='Last Name'
                />

                <MyTextInput 
                  name='email' 
                  label='Email Address'
                  placeholder='Email Address'
                  type='email'
                />
                
                <MySelect label='Job Type' name="jobType"> 
                  <option value="">Pick Something</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">IT Senior</option>
                  <option value="it-junior">IT Jr</option>
                </MySelect>

                <MyCheckbox label='Termns & conditions' name="terms" />

                <button type="submit">Submit</button>
            </Form>
            )
          }

      </Formik>

      
    </div>
  )
}
