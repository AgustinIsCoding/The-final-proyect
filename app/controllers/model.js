// requerir el paquete de Firebase desde el server
const admin = require('firebase-admin');

//esta es nuestra app que conecta nuestras app con nuestra base de datos
const app = require('./../../firebase/firebase.config.js')

// esta linea me permite guardar mi usuario en firebase
const{
  getFirestore
} = require('firebase-admin/firestore');

// esta linea le indicamos a nuestro programa que se conecte a la base de datos
const db = getFirestore(admin.apps[app]);

module.exports = db;