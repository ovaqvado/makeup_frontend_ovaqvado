import { useEffect, useState } from 'react'
import styles from './App.module.scss'
import { BottomBarPhone } from './components/BottomBarPhone/BottomBarPhone'
import { Burger } from './components/Burger/Burger'
import { Header } from './components/Header/Header'
import { Loading } from './components/Loading/Loading'
import AppRouter from './router'

function App() {
	const [loading, setLoading] = useState(true)
	const [isModalOpen, setModalOpen] = useState(false)
	const [isAuthModalOpen, setAuthModalOpen] = useState(false)
	const isAuthenticated = false // Замените на вашу логику аутентификации

	const openAuthModal = () => {
		setAuthModalOpen(true)
	}

	const closeAuthModal = () => {
		setAuthModalOpen(false)
	}

	useEffect(() => {
		const fetchData = async () => {
			// Simulating data loading
			await new Promise(resolve => setTimeout(resolve, 1000))
			setLoading(false)
		}
		fetchData()
	}, [])

	if (loading) {
		return <Loading />
	}

	// Open/Close user profile modal
	const openModal = () => setModalOpen(true)
	const closeModal = () => setModalOpen(false)

	// Future logic can be added to manage auth modal similarly to isModalOpen

	return (
		<div className={styles.App}>
			<Header openModal={openModal} />
			<AppRouter />
			<Burger
				isOpen={isModalOpen}
				onClose={closeModal}
				isAuthenticated={isAuthenticated}
				openAuthModal={openAuthModal}
			/>
			<BottomBarPhone />
		</div>
	)
}

export default App
