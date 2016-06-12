function sprawdz() {
	
	var liczba = 7;
	if (liczba>0) document.getElementById("streamtest").innerHTML="<p>FASC 4</p>";
	else if (liczba < 0 ) document.getElementById("streamtest").innerHTML="ujemna";
	else if (liczba == 0) document.getElementById("streamtest").innerHTML="zero";
	else document.getElementById("streamtest").innerHTML="To nie jest liczba cwaniaczku";
	
  // handle message
};

    // document.getElementById("streamtest").innerHTML = readBody(xhr);



