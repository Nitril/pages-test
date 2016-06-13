function sprawdz() {
var xmlhttp = new XMLHttpRequest();
var url = "http://finance.google.com/finance/info?client=ig&q=INDEXNASDAQ:NDX";

xmlhttp.onreadystatechange=function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
		
		
        myFunction(xmlhttp.responseText);
    }
}
xmlhttp.open("GET", url, true);
xmlhttp.send();

    // document.getElementById("streamtest").innerHTML = readBody(xhr);

// function sprawdz() {
	
	// var liczba = 7;
	// if (liczba>0) document.getElementById("streamtest").innerHTML="<p>FASC 4</p>";
	// else if (liczba < 0 ) document.getElementById("streamtest").innerHTML="ujemna";
	// else if (liczba == 0) document.getElementById("streamtest").innerHTML="zero";
	// else document.getElementById("streamtest").innerHTML="To nie jest liczba cwaniaczku";
	
  //handle message
// };


	function myFunction(response) {
	
	var fixedresponse = JSON.parse(response.replace("//",""));
	//yourString.Replace("\"","");
	
	//var newy = JSON.parse(fixedresponse);
	//
    var out;
	out = [fixedresponse[0].id, fixedresponse[0].f, fixedresponse[0].e ];
	
	// var out1 = newy.id;
	
        
    document.getElementById("streamtest").innerHTML = "<p>"+out+"</p>";
};

}