
const listadoDeProductos = $("#listadoDeProductos");
const tablaCompra = $("#tablaCompra");
const tituloCarrito = $("#tituloCarrito");

class Productos{
    constructor(id, nombre, imagen, precio, stock){
        this.id=id;
        this.nombre=nombre;
        this.imagen=imagen;
        this.precio=precio;
        this.stock=stock;
    }
    venta(){
        this.stock=this.stock-1;
    }
}

const productos = [];

productos.push(new Productos(1, "Remera lisa", "Fotos/Remerablanca.jpg", 800, 25));
productos.push(new Productos(2, "Remera Morrissey", "Fotos/Remeramorrissey.jpg", 1200, 15));
productos.push(new Productos(3, "Jean azul", "Fotos/Jeanazul.jpg", 3500, 30));
productos.push(new Productos(4, "Jean negro", "Fotos/Jeannegro.jpg", 3500, 30));
productos.push(new Productos(5, "Campera Jean", "Fotos/Camperajean.jpg", 7000, 10));


//función para cargar en el HTML los productos
let cargoProductos = () => { 
    listadoDeProductos.append(`<h2 class="subtitulo display-4 text-center">Elige tus productos</h2>`);

    for (let producto of productos) {
        listadoDeProductos.append(`<div class="col-md-4 col-sm-6">
            <img src=${producto.imagen} class="foto img-thumbnail" alt=${producto.nombre}>
            <p>${producto.nombre} - Precio $${producto.precio}</p>
            <button type="button" class="btn btn-outline-secondary btn-sm" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onclick="compra(${producto.id})">AGREGAR</button>
            </div>`);
    }
   
}





//Funcion para chequear si hay info en localStorage 
function chequearLS(){
    let productos;
    if (localStorage.getItem("carrito")===null){
        productos = [];
    } 
    else { 
        productos = JSON.parse(localStorage.getItem("carrito"))
    }
    return productos;
}

//Funcion para agregar productos
function compra(id) {
    let r = productos.find(c => c.id == id);
    if (r.stock > 0){
        let productos;
        productos = chequearLS();
        productos.push(r);
        localStorage.setItem("carrito",JSON.stringify(productos));
        
    } else alert("No hay stock");
};

//Funcion para finalizar comprar y generar tabla
const finalizarCompra = () => {
    tituloCarrito.html("");
    tablaCompra.html("");
    let productos = [];
    let totalCompra = 0;
    productos = chequearLS();
    tituloCarrito.prepend(`<h2 class="subtitulo display-4 text-center">Carrito de Productos</h2>`);
    tablaCompra.append(`<thead><tr><th>Cantidad</th><th>Producto</th><th>Precio</th></tr></thead>`);
    for (const producto of productos){
        totalCompra = totalCompra + producto.precio;
        tablaCompra.append(`<tr><td>1</td><td>${producto.nombre}</td><td>$${producto.precio}</td></tr>`);
    }
    tablaCompra.append(`<tr><td colspan=2>TOTAL</td><td>$${totalCompra}</td></tr>`);
    
};


//Evento para boton Finalizar compra
$("#finalizaCompra").on("click", () => finalizarCompra());


//Evento para boton Vaciar Carrito
$("#vaciaCarrito").on("click", () => {localStorage.clear();
    finalizarCompra()});

//Expresion IF para cargar tabla si hay productos en localStorage
if (localStorage.getItem("carrito")===null){
} 
else {finalizarCompra()};

//Cargo los productos en el html
$(document).ready(cargoProductos());
