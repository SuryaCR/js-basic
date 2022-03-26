import { math } from "./handlers.js"
const currencies = {
  MSG: "Select a Country",
  USD: "United States Dollar",
  AUD: "Australian Dollar",
  BGN: "Bulgarian Lev",
  BRL: "Brazilian Real",
  CAD: "Canadian Dollar",
  CHF: "Swiss Franc",
  CNY: "Chinese Yuan",
  CZK: "Czech Republic Koruna",
  DKK: "Danish Krone",
  GBP: "British Pound Sterling",
  HKD: "Hong Kong Dollar",
  HRK: "Croatian Kuna",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  INR: "Indian Rupee",
  JPY: "Japanese Yen",
  KRW: "South Korean Won",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  NOK: "Norwegian Krone",
  NZD: "New Zealand Dollar",
  PHP: "Philippine Peso",
  PLN: "Polish Zloty",
  RON: "Romanian Leu",
  RUB: "Russian Ruble",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  THB: "Thai Baht",
  TRY: "Turkish Lira",
  ZAR: "South African Rand",
  EUR: "Euro",
};

const from = document.querySelector("[name = from-country]");
const to = document.querySelector("[name = to-country]");
// const input = document.querySelector("#amount1");
// const input2 = documnet.querySelector("#amount2");

const country = generateOptions(currencies);
from.innerHTML = country;
to.innerHTML = country;

function generateOptions(options) {
  return Object.entries(options)
    .map(
      ([currencyCode, currencyName]) =>
        `<option value="${currencyCode}">${
          currencyCode == "MSG" ? " " : currencyCode
        } ${currencyName}</option>`
    )
    .join("");
}

const input = document.getElementById('amount1');
const output = document.getElementById('amount2')
 input.addEventListener('change', callMath);

 function callMath() {
    math();
 }