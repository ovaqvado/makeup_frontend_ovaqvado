import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Import img
import arrow_bottom from '../../img/arrow_bottom.svg'
import burger from '../../img/burger.svg'
import events from '../../img/events.svg'
import home from '../../img/home.svg'
import language_rus from '../../img/language_rus.svg'
import lessons from '../../img/lessons.svg'
import notification from '../../img/notification.svg'
import users from '../../img/people.svg'
import icon_profile from '../../img/profile_icon.svg'

import styles from './Header.module.scss'

// Links
const linksData = [
	{ to: '/', img: home, label: 'Главная' },
	{ to: '/lessons', img: lessons, label: 'Уроки' },
	{ to: '/users', img: users, label: 'Пользователи' },
	{ to: '/events', img: events, label: 'События' },
]

export const Header: FC = () => {
	const location = useLocation()
	const [activeLink, setActiveLink] = useState<string>('')
	const [isArrowActive, setIsArrowActive] = useState<boolean>(false)

	useEffect(() => {
		const savedActiveLink = localStorage.getItem('activeLink')
		if (savedActiveLink) {
			setActiveLink(savedActiveLink)
		} else {
			setActiveLink(location.pathname)
		}
	}, [location.pathname])

	const handleLinkClick = (link: string) => {
		setActiveLink(link)
		localStorage.setItem('activeLink', link)
	}

	const toggleArrow = () => {
		setIsArrowActive(prev => !prev) // Меняем состояние при нажатии
	}

	return (
		<div className={styles.header}>
			<h1 className={styles.title}>MAKEUPDATE</h1>
			<div className={styles.links}>
				{linksData.map(link => (
					<Link
						key={link.to}
						className={`${styles.link} ${
							activeLink === link.to ? styles.active : ''
						}`}
						to={link.to}
						onClick={() => handleLinkClick(link.to)}
					>
						<img
							src={link.img}
							alt={link.label}
							className={activeLink === link.to ? styles.activeImage : ''}
						/>
						<span className={activeLink === link.to ? styles.activeText : ''}>
							{link.label}
						</span>
					</Link>
				))}
			</div>
			<div className={styles.buttons}>
				<button className={styles.button}>
					<img className={styles.image_radius} src={notification} alt='' />
				</button>
				<button className={styles.button}>
					<img className={styles.image_radius} src={language_rus} alt='' />
				</button>
				<div className={styles.button_profile}>
					<img className={styles.image_radius} src={icon_profile} alt='' />
					<Link
						className={`${styles.button_arrow} ${
							isArrowActive ? styles.active : ''
						}`}
						to='/profile'
						onClick={toggleArrow}
					>
						<img src={arrow_bottom} alt='' />
					</Link>
				</div>
				<button className={styles.button}>
					<img src={burger} alt='' />
				</button>
			</div>
		</div>
	)
}
