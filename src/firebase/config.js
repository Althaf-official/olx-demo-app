import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBGG9BL4osat3wRSbcdkR_AkVBR6PzVrgE",
    authDomain: "olx-demo-e1568.firebaseapp.com",
    projectId: "olx-demo-e1568",
    storageBucket: "olx-demo-e1568.appspot.com",
    messagingSenderId: "836762922355",
    appId: "1:836762922355:web:cda19b59a24527d9326906",
    measurementId: "G-1Y80YRHFS3"
  };

 export const Firebase=initializeApp(firebaseConfig)
 export const db = getFirestore(Firebase);


