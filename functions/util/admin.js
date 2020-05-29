const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(require('../util/serviceAccount')),
  databaseURL: 'https://socialape-3a6c3.firebaseio.com',
});

const db = admin.firestore();

module.exports = { admin, db }