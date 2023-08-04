import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import axios from 'axios'
import { React, useEffect, useState } from 'react'
import WordCardBack from '../components/WordCardBack'
import WordCardFront from '../components/WordCardFront'

export const Home = () => {
	const [isFront, setIsFront] = useState(true)
	const [currentWords, setCurrentWords] = useState([])
	const [index, setIndex] = useState(0)

	const url = 'http://localhost:3000/words/random'

	useEffect(() => {
		const fetchWords = async () => {
			try {
				const res = await axios.get(url)
				setCurrentWords(res.data)
			} catch (error) {
				console.log(error)
			}
		}
		fetchWords()
	}, [])

	return (
		<IonPage>
			<IonContent color={'primary'}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ">
					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonCol size="10" sizeXl="12" size-sm="4" size-md="6" size-lg="8">
							{currentWords.length == 0 ? 'Loading' : isFront ? <WordCardFront word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} /> : <WordCardBack word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront}	 />}
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
