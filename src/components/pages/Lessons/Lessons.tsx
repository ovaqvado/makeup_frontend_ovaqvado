import { FC } from 'react'
import channel from '../Profile/ProfileCard/img/pussykiller.png'
import styles from './Lessons.module.scss'
import comment from './img/comment.svg'
import img from './img/img.svg'
import lesson from './img/lesson.svg'
import more from './img/more_img.svg'
import play from './img/play.svg'
import search from './img/search.svg'
import star from './img/star.svg'
import view from './img/view.svg'
import wallet from './img/wallet.svg'

export const Lessons: FC = () => {
	return (
		<div className={styles.lessons}>
			<header className={styles.lessons_header}></header>
			<div className={styles.search_filter}>
				<div className={styles.filter}>
					<select className={styles.select} name='' id=''>
						<option className={styles.option} value=''></option>
						<option className={styles.option} value=''></option>
					</select>
				</div>
				<div className={styles.search}>
					<img className={styles.vol} src={img} alt='' />
					<input className={styles.input} placeholder='Поиск' type='text' />
					<img className={styles.search_img} src={search} alt='' />
				</div>
			</div>
			<div className={styles.lessons_box}>
				<div className={styles.lesson}>
					<img className={styles.img_lesson} src={lesson} alt='' />
					<button className={styles.button_play}>
						<img className={styles.play_img} src={play} alt='' />
					</button>
					<div className={styles.time_lessons}>10:10</div>
					<div className={styles.name_les_btn_share}>
						<p className={styles.name_les}>Укладка волос в необычном стиле</p>
						<button className={styles.btn_share}>
							<img className={styles.img_share} src={more} alt='' />
						</button>
					</div>
					<p className={styles.date}>Опубликовано: 20.02.2024</p>
					<p className={styles.info}>
						Дескриптор, максимум 200 символов. Дескриптор, максимум 200
						символов. Дескриптор, максимум 200 символов. Дескриптор, максимум
						200 символов. Дескриптор, максимум 200 символов.
					</p>
					<div className={styles.channel_box}>
						<div className={styles.channel}>
							<img className={styles.img_channel} src={channel} alt='' />
							<div className={styles.name_view_com}>
								<p className={styles.name_channel}>
									<span>Лена Мотинова</span>
									<img className={styles.img_name} src={star} alt='' />
								</p>
								<div className={styles.view_comm_box}>
									<div className={styles.view_comment}>
										<img className={styles.img_view_com} src={view} alt='' />
										<span className={styles.num_view_com}>1200</span>
									</div>
									<div className={styles.view_comment}>
										<img className={styles.img_view_com} src={comment} alt='' />
										<span className={styles.num_view_com}>22</span>
									</div>
								</div>
							</div>
						</div>
						<button className={styles.buy_btn}>
							<img className={styles.img_buy} src={wallet} alt='' />
							<p className={styles.text_buy}>Купить</p>
							<p className={styles.num_buy}>399₽</p>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
