import { IonButton, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { useRecoilState } from 'recoil'
import Firebase, { DefaultWordsLength } from '../api/firebase'
import { ResetIsExamplesOpen } from '../api/words'
import userState from '../atoms/user'
import WordCardBack from '../components/WordCardBack'
import WordCardFront from '../components/WordCardFront'

export const Home = () => {
	const history = useHistory()
	const [user, setUser] = useRecoilState(userState)
	const [isFront, setIsFront] = useState(true)
	const [currentWords, setCurrentWords] = useState([])
	const [index, setIndex] = useState(0)
	const firebase = new Firebase()

	const url = 'http://localhost:3000/words/random'
	const [isExamplesOpen, setIsExamplesOpen] = useState(ResetIsExamplesOpen(currentWords[index]))

	const fetchWords = async () => {
		try {
			const res = await axios.get(url)

			setCurrentWords(res.data)
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

	const sendVerifyToken = async () => {
		const idToken = await firebase.auth.currentUser.getIdToken(true)
		console.log(idToken)
	}

	const signOut = async () => {
		const res = await firebase.signOut()
		setUser(res)
		history.push('/signin')
	}

	return (
		<IonPage>
			<IonContent color={'primary'}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ">
					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonCol size="10" sizeXl="12" size-sm="4" size-md="6" size-lg="8">
							{index === DefaultWordsLength || currentWords.length == 0 ? 'Loading' : isFront ? <WordCardFront word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} setIsExamplesOpen={setIsExamplesOpen} /> : <WordCardBack word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} isExamplesOpen={isExamplesOpen} setIsExamplesOpen={setIsExamplesOpen} />}
							<IonButton onClick={signOut}>Signout</IonButton>
							<IonButton onClick={sendVerifyToken}>Send Verify Token</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
