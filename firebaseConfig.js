// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyCsbpeUlvzNNXRF04UQjJPqpwNERYLyv0E",
	authDomain: "evernote-clone-c9794.firebaseapp.com",
	projectId: "evernote-clone-c9794",
	storageBucket: "evernote-clone-c9794.appspot.com",
	messagingSenderId: "22594541878",
	appId: "1:22594541878:web:9f31efde01fd8462b5fb97",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
