// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// xhr.send();

// console.log(xhr.status);
// console.log(xhr.statusText);
// alert(xhr.status);


function sprawdz() {

var apikey = "7djtrck735sj9vj9kmtdkyxdaqvqm9f9";
var link = "https://eu.api.battle.net/wow/character/"+realm+ "/"+character_name+"?fields=reputation&locale=en_GB&apikey="+apikey+";
var x = document.getElementById("frm1");
var xhr = new XMLHttpRequest();
var character_name = 

xhr.open("GET",link , false);

xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);
alert(xhr.response);
console.log(xhr.response);




}


