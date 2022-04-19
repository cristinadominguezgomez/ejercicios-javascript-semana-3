"use strict";

let hora = 8;
let cucu = "cucu ";

while (hora >= 14 && hora <= 22) {
  console.log(`Son las ${hora - 12}. ${cucu.repeat(hora - 12)}`);
  hora++;
}

while (hora >= 8 && hora <= 12) {
  console.log(`Son las ${hora}.`);
  for (let i = 0; i < hora; i++) console.log("Cucu");
  hora++;
}
while (hora >= 13 && hora < 14) {
  console.log(`Es la ${hora - 12}.`);
  for (let i = 12; i < hora; i++) console.log("Cucu");
  hora++;
}

while (hora >= 14 && hora <= 22) {
  console.log(`Son las ${hora - 12}.`);
  for (let i = 12; i < hora; i++) console.log("Cucu");
  hora++;
}
