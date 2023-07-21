import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonLabel, IonRow, useIonAlert } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons'
import { useForm } from 'react-hook-form'
import { useHistory, useLocation } from 'react-router-dom'
import FormWrapper from '../layouts/FormWrapper'
import basePath from '../atoms/path'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import logState from '../atoms/user'

export const SignUp = () => {
	const history = useHistory()

	const [log, setLog] = useRecoilState(logState)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = async data => {
		const url = basePath + '/signup'
		const req = await axios.postForm(url, data)
		if (req.status != 200) {
			// TODO: Add error. Something went wrong please try again
			return
		}
		setLog(true)
	}

	return (
		<FormWrapper onSubmit={handleSubmit(onSubmit)}>
			<IonCardContent className="card-content">
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="E-Mail" type="email" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-input" {...register('email', { required: true })}></IonInput>
						{errors.email && <IonLabel color="danger">Bu alan gerekli!</IonLabel>}
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="Password" type="password" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-margin-top ion-input" {...register('password', { required: true })} />
						{errors.password && <IonLabel color="danger">Bu alan gerekli!</IonLabel>}
					</IonCol>
				</IonRow>
				<IonButton className="ion-margin-top " type="submit" expand="block" color="secondary">
					<span>Sign Up</span>
					<IonIcon icon={personCircleOutline} slot="end"></IonIcon>
				</IonButton>
				<IonRow className="ion-text-center">
					<IonCol>
						<a onClick={() => history.push('/signin')} style={{ textDecoration: 'none', color: '-moz-initial', fontSize: '12px' }}>
							Already have an account ?
						</a>
					</IonCol>
				</IonRow>
			</IonCardContent>
		</FormWrapper>
	)
}

export default SignUp
