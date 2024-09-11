import { useState } from 'react'
import styles from './Inputs.module.scss'

export const Inputs = () => {
	// Input Form
	const [inputValue, setInputValue] = useState('')
	const [error, setError] = useState('')

	// Take value input
	const handleChange = (e: any) => {
		const value = e.target.value
		setInputValue(value)

		// Error is input = 0
		if (value.trim() === '') {
			setError('Поле не должно быть пустым!')
		} else {
			setError('')
		}
	}

	return (
		<div className={styles.inputs_box}>
			<div className={styles.group}>
				<input
					value={inputValue}
					onChange={handleChange}
					type='text'
					required
				/>
				<span className={styles.highlight}></span>
				<label>Введите Имя*</label>
			</div>
			{error && <p className={styles.error}>{error}</p>}
			<div className={styles.group}>
				<input type='text' required />
				<span className={styles.highlight}></span>
				<label>Введите Фамилию*</label>
			</div>
			{error && <p className={styles.error}>{error}</p>}
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
			{error && <p className={styles.error}>{error}</p>}
		</div>
	)
}
