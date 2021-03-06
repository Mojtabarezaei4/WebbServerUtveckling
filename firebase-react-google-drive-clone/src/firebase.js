import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBAS_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBAS_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBAS_MASSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBAS_APP_ID
})

const firestore = app.firestore()
export const database = {
    folders: firestore.collection('folders'),
    files: firestore.collection('files'),
    formatDoc: doc =>{
        return { id:doc.id, ...doc.data() }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp

}
export const auth = app.auth()
export default app