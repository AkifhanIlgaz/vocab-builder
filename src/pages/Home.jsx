import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/react'

import parser from 'html-react-parser'
import { repeatOutline } from 'ionicons/icons'
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
				examples: ['You must be able to speak French for this job.', 'A viral illness left her <span class="cl"> barely able </span> to walk.', 'We&#39;re still <span class="cl">able to get</span> visas to come and go from Thailand.', 'I didn&#39;t feel able to disagree with him.', 'Will you be able to come?', 'Are you really <span class="cl">willing and able</span> to do what is necessary?', 'They don&#39;t even seem <span class="cl">able to see</span> what&#39;s good about their ideas.', 'These families are less able to afford a balanced, healthy diet.']
			},
			{
				meaning: 'intelligent; good at something',
				examples: ['She&#39;s the ablest student in the class.']
			}
		],
		idioms: null
	}

	return (
		<IonPage>
			<IonContent color={'primary'}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ">
					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonCol size-sm="4" size-md="6" size-lg="8">
							{side === true ? <WordCardFront word={word} parser={parser} /> : <WordCardBack word={word} parser={parser} />}
							<IonButton onClick={() => setSide(!side)}>
								<IonIcon icon={repeatOutline}></IonIcon>
							</IonButton>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
