import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const logState = atom({
	key: 'loggedIn',
	default: null,
	effects_UNSTABLE: [persistAtom]
})

export default logState
