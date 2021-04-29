function check() {
let num = Number.parseInt(document.getElementById("num").value);
let mynum = 7;
let text = ""; 

if (num > mynum) {  // This is called the Control Flow. //
    text += "You Win!"; // The code will not be read line by line unless the first condition is met. //
} else { 
    text += "Loser.... :P";
}
document.getElementById("res").innerHTML += text;
}


// += Explained >>>>> n+= Means n = n+3 //