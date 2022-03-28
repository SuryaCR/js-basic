export function math() {
    var value1 = document.getElementById("amount1");
    var result = parseInt((Math.ceil(Math.random() * 10)) * value1.value);
    document.getElementById("amount2").innerHTML = result;
}