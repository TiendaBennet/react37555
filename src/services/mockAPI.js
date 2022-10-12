//   async mock (promise): Usa un efecto de montaje para poder emitir 
//   un llamado asincrónico a un mock (objeto) estático de datos que devuelva 
//   un conjunto de item { id, title, description, price, pictureUrl } 
//   en dos segundos (setTimeout), para emular retrasos de red.


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

export default function getItems() {
    return new Promise( (reslove, reject) => {
        setTimeout( () => {
            reslove(data);
        }, 1500);

    });
}  


export function getItemsByCategory(cat) { //le creo una nueva funcion 
  return new Promise( (reslove, reject) => {
        let itemFind = data.filter((item) => { 
          return item.categoria === cat;
        });
        setTimeout( () => {
 
        if (itemFind) reslove (itemFind);
        else reject (new Error("item no encontrado"));
          //reslove(data[1]); //de todo el array que me traiga el primero 
      }, 1500);

  });
} 



                          //(idItem)
export function getSingleItem(idItem) { //le creo una nueva funcion 
  return new Promise( (reslove, reject) => {
        let itemFind = data.find((item) => { 
          return item.id === (idItem);
        });
        setTimeout( () => {
 
        if (itemFind) reslove (itemFind);
        else reject (new Error("item no encontrado"));
          //reslove(data[1]); //de todo el array que me traiga el primero 
      }, 1500);

  });
} 

export function getItemsByType(type){
  return new Promise((resolve, reject) => {
      let itemFind = data.filter((item) => {
          return item.tipo === type
      })
      setTimeout(() => {
          if (itemFind) { 
              resolve(itemFind)
          } else {
              reject(new Error("Item no encontrado"))
          }
      }, 1500)
  })
}

// utilizar metodo find para buscar en este array el item en base al id que sera lo 
// que se busque en el navegador

//export function getSingleItem( idItem) { //funcion para recibir el item por id
 // return new Promise( (reslove, reject) => {
//      setTimeout( () => {
 //       let itemFind = data.find( item => item.id === idItem ) //encontrar en el array, por cada 
        //item que haya que cumpla con la siguiente condicion => "item.id === idItem" , es decir lo
        // que se busque igual al cual identifico. Me guarda el item con let itemFind.
        
 //       if(itemFind)
//          reslove (itemFind); //resolvemos lo anterior.
//        else
//          reject(new Error("item no encontrado"))
//      }, 1500);

//  });
//} 