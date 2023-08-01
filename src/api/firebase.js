import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'
import firebaseConfig from './firebaseConfig'

firebase.initializeApp(firebaseConfig)

export const Users = 'users'

class Request {
	constructor() {
		this.auth = firebase.auth()
		this.firestore = firebase.firestore()
		this.storage = firebase.storage()
	}
	async checkUserExistsByEMail(email) {
		try {
			const userCredential = await this.auth.fetchSignInMethodsForEmail(email)
			return userCredential.length > 0
		} catch (error) {
			throw error
		}
	}

	async signUpWithEmail(email, password, userData) {
		try {
			const userExists = await this.checkUserExistsByEMail(email)
			if (userExists) {
				return false
			} else {
				const userCredential = await this.auth.createUserWithEmailAndPassword(email, password)
				const user = userCredential.user
				const userDocRef = this.firestore.collection(UsersCollection).doc(user.uid)
				const userDocSnapshot = await userDocRef.get()
				userData = { uid: user.uid, createdAt: user.metadata.createdAt, creationTime: user.metadata.creationTime, lastLoginAt: user.metadata.lastLoginAt, lastSignInTime: user.metadata.lastSignInTime, displayName: user.displayName, email: user.email, phoneNumber: user.phoneNumber, photoURL: user.photoURL, providerId: user.providerId, ...userData }
				if (userDocSnapshot.exists) {
					await this.setDocument(UsersCollection, user.uid, { ...userDocSnapshot.data(), ...userData })
					return { ...userDocSnapshot.data(), ...userData }
				} else {
					await this.setDocument(UsersCollection, user.uid, userData)
					return userData
				}
			}
		} catch (error) {
			throw error
		}
	}

	async signInWithEmail(email, password) {
		try {
			const userExists = await this.checkUserExistsByEMail(email)
			if (userExists) {
				const userCredential = await this.auth.signInWithEmailAndPassword(email, password)
				const user = userCredential.user
				const userDocRef = this.firestore.collection(UsersCollection).doc(user.uid)

				const userDocSnapshot = await userDocRef.get()
				const userData = { uid: user.uid, createdAt: user.metadata.createdAt, creationTime: user.metadata.creationTime, lastLoginAt: user.metadata.lastLoginAt, lastSignInTime: user.metadata.lastSignInTime, displayName: user.displayName, email: user.email, phoneNumber: user.phoneNumber, providerId: user.providerId }
				if (userDocSnapshot.exists) {
					await this.setDocument(UsersCollection, user.uid, { ...userDocSnapshot.data(), ...userData })
					return { ...userDocSnapshot.data(), ...userData }
				} else {
					await this.setDocument(UsersCollection, user.uid, userData)
					return userData
				}
			} else {
				return false
			}
		} catch (error) {
			throw error
		}
	}

	async resetPasswordWithEmail(email) {
		try {
			const userExists = await this.checkUserExistsByEMail(email)
			if (userExists) {
				await this.auth.sendPasswordResetEmail(email)
			} else {
				return false
			}
		} catch (error) {
			throw error
		}
	}

	async signOut() {
		try {
			await this.auth.signOut()
		} catch (error) {
			throw error
		}
	}

	async addDocument(collection, data) {
		try {
			const docRef = await this.firestore.collection(collection).add(data)
			return { id: docRef.id, ref: docRef }
		} catch (error) {
			throw error
		}
	}

	async getDocuments(collection) {
		try {
			const snapshot = await this.firestore.collection(collection).get()
			return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
		} catch (error) {
			throw error
		}
	}

	async getDocument(collection, documentId) {
		try {
			const docRef = this.firestore.collection(collection).doc(documentId)
			const doc = await docRef.get()
			if (doc.exists) {
				return { id: doc.id, ...doc.data() }
			} else {
				return false
			}
		} catch (error) {
			throw error
		}
	}

	async updateDocument(collection, docId, data) {
		try {
			await this.firestore.collection(collection).doc(docId).update(data)
		} catch (error) {
			throw error
		}
	}

	async setDocument(collection, docId, data) {
		try {
			await this.firestore.collection(collection).doc(docId).set(data)
		} catch (error) {
			throw error
		}
	}

	async deleteDocument(collection, docId) {
		try {
			await this.firestore.collection(collection).doc(docId).delete()
		} catch (error) {
			throw error
		}
	}

	async uploadFile(storagePath, file) {
		try {
			let storageRef = this.storage.ref(storagePath)
			storageRef = storageRef.child(file.name)
			const snapshot = await storageRef.put(file)
			const downloadURL = await snapshot.ref.getDownloadURL()
			return downloadURL
		} catch (error) {
			throw error
		}
	}

	async deleteFile(storagePath) {
		try {
			const storageRef = this.storage.ref(storagePath)
			await storageRef.delete()
		} catch (error) {
			throw error
		}
	}
}
