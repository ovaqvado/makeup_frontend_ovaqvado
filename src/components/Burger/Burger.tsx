import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Burger.module.scss'
import arrow_bottom from './img/arrow_bottom.svg'
import noUser from './img/photo_undefined.svg'
import user from './img/pussykiller.png'

export const Burger: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.burger_menu} onClick={toggleMenu}>
			{/* Burger icon */}
			<div className={styles.burger} onClick={toggleMenu}>
				<img src={arrow_bottom} alt='' />
			</div>

			{/* Burger onClick menu */}
			{isOpen && (
				<div className={styles.menu}>
					<ul className={styles.list}>
						{/* Profile class */}
						<li className={styles.list_section}>Вы посетитель</li>
						<li className={styles.list_section}>Стать пользователем</li>
						<li className={styles.list_section}>Стать продавцом</li>
						<div className={styles.line}></div>
						{/* Settings & add new account */}
						<Link to='/profile' className={styles.list_section}>
							Настройки профиля
						</Link>
						<li className={styles.list_section}>Добавить профиль</li>
						<div className={styles.line}></div>
						{/* Users profiles  */}
						<div className={styles.profile_section}>
							<div className={styles.box_img}>
								<img
									className={styles.prof_sec_img}
									src={user}
									alt='profile_img'
								/>
							</div>

							<span className={styles.prof_select}>View</span>
						</div>
						<div className={styles.profile_section}>
							<div className={styles.box_img}>
								<img
									className={styles.prof_sec_img}
									src={noUser}
									alt='profile_img'
								/>
							</div>
							<span className={styles.prof_select}>Посетитель</span>
						</div>
						<li className={styles.list_section}>Выйти из профиля</li>
					</ul>
				</div>
			)}
		</div>
	)
}
