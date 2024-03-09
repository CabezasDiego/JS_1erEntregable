//Devuelve lo de la session Storage de productos
const obtenerProductosSS =  () => {
    return JSON.parse(sessionStorage.getItem('productos') ?? '[]');
}

//Devuelve lo de la session Storage de productos
const cantProductos = async  () => {
    const prod = await obtenerProductosSS();
    return prod.length;

}

//Devuelve un nuevo ID para la creación de un nuevo producto
const nuevoID =  () => {
    const prod =   obtenerProductosSS();
    return prod.length+1;

}

//Devuelve lo de la session Storage de carrito
const obtenerCarritoSS =  () => {
    return JSON.parse(sessionStorage.carrito ?? '[]');
}


//Devuelve la cantida de items del carrito
const cantTotalItems = () => {
    const carrito = obtenerCarritoSS();
    return carrito.length;
}

//Devuelve la suma total de productoas agregados al carrito
const cantTotalProductos = async () => {
    const carrito = await obtenerCarritoSS();
    return carrito.reduce((acumulador, item) => acumulador + item.cantCompra, 0);
}

//Devuelve el precio total del carrito
const sumaTotalProductos = async () => {
    const carrito = await obtenerCarritoSS();
    return carrito.reduce((acumulador, item) => acumulador += item.precio * item.cantCompra, 0);
}

const confirmarCompra = async () => {
    Swal.fire({
        title: "Gracias por tu Compra!",
        text: "El total a pagar es $" + await sumaTotalProductos() + " pesos.",
        imageUrl: "../img/logo_OMAmuebles.png",
        imageWidth: 120,
        imageAlt: "Burger King",
        showCancelButton: true,
        confirmButtonColor: "#5cb85c",
        cancelButtonColor: "#d9534f",
        confirmButtonText: "Aceptar"
    }).then((result) => {
        if (result.isConfirmed) {
            // Verifica si existe algún dato en el sessionStorage
            actualizarStockxCompra();
        }
    }
    );
}

const actualizarStockxCompra = () => {
    // Obtener los datos de sessionStorage
    const carrito = JSON.parse(sessionStorage.getItem('carrito'));
    let productos = JSON.parse(sessionStorage.getItem('productos'));

    // Busco cada elemento de carrito y lo resto de productos por ID
    carrito.forEach(itemCarrito => {
        // Buscar el producto correspondiente en el array de productos por su ID
        const producto = productos.find(prod => prod.id === itemCarrito.id);

        // Verifico si se encontró el producto
        if (producto) {
            // Actualizo el stock del producto restando la cantidad del carrito
            producto.stock -= itemCarrito.cantCompra;
        }
    });

    // Guarda los cambios de productos en sessionStorage
    sessionStorage.setItem('productos', JSON.stringify(productos));
    eliminarCarrito();
}

//Elimino carrito de la sessionStorage para vaciarlo
const eliminarCarrito = () => {
    sessionStorage.removeItem("carrito");
    renderCarrito();
}
