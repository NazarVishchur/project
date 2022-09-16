
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, child, get, update, remove } = require ('firebase/database');

const firebaseConfig = {
  apiKey: "AIzaSyC5beAFDyJ3-AM_RmFxjO47Y83I_I-Iw78",
  authDomain: "library-db32c.firebaseapp.com",
  databaseURL: "https://library-db32c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "library-db32c",
  storageBucket: "library-db32c.appspot.com",
  messagingSenderId: "375977116060",
  appId: "1:375977116060:web:f455ddb7a2e67b9d46c859"
};

const app = initializeApp(firebaseConfig);

const dbRef = ref(getDatabase(app));

async function getData(path) {
  return await get(child(dbRef, path)).then(data => data.exists() ? data.val() : '');
}
  
async function setData(updates) {
  return await update(dbRef, updates).then(() => true);
}

async function removeData(path) {
  const databaseRef = ref(getDatabase(app), path);
  return await remove(databaseRef).then(() => true);
}

module.exports = { getData, setData, removeData };