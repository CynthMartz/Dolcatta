const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyDHSOm9pbFTNo00O-3shAaJoHfc1cOi06A",
  authDomain: "dolcatta-7c32d.firebaseapp.com",
  projectId: "dolcatta-7c32d",
  storageBucket: "dolcatta-7c32d.appspot.com",
  messagingSenderId: "251061840638",
  appId: "1:251061840638:web:5f2d6123620c6db4aa13af",
  measurementId: "G-G9DS4CRVQ3"
};

const app = initializeApp(firebaseConfig);

var admin = require("firebase-admin");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: "dolcatta-7c32d.appspot.com",
});


module.exports = {
  app,
  admin
};