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
function changeTheme(){
    //find the background color of page
    var pageBackgroundColor = document.body.style.backgroundColor;
    console.log(pageBackgroundColor);
    //we have to set white or black backgroud and change the page font color to opposite
    if(pageBackgroundColor == "white" || pageBackgroundColor == ""){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    }else if(pageBackgroundColor == "black"){
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }else{
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
}