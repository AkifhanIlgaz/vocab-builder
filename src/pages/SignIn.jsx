import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonLabel, IonRow } from '@ionic/react'
import { logInOutline, logoFacebook, logoGoogle, logoTwitter } from 'ionicons/icons'
import { React } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import Firebase from '../api/firebase'
import userState from '../atoms/user'
import FormWrapper from '../layouts/FormWrapper'

export const SignIn = () => {
	const history = useHistory()
	const [, setUser] = useRecoilState(userState)
	const firebase = new Firebase()
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = async data => {
		try {
			const res = await firebase.signInWithEmail(data.email, data.password)
			if (res === false) {
				console.log(`Account doesn't exist`)
				history.push('/signup')
				return
			}
			setUser(res)
			history.push('/home')
		} catch (error) {
			console.log(error)
		}
	}

	const signInWithProvider = async provider => {
		try {
			const res = await firebase.signInWithThirdPartyProvider(provider)
			setUser(res)
			console.log(res)
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
						<IonInput label="E-Mail" type="email" labelPlacement="floating" className=" ion-padding-start ion-padding-end ion-input" {...register('email', { required: true })}></IonInput>
						{/* <IonInput type="email" placeholder='E-Mail')} className="ion-padding-start ion-padding-end" {...register('email', { required: true })} /> */}
						{errors.email && <IonLabel color="danger">Bu alan gerekli!</IonLabel>}
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonInput label="Password" type="password" labelPlacement="floating" className="ion-padding-start ion-padding-end ion-input ion-margin-top" {...register('password', { required: true })} />
						{errors.password && <IonLabel color="danger">Bu alan gerekli!</IonLabel>}
					</IonCol>
				</IonRow>
				<IonRow className="ion-align-items-center">
					<IonCol className="ion-no-padding">
						<IonButton className="ion-margin-top " type="submit" expand="block" color="secondary">
							<span>Sign In</span>
							<IonIcon icon={logInOutline} slot="end"></IonIcon>
						</IonButton>
					</IonCol>
				</IonRow>

				<IonRow>
					<IonCol>
						<a className="ion-float-left " onClick={() => history.push('/forgot-password')} style={{ textDecoration: 'none', color: '-moz-initial', fontSize: '12px' }}>
							Forgot your password ?
						</a>
						<a className="ion-float-right" onClick={() => history.push('/signup')} style={{ textDecoration: 'none', color: '-moz-initial', fontSize: '12px' }}>
							Don't have an account ?
						</a>
					</IonCol>
				</IonRow>
				<div className="ion-text-center">
					<IonButton onClick={() => signInWithProvider(firebase.googleProvider)}>
						<IonIcon icon={logoGoogle}></IonIcon>
					</IonButton>
					<IonButton onClick={() => signInWithProvider(firebase.twitterProvider)}>
						<IonIcon icon={logoTwitter}></IonIcon>
					</IonButton>
					<IonButton onClick={() => signInWithProvider(firebase.facebookProvider)}>
						<IonIcon icon={logoFacebook}></IonIcon>
					</IonButton>
				</div>
			</IonCardContent>
		</FormWrapper>
	)
}

export default SignIn
