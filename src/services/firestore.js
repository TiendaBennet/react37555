// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
//si es una APP posta, esta data es sensible, debe ocultarse. 
const firebaseConfig = {
  apiKey: "AIzaSyDju869wlYsh_XwJd3CtOY6jz8P2_Hn46c",
  authDomain: "bennethome-53681.firebaseapp.com",
  projectId: "bennethome-53681",
  storageBucket: "bennethome-53681.appspot.com",
  messagingSenderId: "272315733833",
  appId: "1:272315733833:web:ffe9fb30457accde712c98"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)  //conexión a base de datos 
export async function getItems(){
    const miColeccion = collection(firestore, 'tiendabennet')
    let snapShotDB = await getDocs(miColeccion) // captura del estado de la base de datos
    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        console.log(docFormateado)
        return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef = doc(firestore, 'tiendabennet', idParams) // referencia al un documento
    const docSnapshot = await getDoc(docRef)

    return {...docSnapshot.data(), id:docSnapshot.id}
}

export async function getItemsByCategory(catParams) {
    const collectionRef = collection(firestore, 'tiendabennet')
    const queryCategory = query(collectionRef, where('categoria', '==', catParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getItemsByType(typeParams) {
    const collectionRef = collection(firestore, 'tiendabennet')
    const queryCategory = query(collectionRef, where('intracategoria', '==', typeParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export default firestore