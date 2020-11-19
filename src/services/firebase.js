import fbapp from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTtd6A1m7BP20fn3eECoMSGvxni2Zmt3w",
  authDomain: "fir-chat-25b3b.firebaseapp.com",
  databaseURL: "https://fir-chat-25b3b.firebaseio.com",
  projectId: "fir-chat-25b3b",
  storageBucket: "fir-chat-25b3b.appspot.com",
  messagingSenderId: "425965917415",
  appId: "1:425965917415:web:c8b1c2bee36f1b7f903e42"
};

fbapp.initializeApp(firebaseConfig);
const database = fbapp.firestore();
const auth = fbapp.auth();

const googleProvider = new fbapp.auth.GoogleAuthProvider();

export const signWithGoogle = () =>{
    return auth.signInWithPopup(googleProvider)
    .then(res => res.user)
    .catch(error => console.log(error.message));
  }

export const createUser = (email, password) =>{
    return auth.createUserWithEmailAndPassword(email, password)
    .then(res => res.user)
    .catch((error) => console.log(error.message));
}

export const signInWithMail = (email, password) =>{
  return auth.signInWithEmailAndPassword(email, password)
  .then(res => res.user)
  .catch((error) => console.log(error.message));
}

export const getMessages = async () =>{
  const collection = 'messages';
  try{
    const querySnapshot = await database.collection(collection).get();
    console.log(querySnapshot);
    return querySnapshot.docs.map(doc =>{
      const data = doc.data();
      return {
        id: doc.id,
        ...data
      }
    });
  }catch(error){
    throw new Error(error.message);
  }
}