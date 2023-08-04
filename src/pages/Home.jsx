import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

import axios from 'axios'
import { React, useEffect, useState } from 'react'
import { DefaultWordsLength } from '../api/firebase'
import { ResetIsExamplesOpen } from '../api/words'
import WordCardBack from '../components/WordCardBack'
import WordCardFront from '../components/WordCardFront'

export const Home = () => {
	const [isFront, setIsFront] = useState(true)
	const [currentWords, setCurrentWords] = useState([])
	const [index, setIndex] = useState(0)

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
		console.log(index)
		if (index === DefaultWordsLength) {
			fetchWords()
			setIndex(0)
		}
	}, [index])

	return (
		<IonPage>
			<IonContent color={'primary'}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ">
					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonCol size="10" sizeXl="12" size-sm="4" size-md="6" size-lg="8">
							{index === DefaultWordsLength || currentWords.length == 0 ? 'Loading' : isFront ? <WordCardFront word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} setIsExamplesOpen={setIsExamplesOpen} /> : <WordCardBack word={currentWords[index]} index={index} setIndex={setIndex} isFront={isFront} setIsFront={setIsFront} isExamplesOpen={isExamplesOpen} setIsExamplesOpen={setIsExamplesOpen} />}
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
