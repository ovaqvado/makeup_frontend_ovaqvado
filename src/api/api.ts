import axios from 'axios'
import { getTokenFromSessionStorage } from '../helpers/localStorqage.helper'

export const instance = axios.create({
	baseURL: 'https://lr45981.tw1.ru/',
	headers: {
		Authorization: `Bearer` + getTokenFromSessionStorage(),
	},
})
