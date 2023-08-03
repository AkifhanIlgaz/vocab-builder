import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonList } from '@ionic/react'
import { book, checkmarkOutline, closeOutline, volumeHigh } from 'ionicons/icons'
import { React } from 'react'
import Firebase from '../api/firebase'

const WordCardBack = ({ word, parser }) => {
	const UK = new Audio(word.header.audio.UK)
	const US = new Audio(word.header.audio.US)

	const fetchData = async () => {
		const firebase = new Firebase()
	}

	return (
		<>
			<IonCard className="word-card">
				Back
				<IonCardTitle
					className="ion-padding"
					style={{
						width: '100%',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center'
					}}
				>
					Box: {word.box}
					<div className="ion-floating-right">
						<IonButton onClick={() => UK.play()}>
							UK
							<IonIcon icon={volumeHigh}></IonIcon>
						</IonButton>
						<IonButton onClick={() => US.play()}>
							US
							<IonIcon icon={volumeHigh}></IonIcon>
						</IonButton>
						<IonButton>
							<a style={{ width: '0' }} href={word.source} target="_blank" rel="noopener noreferrer">
								Oxford
							</a>
							<IonIcon icon={book}></IonIcon>
						</IonButton>
					</div>
				</IonCardTitle>
				<IonCardHeader className="ion-text-center">
					<IonCardTitle>
						{word.word}
						<IonCardTitle>
							({word.header.partOfSpeech}) {word.header.CEFRLevel}
						</IonCardTitle>
					</IonCardTitle>
				</IonCardHeader>
				<IonList style={{ width: '100%' }} className="ion-floating-left">
					{word.definitions.map(def => {
						return (
							<IonList>
								{def.meaning}
								<IonList>
									{def.examples.map(example => (
										<IonItem>{parser(example)}</IonItem>
									))}
								</IonList>
							</IonList>
						)
					})}
					<IonItem>Hello</IonItem>
					<IonItem>World</IonItem>
				</IonList>
				<IonCardContent className="ion-floating-left">{word.definitions[0].examples[0]}</IonCardContent>
			</IonCard>
			<div
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center'
				}}
			>
				<IonButton color={'danger'}>
					<IonIcon icon={closeOutline}></IonIcon>
				</IonButton>
				<IonButton color={'success'}>
					<IonIcon icon={checkmarkOutline}></IonIcon>
				</IonButton>
			</div>
		</>
	)
}

export default WordCardBack
