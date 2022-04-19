"use strict";

const nombre = "Cristina";
const edad = 27;

if (edad > 0 && edad < 100) {
  if (edad < 12) {
    console.log(`A ${nombre} le corresponde el descuento infantil`);
  } else if (edad >= 12 && edad < 30) {
    console.log(`A ${nombre} le corresponde el descuento juvenil`);
  } else if (edad >= 30 && edad <= 60) {
    console.log(`A ${nombre} no le corresponde ningun descuento`);
  } else {
    console.log(`A ${nombre} le corresponde el descuento de jubilados`);
  }
} else {
  console.log("La edad introducida no es válida...");
}
