import firebaseConfig from "./firebase.config";
import { initializeApp } from "firebase/app";
const inittiazeAuthintication = () => {
    initializeApp(firebaseConfig);
};


export default inittiazeAuthintication;