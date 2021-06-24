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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (e) {
			console.log(e.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
