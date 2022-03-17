import { useForm } from '../hooks/useForm';

import '../styles/styles.css'

export const RegisterPage = () => {

  const { name, email, password1, password2, formData, onChange, resetForm, isValidEmail } = useForm({
    name: '',
    email: '',
    password1: '',
    password2: ''
  })


  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log(formData);
  }

  return (
    <div>
      <h1>Register Page</h1>
      <form noValidate onSubmit={onSubmit} >
        <input 
          name='name' 
          type="text" 
          placeholder="name" 
          value={name} 
          onChange={onChange}
          className={`${name.trim().length <= 0 && 'has-error'}`} 
        />
        {name.trim().length <= 0 && <span>Este campo es requerido</span>}
        <input 
          name='email' 
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={onChange}
          className={`${!isValidEmail(email) && 'has-error'}`}
        />
        { !isValidEmail(email) && <span>Email no es valido</span> }
        <input 
          name='password1' 
          type="password" 
          placeholder="Password" 
          value={password1} 
          onChange={onChange} 
        />
        {password1.trim().length <= 0 && <span>Este campo es requerido</span>}
        {password1.trim().length > 0 && password1.trim().length < 6 && <span>La contrasena debe tener mas de 6 caracteres</span>}
        <input 
          name='password2' 
          type="password" 
          placeholder="Repeat password" 
          value={password2} 
          onChange={onChange} 
        />
        {password2.trim().length <= 0 && <span>Este campo es requerido</span>}
        {password2.trim().length > 0 && password1 !== password2 && <span>La contrasenas deben ser iguales</span>}

        <button type="submit" >Create</button>
        <button type="button" onClick={ resetForm } >Reset Form</button>
      </form>
    </div>
  )
}
