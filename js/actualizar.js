//Se crea una clase producto para luego crear un objeto actualizado y sumarlo al array
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
let listaProductos = JSON.parse(sessionStorage.productos);

//Cambia el estado disabled del botón según el valor del campo
function estadoBoton() {
    let valor = document.getElementById("valorBuscar").value;
    if (valor > 0) {
        document.getElementById("botonBuscar").disabled = false;
    } else {
        document.getElementById("botonBuscar").disabled = true;
    }
}

//Toma el valor del ID ingresado y muestra el producto
//Se tiene la posibilidad de cambiar los valores del producto, y con el botón acutalizar
//se elimina el producto y se agreaga nuevamente al array con los valores actuales.
function buscarID() {

    let ID = parseInt(document.getElementById("valorBuscar").value);
    let prod = listaProductos.find((p) => p.id == ID);

    //si encuentra el producto muestra el resultado
    if (prod != null) {
        renderProd(prod);
        sessionStorage.setItem("id", ID);
        let btn = document.createElement("div");
        btn.className = 'd-grid justify-content-end';
        btn.innerHTML = `<button type="button" class="btn btn-primary" onclick="actProd()">Actualizar</button>`;
        let nodoBtn = document.getElementById("muestraResultado");
        nodoBtn.appendChild(btn);
    }
    else{
        document.getElementById("muestraResultado").innerHTML=``;
        Swal.fire({
            position: "center",
            icon: "error",
            title: `No se encontró producto con el ID ${ID}`,
            showConfirmButton: false,
            timer: 2000
        });
    }
};

//Arma la vista con los datos del prod encontrado
function renderProd(prod) {
    //obtengo el nodo
    let nodo = document.getElementById("muestraResultado");
    //borro su contenido
    nodo.innerHTML = '';

    //Creo un div para la imagen
    let imagen = document.createElement("div");
    imagen.className = 'col-md-3 align-items-center';
    imagen.innerHTML = `<div class="text-center border-0" > 
    <img src = "${prod.dirImagen}" class="card-img-top my-5" alt = "${prod.nombre}" >`
    //Creo un div para mostrar los datos del producto
    let datos = document.createElement("div");
    datos.className = 'row align-items-center justify-content-center';
    datos.innerHTML = `<div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">Nombre</span>
        <input type="text" class="form-control" id="inputNombre" value="${prod.nombre}">
      </div>
      <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Descripción</span>
  <input type="text" class="form-control" id="inputDescripcion" value="${prod.descripcion}">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Stock</span>
  <input type="number" class="form-control" id="inputStock" value="${prod.stock}">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Precio $</span>
  <input type="number" class="form-control" id="inputPrecio" value="${prod.precio}">
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">URL imagen</span>
  <input type="text" class="form-control" id="inputUrl" value="${prod.dirImagen}">
</div>`;
    //actualizo ambos nodos con los datos creados
    nodo.appendChild(imagen);
    nodo.appendChild(datos);
}

//El  boton actualizar llama a la función que crea una nueva lista de productos filtrada
//y vuelve a sumar el producto con los nuevos valores obtenidos de los campos
function actProd() {
    //Obtengo los produsctos de la sessionstorage
    let listaProductos = obtenerProductosSS();
    //creo un producto con los nuevos valores
    const elProducto = new unProducto(parseInt(sessionStorage.id), document.getElementById("inputNombre").value, document.getElementById("inputDescripcion").value,
        document.getElementById("inputStock").value, document.getElementById("inputPrecio").value, document.getElementById("inputUrl").value);

    //Hago una copia de la lista sin le producto a modificar
    const listaProductosNueva = listaProductos.filter(prod => prod.id != elProducto.id);
    //Ingreso al array el procucto actualizado
    listaProductosNueva.push(elProducto);
    //Guardo el array en al sessionStorage
    guardaProductosSS(listaProductosNueva);

    // Muestra el prod actualizado
    renderProd(elProducto);

    //Mensaje de confirmación 
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Los datos fueron actualizados",
        showConfirmButton: false,
        timer: 1500
    });
    document.getElementById("muestraResultado").innerHTML=``;
}

