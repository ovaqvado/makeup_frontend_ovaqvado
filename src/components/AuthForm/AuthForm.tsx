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
				<div className={styles.rules}>
					<input className={styles.input_checkbox} type='checkbox' />
					<p className={styles.text}>
						Я даю согласие на
						<button className={styles.button} rel='stylesheet'>
							обработку своих персональных данных
						</button>
						и принимаю
						<button className={styles.button} rel='stylesheet'>
							условия оферты
						</button>
					</p>
				</div>

				<button className={styles.send_form}>
					{isLogin ? 'Войти' : 'Зарегистрироваться'}
				</button>
				<p className={styles.question}>
					Уже есть аккаунт?
					<button className={styles.login_or_reg}>
						{isLogin ? 'Зарегистрируйтесь' : ' Войдите'}
					</button>
				</p>
			</form>
		</div>
	)
}
