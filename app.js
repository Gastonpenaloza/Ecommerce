
const contenido = $("#contenido");
const URLJSON = "datos.json";
let productos = [];
let carrito = [];
let productosFiltrados = [];
let pagina = "";
let totalCompra = 0;

//Animacion scroll a la barra de navegacion
$(window).scroll(function () {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 20);
});

//contenido del home
const home = `<div class="container-fluid" id="banner">
<nav class="navbar navbar-expand-lg navbar-light bg-transparent fixed-top">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active me-3" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle me-3" href="" id="navbarDropdown" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          Shop
        </a>
        <ul class="dropdown-menu" id="miId" aria-labelledby="navbarDropdown">
          <a href="#"><li class="dropdown-item" id="remeras">Remeras</li></a>
          <a href="#"><li class="dropdown-item" id="camisas">Camisas</li></a>
          <a href="#"><li class="dropdown-item" id="jeans">Jeans</li></a>
          <a href="#"><li class="dropdown-item" id="camperas">Camperas</li></a>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contacto" href="#">Contacto</a>
      </li>
    </ul>
  </div>
  <div class="position-relative">
    <button onclick="cart()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
      class="bi bi-cart me-3 position-absolute end-0 translate-middle" viewBox="0 0 16 16">
      <path
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg></button>
  </div>
</nav>
<div class="d-flex justify-content-center">
  <img src="Fotos/PUNISHER logo negro transp.png" alt="Logo Punisher" class="logo">
</div>
</div>
<div class="container">
<h2 class="subtitulos display-3 text-center">Nueva Coleccion</h2>
<p class="text-center">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non temporibus sit hic. Architecto quas mollitia iste
  tempore? Voluptatum deleniti alias adipisci nisi quibusdam enim quis saepe unde natus libero quas tempore eos ea
  perferendis repudiandae quidem earum, aliquid, sit a cupiditate dolore! Ullam sapiente cupiditate vero ex amet
  nemo</p>
<div class="slider">
  <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
        aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
        aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
        aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="Fotos/Jeanazul.jpg" class=" w-100" alt="Jean Azul">
      </div>
      <div class="carousel-item">
        <img src="Fotos/Remeramorrissey.jpg" class=" w-100" alt="Remera Morrissey">
      </div>
      <div class="carousel-item">
        <img src="Fotos/Camperajean.jpg" class=" w-100" alt="Campera Jean">
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
      data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</div>
</div>
<div class="cuotasbanner container-fluid">
<p class="cuotas text-light bg-dark text-center">6 cuotas sin Interés / Envios sin cargo a partir de $5000</p>
</div>`;



//carga del Home
$(document).ready(() => {
  $("#contenido").show(() => {
    $("#contenido").html(home)
  })
});





//Obtener valor al clickear pagina de productos
$(document).on("click", "li #remeras", () => {
  pagina = "Remeras";
  cargoProductos(pagina)
});
$(document).on("click", "li #camisas", () => {
  pagina = "Camisas";
  cargoProductos(pagina)
});
$(document).on("click", "li #jeans", () => {
  pagina = "Jeans";
  cargoProductos(pagina)
});
$(document).on("click", "li #camperas", () => {
  pagina = "Camperas";
  cargoProductos(pagina)
});



//Carcar pag de contacto en el Html
$(document).on("click", "li #contacto", () => {
  $("#contenido").html(`<nav class="navbar navbar-expand-lg navbar-light navbarshop fixed-top">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active me-3" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle me-3" href="" id="navbarDropdown" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          Shop
        </a>
        <ul class="dropdown-menu" id="miId" aria-labelledby="navbarDropdown">
        <a href="#"><li class="dropdown-item" id="remeras">Remeras</li></a>
        <a href="#"><li class="dropdown-item" id="camisas">Camisas</li></a>
        <a href="#"><li class="dropdown-item" id="jeans">Jeans</li></a>
        <a href="#"><li class="dropdown-item" id="camperas">Camperas</li></a>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contacto" href="#">Contacto</a>
      </li>
    </ul>
  </div>
  <div class="position-relative">
  <button onclick="cart()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
      class="bi bi-cart me-3 position-absolute end-0 translate-middle" viewBox="0 0 16 16">
      <path
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg></button>
  </div>
</nav><h2 class="subtitulos display-4 text-center"> Contacto </h2>
  <div class="container"><p class="display-6 text-center">THE PUNISHER</p>
  <p class="text-center">VIDAL 2375 - CP 1428</p>
  <p class="text-center">Buenos Aires, Argentina</p>
  <p class="text-center">Lunes a Domingos 10 a 19hs</p>
  <p class="text-center">Mail: <a class="text-dark" href="mailto:contacto@thepunisher.com">contacto@thepunisher.com</a></p></div>
  <div class="container mt-5 mb-5">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6866628014845!2d-58.46467414880346!3d-34.561488062676816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb5d55081a13f%3A0x431511e4afdc1b05!2sVidal%202375%2C%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1620078535938!5m2!1ses-419!2sar" width="100%" height="300px" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
  </div>`
  )
});




//Contenido en caso de error
const contenidoError = `<div class="text-center text-danger mt-5 mb-5">
    <h2 >No se pudo recuperar el contenido</h2>
    <h5>Intente nuevamente en unos segundos...</h5>
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
    <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
    </svg>
    </div>`;


//Función para cargar en el HTML la categoria de productos
let cargoProductos = (pagina) => {
  $.getJSON(URLJSON, (response, status) => {
    if (status === "success") {
      productos = response
      contenido.html(`<nav class="navbar navbar-expand-lg navbar-light navbarshop fixed-top">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active me-3" aria-current="page" href="index.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle me-3" href="" id="navbarDropdown" role="button"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    Shop
                  </a>
                  <ul class="dropdown-menu" id="miId" aria-labelledby="navbarDropdown">
                  <a href="#"><li class="dropdown-item" id="remeras">Remeras</li></a>
                  <a href="#"><li class="dropdown-item" id="camisas">Camisas</li></a>
                  <a href="#"><li class="dropdown-item" id="jeans">Jeans</li></a>
                  <a href="#"><li class="dropdown-item" id="camperas">Camperas</li></a>
                  </ul>
                </li>
                <li class="nav-item">
                  <a class="nav-link" id="contacto" href="#">Contacto</a>
                </li>
              </ul>
            </div>
            <div class="position-relative">
            <button onclick="cart()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
                class="bi bi-cart me-3 position-absolute end-0 translate-middle" viewBox="0 0 16 16">
                <path
                  d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg></button>
            </div>
          </nav><h2 class="subtitulos display-4 text-center"> ${pagina} </h2>
            <div class="container">
            <div id="listadoDeProductos" class="row">`)
      for (const producto of productos) {
        if (producto.categoria == pagina) {
          $("#listadoDeProductos").append(`<div class="col-xl-4 col-md-6 col-sm-12">
            <div class="card text-center mt-4" style="width: 20rem;">
  <img src=${producto.imagen} class="card-img-top imgcard" alt=${producto.nombre}>
  <div class="card-body">
    <h5 class="card-title">${producto.nombre}</h5>
    <p class="card-text">Precio: $${producto.precio}</p>
    <a class="btn btn-outline-secondary btn-sm" id="${producto.id}" >AGREGAR</a>
  </div>
</div></div>`);
        }
      }
      contenido.append(`</div></div>
            <div class="container">
                    <div class="text-center">
                    <button type="button" class="btnvercarrito btn btn-outline-dark btn-lg" id="verCarrito">VER CARRITO</button>
                    </div>`)
    }
    else { contenido.html(contenidoError) }
  })
  $('html, body').animate({ scrollTop: 0 });
};


//Evento para boton agregar carrito
$(document).on("click", "a.btn ", () => {
  compra(this.event.target.id)
});

//Funcion para agregar productos al carrito y generar tabla carrito
function compra(id) {
  let eleccion = productos.find(c => c.id == id);
  carrito.push(eleccion);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  $("#productoAgregado").modal(`show`);
};

//Funcion para amar HTML carrito de compra
function cart() {
  totalCompra = 0;
  if (localStorage.getItem("carrito") != null){
  carrito = JSON.parse(localStorage.getItem("carrito"));}
  $("#contenido").html(`<nav class="navbar navbar-expand-lg navbar-light navbarshop fixed-top">
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
        <a class="nav-link active me-3" aria-current="page" href="index.html">Home</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle me-3" href="" id="navbarDropdown" role="button"
          data-bs-toggle="dropdown" aria-expanded="false">
          Shop
        </a>
        <ul class="dropdown-menu" id="miId" aria-labelledby="navbarDropdown">
        <a href="#"><li class="dropdown-item" id="remeras">Remeras</li></a>
        <a href="#"><li class="dropdown-item" id="camisas">Camisas</li></a>
        <a href="#"><li class="dropdown-item" id="jeans">Jeans</li></a>
        <a href="#"><li class="dropdown-item" id="camperas">Camperas</li></a>
        </ul>
      </li>
      <li class="nav-item">
        <a class="nav-link" id="contacto" href="#">Contacto</a>
      </li>
    </ul>
  </div>
  <div class="position-relative">
  <button onclick="cart()"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
      class="bi bi-cart me-3 position-absolute end-0 translate-middle" viewBox="0 0 16 16">
      <path
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
    </svg></button>
  </div>
</nav><h2 class="subtitulos display-4 text-center">Carrito de Productos</h2>
  <div class="container"><div class="row justify-content-center"><table class="table table-bordered border-dark align-middle"><thead class="table-dark"><tr class="text-center"><th>Producto</th><th>Descripcion</th><th>Cantidad</th><th>Precio</th></tr></thead>
  <tbody id="tablaCompra"></tbody></table></div></div>
  <div class="container" id="botones"></div>`);
  for (const producto of carrito) {
    totalCompra = totalCompra + producto.precio;
    $("#tablaCompra").append(`<tr><td class="text-center"><img src=${producto.imagen} class="fotostabla" alt=${producto.nombre}></td><td>${producto.nombre}</td><td class="text-end">1</td><td class="text-end">$${producto.precio}</td></tr>`);
  }
  $("#tablaCompra").append(`<tr class="table-dark"><td colspan=3 class="text-center">TOTAL</td><td class="text-end">$${totalCompra}</td></tr>`)
  $("#botones").append(`<div class="container">
                    <div class="text-center">
                    <button type="button" class="botonpagar btn btn-outline-dark btn-lg">PAGAR</button>
                    </div>
                    <div class="text-center">
                    <button type="button" class="botonvaciar btn btn-outline-dark btn-md" id="vaciaCarrito">VACIAR CARRITO</button>
                    </div>
                    </div>`);
  
  $('html, body').animate({ scrollTop: 0 });
}

//Evento para boton Ver Carrito
$(document).on("click", "#verCarrito", () => {
  cart()
});


//Evento para boton Vaciar Carrito
$(document).on("click", "#vaciaCarrito", () => {
  carrito = [];
  localStorage.clear();
  totalCompra = 0;
  $("#tablaCompra").html(`<tr class="table-dark"><td colspan=3 class="text-center">TOTAL</td><td class="text-end">$${totalCompra}</td></tr>`)
  $("html, body").animate({ scrollTop: "0" });
}
);

