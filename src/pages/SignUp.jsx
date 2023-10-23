import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonLabel, IonRow } from '@ionic/react'
import { personCircleOutline } from 'ionicons/icons'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { authState } from '../atoms/auth'
import FormWrapper from '../layouts/FormWrapper'

export const SignUp = () => {
	const history = useHistory()
	const [auth, setAuth] = useRecoilState(authState)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = async data => {
		try {
			const res = await fetch('http://localhost:3000/auth/signup', {
				method: 'POST',
				body: JSON.stringify(data)
			})

			setAuth(await res.json())
			history.push('/home')
		} catch (error) {
			console.log(error)
		}
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
