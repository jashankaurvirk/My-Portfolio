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
function contactJashan(){
   var email = "mailto:jashan2001virk@gmail.com";
   window.open(email, "_blank");
}
//planning - create a button ,  create function and confirm if function is working

//figure out how to send email through js 

function addNumbers(){
    for(var i = 1; i<=10; i++){
        console.log(i);
    }
}

function basicSearch(){
    //goal: make use of while loop to search for a person name from array of names
    const names = ["jashan", "manno", "tom", "chiku"];
    let i = 0;
    while(i <= names.length){
        if(names[i] == "tom"){
            console.log("Search result found at index: " +i+ " and Name is: " +names[i]);
            break;
        }
        console.log("Result not found at index: " +i);
        i++;

    }
}