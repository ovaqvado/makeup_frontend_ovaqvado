import { FC, useState } from 'react'
import img from './img/img.svg'
import search from './img/search.svg'
import styles from './Lessons.module.scss'

import { Lesson } from './lesson'

export const Lessons: FC = () => {
	const [filter, setFilter] = useState<boolean>()
	const hidden = !setFilter

	return (
		<div className={styles.lessons}>
			<header className={styles.lessons_header}></header>
			<div className={styles.search_filter}>
				<div className={styles.filter}>
					<div></div>
				</div>
				<div className={styles.search}>
					<img className={styles.vol} src={img} alt='' />
					<input className={styles.input} placeholder='Поиск' type='text' />
					<img className={styles.search_img} src={search} alt='' />
				</div>
			</div>
			<div className={styles.lessons_box}>
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
				<Lesson />
			</div>
		</div>
	)
}
