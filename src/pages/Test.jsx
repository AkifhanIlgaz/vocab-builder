import { IonContent, IonPage } from '@ionic/react'
import { useRecoilValue } from 'recoil'
import refreshAccessToken from '../api/refreshToken'
import authState from '../atoms/auth'

const Test = () => {
	let params = new URLSearchParams(window.location.search)
	const auth = useRecoilValue(authState)

	const x = async () => {
		const res = await refreshAccessToken(auth.refreshToken)
		console.log(res)
	}

	x()

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const res = await fetch(
	// 			'http://localhost:3000/request?' +
	// 				new URLSearchParams({
	// 					access_token: 'dsşfksdfşlksdşflkşlk'
	// 				})
	// 		)

	// 		console.log(res)
	// 	}

	// 	fetchData()
	// }, [])

	return (
		<IonPage>
			<IonContent>parmassdf</IonContent>
		</IonPage>
	)
}

export default Test
