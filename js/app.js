import jsonData from '..JSON/productos.json';

// Accede a los datos como un objeto JavaScript
console.log(jsonData.productos);

// DECLARO UN ARRAY AL CUAL LE VOY A IR AGREGANDO PRODUCTOS
const arrayProductos = [];

//CREO UNA FUNCION CONSTRUCTORA PARA LUEGO IR CREANDO OBJETOS DE MANERA MAS FACIL
function Producto(marca, color, talle, precio) {
  this.marca = marca;
  this.color = color;
  this.talle = talle;
  this.precio = precio;
}

//CREO UNA FUNCTION AGREGAR PRODUCTOS QUE MEDIANTE PUSH VAYA AGREGANDO LOS ITEMS AL ARRAY DE OBJETOS
function agregarProducto(marca, color, talle, precio) {
  const nuevoProducto = new Producto(marca, color, talle, precio);
  arrayProductos.push(nuevoProducto);
  }
//LLAMO A LA FUNCION AGREGAR PRODUCTOS Y LE PASO LAS VARIABLES PARA Q ME CREE DICHOS OBJETOS
agregarProducto("nike", "rojo", 41, 45000);
agregarProducto("nike", "azul", 40, 45000);
agregarProducto("nike", "azul", 41, 45000);
agregarProducto("adidas", "blanco", 40, 40000);
agregarProducto("adidas", "blanco", 41, 40000);
agregarProducto("puma", "negro", 43, 35000);
agregarProducto("reebok", "azul", 44, 30000);
agregarProducto("converse", "rojo", 45, 25000);

//CON UN COSOLE.LOG VEO COMO QUEDA ESTE ARRAY DE OBJETOS
console.log(arrayProductos);


//CREO LA FUNCION OBTENER PRECIO PARA QUE SEGUN LA MARCA ME TRAIGA EL PRECIO SUGERIDO
function obtenerPrecio(marca) {
  switch (marca) {
    case "nike":
      return 45000;
    case "adidas":
      return 40000;
    case "puma":
      return 35000;
    case "reebok":
      return 30000;
    case "converse":
      return 25000;
    default:
      return 0; // Precio por defecto si la marca no coincide
  }
}

//ACA EMPIEZA LA INTERACCION CON EL USUARIO
//PEQUEÑA VALIDACION PARA MOSTRAR QUE SE VALIDAR UN USUARIO

while (true) {
  let usuario = prompt("Ingrese su nombre de usuario").toLowerCase();
  let contrasenia = prompt("Ingrese su contraseña").toLowerCase();

  if (usuario !== "" && contrasenia !== "") {
    alert("Bienvenido " + usuario);
    break;
  } else {
    alert("Error, todos los campos tienen que ser completados");
  }
}

//LUEGO DE "INGRESAR" EMPIEZA LA "COMPRA"

let decision1 = prompt("Desea comprar alguna zapatilla? Si-No").toLowerCase();

if (decision1 === "si") {
  let decision2 = prompt(
    "Qué marca de zapatilla desea? (Nike, Adidas, Puma, Reebok, Converse)"
  ).toLowerCase();

  let precioSeleccionado = obtenerPrecio(decision2);

//ACA SI EL PRECIO ES MAYOR A CERO HAGO UN IF EL CUAL VA A FILTRAR POR MARCA Y VA A PONER EN EL PROMPT LOS TALLES DISPONIBLES DE CADA MARCA 
  if (precioSeleccionado > 0) {
    let tallesDisponibles = [...new Set(arrayProductos.filter(producto => producto.marca === decision2).map(producto => producto.talle))];
    tallesDisponibles.sort((a, b) => a - b); //ACA ACOMODO LOS TALLES EN ORDEN PARA QUE SE VEAN BIEN EN EL PROMPT
    
    let talleSeleccionado = prompt(
      `Ingrese el talle deseado segun disponibilidad (${tallesDisponibles.join(", ")}):`
    );

    if (!tallesDisponibles.includes(parseInt(talleSeleccionado))) {
      alert("Talle no válido.");
    } else {
      //ACA HAGO OTRO FILTER QUE SE FIJE SEGUN MARCA Y TALLE EL COLOR DISPONIBLE QUE HAY      
      let coloresDisponibles = [...new Set(arrayProductos.filter(producto => producto.marca === decision2 && producto.talle == talleSeleccionado).map(producto => producto.color))];
      
      let colorSeleccionado = prompt(
        `Ingrese el color deseado (${coloresDisponibles.join(", ")}):`
      );

      if (!coloresDisponibles.includes(colorSeleccionado.toLowerCase())) {
        alert("Color no válido.");
      } else {
        //ACA USO UNA FUNCION SIMPLE QUE ME HACE LA CUENTA SEGUN PRECIO Y CANTIDAD        
        let cantidadZapas = parseInt(prompt("Ingrese la cantidad de zapatillas deseada:"));
        let totalCompra = precioSeleccionado * cantidadZapas;

        let decisionCompra = prompt(
          `El valor de las zapatillas ${decision2} es de $${precioSeleccionado}. Total de su compra: $${totalCompra}. ¿Desea comprarlas? (Si/No)`
        ).toLowerCase();

        if (decisionCompra === "si") {
          function calcularTotal(cantidad, precio) {
            let total = cantidad * precio;
            alert("El total de su compra es $" + total + ". Gracias, espero que lo disfrute!");
          }

          calcularTotal(cantidadZapas, precioSeleccionado);
        } else {
          alert("Gracias! ¡Vuelva Pronto!");
        }
      }
    }
  } else {
    alert("Marca no válida.");
  }
} else {
  alert("Gracias! Vuelva Pronto!");
}
