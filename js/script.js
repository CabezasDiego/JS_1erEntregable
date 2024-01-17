// La idea es armar un listado de variables que contendran el stock, precio y descripción de 2 productos.
// además, se crearan 3 variables extras que estaran vacías donde se podrán cargar con nuevos productos.
//Se coloca el valor de descripcion en "" y stock en -1 para indicar que es un registro vacío.

let prodId1 = 1;
let prodDescripcion1 = "Mesa de Arrime";
let prodStock1 = 2;
let prodPrecio1 = 15000;
let prodId2 = 2;
let prodDescripcion2 = "Espejo";
let prodStock2 = 1;
let prodPrecio2 = 5000;
let prodId3 = 3;
let prodDescripcion3 = "";
let prodStock3 = -1;
let prodPrecio3;
let prodId4 = 4;
let prodDescripcion4 = "";
let prodStock4 = -1;
let prodPrecio4;
let prodId5 = 5;
let prodDescripcion5 = "";
let prodStock5 = -1;
let prodPrecio5;

//Se le solicita al cliente que ingrese su nombre
let nombreUsuario = prompt("Hola! Decime tu nombre");

while (nombreUsuario == "") {

    nombreUsuario = prompt("Para continuar, necesito que me digas tu nombre :)");
}

//Se muestra por consola le menú. Se hizo por consola para las opciones estén más visibles
alert("Bienvenido " + nombreUsuario + " te voy a dejar un menú para que puedas elegir...");

//Se llama a la primer funcion que es mostrar el menú por consola. 
mostrarMenu();

//La segunda funcion le pide al usuario que ingrese un número de opción, y se usa CERO para salir del programa
seleccionarOpcion();


function seleccionarOpcion() {
    let opcion = prompt("Ingresa la opción del MENU o CERO para salir: ");
    switch (opcion) {
        case "1":
            console.clear();
            verProductosDisp();
            mostrarMenu();
            seleccionarOpcion();
            break;
        case "2":
            console.clear();
            consultarStock();
            mostrarMenu();
            seleccionarOpcion();
            break;
        case "3":
            console.clear();
            consultarPrecio();
            mostrarMenu();
            seleccionarOpcion();
            break;
        case "4":
            console.clear();
            agregarProducto();
            mostrarMenu();
            seleccionarOpcion();
            break;
        case "5":
            console.clear();
            actualizarStock();
            mostrarMenu();
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


//La idea de esta funcion es mostrar todo los productos que tengan stock > 0
//Para mostrar cada producto se llama a la función mostrarProducto que tiene los parametros a mostrar en cada caso
//Valida que el producto tenga una descripción, para verificar que ese registro contiene datos y no es un registro nulo
function verProductosDisp() {
    let control = false;

    if (prodDescripcion1 != "" && prodStock1 > 0) {
        mostrarProducto(prodId1, prodDescripcion1, prodStock1, prodPrecio1);
        control = true;
    }
    if (prodDescripcion2 != "" && prodStock2 > 0) {
        mostrarProducto(prodId2, prodDescripcion2, prodStock2, prodPrecio2);
        control = true;
    }
    if (prodDescripcion3 != "" && prodStock3 > 0) {
        mostrarProducto(prodId3, prodDescripcion3, prodStock3, prodPrecio3);
        control = true;
    }
    if (prodDescripcion4 != "" && prodStock4 > 0) {
        mostrarProducto(prodId4, prodDescripcion4, prodStock4, prodPrecio4);
        control = true;
    }
    if (prodDescripcion5 != "" && prodStock5 > 0) {
        mostrarProducto(prodId5, prodDescripcion5, prodStock5, prodPrecio5);
        control = true;
    }

    if (!control) {
        alert("Por el momento no tenemos productos disponibles :(")
    }
}

//La función mostrarProducto muestra en consola según los argumentos recibidos.
function mostrarProducto(id, prod, stock, precio) {
    console.log("ID: " + id);
    console.log("Descripcion: " + prod);
    console.log("Stock: " + stock);
    console.log("Precio: $" + precio);
    console.log("");

}

//consultarStock muestra el nombre y cantidad de Stock del ID seleccionado verificando si es un registro nulo, 
//con el valor del stock >=0
function consultarStock() {

    let opcion = prompt("Ingresa el número de id del producto a consultar el STOCK o CERO para cancelar: ");
    switch (opcion) {
        case "1":
            if (prodStock1 >= 0) {
                alert("El producto " + prodDescripcion1 + " actualmente tiene " + prodStock1 + " en Stock");
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarStock();
            }

            break;
        case "2":
            if (prodStock2 >= 0) {
                alert("El producto " + prodDescripcion2 + " actualmente tiene " + prodStock2 + " en Stock");
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarStock();
            }
            break;
        case "3":
            if (prodStock3 >= 0) {
                alert("El producto " + prodDescripcion3 + " actualmente tiene " + prodStock3 + " en Stock");
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarStock();
            }
            break;
        case "4":
            if (prodStock4 >= 0) {
                alert("El producto " + prodDescripcion4 + " actualmente tiene " + prodStock4 + " en Stock");
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarStock();
            }
            break;
        case "5":
            if (prodStock5 >= 0) {
                alert("El producto " + prodDescripcion5 + " actualmente tiene " + prodStock5 + " en Stock");
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarStock();
            }
            break;
        case "0":
            alert("Volviste al Menu");
            console.clear();
            break;

        default:
            alert("La opción ingresada es incorrecta... seleccione de nuevo");
            consultarStock();
            break;
    }

}

//Consultar Precio muestra el precio del producto del ID seleccionado. Valida que el registro no sea nulo
function consultarPrecio() {

    let opcion = prompt("Ingresa el número de ID del producto a consultar el PRECIO o CERO para cancelar: ");
    switch (opcion) {
        case "1":
            if (prodStock1 >= 0) {
                alert("El producto " + prodDescripcion1 + " cuesta $" + prodPrecio1);
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarPrecio();
            }

            break;
        case "2":
            if (prodStock2 >= 0) {
                alert("El producto " + prodDescripcion2 + " cuesta $" + prodPrecio2);
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarPrecio();
            }
            break;
        case "3":
            if (prodStock3 >= 0) {
                alert("El producto " + prodDescripcion3 + " cuesta $" + prodPrecio3);
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarPrecio();
            }
            break;
        case "4":
            if (prodStock4 >= 0) {
                alert("El producto " + prodDescripcion4 + " cuesta $" + prodPrecio4);
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarPrecio();
            }
            break;
        case "5":
            if (prodStock5 >= 0) {
                alert("El producto " + prodDescripcion5 + " cuesta $" + prodPrecio5);
            } else {
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarPrecio();
            }
            break;
        case "0":
            alert("Volviste al Menu");
            console.clear();
            break;

        default:
            alert("La opción ingresada es incorrecta... seleccione de nuevo");
            consultarPrecio();
            break;
    }

}

//Agregar un nuevo producto al registro que se encuentre vacio, calidando que no tenga descripción.
//Se usa una variable control, para verificar si no se pudo agregar un producto por no tener registros vacíos
function agregarProducto() {

    let control = false;

    if (prodDescripcion3 == "" && control == false) {
        do {
            prodDescripcion3 = prompt("Por favor ingresa el nombre del Producto a agregar");

        } while (prodDescripcion3 == "");

        do {
            prodPrecio3 = parseFloat(prompt("Ingresa el precio del producto"));
        } while (isNaN(prodPrecio3));

        do {
            prodStock3 = parseInt(prompt("Ingresa la cantidad de Stock del producto"));

        } while (isNaN(prodStock3) || prodStock3 < 0);
        console.log("Se agregó el producto: ");
        mostrarProducto(prodId3,prodDescripcion3,prodStock3,prodPrecio3);
        control = true;
    }
    if (prodDescripcion4 == "" && control == false) {
        do {
            prodDescripcion4 = prompt("Por favor ingresa el nombre del Producto a agregar");

        } while (prodDescripcion4 == "");

        do {
            prodPrecio4 = parseFloat(prompt("Ingresa el precio del producto"));

        } while (isNaN(prodPrecio4));

        do {
            prodStock4 = parseInt(prompt("Ingresa la cantidad de Stock del producto"));

        } while (isNaN(prodStock4) || prodStock4 < 0);
        mostrarProducto(prodId4,prodDescripcion4,prodStock4,prodPrecio4);
        control = true;
    }
    if (prodDescripcion5 == "" && control == false) {
        do {
            prodDescripcion5 = prompt("Por favor ingresa el nombre del Producto a agregar");

        } while (prodDescripcion5 == "");

        do {
            prodPrecio5 = parseFloat(prompt("Ingresa el precio del producto"));

        } while (isNaN(prodPrecio5));

        do {
            prodStock5 = parseInt(prompt("Ingresa la cantidad de Stock del producto"));

        } while (isNaN(prodStock5) || prodStock5 < 0);
        mostrarProducto(prodId5,prodDescripcion5,prodStock5,prodPrecio5);
        control = true;

    }
    if (!control) {
        alert("Lamentablemente no tenemos más espacio para agregar más productos");
    }

}

//Suma o resta stock según el ID elegido. Valida que operación quiere hacer el usuario según la variable tipo
//En caso de restar verifica que haya stock suficiente para restar la cantidad ingresada.
//ademas, verifica que no sea un registro nulo comparando el valor del stock, recordar que stock -1 es un registro nulo.
function actualizarStock() {

    let tipo = prompt("Ingresa si queres SUMAR o RESTAR productos al stock").toUpperCase();
    if (tipo == "SUMAR" || tipo == "RESTAR") {

        let cant = parseInt(prompt("Ingresa la cantidad: "));
        while (cant <= 0) {

            let cant = parseInt(prompt("El número es incorrecto, ingresa la cantidad: "));
        }

        let opcion = prompt("Ingresa el número de id del producto a MODIFICAR el STOCK o CERO para salir: ");

        switch (opcion) {
            case "1":
                if (tipo === "SUMAR") {
                    prodStock1 = prodStock1 + cant;
                } else {
                    if (cant > prodStock1) {
                        alert("El stock es incorrecto: Actualmente hay " + prodStock1 + " y se quiere restar " + cant);
                    } else {
                        prodStock1 = prodStock1 - cant;
                    }
                }
                break;
            case "2":
                if (tipo === "SUMAR") {
                    prodStock2 = prodStock2 + cant;
                } else {
                    if (cant > prodStock2) {
                        alert("El stock es incorrecto: Actualmente hay " + prodStock2 + " y se quiere restar " + cant);
                    } else {
                        prodStock2 = prodStock2 - cant;
                    }
                }
                break;
            case "3":
                if (tipo == "SUMAR" && prodStock3 >= 0) {
                    prodStock3 = prodStock3 + cant;
                } else {
                    if (cant > prodStock3) {
                        alert("El stock es incorrecto: Actualmente hay " + prodStock3 + " y se quiere restar " + cant);
                    } else {
                        prodStock3 = prodStock3 - cant;
                        alert("resto y ahora hay " + prodStock3);
                    }
                }
                break;
            case "4":
                if (tipo == "SUMAR" && prodStock4 >= 0) {
                    prodStock4 = prodStock4 + cant;
                } else {
                    if (cant > prodStock4) {
                        alert("El stock es incorrecto: Actualmente hay " + prodStock4 + " y se quiere restar " + cant);
                    } else {
                        prodStock4 = prodStock4 - cant;
                    }
                }
                break;
            case "5":
                if (tipo == "SUMAR" && prodStock5 >= 0) {
                    prodStock5 = prodStock5 + cant;
                } else {
                    if (cant > prodStock5) {
                        alert("El stock es incorrecto: Actualmente hay " + prodStock5 + " y se quiere restar " + cant);
                    } else {
                        prodStock5 = prodStock5 - cant;
                    }
                }
                break;
            case "0":
                alert("Volviste al Menu");
                console.clear();
                break;

            default:
                alert("La opción ingresada es incorrecta... seleccione de nuevo");
                consultarStock();
                break;
        }

    } else {
        alert("El dato ingresado es incorrecto! ");
        alert("Volviste al Menu");
        console.clear();
    }



}

//La función muestra por consola las opciones posibles.

function mostrarMenu() {
    console.log("");
    console.log("-------------------------------");
    console.log("");
    console.log("MENU");
    console.log("1. Ver productos dispobibles");
    console.log("2. Consultar Stock");
    console.log("3. Consultar Precio");
    console.log("4. Agregar un Producto");
    console.log("5. Actualizar Stock del Producto");
    console.log("0. Salir");
    console.log("-------------------------------");
}
