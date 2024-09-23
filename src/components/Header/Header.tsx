'use client'
import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

// Import img
import arrow_bottom from '../../img/arrow_bottom.svg'
import burger_img from '../../img/burger.svg'
import english_lang from '../../img/english_lang.svg'
import events from '../../img/events.svg'
import home from '../../img/home.svg'
import language_rus from '../../img/language_rus.svg'
import lessons from '../../img/lessons.svg'
import notification from '../../img/notification.svg'
import users from '../../img/people.svg'
import icon_profile from '../../img/profile_icon.svg'
// Active img

// Type header

// Styles
import { HeaderProps } from '../../type/modal'
import { InfoModal } from '../InfoModal/InfoModal'
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

export const Header: FC<HeaderProps> = ({ onOpen }) => {
	const location = useLocation()
	const [activeLink, setActiveLink] = useState<string>('')
	const [language, setLanguage] = useState<'ru' | 'en'>('ru')
	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	// Modql window

	const handleOpenModal = () => {
		setIsModalOpen(true)
	}

	const handleCloseModal = () => {
		setIsModalOpen(false)
	}

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

	const toggleLanguage = () => {
		setLanguage(prev => (prev === 'ru' ? 'en' : 'ru'))
	}

	// Styles header on route
	const shouldShowBackground = [
		'/users',
		'/lessons',
		'/events',
		'/menu',
		'*',
	].includes(location.pathname)

	return (
		<div
			className={
				shouldShowBackground ? styles.headerWithBackground : styles.header
			}
		>
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
				<button onClick={onOpen} className={styles.button_profile}>
					<img
						className={styles.img_icon}
						src={icon_profile}
						alt='icon_profile'
					/>
					<img src={arrow_bottom} alt='arrow' />
				</button>
				<button className={styles.button}>
					<img src={burger_img} alt='burger_button' />
					<InfoModal isOpen={isModalOpen} onClose={handleCloseModal} />
				</button>
			</div>
		</div>
	)
}
