import { Field, Formik, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { MyCheckbox } from '../components/MyCheckbox'
import '../styles/styles.css'

export const FormikComponents = () => {

  return (
    <div>
      <h1>Formik Components</h1>

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
                <label htmlFor="firstName">First Name</label>
                <Field type="text" name="firstName" />
                <ErrorMessage name="firstName" component="span" />

                <label htmlFor="lastName">Last Name</label>
                <Field type="text" name="lastName" />
                <ErrorMessage name="lastName" component="span" />

                <label htmlFor="email">Email Address</label>
                <Field type="email" name="email" />
                <ErrorMessage name="email" component="span" />

                <label htmlFor="jobType">Job Type</label>
                <Field name="jobType" as="select"> 
                  <option value="">Pick Something</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">IT Senior</option>
                  <option value="it-junior">IT Jr</option>
                </Field>
                <ErrorMessage name="jobType" component="span" />

                <label>
                  <Field type="checkbox" name="terms" />
                  Termns and conditions
                </label>
                <ErrorMessage name="terms" component="span" />


                <button type="submit">Submit</button>
            </Form>
            )
          }

      </Formik>

      
    </div>
  )
}
