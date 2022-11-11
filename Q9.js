function check() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    let c = +document.getElementById("c").value;
    if (a > 0 && b > 0 && c > 0 && a + b > c && a + c > b && b + c > a) {
        document.getElementById("result").innerHTML = "Result: a, b, c are 3 sides of a triangle"
    } else {
        document.getElementById("result").innerHTML = "Result: a, b, c are not 3 sides of a triangle"
    }
}
