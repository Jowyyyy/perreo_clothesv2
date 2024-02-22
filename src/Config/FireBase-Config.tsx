import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCT-ll-EMqZckQly5J-qkeO46r__0eXwrQ",
  authDomain: "perreoclothes-8e198.firebaseapp.com",
  projectId: "perreoclothes-8e198",
  storageBucket: "perreoclothes-8e198.appspot.com",
  messagingSenderId: "258749442914",
  appId: "1:258749442914:web:ad5082310b93ac16b5da3b"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore y Auth
const auth = getAuth(app);

export {  auth };