import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonIcon } from '@ionic/react'
import { checkmarkOutline, volumeMediumOutline } from 'ionicons/icons'
import { React } from 'react'
import { ResetIsExamplesOpen, increment } from '../api/words'

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

const WordCardFront = ({ word, index, setIndex, isFront, setIsFront, setIsExamplesOpen }) => {
	// TODO: Audio => First Child
	const UK = new Audio(word.header.audio.UK)
	const US = new Audio(word.header.audio.US)

	const move = action => {
		action()
		setIsExamplesOpen(ResetIsExamplesOpen(word.definitions.length))
	}

	const flip = action => {
		action()
		setIsExamplesOpen(ResetIsExamplesOpen(word.definitions.length))
	}

	return (
		<IonCard
			className="word-card ion-no-margin"
			color={'card'}
			style={{
				height: '50vh'
			}}
		>
			<IonCardTitle
				className="ion-padding-start ion-padding-end"
				style={{
					width: '100%',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center'
				}}
			>
				<IonButton onClick={() => UK.play()} size="small">
					UK
					<IonIcon icon={volumeMediumOutline} slot="end"></IonIcon>
				</IonButton>
				<IonButton color={'danger'} onClick={() => US.play()} size="small">
					US
					<IonIcon icon={volumeMediumOutline} slot="end"></IonIcon>
				</IonButton>
			</IonCardTitle>
			<IonCardHeader className="ion-text-center">
				<IonCardTitle>
					{word.word}
					<IonCardTitle>({word.header.partOfSpeech})</IonCardTitle>
				</IonCardTitle>
			</IonCardHeader>
			<IonCardContent className="ion-floating-left ion-text-center">
				<div dangerouslySetInnerHTML={{ __html: word.definitions[0].examples[0].includes('span') ? word.definitions[0].examples[0] : findWord(word.definitions[0].examples[0], word.word) }}></div>

				<IonButton color={'light'} className="ion-margin-top" onClick={() => flip(() => setIsFront(!isFront))}>
					<span
						className="ion-padding"
						style={{
							color: '#283448',
							fontSize: '15px',
							fontWeight: 'bold'
						}}
					>
						Tap to see meaning
					</span>
				</IonButton>
			</IonCardContent>

			<IonButton color={'success'} onClick={() => move(() => setIndex(increment(index)))}>
				<IonIcon icon={checkmarkOutline}></IonIcon>
			</IonButton>
		</IonCard>
	)
}

export default WordCardFront
