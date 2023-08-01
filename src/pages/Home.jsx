import { IonCard, IonCol, IonContent, IonGrid, IonPage, IonRow } from '@ionic/react'

export const Home = () => {
	return (
		<IonPage>
			<IonContent color={'primary'} scrollY={false}>
				<IonGrid className="ion-align-items-center ion-justify-content-center ion-height ">
					<IonRow className="ion-align-items-center ion-justify-content-center ion-height">
						<IonCol size="8" size-md="6" size-lg="4">
							<IonCard>Home Page</IonCard>
						</IonCol>
					</IonRow>
				</IonGrid>
			</IonContent>
		</IonPage>
	)
}

export default Home
