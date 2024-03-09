renderProductos();

// Función asíncrona para renderizar los productos
async function renderProductos() {
    // Verifica si sessionStorage está vacío o no
    if (cantProductos() == 0) {
        // Si está vacío, carga los datos desde el archivo JSON usando fetch
        fetch('./js/productos.json')
            .then(respuesta => respuesta.json())
            .then(listaProductos => {
                // Guarda los datos en sessionStorage
                sessionStorage.setItem('productos', JSON.stringify(listaProductos));
            })
            .catch(error => { alert("ERROR al cargar el dato") });
    }

    // Espera a que los productos se carguen desde sessionStorage
    listaProductos = await obtenerProductosSS();

    //Creo elemento para luego sumarlo al html  
    let elemento = "";

    // Crea elementos HTML para cada producto en la lista
    listaProductos.forEach((prod, index) => {
        let v;

        if (prod.stock > 0) {
            v = `<div class="comprar-container">            
            <button type="button" class="btn btn-success btn-comprar" onclick="mostrarPopUp(this, ${index})">Comprar</button>

                           
            </div>
        </div>`;

        } else {
            v = `<button type="button" class="btn btn-secondary" disabled>Sin Stock</button>`;
        }

        elemento += `<div class="col-md-3">
                <div class="card text-center border-0">
                    <img src="${prod.dirImagen}" class="card-img-top my-5" alt="${prod.nombre}"> 
                    <div class="card-body"> 
                        <h5 class="card-title">${prod.nombre}</h5> 
                        <p class="card-text">${prod.descripcion}</p> 
                        <p><b>$${prod.precio}</b></p> 
                        ${v}
                    </div>
                </div>
            </div>`;
    });

    // Agrega los elementos HTML al nodoProductos en el documento
    document.getElementById("nodoProductos").innerHTML = elemento;
}

// Función asíncrona para cargar los productos desde sessionStorage
async function cargarProductos() {
    listaProductos = JSON.parse(sessionStorage.productos);
}



function mostrarPopUp(btn, index) {
    let prod = listaProductos[index];
    // Mostrar el popup con los datos del producto
    document.getElementById("popup").innerHTML = `
        <div class="card-popup">
            <img src="${prod.dirImagen}" class="card-img-top-popup" alt="Imagen de producto">
            <div class="card-body-popup">
                <h5 class="card-title">${prod.nombre}</h5>
                <p class="card-text">${prod.descripcion}</p>
                <button class="btn btn-secondary" onclick="cerrarPopup()">Cancelar</button>
                <button class="btn btn-primary" onclick="sumarProdCarrito(${index})">Confirmar</button>
                <input type="number" id="cantidad-popup" name="cantidad" min="1" max=${prod.stock} value="1">
            </div>
        </div>`;
    // Ocultar el botón "Comprar"
    btn.style.display = "none";
}

function cerrarPopup() {
    // Ocultar el popup
    document.getElementById("popup").innerHTML = "";
    // Muestra todos los botones "Comprar" nuevamente
    let botonesComprar = document.querySelectorAll(".btn-comprar");
    botonesComprar.forEach(boton => {
        boton.style.display = "block";
    });
}

function sumarProdCarrito(index) {

    // Obtengo la cantidad seleccionada
    let cantidad = parseInt(document.getElementById("cantidad-popup").value);
    cerrarPopup();
    // Obtengo el producto actual usando el índice proporcionado
    let aux = listaProductos[index];

    // Crea un objeto que represente el producto actual con la cantidad seleccionada
    let productoActual = {
        id: aux.id,
        nombre: aux.nombre,
        cantCompra: cantidad,
        precio: aux.precio,
        dirImagen: aux.dirImagen,
    };

    // Obtengo la lista de productos del carrito del sessionStorage
    let carrito = JSON.parse(sessionStorage.getItem('carrito'));

    // Busca el índice del producto actual en el carrito
    let productoExistenteIndex = carrito.findIndex(producto => producto.id === productoActual.id);

    if (productoExistenteIndex !== -1) {
        // Si el producto ya existe en el carrito, actualizar su cantidad
        carrito[productoExistenteIndex].cantCompra = cantidad;

        //Muestro mensaje de que se actualizó la cantidad en el carrito
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Actualizamos con exito la cantidad a comprar!",
            showConfirmButton: false,
            timer: 1500
        });
    } else {
        // Si el producto no existe en el carrito, agregarlo a la lista de productos del carrito
        carrito.push(productoActual);

        //Muestro mensaje de sumado al carrito OK
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Fue sumado al carrito con exito!",
            showConfirmButton: false,
            timer: 1500
        });
    }

    // Guarda la lista actualizada de productos del carrito en sessionStorage
    sessionStorage.setItem('carrito', JSON.stringify(carrito));


}



