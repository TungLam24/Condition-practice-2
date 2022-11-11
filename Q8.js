function check_age() {
    let age = document.getElementById("age").value;
    if (age < 120 && age > 0) {
        document.getElementById("result").innerHTML = "Result: " + age + " is an age of a person"
    } else {
        document.getElementById("result").innerHTML = "Result: " + age + " is not an age of a person"
    }
}