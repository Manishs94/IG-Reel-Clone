import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCeQK_kzg1Pdt8IqCSf_YWvNjDo5cQ5a-Y",
	authDomain: "ig-reels-clone-4ae8c.firebaseapp.com",
	databaseURL: "https://ig-reels-demo.firebaseio.com",
	projectId: "ig-reels-clone-4ae8c",
	storageBucket: "ig-reels-clone-4ae8c.appspot.com",
	messagingSenderId: "675580693360",
	appId: "1:675580693360:web:cf4ddb677b6067ccc65db5",
	measurementId: "G-FKJDQZNJHJ"
      };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export default db;