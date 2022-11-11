function solve() {
    let a = +document.getElementById("a").value;
    let b = +document.getElementById("b").value;
    if (a === 0 && b === 0) {
        document.getElementById("result").innerHTML = "Equation with infinite solutions"
    } else if (a === 0 && b !== 0) {
        document.getElementById("result").innerHTML = "The equation has no solution"
    } else {
        document.getElementById("result").innerHTML = "x = " + -b / a
    }
}