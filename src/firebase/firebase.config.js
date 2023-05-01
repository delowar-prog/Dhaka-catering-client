// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZTQyOVA7RHPnHlc8HLWYAx8Jx3qs6FlU",
  authDomain: "travel-guru-fed85.firebaseapp.com",
  projectId: "travel-guru-fed85",
  storageBucket: "travel-guru-fed85.appspot.com",
  messagingSenderId: "600433438439",
  appId: "1:600433438439:web:600b62f5d72572bb89fc42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app