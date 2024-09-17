import { FC } from 'react'
import { User } from './User'
import styles from './Users.module.scss'
// Import image
import filter from './img/filter.svg'
import search from './img/search.svg'

export const Users: FC = () => {
	return (
		<div className={styles.container_users}>
			<header className={styles.header}></header>
			<div className={styles.inputs_container}>
				<div className={styles.box_input}>
					<img className={styles.input_img} src={filter} alt='filter' />
					<input className={styles.input} type='text' />
					<img className={styles.input_img_search} src={search} alt='search' />
				</div>
				<div className={styles.box_input}>
					<img className={styles.input_img} src={filter} alt='filter' />
					<input className={styles.input} type='text' />
					<img className={styles.input_img_search} src={search} alt='search' />
				</div>
			</div>
			<div className={styles.users_box}>
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
				<User />
			</div>
		</div>
	)
}
