import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/react'
import { book, checkmarkOutline, chevronDownOutline, chevronForwardOutline, closeOutline, repeatOutline, volumeHigh } from 'ionicons/icons'
import { React, useState } from 'react'
import { decrement, increment } from '../api/words'

const WordCardBack = ({ word, index, setIndex, isFront, setIsFront }) => {
	const UK = new Audio(word.header.audio.UK)
	const US = new Audio(word.header.audio.US)

	const [isExamplesOpen, setIsExamplesOpen] = useState(new Array(word.definitions.length).fill(false))

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
						<IonButton onClick={() => UK.play()}>
							UK
							<IonIcon icon={volumeHigh}></IonIcon>
						</IonButton>
						<IonButton onClick={() => US.play()}>
							US
							<IonIcon icon={volumeHigh}></IonIcon>
						</IonButton>
						<IonButton href={word.source} target="_blank" rel="noopener noreferrer">
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
				<IonList className="ion-floating-left">
					{word.definitions.map((def, i) => {
						return (
							<IonList key={i}>
								<IonButton
									type="button"
									size="small"
									color={'danger'}
									onClick={() => {
										isExamplesOpen[i] = !isExamplesOpen[i]
										setIsExamplesOpen([...isExamplesOpen])
									}}
								>
									<IonIcon icon={isExamplesOpen[i] ? chevronDownOutline : chevronForwardOutline} slot="start"></IonIcon>
									{def.meaning}
								</IonButton>
								{isExamplesOpen[i] && (
									<IonList>
										{def.examples.map((example, i) => (
											<IonItem key={i} className="ion-margin-start" nonce="">
												<div dangerouslySetInnerHTML={{ __html: example }}></div>
											</IonItem>
										))}
									</IonList>
								)}
							</IonList>
						)
					})}
				</IonList>
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
