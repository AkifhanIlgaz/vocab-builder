import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/react'

import parser from 'html-react-parser'
import { repeatOutline } from 'ionicons/icons'
import { React, useState } from 'react'
import words from '../api/words'
import WordCardBack from '../components/WordCardBack'
import WordCardFront from '../components/WordCardFront'

export const Home = () => {
	const [isFront, setIsFront] = useState(true)
	const [currentWords, setCurrentWords] = useState(words)
	const [index, setIndex] = useState(0)

	return (
		<IonPage>
			<IonContent color={'primary'}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ">
					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonCol size="10" sizeXl="12" size-sm="4" size-md="6" size-lg="8">
							{isFront ? <WordCardFront word={currentWords[index]} parser={parser} /> : <WordCardBack word={currentWords[index]} parser={parser} />}
							<IonButton onClick={() => setIsFront(!isFront)}>
								<IonIcon icon={repeatOutline}></IonIcon>
							</IonButton>
							<IonButton onClick={() => setIndex(index - 1)}>Back</IonButton>
							<IonButton onClick={() => setIndex(index + 1)}>Next</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
