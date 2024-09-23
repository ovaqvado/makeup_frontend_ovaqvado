import { FC, useState } from 'react'
import { toast } from 'react-toastify'
import { setTokenToSessionStorage } from '../../helpers/localStorage.helper'
import { useAppDispatch } from '../../hooks/hooks'
import { AuthService } from '../../servise/servise'
import { login } from '../../store/user/user.slice'
import styles from './AuthFrm.module.scss'

// Import img
import cross from './cross.svg'

export const AuthForm: FC = () => {
	const [username, setIsName] = useState<string>('')
	const [email, setIsEmail] = useState<string>('')
	const [password, setIsPassword] = useState<string>('')
	const [confirmPassword, setConfirmPassword] = useState<string>('') // Для повторного пароля
	const [isLogin, setIsLogin] = useState<boolean>(true)
	const dispatch = useAppDispatch()

	const toggleForm = () => {
		setIsLogin(prev => !prev)
	}

	const registrationHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (password !== confirmPassword) {
			toast.error('Пароли не совпадают')
			return
		}

		try {
			const data = await AuthService.registration({
				email,
				password,
			})
			if (data) {
				toast.success('Account created')
				setIsLogin(true)
			}
		} catch (error: any) {
			const err = error.response?.data.message
			toast.error(err.toString() || 'Ошибка при создании пользователя')
		}
	}

	const loginHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		try {
			const data = await AuthService.login({
				email,
				password,
			})
			if (data) {
				setTokenToSessionStorage('token', data.token)
				dispatch(login(data))
				toast.success('Ваш вход успешен')
			}
		} catch (error: any) {
			const err = error.response?.data.message
			toast.error(err ? err.toString() : 'Ошибка при входе')
		}
	}
	return (
		<div className={styles.box_auth}>
			<button className={styles.closeModal}>
				<img src={cross} alt='' />
			</button>
			<form
				onSubmit={isLogin ? loginHandler : registrationHandler}
				className={styles.form}
			>
				<h1 className={styles.title}>{isLogin ? 'Вход' : 'Регистрация'}</h1>
				<div className={styles.inputs}>
					<input
						onChange={e => setIsEmail(e.target.value)}
						id='login'
						className={styles.input}
						placeholder='Почта'
						type='text'
					/>
					<input
						onChange={e => setIsEmail(e.target.value)}
						id='login'
						className={styles.input}
						placeholder='Телеграмм'
						type='text'
					/>
					<input
						className={styles.input}
						id='password'
						type='password'
						onChange={e => setIsPassword(e.target.value)}
						placeholder='Пароль'
					/>
					{!isLogin && (
						<>
							<input
								className={styles.input}
								placeholder='Повторить пароль'
								type='password'
								onChange={e => setConfirmPassword(e.target.value)}
							/>
						</>
					)}
				</div>
				{!isLogin && (
					<div className={styles.rules}>
						<input className={styles.input_checkbox} type='checkbox' />
						<button className={styles.button}>
							<span className={styles.text}>Я даю согласие</span> на обработку
							своих персональных данных и принимаю условия оферты
						</button>
					</div>
				)}
				<button className={styles.send_form}>
					{isLogin ? 'Войти' : 'Зарегистрироваться'}
				</button>
				<p className={styles.question}>
					{isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?'}
					<button
						type='button'
						className={styles.login_or_reg}
						onClick={toggleForm}
					>
						{isLogin ? 'Зарегистрируйтесь' : ' Войдите'}
					</button>
				</p>
			</form>
		</div>
	)
}
