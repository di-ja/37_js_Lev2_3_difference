function myFunct() {
    let a = document.getElementById("number").value
    a = Number(a)
    console.log(typeof(a))
    let b
    if (a > 27) {
        b = 2 * (a - 27)
        document.getElementById("result").innerHTML = b
    } else {
        document.getElementById("result").innerHTML = "... number is smaller than 27"
    }
}