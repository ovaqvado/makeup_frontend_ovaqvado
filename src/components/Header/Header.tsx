import { FC } from 'react'
import { Link } from 'react-router-dom'

export const Header: FC = () => {
	return (
		<div>
			<div>
				<div className='links'>
					<Link to='/'>Главная</Link>
					<Link to='/lessons'>Уроки</Link>
					<Link to='/users'>Пользователи</Link>
					<Link to='/events'>События</Link>
				</div>
			</div>
		</div>
	)
}
