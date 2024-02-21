
//genero el listado de productos de ejemplo.
const listaInicial = [{
    id: 1,
    nombre: "Matera",
    descripcion: "Materas diferentes tapizados a elección",
    stock: 10,
    precio: 70900,
    dirImagen: "https://http2.mlstatic.com/D_NQ_NP_849414-MLA54944952815_042023-O.webp"
}, {
    id: 2,
    nombre: "Silla de comedor",
    descripcion: "Las sillas con asientos acolchados aportan en gran medida ese bienestar que buscamos.",
    stock: 0,
    precio: 25000,
    dirImagen: "https://http2.mlstatic.com/D_NQ_NP_2X_746088-MLU73205227385_122023-F.webp"
}];

//Guardo los productos de ejemplo en la localStorage
localStorage.setItem('productos', JSON.stringify(listaInicial));

//Creo una lista de productos total de la web
let listaProductos = []



//Verifico si la sessionStorage está vacía para cargar los datos de ejemplo de la localStorage, en caso que no esté vacía traigo lo de sessionStorage.
//Esto lo hice porque al cargar los datos de ejemplo, me pisaba los datos al volver al index luego de cargar un producto
if(sessionStorage.productos == null){
    listaProductos=JSON.parse(localStorage.productos);
    sessionStorage.setItem('productos', JSON.stringify(listaProductos));
}else{
    listaProductos=JSON.parse(sessionStorage.productos);
}

//Traigo el nodo donde se van a cargar los productos en HTML
let nodoProductos = document.getElementById("nodoProductos");

//recorro la lista de productos para mostrarlos en la web
for (const prod of listaProductos) {
    
    let v;
    let elemento = document.createElement("div");

    //Acá verifico si hay stock, para tener el boton habilitado o no
    if(prod.stock>0){
        v=`<button type="button" class="btn btn-success  ">Comprar</div></div >`;
        }else{
            v=`<button type="button" class="btn btn-secondary" disabled>Sin Stock</div></div >`
        };
    elemento.className = 'col-md-3';
    elemento.innerHTML = `<div class="card text-center border-0" > 
    <img src = "${prod.dirImagen}" class="card-img-top my-5" alt = "${prod.nombre}" > 
    <div class="card-body"> 
    <h5 class="card-title">${prod.nombre}</h5> 
    <p class="card-text">${prod.descripcion}</p> 
    <p><b>$${prod.precio}</b></p> 
    `+v;
    
    
    nodoProductos.appendChild(elemento);
}