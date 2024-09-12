import { FC } from 'react'
import styles from './Lessons.module.scss'
import filter from './img/filter.svg'
import img from './img/img.svg'
import search from './img/search.svg'

import { Lesson } from './lesson'

export const Lessons: FC = () => {
	return (
		<div className={styles.lessons}>
			<header className={styles.lessons_header}></header>
			<div className={styles.search_filter}>
				<div className={styles.filter}>
					<select className={styles.select} name='Фильтры' id=''>
						<img src={filter} alt='' />
						<option className={styles.option} value=''>
							По популярности
						</option>
						<option className={styles.option} value=''>
							По дате
						</option>
					</select>
				</div>
				<div className={styles.search}>
					<img className={styles.vol} src={img} alt='' />
					<input className={styles.input} placeholder='Поиск' type='text' />
					<img className={styles.search_img} src={search} alt='' />
				</div>
			</div>
			<div className={styles.lessons_box}>
				<Lesson />
			</div>
		</div>
	)
}
