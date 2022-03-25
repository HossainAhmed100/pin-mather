function getpin(){
    const pinGenarate = Math.round(Math.random() * 10000) + 1;
    const pinString = pinGenarate + '';
    if(pinString.length == 4){
        return pinGenarate;
    }
    else{
        console.log("Got 3 Digit & Callink Again");
        return getpin();
    }
}

function generatePin(){
    const pin = getpin();
    document.getElementById("pin-show").value = pin;
}

document.getElementById("pin-generate").addEventListener('click', function(){
    generatePin()
})
document.getElementById("keypad").addEventListener('click', function(event){
    const number = event.target.innerText;
    if(isNaN(number)){
        if(number == "C"){
            document.getElementById("typed-Callculator").value = "";
            success.classList.add("d-none");
            warning.classList.add("d-none")
        }
    }
    else{
        const calcInput = document.getElementById("typed-Callculator");
        const previousCalc = calcInput.value;
        const newCalc = previousCalc + number;
        calcInput.value = newCalc;
    }
})


document.getElementById("submit").addEventListener("click", function(){
    const calcInput = document.getElementById("typed-Callculator");
    const warning = document.getElementById("warning");
    const success = document.getElementById("success");
    const keypin = calcInput.value;
    const pin = document.getElementById("pin-show").value;
    
    if(keypin == pin){
        success.classList.remove("d-none");
        warning.classList.add("d-none")
        document.getElementById("typed-Callculator").value = "";
    }
    else{
        warning.classList.remove("d-none")
        success.classList.add("d-none");
        document.getElementById("typed-Callculator").value = "";
    }
})
