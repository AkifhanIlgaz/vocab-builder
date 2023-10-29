import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import { base, refresh, signOutUrl } from '../api/endpoints'
import { DefaultWordsLength } from '../api/firebase'
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
			const res = await fetch(url, { headers: { provider: auth.provider, Authorization: `Bearer ${auth.access_token}` } })
			console.log(auth.access_token)
			console.log(res)

			if (res.status === 401) {
				console.log('refreshing access token')
				await refreshAccessToken()
				await fetchWords()
				// TODO: Refresh access token and retry
			}

			const w = await res.json()
			console.log(w)

			setCurrentWords(w)
		} catch (error) {
			console.log(error)
		}
	}

	const refreshAccessToken = async () => {
		const res = await fetch(`${base}${refresh}?`, {
			method: 'GET',
			headers: {
				provider: auth.provider,
				Authorization: `Bearer ${auth.refresh_token}`
			}
		})

		console.log(res)

		const newAuth = await res.json()
		setAuth(newAuth)
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
				provider: auth.provider,
				Authorization: `Bearer ${auth.access_token}`
			}
		})

		console.log(res)

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
			<IonContent color={'white'} scrollY={false}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ">
					<IonRow className="ion-align-items-center ion-justify-content-center ion-height">
						<IonCol>{index === DefaultWordsLength || currentWords.length == 0 ? 'Loading' : isFront ? <WordCardFront word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} setIsExamplesOpen={setIsExamplesOpen} /> : <WordCardBack word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} isExamplesOpen={isExamplesOpen} setIsExamplesOpen={setIsExamplesOpen} />}</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
