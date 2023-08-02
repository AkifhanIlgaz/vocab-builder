import { IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import { React, useState } from 'react'
import WordCardBack from '../components/WordCardBack'
import WordCardFront from '../components/WordCardFront'

export const Home = () => {
	const [side, setSide] = useState(true)

	const word = {
		id: 3,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/able_1',
		word: 'able',
		header: {
			audio: {
				UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/abl/able_/able__gb_1.mp3',
				US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/abl/able_/able__us_2.mp3'
			},
			partOfSpeech: 'adjective',
			CEFRLevel: 'A2'
		},
		definitions: [
			{
				meaning: 'having the skill, intelligence, opportunity, etc. needed to do something',
				examples: ['You must be able to speak French for this job.', 'A viral illness left her barely able to walk.', "We're still able to get visas to come and go from Thailand.", "I didn't feel able to disagree with him.", 'Will you be able to come?', 'Are you really willing and able to do what is necessary?', "They don't even seem able to see what's good about their ideas.", 'These families are less able to afford a balanced, healthy diet.']
			},
			{
				meaning: 'intelligent; good at something',
				examples: ["She's the ablest student in the class."]
			}
		],
		idioms: null
	}

	return (
		<IonPage>
			<IonContent color={'primary'} scrollY={false}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ion-height ">
					<IonRow className="ion-align-items-center ion-justify-content-center ion-height">
						<IonCol size="8" size-md="6" size-lg="4">
							{side === true ? <WordCardFront word={word} side={side} setSide={setSide} /> : <WordCardBack word={word} side={side} setSide={setSide} />}
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
