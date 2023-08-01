import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonLabel, IonRow } from '@ionic/react'
import axios from 'axios'
import { send } from 'ionicons/icons'
import { React } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import basePath from '../atoms/path'
import FormWrapper from '../layouts/FormWrapper'

export const ForgotPassword = () => {
	const history = useHistory()

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = async data => {
		const url = basePath + '/forgot-password'
		const req = await axios.postForm(url, data)
		console.log(req)
		if (req.status !== 200) {
			// TODO: Add error
			return
		}

		setLog(true)
	}

	return (
		<FormWrapper onSubmit={handleSubmit(onSubmit)}>
			<IonCardContent className="card-content">
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="E-Mail" type="email" labelPlacement="floating" className=" ion-padding-start ion-padding-end ion-input" {...register('email', { required: true })}></IonInput>
						{/* <IonInput type="email" placeholder='E-Mail')} className="ion-padding-start ion-padding-end" {...register('email', { required: true })} /> */}
						{errors.email && <IonLabel color="danger">Bu alan gerekli!</IonLabel>}
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonButton className="ion-margin-top " type="submit" expand="block" color="secondary">
							<span>Send</span>
							<IonIcon icon={send} slot="end"></IonIcon>
						</IonButton>
					</IonCol>
				</IonRow>
			</IonCardContent>
		</FormWrapper>
	)
}

export default ForgotPassword
