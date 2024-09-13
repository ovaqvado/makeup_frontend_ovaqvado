import { FC } from 'react'
import { User } from './User'
import styles from './Users.module.scss'

export const Users: FC = () => {
	return (
		<div className={styles.box_users}>
			<header className={styles.header}></header>
			<User />
		</div>
	)
}
