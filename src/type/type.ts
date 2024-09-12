export interface Icon {
	color: string
}

// ModalWindow
export interface ModalAuth {
	isOpen: boolean
	onClose: () => void
}

export interface OpenAuth {
	isAuthenticated: boolean
	openAuthModal: () => void
}

// ModalBurger
export interface ModalUser {
	isOpen: boolean
	onClose: () => void
}

export interface HeaderButton {
	openModal: () => void
}
//

export interface firstName {
	value: string
	onChange: (value: string) => void
}

export interface secondaryName {
	value: string
	onChange: (value: string) => void
}

export interface ILocation {
	value: string
	onChange: (value: string) => void
}
