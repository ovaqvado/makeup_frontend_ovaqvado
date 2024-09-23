import { FC } from 'react'
import { ModalWindow } from '../../type/modal'
import styles from './Info.module.scss'

export const InfoModal: FC<ModalWindow> = ({ isOpen, onClose }) => {
	if (!isOpen) return null

	return (
		<div className={styles.box_info}>
			<ul>
				<li>Asd</li>
				<li>Asd</li>
				<li>Asd</li>
				<li>Asd</li>
			</ul>
		</div>
	)
}
