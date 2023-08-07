//Declaro variables como si fueran productos asi luego las uso para funciones y demas
let nike = 45000;
let adidas = 40000;
let puma = 35000;
let reebok = 30000;
let converse = 25000;

//funcion que luego voy a usar para calcular el total a pagar del cliente
function calcularTotal(cantidad, precio) {
    let total = cantidad * precio;
    alert("El total de su compra es $"+total+". Gracias, espero que lo disfrute!");
  }

//Ingreso del usuario con un while para que si no completa algun campo vuelva a pedirlo
while (true) {
  let usuario = prompt("Ingrese su nombre de usuario").toLowerCase();
  let contrasenia = prompt("Ingrese su contraseña").toLowerCase();

  if (usuario !== "" && contrasenia !== "") {
    alert("Bienvenido " + usuario);
    break; // Salir del bucle si los campos están completos
  } else {
    alert("Error, todos los campos tienen que ser completados");
  }
}

//Una vez "ingresa" el usuario,empieza la compra.
let decision1 = prompt("Desea comprar alguna zapatilla? Si-No").toLowerCase();

if (decision1 == "si") {
  let decision2 = prompt(
    "Que marca de zapatilla desea? (Nike,Adidas,Puma,Reebok,Converse)"
  ).toLowerCase();

  
  let decisionCompra;//declaro la variable decisionCompra para luego en el caso que sea se llene con la info
  
  //uso un switch para usar varios "casos" asi es mas prolijo que muchos else if
  switch (decision2) {
    case "nike":
      decisionCompra = prompt(
        "El valor de las zapatillas Nike es de $" +
          nike +
          "¿Desea comprarlas? (Si/No)"
      ).toLowerCase();
      break;
    case "adidas":
      decisionCompra = prompt(
        "El valor de las zapatillas Adidas es de $" +
          adidas +
          "¿Desea comprarlas? (Si/No)"
      ).toLowerCase();
      break;
    case "puma":
      decisionCompra = prompt(
        "El valor de las zapatillas Puma es de $" +
          puma +
          "¿Desea comprarlas? (Si/No)"
      ).toLowerCase();
      break;
      case "reebok":
      decisionCompra = prompt(
        "El valor de las zapatillas Reebok es de $" +
          reebok +
          "¿Desea comprarlas? (Si/No)"
      ).toLowerCase();
      break;
      case "converse":
      decisionCompra = prompt(
        "El valor de las zapatillas Converse es de $" +
          converse +
          "¿Desea comprarlas? (Si/No)"
      ).toLowerCase();
      break;
  }
  //este otro if hace que segun la marca que eligio y la cantidad le devuelva el valor total llamando a la funcion que declare al principio
  if(decisionCompra==="si"){
    let cantidadZapas = parseInt(prompt('Que cantidad de zapatillas desea comprar? (SOLO NUMEROS)'));
    

    switch(decision2){
        case "nike":
            calcularTotal(cantidadZapas,nike)
            break;
          case "adidas":
            calcularTotal(cantidadZapas,adidas)
            break;
          case "puma":
            calcularTotal(cantidadZapas,puma)
            break;
          case "reebok":
            calcularTotal(cantidadZapas,reebok)
            break;
          case "converse":
            calcularTotal(cantidadZapas,converse)
            break;
        }
    }
    else {
        alert("Gracias! ¡Vuelva Pronto!");
  }
} else {
  alert("Gracias! Vuelva Pronto!");
}
