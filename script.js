<<<<<<< HEAD
$(document).ready(function(){
    // $("button").click(function(){
        
		// $.ajax({
            // url: 'http://finance.google.com/finance/info?client=ig&q=INDEXNASDAQ:NDX',
            // dataType: 'json',
            // success: function(data) {
				
                // $("div").append("all good");
                // alert(data.replace(/\\/g, ""));
            // },
             // error: function() {
                // $("div").append("error");
                // alert("error");
            // }
        // });
		// $.getJSON("http://finance.google.com/finance/info?client=ig&q=INDEXNASDAQ:NDX", function(result){
            // $.each(result, function(i, field){
			// alert(JSON.stringify(result));	
            // $("div").append(field + " ");
			
            // });
        // });
    // 
	


$.ajax({
	
        type:       "GET",
        url:        'http://finance.google.com/finance/info?client=ig&q=INDEXNASDAQ:NDX',
        data:       function(data) { console.log("data="+data); },
        timeout:    20000,
        dataType:   "text",
        error:      function(XMLHttpRequest, textStatus, errorThrown) { console.log(textStatus); },
        success:    function(data) { alert("done"+data);
									 $("#streamtest").append(data.replace(/\\/g, "") + " ");
									 return data;
									},
        cache:      false
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

=======

    function readBody(xhr) {
    var data;
    if (!xhr.responseType || xhr.responseType === "text") {
        data = xhr.responseText;
    } else if (xhr.responseType === "document") {
        data = xhr.responseXML;
    } else {
        data = xhr.response;
    }
    return data;
}

var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4) {
        document.getElementById("streamtest").innerHTML = document.write(readBody(xhr));
    }
}
xhr.open('GET', 'https://github.com/', true);
xhr.send(null);
     



>>>>>>> refs/remotes/origin/master
