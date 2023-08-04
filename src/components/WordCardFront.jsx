import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon, IonTitle, IonToolbar } from '@ionic/react'
import { book, checkmarkOutline, closeOutline, repeatOutline, volumeHigh } from 'ionicons/icons'
import { React } from 'react'
import { decrement, increment } from '../api/words'

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

const WordCardFront = ({ word, index, setIndex, isFront, setIsFront }) => {
	const UK = new Audio(word.header.audio.UK)
	const US = new Audio(word.header.audio.US)

	return (
		<>
			<IonToolbar style={{ marginLeft: '10px' }} color={'transparent'}>
				<IonButton onClick={() => setIndex(decrement(index))} slot="start">
					Back
				</IonButton>
				<IonTitle className="ion-text-center">
					<IonButton onClick={() => setIsFront(!isFront)}>
						<IonIcon icon={repeatOutline}></IonIcon>
					</IonButton>
				</IonTitle>
				<IonButton onClick={() => setIndex(increment(index))} slot="end">
					Next
				</IonButton>
			</IonToolbar>

			<IonCard className="word-card">
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
						<IonButton onClick={() => UK.play()} size="small">
							UK
							<IonIcon icon={volumeHigh} slot="end"></IonIcon>
						</IonButton>
						<IonButton color={'danger'} onClick={() => US.play()} size="small">
							US
							<IonIcon icon={volumeHigh} slot="end"></IonIcon>
						</IonButton>
						<IonButton color={'warning'} size="small" href={word.source} target="_blank" rel="noopener noreferrer">
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
					<div dangerouslySetInnerHTML={{ __html: word.definitions[0].examples[0].includes('span') ? word.definitions[0].examples[0] : findWord(word.definitions[0].examples[0], word.word) }}></div>
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
