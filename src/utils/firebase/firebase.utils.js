import {initializeApp} from "firebase/app"
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
}
  from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1akje7yPph7EfdQCMmvO4wj6ORazPfU4",
  authDomain: "crown-clothing-db-6ab48.firebaseapp.com",
  projectId: "crown-clothing-db-6ab48",
  storageBucket: "crown-clothing-db-6ab48.appspot.com",
  messagingSenderId: "878390339282",
  appId: "1:878390339282:web:32eb2586c1b8162292af0b"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore()
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid)

  console.log(userDocRef)

  // The firestore is gonna to return a userDocRef whatever
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot)
  console.log(userSnapshot.exists())

  // Check if the snapshot exists, if not, set up new Document
  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef
}













