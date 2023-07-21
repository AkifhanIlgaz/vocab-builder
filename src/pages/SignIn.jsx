import { IonCardContent, IonCol, IonButton, IonInput, IonLabel, IonRow, IonIcon } from '@ionic/react'
import { React } from 'react'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import FormWrapper from '../layouts/FormWrapper'
import { logInOutline } from 'ionicons/icons'
import basePath from '../atoms/path'
import axios from 'axios'
import { useRecoilState } from 'recoil'
import logState from '../atoms/user'

export const Login = () => {
	const history = useHistory()
	const [log, setLog] = useRecoilState(logState)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	const onSubmit = async data => {
		const url = basePath + '/signin'
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
			</IonCardContent>
		</FormWrapper>
	)
}

export default Login
