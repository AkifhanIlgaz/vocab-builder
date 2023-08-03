import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react'
import { book, checkmarkOutline, closeOutline, volumeHigh } from 'ionicons/icons'
import { React } from 'react'

/**
 *
 * @param {string} example
 * @param {string} word
 * @returns {string}
 */
const findWord = (example, word) => {
	return example
		.split(' ')
		.map(w => {
			if (w.includes(word)) {
				return `<span class="cl">${w}</span>`
			}
			return w
		})
		.join(' ')
}

const WordCardFront = ({ word }) => {
	const UK = new Audio(word.header.audio.UK)
	const US = new Audio(word.header.audio.US)

	return (
		<>
			<IonCard className="word-card">
				Front
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
						<IonCardTitle>({word.header.partOfSpeech})</IonCardTitle>
					</IonCardTitle>
				</IonCardHeader>
				<IonCardContent className="ion-floating-left">
					<div dangerouslySetInnerHTML={{ __html: findWord(word.definitions[0].examples[0], word.word) }}></div>
				</IonCardContent>
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

export default WordCardFront
