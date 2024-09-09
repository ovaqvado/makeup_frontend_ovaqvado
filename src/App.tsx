import styles from './App.module.scss'
import { AuthForm } from './components/AuthForm/AuthForm'
import { BottomBarPhone } from './components/BottomBarPhone/BottomBarPhone'
import { Header } from './components/Header/Header'
import AppRouter from './router'

function App() {
	return (
		<div className={styles.App}>
			<Header />
			<AppRouter />
			<AuthForm />
			<BottomBarPhone />
		</div>
	)
}

export default App
