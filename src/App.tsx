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

	return (
		<div className={styles.App}>
			<Header />
			<AppRouter />
			<Burger />
			<BottomBarPhone />
		</div>
	)
}

export default App
