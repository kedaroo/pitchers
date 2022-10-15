import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkI0De3bJLnFfvOG-1pbte80WX0IPCUyM",
  authDomain: "hackout-2022.firebaseapp.com",
  projectId: "hackout-2022",
  storageBucket: "hackout-2022.appspot.com",
  messagingSenderId: "714779689946",
  appId: "1:714779689946:web:c073637231418d4f1c76e3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
