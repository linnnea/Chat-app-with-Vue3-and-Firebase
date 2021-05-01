import firebase from 'firebase/app';
import 'firebase/database';

const config = {
	// API keys
	apiKey: 'AIzaSyAZV_gHojNbgP-sRS456jrDKTV01tZke60',
	authDomain: 'firechatvue-d6d1e.firebaseapp.com',
	databaseURL: 'https://firechatvue-d6d1e-default-rtdb.firebaseio.com',
	projectId: 'firechatvue-d6d1e',
	storageBucket: 'firechatvue-d6d1e.appspot.com',
	messagingSenderId: '86941053018',
	appId: '1:86941053018:web:975b86ae683c9f71f82863',
};

const db = firebase.initializeApp(config);
export default db;
