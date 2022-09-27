//   async mock (promise): Usa un efecto de montaje para poder emitir 
//   un llamado asincrónico a un mock (objeto) estático de datos que devuelva 
//   un conjunto de item { id, title, description, price, pictureUrl } 
//   en dos segundos (setTimeout), para emular retrasos de red.


const data = [{
    categoria: "Techos y Revestimientos",
    intracategoria: "tablas",
    sku: "SP250B",
    denominacion: "Revestimiento Texturado 9mm espesor",
    title: "Blanco",
    descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
    price: 750.00,
    stock: 3695,
    img: "/assets/blanco-resize.jpg",
  }, {
    categoria: "Techos y Revestimientos",
    intracategoria: "tablas",
    sku: "SP250F",
    denominacion: "Revestimiento Texturado 9mm espesor",
    title: "Fresno",
    descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
    price: 900.00,
    stock: 4920,
    img: "/assets/fresno-resize.jpg"
  }, {
    categoria: "Techos y Revestimientos",
    intracategoria: "tablas",
    sku: "SP250H",
    denominacion: "Revestimiento Texturado 9mm espesor",
    title: "Haya",
    descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
    price: 900.00,
    stock: 8646,
    img: "https://tiendabennet.com.ar/wp-content/uploads/2022/03/Haya-resize-scaled.jpg"
  }, {
    categoria: "Techos y Revestimientos",
    intracategoria: "tablas",
    sku: "SP250N",
    denominacion: "Revestimiento Texturado 9mm espesor",
    title: "Nogal",
    descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
    price: 900.00,
    stock: 4115,
    img: "/assets/nogal-resize.jpg"
  }, {
    categoria: "Techos y Revestimientos",
    intracategoria: "tablas",
    sku: "SP250M",
    denominacion: "Revestimiento Texturado 9mm espesor",
    title: "Madera",
    descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
    price: 900.00,
    stock: 7376,
    img: "https://tiendabennet.com.ar/wp-content/uploads/2022/03/Madera-resize-300x169.jpg"
  }, {
    categoria: "Techos y Revestimientos",
    intracategoria: "tablas",
    sku: "SP250V",
    denominacion: "Revestimiento Texturado 9mm espesor",
    title: "Madera Vintage",
    descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
    price: 900.00,
    stock: 5957,
    img: "/assets/vintage-resize.jpg"
  }, {
    categoria: "Techos y Revestimientos",
    intracategoria: "tablas",
    sku: "SP250GM",
    denominacion: "Revestimiento Texturado 9mm espesor",
    title: "Gris Mina",
    descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
    price: 900.00,
    stock: 9789,
    img: "/assets/mina-resize.jpg"
  }, {
    categoria: "Techos y Revestimientos",
    intracategoria: "tablas",
    sku: "SP250G",
    denominacion: "Revestimiento Texturado 9mm espesor",
    title: "Grafito",
    descripcion:"Tabla Revestimiento PVC por 250mm de ancho. price por ml.",
    price: 900.00,
    stock: 8145,
    img: "/assets/grafito-resize.jpg"
  }];

export default function getItems() {
    return new Promise( (reslove, reject) => {
        setTimeout( () => {
            reslove(data);
        }, 1500);

    });
}  
  