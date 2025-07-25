/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/ 
const inputEl = document.getElementById("input-el")
const length =  document.getElementById("length")
const volume =  document.getElementById("volume")
const mass =  document.getElementById("mass")
const btn = document.getElementById("convert-btn")

btn.addEventListener("click" , function(){
    let req = inputEl.value
    let m , f, l,g,kg,p
    if(req != 0){
     m = (req*3.281).toFixed(3)
     f = (req /3.281).toFixed(3)
     
       l = (req*0.264).toFixed(3)
     g = (req /0.264).toFixed(3)
     
       kg = (req*2.204).toFixed(3)
     p = (req /2.204).toFixed(3)
    }
    else{
        m = f = l = g = kg = p = 0
    }
    length.innerHTML = `${req} meters = ${m} feet | ${req} feet = ${f} meters`
    volume.innerHTML = `${req} liters = ${l} gallons | ${req} gallons = ${g} liters`
    mass.innerHTML = `${req} kilos = ${kg} pounds | ${req} pounds = ${p} kilos`
})