import { FC, useEffect, useState } from 'react'
import styles from '../Profile.module.scss'
import location from './img/location.svg'
import undefinedImage from './img/pussykiller.png'
import videos from './img/videos.svg'
import view from './img/view.svg'

const ProfileCard: FC = () => {
	const [activeButton, setActiveButton] = useState<string | null>(null)

	// Загружаем состояние из localStorage при инициализации компонента
	useEffect(() => {
		const savedButton = localStorage.getItem('activeButton')
		if (savedButton) {
			setActiveButton(savedButton)
		}
	}, [])

	// Функция для изменения кнопки и сохранения в localStorage
	const handleButtonClick = (buttonName: string) => {
		setActiveButton(buttonName)
		localStorage.setItem('activeButton', buttonName)
	}

	return (
		<div className={styles.profile_box}>
			<div className={styles.profile_img_box}>
				<img
					className={styles.img_me}
					src={undefinedImage}
					alt='profile_photo or icon'
				/>
			</div>
			<div className={styles.box_loc_vid_view}>
				<p className={styles.location}>
					<img
						className={styles.location_img}
						src={location}
						alt='location_icon'
					/>
					Не задано
				</p>
				<div className={styles.videos_view}>
					<p className={styles.vid_see}>
						<img
							className={styles.vid_see_img}
							src={videos}
							alt='videos_icon'
						/>
						0
					</p>
					<p className={styles.vid_see}>
						<img className={styles.vid_see_img} src={view} alt='view_icon' />0
					</p>
				</div>
			</div>
			<div className={styles.buttons}>
				{[
					'Редактировать',
					'Опубликовать урок',
					'Опубликовать событие',
					'Опубликовать фото',
				].map(button => (
					<button
						key={button}
						className={`${styles.button} ${
							activeButton === button ? styles.active_button : ''
						}`}
						onClick={() => handleButtonClick(button)}
					>
						<span
							className={`${styles.btn_text} ${
								activeButton === button ? styles.btn_text_active : ''
							}`}
						>
							{button}
						</span>
					</button>
				))}
			</div>
			<div className={styles.info_me}>
				<h3 className={styles.title_me}>Обо мне:</h3>
				<p className={styles.text_me}>Заполнить описание</p>
			</div>
		</div>
	)
}

export default ProfileCard
