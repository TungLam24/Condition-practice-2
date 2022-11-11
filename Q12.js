function calculate() {
    let money = document.getElementById("money").value;
    let month = document.getElementById("month").value;
    let rate = document.getElementById("rate").value;
    let result = money * (1 + rate/100) ** month
    document.getElementById("result").innerHTML = "Result: " + result
}