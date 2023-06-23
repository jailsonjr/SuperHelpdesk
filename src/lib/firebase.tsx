import {initializeApp} from 'firebase/app';
import * as firestore from 'firebase/firestore';

const config = require('../config/firebase-key.json');

const app = initializeApp(config);
const db = firestore.getFirestore(app);

export default db;






