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

export const addCollectionAndDocs = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();
		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const processedSnapshot = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items,
		};
	});
	return processedSnapshot.reduce((accumulator, collection) => {
		accumulator[collection.title.toLowerCase()] = collection;
		return accumulator;
	}, {});
};

export const getCurrentUser = () => {
	return new Promise((resolve, reject) => {
		const unsubscribe = auth.onAuthStateChanged((userAuth) => {
			unsubscribe();
			resolve(userAuth);
		}, reject);
	});
};

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export default firebase;
