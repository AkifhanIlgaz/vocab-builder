import { useRecoilState } from 'recoil'
import authState from '../atoms/auth'
import { base, refresh } from './endpoints'

const refreshAccessToken = async () => {
	const [auth, setAuth] = useRecoilState(authState)

	const res = await fetch(
		`${base}${refresh}?` +
			new URLSearchParams({
				refresh_token: auth.refreshToken
			})
	)

	const newAuth = await res.json()
	setAuth(newAuth)

	return newAuth
}

export default refreshAccessToken
