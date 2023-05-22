import { wait } from '@testing-library/user-event/dist/utils';
import {initializeApp} from 'firebase/app' ; 
import {getAuth, 
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider
} from'firebase/auth' ;
import {
        getFirestore,
        doc,
        getDoc,
        setDoc
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDvbC20v1c13Y3c-WCWuo0Kn5JDDwqnIt0",
    authDomain: "crwn-clothing-db-111.firebaseapp.com",
    projectId: "crwn-clothing-db-111",
    storageBucket: "crwn-clothing-db-111.appspot.com",
    messagingSenderId: "522415451730",
    appId: "1:522415451730:web:64cd4b700b05cfe0c8b98b"
  };
  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider() ;
  provider.setCustomParameters({
    prompt: "select_account"
  }) ;

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db,'users', userAuth.uid);

    console.log (userDocRef);

    const userSnapshot = await getDoc(userDocRef)

    console.log (userSnapshot);
    console.log (userSnapshot.exists());

    if(!userSnapshot.exists()) {
      const {displayName, email}  = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
        });
      }catch (error) {
        console.log ('error creating the user ',error.message);
      }
    }
    return userDocRef;
  };