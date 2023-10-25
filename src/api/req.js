import { base, refresh } from './endpoints'

const refreshAccessToken = async refreshToken => {
	const res = await fetch(
		`${base}${refresh}?` +
			new URLSearchParams({
				refresh_token: refreshToken
			})
	)

	return await res.json()
}

export default refreshAccessToken
