// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc} from 'firebase/firestore'

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
    const miColeccion = collection(firestore, 'bennethome')
    let snapShotDB = await getDocs(miColeccion) // captura del estado de la base de datos
    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        console.log(docFormateado)
        return docFormateado
    })
    return dataDocs
}

export async function getSingleItem(idParams){
    const docRef = doc(firestore, 'bennethome', idParams) // referencia al un documento
    const docSnapshot = await getDoc(docRef)

    return {...docSnapshot.data(), id:docSnapshot.id}
}

export async function getItemsByCategory(catParams) {
    const collectionRef = collection(firestore, 'bennethome')
    const queryCategory = query(collectionRef, where('categoria', '==', catParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

export async function getItemsByType(typeParams) {
    const collectionRef = collection(firestore, 'bennethome')
    const queryCategory = query(collectionRef, where('intracategoria', '==', typeParams))
    const snapShotDB = await getDocs(queryCategory)

    let dataDocs = snapShotDB.docs.map((doc) => {
        let docFormateado = {...doc.data(), id: doc.id}
        return docFormateado
    })
    return dataDocs
}

{/*firebase II*/}
export async function createBuyOrder(orderData){
    const collectionRef = collection(firestore, "orders")
    let respuesta = await addDoc(collectionRef, orderData)
    return respuesta.id
}

export async function exportDataToFirestore(){
    const data = [{
        id: 1,
        categoria: "Revestimientos",
        intracategoria: "tablas",
        sku: "SP250B", 
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Blanco",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 750.00,
        stock: 3695,
        img: "/assets/blanco-resize.jpg",
      }, {
        id: 2,
        categoria: "Revestimientos",
        intracategoria: "tablas",
        sku: "SP250F",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Fresno",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 4920,
        img: "/assets/fresno-resize.jpg"
      }, {
        id:3,
        categoria: "Revestimientos",
        intracategoria: "tablas",
        sku: "SP250H",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Haya",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 8646,
        img: "https://tiendabennet.com.ar/wp-content/uploads/2022/03/Haya-resize-scaled.jpg"
      }, {
        id:4,
        categoria: "Revestimientos",
        intracategoria: "tablas",
        sku: "SP250N",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Nogal",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 4115,
        img: "/assets/nogal-resize.jpg"
      }, {
        id:5,
        categoria: "Revestimientos",
        intracategoria: "tablas",
        sku: "SP250M",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Madera",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 7376,
        img: "https://tiendabennet.com.ar/wp-content/uploads/2022/03/Madera-resize-300x169.jpg"
      }, {
        id:6,
        categoria: "Revestimientos",
        intracategoria: "tablas",
        sku: "SP250V",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Madera Vintage",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 5957,
        img: "/assets/vintage-resize.jpg"
      }, {
        id:7,
        categoria: "Revestimientos",
        intracategoria: "tablas",
        sku: "SP250GM",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Gris Mina",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 9789,
        img: "/assets/mina-resize.jpg"
      }, {
        id:8,
        categoria: "Revestimientos",
        intracategoria: "tablas",
        sku: "SP250G",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Grafito",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 8145,
        img: "/assets/grafito-resize.jpg"
      },{
        id:9,
        categoria: "Aberturas",
        intracategoria: "tablas",
        sku: "SP250G",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Grafito",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 8145,
        img: "/assets/grafito-resize.jpg"
      },  {
        id:10,
        categoria: "WPC",
        intracategoria: "tablas",
        sku: "SP250G",
        denominacion: "Revestimiento Texturado 9mm espesor",
        title: "Grafito",
        descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
        price: 900.00,
        stock: 8145,
        img: "/assets/grafito-resize.jpg"
      }
    
    
    
    ];

    const collectionRef = collection(firestore, 'bennethome')
    for (let item of data){
        const newDoc = await addDoc(collectionRef, item)
        console.log('Doc created', newDoc.id)
    }

}
export default firestore