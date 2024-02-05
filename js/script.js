// Se crea un constructor de Producto.

class unProducto {
    constructor(id, descripcion, stock, precio) {
        this.id = parseInt(id);
        this.descripcion = descripcion;
        this.stock = parseInt(stock);
        this.precio = parseFloat(precio);
    }

    mostrarProducto() {

        console.log("ID: " + this.id);
        console.log("Descripcion: " + this.descripcion);
        console.log("Stock: " + this.stock);
        console.log("Precio: $" + this.precio);
        console.log("");

        let p = "ID: " + this.id;
        p += "\nDescripcion: " + this.descripcion;
        p += "\nStock: " + this.stock;
        p += "\nPrecio: $" + this.precio;

        alert(p);
    }

}

//la clase productos es un array de un Producto, la misma contiene los métodos con los que se van a manejar los productos
class productos {
    constructor() {
        this.listaProducto = [];
    }

    //Crea un nuevo producto y lo agrega al array de productos.
    agregarProducto() {

        let descripcion;
        let precio;
        let stock;
        let id;

        do {
            descripcion = prompt("Por favor ingresa el nombre del Producto a agregar");

        } while (descripcion == "");

        do {
            precio = parseFloat(prompt("Ingresa el precio del producto"));
        } while (isNaN(precio));

        do {
            stock = parseInt(prompt("Ingresa la cantidad de Stock del producto"));

        } while (isNaN(stock) || stock < 0);

        if (this.listaProducto.length == 0) {
            id = 1;
        } else {
            id = this.listaProducto.length + 1;
        }
        const prod = new unProducto(id, descripcion, stock, precio);
        this.listaProducto.push(prod);

        console.log("Agregaste el producto " + descripcion);

    }

//Se crea un método que carga 3 productos de ejemplo al array
    cargarEjemplos() {
        const prod1 = new unProducto(1, "Mesa de Arrime", 20, 15000);
        this.listaProducto.push(prod1);
        const prod2 = new unProducto(2, "Espejo", 10, 5000);
        this.listaProducto.push(prod2);
        const prod3 = new unProducto(3, "Mesa Ratona", 50, 8500);
        this.listaProducto.push(prod3);
    }

// Recorre el array y muestra el producto si hay Stock
    verProductosDisp() {
        if (this.listaProducto.some((prod) => prod.stock > 0)) {
            this.listaProducto.forEach((prod) => {
                if (prod.stock > 0) {
                    prod.mostrarProducto();
                }
            })
        } else { alert("Por el momento no tenemos productos disponibles") }
    }

//Busca por el ID ingresado y muestra el stock de ese producto
    mostrarStock() {

        let opcion = parseInt(prompt("Ingresa el número de id del producto a consultar el STOCK o CERO para cancelar: "));

        if (opcion != 0) {
            const prod = this.listaProducto.find((p) => p.id === opcion);

            if (prod === undefined) {
                alert("el ID " + opcion + " es incorrecto... seleccione de nuevo");
                this.mostrarStock();
            } else { alert("El producto " + prod.descripcion + " actualmente tiene " + prod.stock + " en Stock") }
        } else {
            alert("Volviste al Menu");
            console.clear();
        }
    }


//Consulta el Precio de un producto, buscando por ID
    consultarPrecio() {

        let opcion = parseInt(prompt("Ingresa el número de ID del producto a consultar el PRECIO o CERO para cancelar: "));
        if (opcion != 0) {
            const prod = this.listaProducto.find((p) => p.id === opcion)
            if (prod === undefined) {
                alert("La opción ingresada " + opcion + " es incorrecta... seleccione de nuevo");
                consultarPrecio();
            } else {
                alert("El producto " + prod.descripcion + " cuesta $" + prod.precio);
            }
        } else {
            alert("Volviste al Menu");
            console.clear();
        }
    }

//Suma o resta stock según el ID elegido. Valida que operación quiere hacer el usuario según la variable tipo
//En caso de restar verifica que haya stock suficiente para restar la cantidad ingresada.
//ademas, verifica que no sea un registro nulo comparando el valor del stock
    actualizarStock() {

        let tipo = prompt("Ingresa si queres SUMAR o RESTAR productos al stock").toUpperCase();
        if (tipo == "SUMAR" || tipo == "RESTAR") {
            let cant = parseInt(prompt("Ingresa la cantidad: "));
            while (cant <= 0) {
                cant = parseInt(prompt("El número es incorrecto, ingresa la cantidad: "));
            }
            let opcion = parseInt(prompt("Ingresa el número de ID del producto a MODIFICAR el STOCK o CERO para salir: "));
            if (opcion != 0) {
                const prod = this.listaProducto.find((p) => p.id === opcion)
                if (prod === undefined) {
                    alert("La opción ingresada es incorrecta... seleccione de nuevo");
                    actualizarStock();
                } else {
                    if (tipo === "SUMAR") {
                        prod.stock += cant;
                        alert("Stock actualizado");
                        prod.mostrarProducto();
                    } else {
                        if (cant > prod.stock) {
                            alert("El STOCK es incorrecto: Actualmente hay " + prod.stock + " y se quiere restar " + cant);
                        } else {
                            prod.stock -= cant;
                            alert("Stock actualizado");
                            prod.mostrarProducto();
                        }
                    }
                }
            } else {
                alert("Volviste al Menu");
                console.clear()
            }
        }
    }
}




//Se le solicita al cliente que ingrese su nombre
let nombreUsuario = prompt("Hola! Decime tu nombre");

while (nombreUsuario == "") {

    nombreUsuario = prompt("Para continuar, necesito que me digas tu nombre :)");
}

//Se muestra por consola le menú. Se hizo por consola para las opciones estén más visibles
alert("Bienvenido " + nombreUsuario.toUpperCase() + " te voy a dejar un menú para que puedas elegir...");

//Se crea la clase productos
const prod = new productos();

//Se le cargan los productos ejemplos
prod.cargarEjemplos();

//Ejecuta la función seleccionarOpcion, que muestra el menú y de acuerdo a la opción seleccionada ejecuta el método asociado.
seleccionarOpcion();


function seleccionarOpcion() {

    let opcion = prompt(nombreUsuario.toUpperCase() + " ingresa la opción del MENU o CERO para salir: \n" + creaMenu());
    switch (opcion) {
        case "1":
            console.clear();
            prod.verProductosDisp();
            seleccionarOpcion();
            break;
        case "2":
            console.clear();
            prod.mostrarStock();
            seleccionarOpcion();
            break;
        case "3":
            console.clear();
            prod.consultarPrecio();
            seleccionarOpcion();
            break;
        case "4":
            console.clear();
            prod.agregarProducto();
            seleccionarOpcion();
            break;
        case "5":
            console.clear();
            prod.actualizarStock();
            seleccionarOpcion();
            break;
        case "0":
            console.clear();
            alert("Gracias por visitarnos!!!");
            break;
        default:
            alert("La opción ingresada es incorrecta... seleccione de nuevo");
            seleccionarOpcion();
            break;
    }
}



//La función crea una variable con los datos del menú.

function creaMenu() {
    let menu = "-------------------------------\n";
    menu += ("1. Ver productos dispobibles\n");
    menu += ("2. Consultar Stock\n");
    menu += ("3. Consultar Precio\n");
    menu += ("4. Agregar un Producto\n");
    menu += ("5. Actualizar Stock del Producto\n");
    menu += ("0. Salir\n");
    menu += ("------------------------------- \n");
    return menu;
}
