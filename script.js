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

// function myFunction(response) {
    // var arr = JSON.parse(response);
    // var out; //= "<table>";
	// var buu = JSON.strigify(response);
	// var lin;
	// out = arr.id; //+
	// lin = buu.id;
// remove non-printable and other non-valid JSON chars
 
    //for(i = 0; i < arr.length; i++) {
        
        // arr[i].City +
        // "</td><td>" +
        // arr[i].Country +
        // "</td></tr>"
		//;
    //}
    //out += "</table>";
	function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
        out += arr[i].id+ 
        arr[i].t ;
    }
    document.getElementById("streamtest").innerHTML = "<p>"+out+"</p>";
};

}