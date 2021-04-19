
const listadoDeProductos = $("#listadoDeProductos");
const tablaCompra = $("#tablaCompra");
const tituloCarrito = $("#tituloCarrito");
const botones = $("#botones");
const URLJSON = "datos.json";
let productos = [];
let carrito = [];

//carga del Html y busqueda de productos en el JSON
$(document).ready(()=> {
    $("#listadoDeProductos").show(()=> {
        $.getJSON(URLJSON, (response, status)=> {
            if (status === "success") {
                let contenido = response
                    productos = contenido
                    listadoDeProductos.append(`<h2 class="subtitulo display-4 text-center">Elige tus productos</h2>`);
                    for (const producto of contenido) {
                        $("#listadoDeProductos").append(cargoProductos(producto))
                    }
            } else {
                $("#listadoDeProductos").html(contenidoError);
            }
        })
    })
})

//Contenido en caso de error
const contenidoError = `<div class="text-center text-danger mt-5 mb-5">
    <h2 >No se pudo recuperar el contenido</h2>
    <h5>Intente nuevamente en unos segundos...</h5>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
    </svg>
    </div>`;


//Función para cargar en el HTML los productos
let cargoProductos = (producto) => { 
    listadoDeProductos.append(`<div class="col-md-4 col-sm-6">
        <img src=${producto.imagen} class="foto img-thumbnail" alt=${producto.nombre}>
        <p>${producto.nombre} - Precio $${producto.precio}</p>
        <button type="button" class="btn btn-outline-secondary btn-sm" id="btnAgregarCarrito" onclick="compra(${producto.id})">AGREGAR</button>
        </div>`);
}

//Funcion para agregar productos al carrito y generar tabla carrito
function compra(id) {
    let r = productos.find(c => c.id == id);
    carrito.push(r);
    $("#productoAgregado").modal(`show`);
    tituloCarrito.html("");
    tablaCompra.html("");
    botones.html("");
    let totalCompra = 0;
    tituloCarrito.prepend(`<h2 class="subtitulo display-4 text-center">Carrito de Productos</h2>`);
    tablaCompra.append(`<thead class="table-dark"><tr><th>Producto</th><th>Descripcion</th><th>Cantidad</th><th>Precio</th></tr></thead>`);
    for (const producto of carrito){
        totalCompra = totalCompra + producto.precio;
        tablaCompra.append(`<tr><td><img src=${producto.imagen} class="fotostabla" alt=${producto.nombre}></td><td>${producto.nombre}</td><td>1</td><td>$${producto.precio}</td></tr>`);
    }
    tablaCompra.append(`<tr><td colspan=3>TOTAL</td><td>$${totalCompra}</td></tr>`)
    botones.append(`<div class="container">
                    <div class="text-center">
                    <button type="button" class="botonpagar btn btn-outline-dark btn-lg">PAGAR</button>
                    </div>
                    <div class="text-center">
                    <button type="button" class="botonvaciar btn btn-outline-dark btn-md" id="vaciaCarrito">VACIAR CARRITO</button>
                    </div>
                    </div>`);
    
};

//Evento para boton Vaciar Carrito
$(document).on("click","#vaciaCarrito",()=>{
    carrito = [];
    tituloCarrito.html("");
    tablaCompra.html("")
    botones.html("");
    $("html, body").animate({scrollTop: "0"});}
)

