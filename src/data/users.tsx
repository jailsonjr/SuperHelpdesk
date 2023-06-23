import * as firestore from 'firebase/firestore';
import db from '@/lib/firebase';

const users = async (db: firestore.Firestore) => {
    const usersCol = firestore.collection(db,'users');
    const usersSnap = await firestore.getDocs(usersCol);
    const usersList = usersSnap.docs.map(doc => doc.data());
    return usersList
  }
  
  export default users(db);