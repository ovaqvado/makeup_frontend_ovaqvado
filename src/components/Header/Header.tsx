import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
// Import img
import english_lang from '../../img/english_lang.svg'
import events from '../../img/events.svg'
import home from '../../img/home.svg'
import language_rus from '../../img/language_rus.svg'
import lessons from '../../img/lessons.svg'
import notification from '../../img/notification.svg'
import users from '../../img/people.svg'
import icon_profile from '../../img/profile_icon.svg'
// Styles
import { Burger } from '../Burger/Burger'
import styles from './Header.module.scss'

// TranslateHeader
const translations = {
	ru: {
		title: 'MAKEUPDATE',
		links: [
			{ to: '/', img: home, label: 'Главная' },
			{ to: '/lessons', img: lessons, label: 'Уроки' },
			{ to: '/users', img: users, label: 'Пользователи' },
			{ to: '/events', img: events, label: 'События' },
		],
	},
	en: {
		title: 'MAKEUPDATE',
		links: [
			{ to: '/', img: home, label: 'Home' },
			{ to: '/lessons', img: lessons, label: 'Lessons' },
			{ to: '/users', img: users, label: 'Users' },
			{ to: '/events', img: events, label: 'Events' },
		],
	},
}

export const Header: FC = () => {
	const location = useLocation()
	const [activeLink, setActiveLink] = useState<string>('')
	const [isArrowActive, setIsArrowActive] = useState<boolean>(false)
	const [language, setLanguage] = useState<'ru' | 'en'>('ru') //State language

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
		setIsArrowActive(prev => !prev)
	}

	const toggleLanguage = () => {
		setLanguage(prev => (prev === 'ru' ? 'en' : 'ru')) // Switch language
	}

	return (
		<div className={styles.header}>
			<h1 className={styles.title}>{translations[language].title} </h1>
			<div className={styles.links}>
				{translations[language].links.map(link => (
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
							className={`${styles.img_links} ${
								activeLink === link.to ? styles.activeImage : ''
							}`}
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
				<button className={styles.button} onClick={toggleLanguage}>
					<img
						className={styles.img_language}
						src={language === 'ru' ? language_rus : english_lang}
						alt='Change Language'
					/>
				</button>
				<button className={styles.button_profile}>
					<img className={styles.img_icon} src={icon_profile} alt='' />
					<button
						className={`${styles.button_arrow} ${
							isArrowActive ? styles.active : ''
						}`}
						// to='/profile'
						onClick={toggleArrow}
					>
						<Burger />
					</button>
				</button>
				<button className={styles.button}></button>
			</div>
		</div>
	)
}
