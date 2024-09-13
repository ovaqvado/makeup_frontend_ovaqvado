import { FC } from 'react'
import { Link } from 'react-router-dom'
import { ModalUser, OpenAuth } from '../../type/type'
import styles from './Burger.module.scss'
import noUser from './img/photo_undefined.svg'
import user from './img/pussykiller.png'

export const Burger: FC<OpenAuth & ModalUser> = ({
	isOpen,
	onClose,
	isAuthenticated,
	openAuthModal,
}) => {
	if (!isOpen) return null

	return (
		<div className={styles.menu}>
			<button className={styles.close_button} onClick={onClose}>
				Закрыть
			</button>
			<ul className={styles.list}>
				<li className={styles.list_section}>Вы посетитель</li>
				<li className={styles.list_section}>Стать пользователем</li>
				<li className={styles.list_section}>Стать продавцом</li>
				<div className={styles.line}></div>
				<Link to='/profile' className={styles.list_section}>
					Настройки профиля
				</Link>
				<li className={styles.list_section}>Добавить профиль</li>
				<div className={styles.line}></div>
				<div className={styles.profile_section}>
					<div className={styles.box_img}>
						<img className={styles.prof_sec_img} src={user} alt='profile_img' />
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
	)
}
