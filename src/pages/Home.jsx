import { IonButton, IonCol, IonContent, IonGrid, IonIcon, IonPage, IonRow } from '@ionic/react'

import parser from 'html-react-parser'
import { repeatOutline } from 'ionicons/icons'
import { React, useState } from 'react'
import WordCardBack from '../components/WordCardBack'
import WordCardFront from '../components/WordCardFront'

export const Home = () => {
	const [side, setSide] = useState(true)

	const word = {
		id: 6,
		box: 0,
		source: 'https://www.oxfordlearnersdictionaries.com/definition/english/about_2',
		word: 'about',
		header: {
			audio: {
				UK: 'https://www.oxfordlearnersdictionaries.com/media/english/uk_pron/a/abo/about/about__gb_1.mp3',
				US: 'https://www.oxfordlearnersdictionaries.com/media/english/us_pron/a/abo/about/about__us_1.mp3'
			},
			partOfSpeech: 'adverb',
			CEFRLevel: 'A1'
		},
		definitions: [
			{
				meaning: 'a little more or less than; a little before or after',
				examples: ['It costs about $10.', 'They waited (for) about an hour.', 'He arrived (at) about ten.']
			},
			{
				meaning: 'nearly; very close to',
				examples: ['I&#39;m just about ready.', 'This is about the best we can hope for.']
			},
			{
				meaning: 'in many directions; here and there',
				examples: ['The children were rushing about in the garden.']
			},
			{
				meaning: 'in no particular order; in various places',
				examples: ['Her books were lying about on the floor.']
			},
			{
				meaning: 'doing nothing in particular',
				examples: ['People were standing about in the road.']
			},
			{
				meaning: 'able to be found in a place',
				examples: ['There was nobody about.', 'There&#39;s a lot of flu about.', 'She’s somewhere about—I saw her a few minutes ago.']
			},
			{
				meaning: 'facing the opposite direction',
				examples: ['He brought the ship about.']
			}
		],
		idioms: [
			{
				usage: 'just about (informal)',
				definition: [
					{
						meaning: 'almost; very nearly',
						examples: ["I've met just about everyone.", '‘Did you reach your sales target?’ ‘Just about.’']
					},
					{
						meaning: 'approximately',
						examples: ['She should be arriving just about now.']
					}
				]
			},
			{
				usage: 'out and about ',
				definition: [
					{
						meaning: 'able to go outside again after an illness',
						examples: null
					},
					{
						meaning: 'travelling around a place',
						examples: ["We've been out and about talking to people all over the country."]
					}
				]
			},
			{
				usage: 'that’s about all | that’s about it ',
				definition: [
					{
						meaning: 'used to say that you have finished telling somebody about something and there is nothing to add',
						examples: ["‘Anything else?’ ‘No, that's about it for now.’"]
					}
				]
			}
		]
	}
	return (
		<IonPage>
			<IonContent color={'primary'}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ">
					<IonRow className="ion-align-items-center ion-justify-content-center">
						<IonCol size="10" sizeXl="12" size-sm="4" size-md="6" size-lg="8">
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
