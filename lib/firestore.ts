
import { getFirestore } from "firebase/firestore";
import app from "./firebase";

const db = getFirestore(app);
console.log("Project ID:", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
console.log("DB FILE LOADEDjjj");
export default db;