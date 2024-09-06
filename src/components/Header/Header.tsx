import { FC } from 'react'
import { Link } from 'react-router-dom'
import events from '../../img/events.svg'
import home from '../../img/home.svg'
import lessons from '../../img/lessons.svg'
import users from '../../img/users.svg'

import styles from './Header.module.scss'

export const Header: FC = () => {
	return (
		<div className={styles.header}>
			<div className={styles.links}>
				<Link className={styles.link} to='/'>
					<img src={home} alt='' />
					Главная
				</Link>
				<Link className={styles.link} to='/lessons'>
					<img src={lessons} alt='' />
					Уроки
				</Link>
				<Link className={styles.link} to='/users'>
					<img src={users} alt='' />
					Пользователи
				</Link>
				<Link className={styles.link} to='/events'>
					<img src={events} alt='' />
					События
				</Link>
			</div>
		</div>
	)
}
