import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react'
import { book, volumeHigh } from 'ionicons/icons'
import { React } from 'react'

const WordCardFront = ({ word, side, setSide }) => {
	const UK = new Audio(word.header.audio.UK)
	const US = new Audio(word.header.audio.US)

	return (
		<>
			<IonCard className="auth-card" onClick={() => setSide(!side)}>
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
				<IonButton color={'danger'}>Cancel</IonButton>
				<IonButton color={'success'}>OK</IonButton>
			</div>
		</>
	)
}

export default WordCardFront
