import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const authState = atom({
	key: 'auth',
	default: null,
	effects_UNSTABLE: [persistAtom]
})

export default authState
