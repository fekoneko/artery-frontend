import { SubmitHandler, useForm } from "react-hook-form"
import { validEmail } from "../components/Auth/validate-email"
import styles from '../components/Auth/Auth.module.scss'
import { IAuthFields } from "../interfaces/Reg/auth.interface"
const Auth = () => {
  const {register, handleSubmit, reset} = useForm<IAuthFields>({
    defaultValues: {
      email: 'email@hs.com'
    }, mode: 'onChange'
  })
  const onSubmit:SubmitHandler<IAuthFields> = (data) => {
    alert(`${data.email}`)
    reset()
  }
  return (
    <div className="flex items-center justify-center bg-slate-800">
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
    <input className={styles.input} {...register('email', {required: 'Email is required', pattern: {value: validEmail, message: 'Enter a valide email'}}) } type='email'  />
    <input className={styles.input} {...register('pass', {required: 'Password is required'}) } type='password'  />

    <button className={styles.button}>Log in</button>
    </form>
    </div>
  )
}

export default Auth