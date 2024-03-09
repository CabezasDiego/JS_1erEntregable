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

//Obtengo el listado de productos
let listaProductos = obtenerProductosSS();

//Muestra el número de ID que se va a cargar
let nodo = document.getElementById("numID");
let elemento = document.createElement("div");
let nID = (nuevoID());

//creo una función asynca para mostrar correctamente el nuevo ID
elemento.className = 'input-group input-group-sm mb-3';
elemento.innerHTML = `<span class="input-group-text new-id">ID nuevo: ${nID}</span>`;
nodo.appendChild(elemento);



//La función agrega un producto al listado de productos, con le nuevo ID obteniendo los datos del formulario
function agregarProducto() {


    const nombre = document.getElementById('inputNombre').value.trim();
    const descripcion = document.getElementById('inputDescripcion').value.trim();
    const urlImagen = document.getElementById('inputUrl').value.trim();
    const stock = document.getElementById('inputStock').value.trim();
    const precio = document.getElementById('inputPrecio').value.trim();
    // Verificar si todos los campos están completos
    if (nombre === '' || descripcion === '' || urlImagen === '' || stock === '' || precio === '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Es necesario completar todos los campos!",
        });
    } else {
        //si están completos creo un nuevo producto con los valores y lo sumo al array y luego se guarda en la sessionStorage
        let prod = new unProducto(nID, nombre, descripcion, stock, precio, urlImagen);
        listaProductos.push(prod);
        guardaProductosSS = (listaProductos);
        location.reload();;
    }

}
