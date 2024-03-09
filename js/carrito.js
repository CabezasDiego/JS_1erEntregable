


renderCarrito();

async function renderCarrito() {
  // Verifica si el carrito tiene items
  if (cantTotalItems() == 0) {

    //Avisa que el carrito esta vacío
    document.getElementById("web-carrito").innerHTML = `<div class="row">
    <div class="col-md-6 offset-md-3">
        <div class="container-message">
            <h1>Carrito Vacío</h1>
            <p>¡Tu carrito de compras está vacío!</p>
        </div>
    </div>
</div>`;

  } else {
    //si no está vacio muestro los productos del carrito
    let listaCarrito = await obtenerCarritoSS();
    let elemento = "";
    let item = 0;
    //creo un elemento que contendrá la tabla con los datos del carrito
    elemento = `<table class="table table-sm">
    <thead>
      <tr>
        <th scope="col">ítem</th>
        <th scope="col">Código</th>
        <th scope="col"></th>
        <th scope="col">Nombre</th>
        <th scope="col">Cantidad</th>
        <th scope="col">Precio</th>
        <th scope="col">subtotal</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">`;

    // Crea elementos HTML para cada producto en la lista
    listaCarrito.forEach((prod, index) => {
      item++;
      elemento += `<tr>
      <th scope="row" class="align-middle">${item}</th>
      <td class="align-middle">${prod.id}</td>
      <td class="align-middle rounded"><img src=${prod.dirImagen} alt=${prod.nombre} class="img-thumbnail border-0" style="max-width: 40px;"></td>
      <td class="align-middle">${prod.nombre}</td>
      <td class="align-middle text-right">${prod.cantCompra}</td>
      <td class="align-middle text-right moneda">$${prod.precio}</td>
      <td class="align-middle text-right moneda">$${parseInt(prod.cantCompra) * parseFloat(prod.precio)}</td>

    </tr> </tbody>`;
    });
    //sumo una línea footer con los datos totales
    elemento += ` 
    <tfoot class="table-group-divider"><tr>
      <th scope="col">Items:</th>
      <th scope="col">${await cantTotalItems()}</th>
      <th scope="col"></th>
      <th scope="col">Cantidad:</th>
      <th scope="col">${await cantTotalProductos()}</th>
      <th scope="col">TOTAL:</th>
      <th scope="col">$${await sumaTotalProductos()}</th>
    </tr>
    </tfoot>
    </table>
    <div class="d-flex justify-content-end">
    <button type="button" class="btn btn-success rounded me-2" onclick="confirmarCompra()">Confirmar</button>
    <button type="button" class="btn btn-danger rounded" onclick="eliminarCarrito()">Vaciar</button>
    `;

    //inserto elemento al HTML
    document.getElementById("web-carrito").innerHTML = elemento;

  }
};