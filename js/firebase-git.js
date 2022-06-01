/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyCVQJzDL4r9IUq_iHh-LfBuJ7_KPB0ePXY",
  authDomain: "projeto-final-9ae7e.firebaseapp.com",
  databaseURL: "https://projeto-final-9ae7e-default-rtdb.firebaseio.com",
  projectId: "projeto-final-9ae7e",
  storageBucket: "projeto-final-9ae7e.appspot.com",
  messagingSenderId: "889204451053",
  appId: "1:889204451053:web:bc85b59fe9ea0167050ee4",
  measurementId: "G-BE7FQP1WJL"
};

/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
