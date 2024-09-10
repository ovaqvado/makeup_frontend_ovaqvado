import { FC, useState } from 'react'
import styles from './AuthFrm.module.scss'

export const AuthForm: FC = () => {
	const [isLogin, setIsLogin] = useState<boolean>(false)
	return (
		<div className={styles.box_auth}>
			<div className={styles.closeModal}></div>
			<form className={styles.form} action=''>
				<h1 className={styles.title}> {isLogin ? 'Вход' : 'Регистрация'}</h1>
				<div className={styles.inputs}>
					<input className={styles.input} placeholder='Почта' type='text' />
					<input className={styles.input} placeholder='Телеграмм' type='text' />
					<input className={styles.input} placeholder='Пароль' type='text' />
					<input
						className={styles.input}
						placeholder='Повторить пароль'
						type='text'
					/>
				</div>
				{isLogin ? (
					''
				) : (
					<div className={styles.rules}>
						<input className={styles.input_checkbox} type='checkbox' />
						<button className={styles.button} rel='stylesheet'>
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
					<button className={styles.login_or_reg}>
						{isLogin ? 'Зарегистрируйтесь' : ' Войдите'}
					</button>
				</p>
			</form>
		</div>
	)
}
