import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import { Redirect, Route } from 'react-router-dom'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css'
import '@ionic/react/css/structure.css'
import '@ionic/react/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/display.css'
import '@ionic/react/css/flex-utils.css'
import '@ionic/react/css/float-elements.css'
import '@ionic/react/css/padding.css'
import '@ionic/react/css/text-alignment.css'
import '@ionic/react/css/text-transformation.css'

/* Theme variables */
import './theme/style.scss'
import './theme/variables.css'

import { useRecoilState } from 'recoil'
import userState from './atoms/user'
import ForgotPassword from './pages/ForgotPassword'
import Home from './pages/Home'
import Profile from './pages/Profile'
import ResetPassword from './pages/Reset-Password'
import { SignIn } from './pages/SignIn'
import SignUp from './pages/SignUp'

setupIonicReact()

const App = () => {
	const [user] = useRecoilState(userState)

	return (
		<IonApp>
			<IonReactRouter>
				<IonRouterOutlet>
					{user ? (
						<>
							<Route path={['/', '/signin', '/signup', '/password-reset']} exact={true}>
								<Redirect to="/home"></Redirect>
							</Route>
							<Route path="/home" exact={true}>
								<Home />
							</Route>
							<Route path="/profile" exact={true}>
								<Profile />
							</Route>
						</>
					) : (
						<>
							<Route exact path="/signin">
								<SignIn />
							</Route>
							<Route exact path="/signup">
								<SignUp />
							</Route>
							<Route exact path="/forgot-password">
								<ForgotPassword />
							</Route>
							<Route exact path="/reset-password">
								<ResetPassword />
							</Route>
							<Route exact path="/">
								<Redirect to="/signin"></Redirect>
							</Route>
						</>
					)}
				</IonRouterOutlet>
			</IonReactRouter>
		</IonApp>
	)
}

export default App
