import { SubmitHandler, useForm } from "react-hook-form"
import { IRegFields } from "../interfaces/Reg/reg.interface"
import { validEmail } from "../components/Auth/validate-email"
import { useState } from "react"
import styles from '../components/Auth/Auth.module.scss'
import { Link } from "react-router-dom"



const Reg = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm<IRegFields>({
    defaultValues: {
      email: 'email@hs.com'
    }, mode: 'onChange'
  })
  const onSubmit:SubmitHandler<IRegFields> = (data) => {
    alert(`${data.email}, ${data.name}, ${data.company}`)
    reset()
  }
 const [flag, setFlag] = useState(false)
  return (
    <div className="bg-slate-800">
    {flag ?  <h1>Comapny registration</h1> : <h1>User registration</h1>}
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      
      
      <div className={styles.inputs}>
      <label>I'm a Company</label>
        <input type="checkbox" {...register('company')} onChange={() => setFlag(!flag)} placeholder="Company"></input>

        <input className={styles.input} {...register('name', {required: 'Name is required'})  } />
        <input className={styles.input} {...register('email', {required: 'Email is required', pattern: {value: validEmail, message: 'Enter a valide email'}}) } type='email'  />
        <input className={styles.input} {...register('pass', {required: 'Password is required'}) } type='password'  />
        <input className={styles.input} {...register('pass2', {required: 'Repeating password is required'}) } type='password'  />
        
        {!flag && <input className={styles.input} {...register('surname')} />}
        {!flag && <input className={styles.input} {...register('patronymic')}/>}
        </div>
        <button className={styles.button}>Registrate</button>
    </form>
    <Link to='/auth' >Log in</Link>
    </div>
  )
}

export default Reg