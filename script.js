// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// xhr.send();

// console.log(xhr.status);
// console.log(xhr.statusText);
// alert(xhr.status);

$('#myDiv').click(sprawdz());


var realm = "Kazzak"
var character_name = "Atrophie"

const apikey = "7djtrck735sj9vj9kmtdkyxdaqvqm9f9";
var chlink =  "https://eu.api.battle.net/wow/auction/data/"+realm+ "?locale=en_GB&apikey="+apikey;

function sprawdz() {

var xhr = new XMLHttpRequest();

xhr.open("GET",chlink , false);

xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
alert(xhr.response);
console.log(xhr.response);


}


 mydiv = document.getElementById("myDiv")
 mydiv.addEventListener("click", sprawdz, false);