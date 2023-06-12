function onSubmit(event) {
    event.preventDefault()
    const w = parseFloat(event.target[0].value)
    const h = parseFloat(event.target[1].value)

    if(isNaN(w) || isNaN(h) || w <= 0 || h <= 0) {
        alert("Pease, enter a proper number.")
        return;
    }
    const bmi = w / (h*h)

    console.log(bmi.toFixed(2))

    const res = document.getElementById("res")

    res.style.display = "block"

    document.getElementById("bmi").innerText = bmi.toFixed(2)
    document.getElementById("meter").value = bmi

let state = "normal"
let common = true;

    if(bmi < 18.5) {
        state = "underweight"
        common = false;
    }
        
    if(bmi >= 25) {
        state = "overweight"
        common = false;
    }
        

    const stateElement = document.getElementById("state");
    stateElement.innerText = state
    stateElement.style.color = common ? "#29EF21" : "#FF3A3A"
}

