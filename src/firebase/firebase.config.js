// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0q7ad034McwFEy8fH8daVm2pDETgmoB4",
  authDomain: "dhaka-catering.firebaseapp.com",
  projectId: "dhaka-catering",
  storageBucket: "dhaka-catering.appspot.com",
  messagingSenderId: "127953029647",
  appId: "1:127953029647:web:2749a51d9a0693bde6f17a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app