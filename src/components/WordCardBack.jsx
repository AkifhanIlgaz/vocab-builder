import { IonButton, IonCard, IonCardHeader, IonCardTitle, IonIcon, IonItem, IonList, IonTitle, IonToolbar } from '@ionic/react'
import { checkmarkOutline, chevronDownOutline, chevronForwardOutline, closeOutline, informationCircleOutline, repeatOutline, volumeHigh } from 'ionicons/icons'
import { React } from 'react'
import { ResetIsExamplesOpen, decrement, increment } from '../api/words'

const WordCardBack = ({ word, index, setIndex, isFront, setIsFront, isExamplesOpen, setIsExamplesOpen }) => {
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
		<>
			<IonToolbar style={{ marginLeft: '10px' }} color={'transparent'}>
				<IonButton onClick={() => move(() => setIndex(decrement(index)))} slot="start">
					Back
				</IonButton>
				<IonTitle className="ion-text-center">
					<IonButton onClick={() => flip(setIsFront(!isFront))}>
						<IonIcon icon={repeatOutline}></IonIcon>
					</IonButton>
				</IonTitle>
				<IonButton onClick={() => move(() => setIndex(increment(index)))} slot="end">
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
							<IonIcon icon={informationCircleOutline}></IonIcon>
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
