import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import { base, signOutUrl } from '../api/endpoints'
import { DefaultWordsLength } from '../api/firebase'
import refreshAccessToken from '../api/refreshToken'
import { ResetIsExamplesOpen } from '../api/words'
import authState from '../atoms/auth'
import WordCardBack from '../components/WordCardBack'
import WordCardFront from '../components/WordCardFront'

export const Home = () => {
	const history = useHistory()
	const [auth, setAuth] = useRecoilState(authState)
	const [isFront, setIsFront] = useState(true)
	const [currentWords, setCurrentWords] = useState([])
	const [index, setIndex] = useState(0)
	const [isExamplesOpen, setIsExamplesOpen] = useState(ResetIsExamplesOpen(currentWords[index]))
	const url = 'http://localhost:3000/box/today'

	const fetchWords = async () => {
		try {
			const res = await fetch(url, { headers: { Authorization: `Bearer ${auth.access_token}` } })

			if (res.statusText === 'Invalid token') {
				await refreshAccessToken()
				// TODO: Refresh access token and retry
			}

			const w = await res.json()
			console.log(w)

			setCurrentWords(w)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		fetchWords()
	}, [])

	useEffect(() => {
		if (index === DefaultWordsLength) {
			fetchWords()
			setIndex(0)
		}
	}, [index])

	const signOut = async () => {
		const res = await fetch(`${base}${signOutUrl}`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${auth.access_token}`
			}
		})

		if (res.statusText == 'Invalid token') {
			await refreshAccessToken()
			// TODO: Refresh access token and retry
		}

		if (res.ok) {
			setAuth()
			history.push('/signin')
		}
	}

	return (
		<IonPage>
			<IonContent color={'primary'}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ">
					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonCol size="10" sizeXl="12" size-sm="4" size-md="6" size-lg="8">
							{index === DefaultWordsLength || currentWords.length == 0 ? 'Loading' : isFront ? <WordCardFront word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} setIsExamplesOpen={setIsExamplesOpen} /> : <WordCardBack word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} isExamplesOpen={isExamplesOpen} setIsExamplesOpen={setIsExamplesOpen} />}
							<IonButton onClick={signOut}>Signout</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
