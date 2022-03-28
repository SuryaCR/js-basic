import { math } from "./handlers.js";
import { generateOptions } from "./money.js";
import { currencies } from "./currencies.js";
const from = document.querySelector("[name = from-country]");
const to = document.querySelector("[name = to-country]");

const country = generateOptions(currencies);
from.innerHTML = country;
to.innerHTML = country;

document.getElementById("amount1").addEventListener("change", changeValue);
function changeValue() {
  math();
}