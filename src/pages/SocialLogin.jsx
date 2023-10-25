import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import authState from '../atoms/auth'

const SocialLogin = () => {
	let params = new URLSearchParams(window.location.search)
	const [auth, setAuth] = useRecoilState(authState)
	const history = useHistory()

	const tokenInfo = params.get('info')
	if (tokenInfo !== null) {
		setAuth({ provider: 'google', ...JSON.parse(tokenInfo) })
		history.push('/home')
	} else {
		history.push('/signin')
	}
}

export default SocialLogin
