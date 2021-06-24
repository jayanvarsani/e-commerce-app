import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyBqpNvOhIiBKLsMEMiIKdRgtyPchLGI9D4",
	authDomain: "e-commerce-db-d4bf7.firebaseapp.com",
	projectId: "e-commerce-db-d4bf7",
	storageBucket: "e-commerce-db-d4bf7.appspot.com",
	messagingSenderId: "225748228983",
	appId: "1:225748228983:web:ee728bb6c1aea01aae5f72",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
