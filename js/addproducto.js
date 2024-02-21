//Obtengo el listado de productos
const listaProductos=JSON.parse(sessionStorage.productos);

//Muestra el número de ID que se va a cargar
let nodo = document.getElementById("numID");
    let elemento = document.createElement("div");
    elemento.className = 'input-group input-group-sm mb-3';
    elemento.innerHTML = `<span class="input-group-text" id="basic-addon1">ID: ${obtenerMaxID()+1}</span>`
    nodo.appendChild(elemento);

//Se crea una clase producto para luego sumarlo al array de prodcutos
class unProducto {
    constructor(id, nombre, descripcion, stock, precio, dirImagen) {
        this.id = parseInt(id);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
        this.dirImagen = dirImagen;
    }
}

//La función devuelve el último ID de los productos
function obtenerMaxID() {
    return listaProductos.length;

}

//La función agrega un producto al listado de productos. Y en ID es correlativo
function agregarProducto() {
    let prod = new unProducto(obtenerMaxID()+1,document.getElementById("inputNombre").value,document.getElementById("inputDescripcion").value,document.getElementById("inputStock").value,document.getElementById("inputPrecio").value,document.getElementById("inputUrl").value);
    listaProductos.push(prod);
    sessionStorage.setItem('productos', JSON.stringify(listaProductos));
    location. reload()

}