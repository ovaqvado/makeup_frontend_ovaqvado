import { useState } from 'react'
import styles from './Inputs.module.scss'

export const Inputs = () => {
	// Input Form
	const [name, setName] = useState<string>('')
	const [twoName, setTwoName] = useState<string>('')
	const [locationText, setlocationText] = useState<string>('')
	const [telegram, setTelegram] = useState('')
	const [number, setNumber] = useState()
	const [textMe, settextMe] = useState<string>('')
	return (
		<div className={styles.inputs_box}>
			<div className={styles.group}>
				<input type='text' required />
				<span className={styles.highlight}></span>
				<label>Введите Имя*</label>
			</div>
			<div className={styles.group}>
				<input type='text' required />
				<span className={styles.highlight}></span>
				<label>Введите Фамилию*</label>
			</div>
			<div className={styles.group}>
				<input type='text' required />
				<span className={styles.highlight}></span>
				<label>Введите Telegram</label>
			</div>
			<div className={styles.group}>
				<input type='number' required />
				<span className={styles.highlight}></span>
				<label>Введите номер</label>
			</div>

			<div className={styles.group}>
				<input type='text' required />
				<span className={styles.highlight}></span>
				<label>Введите местоположение*</label>
			</div>
		</div>
	)
}
