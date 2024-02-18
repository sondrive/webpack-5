const sumaExport = require("./sum").suma;
const zmiennaExport = require("./sum").zmienna;
import { suma2 } from "./sum2";
import style from "./css/index.scss";

console.log(sumaExport(1, 2));
console.log(zmiennaExport);
console.log(suma2(1, 2));

let heading = document.querySelector("h1");
let sumValue = sumaExport(1, 11);

heading.textContent = `Nasza liczba to ${sumValue}`;
