import { IonButton, IonCardContent, IonCol, IonIcon, IonInput, IonLabel, IonRow } from '@ionic/react'
import axios from 'axios'
import { personCircleOutline } from 'ionicons/icons'
import { useForm } from 'react-hook-form'
import { useHistory } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import basePath from '../atoms/path'
import FormWrapper from '../layouts/FormWrapper'

export const SignUp = () => {
	const history = useHistory()

	const [session, setSession] = useRecoilState(sessionState)

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm()

	function setCookie(name, value, options = {}) {
		options = {
			path: '/',
			// add other defaults here if necessary
			...options
		}

		if (options.expires instanceof Date) {
			options.expires = options.expires.toUTCString()
		}

		let updatedCookie = encodeURIComponent(name) + '=' + encodeURIComponent(value)

		for (let optionKey in options) {
			updatedCookie += '; ' + optionKey
			let optionValue = options[optionKey]
			if (optionValue !== true) {
				updatedCookie += '=' + optionValue
			}
		}

		document.cookie = updatedCookie
	}

	const onSubmit = async data => {
		const url = basePath + '/signup'
		const req = await axios.postForm(url, data)
		// TODO: Change status code to StatusFound
		// if (req.status != 200) {
		// 	// TODO: Add error. Something went wrong please try again
		// 	return
		// }
		console.log(req.data)
		setSession(req.data)
		console.log(session)
	}

	const goProfile = async () => {
		const url = basePath + '/profile'

		const req = await axios.get(url, {
			Cookie: 'session=VlY8K3Vy7pXq1Sz60gxDo2ZJELh7EuWXKnfmm7he6qE=;'
		})

		console.log(req)
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
			<IonButton onClick={goProfile}>Go to Profile</IonButton>
		</FormWrapper>
	)
}

export default SignUp
