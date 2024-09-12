import { FC } from 'react'
import styles from './Loading.module.scss'

export const Loading: FC = () => {
	return (
		<div className={styles.loading_container}>
			<div className={styles.spinner} />
			<p>Loading...</p>
		</div>
	)
}
