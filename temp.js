

let object = {
    key : "Value"
};
object.key = "New Value";

let randomNumber = Math.floor(Math.random() * 10000);

document.getElementById("gime-js1").innerHTML = object.key;
document.getElementById("gime-js2").innerHTML = object;
document.getElementById("gime-js3").innerHTML = "Random PIN: " + randomNumber;

alert("I'm a JavaScript!");