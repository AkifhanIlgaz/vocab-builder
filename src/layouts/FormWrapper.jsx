import { IonCard, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'
import { React } from 'react'

export const FormWrapper = ({ onSubmit, children }) => {
	return (
		<IonPage>
			<IonContent color={'success'} scrollY={false}>
				<form onSubmit={onSubmit}>
					<IonGrid className="ion-align-items-center ion-justify-content-center ion-height ">
						<IonRow className="ion-align-items-center ion-justify-content-center ion-height">
							<IonCol size="12" size-md="6" size-lg="4">
								<div className="ion-text-center ion-padding">
									<img className="image" src="../../public/favicon.png"></img>
								</div>
								<IonCard className="ion-transparent">{children}</IonCard>
							</IonCol>
						</IonRow>
					</IonGrid>
				</form>
			</IonContent>
		</IonPage>
	)
}

export default FormWrapper
