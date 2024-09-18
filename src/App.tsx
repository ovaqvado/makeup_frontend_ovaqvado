import { FC, useEffect, useRef, useState } from 'react'
import styles from './App.module.scss'
import { BottomBarPhone } from './components/BottomBarPhone/BottomBarPhone'
import { Burger } from './components/Burger/Burger'
import { Header } from './components/Header/Header'
import { Loading } from './components/Loading/Loading'
import AppRouter from './router'

const App: FC = () => {
	const [loading, setLoading] = useState(true)
	const [isModalOpen, setModalOpen] = useState(false)
	const isAuthenticated = false
	const burgerRef = useRef<HTMLDivElement>(null)

	const openAuthModal = () => {
		setModalOpen(true)
	}

	const closeAuthModal = () => {
		setModalOpen(false)
	}

	useEffect(() => {
		const fetchData = async () => {
			await new Promise(resolve => setTimeout(resolve, 1000))
			setLoading(false)
		}
		fetchData()
	}, [])

	const closeModal = () => setModalOpen(false)

	const handleClickOutside = (event: MouseEvent) => {
		if (
			burgerRef.current &&
			!burgerRef.current.contains(event.target as Node)
		) {
			closeModal()
		}
	}

	useEffect(() => {
		if (isModalOpen) {
			document.addEventListener('click', handleClickOutside)
		} else {
			document.removeEventListener('click', handleClickOutside)
		}

		return () => {
			document.removeEventListener('click', handleClickOutside)
		}
	}, [isModalOpen])

	if (loading) {
		return <Loading />
	}

	return (
		<div className={styles.App}>
			<Header openModal={openAuthModal} />
			<AppRouter />
			<div ref={burgerRef}>
				<Burger
					isOpen={isModalOpen}
					onClose={closeModal}
					isAuthenticated={isAuthenticated}
					openAuthModal={openAuthModal}
				/>
			</div>
			<BottomBarPhone />
		</div>
	)
}

export default App
