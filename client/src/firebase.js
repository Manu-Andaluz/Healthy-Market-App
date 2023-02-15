// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR57X19sIIsVkfQAPIt3cfmULsvQSQx1E",
  authDomain: "healthymarketapp-7c7aa.firebaseapp.com",
  projectId: "healthymarketapp-7c7aa",
  storageBucket: "healthymarketapp-7c7aa.appspot.com",
  messagingSenderId: "749314750979",
  appId: "1:749314750979:web:7f7c9cbc615a394ad3ec36",
  measurementId: "G-KR9GR1C5V3"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app); // constante que me permite contar con las analitics de mi app
export const auth = getAuth(app);