function convert() {
  let amount = document.getElementById("amount").value;
  let fromCurrency = document.getElementById("fromCurrency").value;
  let toCurrency = document.getElementById("toCurrency").value;
  let result;

  console.log(amount, fromCurrency, toCurrency);

  if (fromCurrency === "usd" && toCurrency === "vnd") {
    result = amount * 23000 + "vnđ";
  } else if (fromCurrency === "vnd" && toCurrency === "usd") {
    result = amount / 23000 + "usd";
  } else {
    result = amount + fromCurrency;
  }

  document.getElementById("result").innerHTML = "Result: " + result;
}
