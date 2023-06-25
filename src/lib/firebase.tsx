import admin from 'firebase-admin';
import * as firestore from 'firebase-admin/firestore';

const credentials = require('@/config/firebase-key.json')

if(!admin.apps.length){
    admin.initializeApp({
        credential: admin.credential.cert(credentials)
    });
}

const db = admin.firestore();
export default db;




