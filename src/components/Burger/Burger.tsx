import { FC, useState } from 'react'
import burger from '../../img/burger.svg'
import styles from './Burger.module.scss'

export const Burger: FC = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false)

	const toggleMenu = () => {
		setIsOpen(!isOpen)
	}

	return (
		<div className={styles.burger_menu} onClick={toggleMenu}>
			{/* Burger icon */}
			<div className={styles.burger} onClick={toggleMenu}>
				{isOpen ? <img src={burger} alt='' /> : <img src={burger} alt='' />}
			</div>

			{/* Burger onClick menu */}
			{isOpen && (
				<div className={styles.menu}>
					<ul>
						{/* Profile class */}
						<li className={styles.list_section}>Вы посетитель</li>
						<li className={styles.list_section}>Стать пользователем</li>
						<li className={styles.list_section}>Стать продавцом</li>
						<div className={styles.line}></div>
						{/* Settings & add new account */}
						<li className={styles.list_section}>Настройки профиля</li>
						<li className={styles.list_section}>Добавить профиль</li>
						<div className={styles.line}></div>
						{/* Users profiles  */}
						<div className={styles.profile_section}>
							<img className={styles.prof_sec_img} src='' alt='profile_img' />
							<span className={styles.prof_select}></span>
						</div>
						<div className={styles.profile_section}>
							<img className={styles.prof_sec_img} src='' alt='profile_img' />
							<span className={styles.prof_select}></span>
						</div>
						<li className={styles.list_section}>Выйти из профиля</li>
					</ul>
				</div>
			)}
		</div>
	)
}
