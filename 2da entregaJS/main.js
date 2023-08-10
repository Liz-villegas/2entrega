const productos = [
    { nombre:"toma corriente", precio: 800},
    { nombre:"cable", precio: 1000},
    { nombre:"cargador", precio: 1200},
    { nombre:"cinta aisladora", precio: 500},
    { nombre:"diluyente", precio: 900},
];
let carrito = []

let seleccion = prompt ("Hola desea comprar algub producto si o no")
while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt ("Hola desea comprar algo? si o no")
}

if (seleccion == "si") {
    alert ( "a continuacion nuestra lista de productos")
    let todosLosProductos = productos.map(
        (producto)=> producto.nombre + " "+ producto.precio + "$"
         );
    alert(todosLosProductos.join(" - "))  
} else if (seleccion == "no"){
    alert ("gracias por venir, hasta pronto!!")
}
while (seleccion != "no"){
    let producto = prompt ("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "toma corriente" || producto == "cable" || producto == "cargador" || producto == "cinta aisladora" || producto == "diluyente" ){
       switch (producto){
        case "toma corriente":
            precio = 800;
         break;
         case "cable":
            precio = 1000;
         break;
         case "cargador":
            precio = 1200;
         break;
         case "cinta aisladora":
            precio = 500;
         break;
         case "diluyente":
            precio = 900;
         break;
         default:
            break;
       } 
    let unidades = parseInt (prompt( "cuantas unidades necesita"))
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
      alert(" no tenemos ese producto")
    }
    seleccion = prompt (" desea seguir comprando?")
    while(seleccion === "no"){
        alert("gracias por la compra, hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
     }
}

 const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
console.log(` el total a pagar es: ${total}`);

if (seleccion === "no") {
    alert("gracias por la compra, hasta pronto");
    carrito.forEach((carritoFinal) => {
        console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`);
    });
}
