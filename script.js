// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// xhr.send();

// console.log(xhr.status);
// console.log(xhr.statusText);
// alert(xhr.status);





var realm = "Kazzak"
var character_name = "Atrophie"

const apikey = "7djtrck735sj9vj9kmtdkyxdaqvqm9f9";
var chlink =  "https://eu.api.battle.net/wow/auction/data/"+realm+ "?locale=en_GB&apikey="+apikey;

  // $('#myBtn').on('click',

function sprawdz() {
    document.getElementById('myBtn').onclick = function(){

            
var xhr = new XMLHttpRequest();

xhr.open("GET",chlink , false);

xhr.send();

$.getJSON(chlink, function(data) {
    //data is the JSON string
    alert(data.files.url);
    alert(data.files.lastModified);
}); 


}

}

window.onload = sprawdz;

// if (mydiv) { 
    
//  mydiv.addEventListener("click", sprawdz, false);
// };
