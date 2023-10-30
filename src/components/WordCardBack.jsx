import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonItem, IonList } from '@ionic/react'
import { React } from 'react'
import { ResetIsExamplesOpen } from '../api/words'

const WordCardBack = ({ word, index, setIndex, isFront, setIsFront, isExamplesOpen, setIsExamplesOpen }) => {
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
					height: '100vh'
				}}
			>
				<IonCardContent>
					<IonAccordionGroup
						style={{
							width: '100vw'
						}}
						expand="compact"
					>
						{word.definitions.map((def, i) => {
							return (
								<IonAccordion value={i}>
									<IonItem slot="header" color={'danger'}>
										{def.meaning}
									</IonItem>
									<IonList slot="content">
										{def.examples.map((example, i) => (
											<IonItem key={i} className="ion-margin-start" nonce="">
												<div dangerouslySetInnerHTML={{ __html: example }}></div>
											</IonItem>
										))}
									</IonList>
								</IonAccordion>
							)
						})}
					</IonAccordionGroup>
				</IonCardContent>

				<IonButton onClick={() => flip(() => setIsFront(!isFront))}>flip</IonButton>
			</IonCard>
	)
}

export default WordCardBack
