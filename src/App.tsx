import { FC, useEffect, useState } from 'react'
import styles from './App.module.scss'
import { BottomBarPhone } from './components/BottomBarPhone/BottomBarPhone'
import { Burger } from './components/Burger/Burger'
import { Header } from './components/Header/Header'
import AppRouter from './router'

const App: FC = () => {
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchData = async () => {
			await new Promise(resolve => setTimeout(resolve, 1000))
			setLoading(false)
		}
		fetchData()
	}, [])
	// Modal Burger

	const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
		if (event.currentTarget === event.target) {
			setIsModalOpen(false)
		}
	}

	const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

	const openModal = () => {
		setIsModalOpen(true)
	}

	const closeModal = () => {
		setIsModalOpen(false)
	}
	return (
		<div onClick={handleOverlayClick} className={styles.App}>
			<Header onOpen={openModal} />
			<AppRouter />
			{isModalOpen && (
				<div className={styles.overlay} onClick={handleOverlayClick}>
					<Burger isOpen={isModalOpen} onClose={closeModal} />
				</div>
			)}
			<BottomBarPhone />
		</div>
	)
}

export default App
