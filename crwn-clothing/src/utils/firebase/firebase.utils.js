import {initializeApp} from 'firebase/app' ; 
import {getAuth, 
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
} from'firebase/auth' ;
import {
        getFirestore,
        doc,
        getDoc,
        setDoc,
        collection,
        writeBatch,
        query, 
        getDocs,
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

  const googleProvider = new GoogleAuthProvider() ;
  googleProvider.setCustomParameters({
    prompt: "select_account"
  }) ;

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  export const db = getFirestore();

  export const addCollectionAndDocuments = async(collectionKey,objectsToAdd ) => {
    const collectionRef = collection(db,collectionKey);
    const batch =writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object);

  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapShot = await getDocs(q);
  const catergoryMap = querySnapShot.docs.reduce((acc,docSnapShop)=>{
    const {title, items} = docSnapShop.data ();
    acc[title.toLowerCase()]=items;
    return acc;
  },{})
  return catergoryMap;
}

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation= {}) => {
    const userDocRef = doc(db,'users', userAuth.uid);

    const userSnapshot = await getDoc(userDocRef)

    if(!userSnapshot.exists()) {
      const {displayName, email}  = userAuth;
      const createdAt = new Date();

      try {
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation,
        });
      }catch (error) {
        console.log ('error creating the user ',error.message);
      }
    }
    return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
     if (!email || !password ) return ;

    return createUserWithEmailAndPassword (auth, email, password)
  }

  
  export const SignInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password ) return ;

   return signInWithEmailAndPassword (auth, email, password)
 }

 export const signOutUser = async () => await signOut(auth);

 export const onAuthStateChangedListener =  (callback) => 
    onAuthStateChanged(auth, callback);