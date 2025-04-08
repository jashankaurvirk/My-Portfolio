const firstName = "Jashandeep Kaur";
const secondName = "Virk";
console.log("Welcome to my Portfolio Page");
const myName = document.getElementById("myName");
myName.textContent = firstName + " " + secondName;
function changeBackgroundColor(){
    var colors = ["red", "blue", "green", "pink", "yellow", "orange"];
    var randomNumber = Math.floor(Math.random()*colors.length);
    document.body.style.backgroundColor=colors[randomNumber];
    console.log("Colors array length: "+colors.length);
    console.log("Random number: "+randomNumber);
}