import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

let app = initializeApp({
    apiKey: process.env.FIREBASE_API_KEY ?? "",
    projectId: "codesfortomorrow-3c58e"
})

let firestore = getFirestore(app)

export default firestore
