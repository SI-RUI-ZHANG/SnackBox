import {initializeApp} from "firebase/app"
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  NextOrObserver,
} from 'firebase/auth'

import {Category} from "../../store/categories/categories.types";

import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  writeBatch,
  QueryDocumentSnapshot
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC1akje7yPph7EfdQCMmvO4wj6ORazPfU4",
  authDomain: "crown-clothing-db-6ab48.firebaseapp.com",
  projectId: "crown-clothing-db-6ab48",
  storageBucket: "crown-clothing-db-6ab48.appspot.com",
  messagingSenderId: "878390339282",
  appId: "1:878390339282:web:32eb2586c1b8162292af0b"
};

const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
// export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)

export const db = getFirestore()

export type ObjectToAdd = {
  title: string;
}

export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[],
): Promise<void> => {
  const collectionRef = collection(db, collectionKey)
  const batch = writeBatch(db)

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
  console.log('done')
};


export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q)
  return querySnapshot.docs.map(
    docSnapshot => docSnapshot.data() as Category
  );
};

export type AdditionalInformation = {
  displayName?: string;
}

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<QueryDocumentSnapshot<UserData> | void> => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)
  // The firestore is gonna to return a userDocRef whatever
  const userSnapshot = await getDoc(userDocRef)

  // Check if the snapshot exists, if not, set up new Document
  if (!userSnapshot.exists()) {
    const {displayName, email} = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      })
    } catch (error) {
      console.log('error creating the user ', error);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  if (!email || !password) return

  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) =>
  onAuthStateChanged(auth, callback);

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve) => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      }
    )
  })
}