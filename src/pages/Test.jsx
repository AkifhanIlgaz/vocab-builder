import { IonContent, IonPage } from '@ionic/react'
import { useEffect } from 'react'

const Test = () => {
	let params = new URLSearchParams(window.location.search)

	const info = JSON.parse(params.get('info'))

	console.log(info)

	useEffect(() => {
		const fetchData = async () => {
			const res = await fetch(
				'http://localhost:3000/request?' +
					new URLSearchParams({
						access_token: 'dsşfksdfşlksdşflkşlk'
					})
			)

			console.log(res)
		}

		fetchData()
	}, [])

	return (
		<IonPage>
			<IonContent>parmassdf</IonContent>
		</IonPage>
	)
}

export default Test
