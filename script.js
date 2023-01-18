/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/


const covertBtn = document.getElementById("btn");
let lenConversion =document.getElementById("length-conversion");
let volumeConv = document.getElementById("volume-conv");
let massConv = document.getElementById("mass-conv");

covertBtn.addEventListener("click", function(){
    let inputValue = document.getElementById("input-number").value;
    let meterToFeet = (inputValue * 3.281).toFixed(3);
let feetToMeter = (inputValue / 3.281).toFixed(3);
let litreToGallon = (inputValue * 0.264).toFixed(3);
let gallonToLitre = (inputValue / 0.264).toFixed(3);
let kgToPounds =(inputValue * 2.204).toFixed(3);
let poundsToKg =(inputValue / 2.204).toFixed(3);

    lenConversion.textContent= `${inputValue} metres = ${meterToFeet} feet | ${inputValue} feet = ${feetToMeter} meters`; 
    volumeConv.textContent = ` ${inputValue} kilos = ${kgToPounds} pounds | ${inputValue} pounds= ${poundsToKg} kilos`;
   massConv.textContent = `${inputValue} liters =${litreToGallon} gallons | ${inputValue} gallons = ${gallonToLitre} liters`;  
});