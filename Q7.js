let x1
let x2

function solve() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let delta = b ** 2 - 4 * a * c
    if (a == b && b == c && a == 0) {
        document.getElementById("result").innerHTML = "Equation with infinite solutions"
    } else {
        if (delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / (2 * a)
            x2 = (-b - Math.sqrt(delta)) / (2 * a)
            document.getElementById("result").innerHTML = "x1 = " + x1 + " and x2 = " + x2
        } else if (delta == 0) {
            x1 = x2 = -b / (2 * a)
            document.getElementById("result").innerHTML = "x1 = x2 = " + x1
        } else document.getElementById("result").innerHTML = "The equation has no solution"
    }
}