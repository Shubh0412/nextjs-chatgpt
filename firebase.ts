import { getApp, getApps, initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAep7dpwqXEGgz4pE-L1zygciSDlnO7v1I",
  authDomain: "nextjs-chatgpt-a6edf.firebaseapp.com",
  projectId: "nextjs-chatgpt-a6edf",
  storageBucket: "nextjs-chatgpt-a6edf.appspot.com",
  messagingSenderId: "714387898417",
  appId: "1:714387898417:web:2b06ec38934847f0381510"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
