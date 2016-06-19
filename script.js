$(document).ready(function(){
    $("button").click(function(){
        $.getJSON("http://finance.google.com/finance/info?client=ig&q=INDEXNASDAQ:NDX", function(result){
            $.each(result, function(i, field){
				
            $("div").append(field + " ");
			alert(JSON.stringify(data));
            });
        });
    });
});



// function sprawdz() {
// var xmlhttp = new XMLHttpRequest();
// var url = "http://finance.google.com/finance/info?client=ig&q=INDEXNASDAQ:NDX";

// xmlhttp.onreadystatechange=function() {
    // if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		
		
        // myFunction(xmlhttp.responseText);
    // }
// }
// xmlhttp.open("GET", url, true);
// xmlhttp.send();

    // document.getElementById("streamtest").innerHTML = readBody(xhr);

// function sprawdz() {
	
	// var liczba = 7;
	// if (liczba>0) document.getElementById("streamtest").innerHTML="<p>FASC 4</p>";
	// else if (liczba < 0 ) document.getElementById("streamtest").innerHTML="ujemna";
	// else if (liczba == 0) document.getElementById("streamtest").innerHTML="zero";
	// else document.getElementById("streamtest").innerHTML="To nie jest liczba cwaniaczku";
	
  // handle message
// };


	// function myFunction(response) {
	
	// var fixedresponse = JSON.parse(response.replace("//",""));
	//yourString.Replace("\"","");
	// var stringresponse = JSON.stringify(response.replace("//",""));
	// var newy = JSON.parse(fixedresponse);
	
    // var out = "<table>";
	// out = [fixedresponse[0].id, fixedresponse[0].f, fixedresponse[0].e ];
	// for (var k=0 : fixedresponse[k]) {
		
	// }
	

    // for(i = 0; i < arr.length; i++) {
        // out += "<tr><td>" +
        // arr[i].Name +
        // "</td><td>" +
        // arr[i].City +
        // "</td><td>" +
        // arr[i].Country +
        // "</td></tr>";
    // }
    // out += "</table>";
    // document.getElementById("id01").innerHTML = out;
	// var out1 = newy.id;
	
        
    // document.getElementById("streamtest").innerHTML ="<table>"+stringresponse+fixedresponse+"</table>";
// }

