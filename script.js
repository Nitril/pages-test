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
	
        //
    document.getElementById("streamtest").innerHTML = "<p>"+out+"</p>";
};

Event.observe(document, 'dom:loaded', function() {
    
    prettyPrint();
    
    HumbleFinance.trackFormatter = function (obj) {
        
        var x = Math.floor(obj.x);
        var data = jsonData[x];
        var text = data.date + " Price: " + data.close + " Vol: " + data.volume;
        
        return text;
    };
    
    HumbleFinance.yTickFormatter = function (n) {
        
        if (n == this.axes.y.max) {
            return false;
        }
        
        return '$'+n;
    };
    
    HumbleFinance.xTickFormatter = function (n) { 
        
        if (n == 0) {
            return false;
        }
        
        var date = jsonData[n].date;
        date = date.split(' ');
        date = date[2];
        
        return date; 
    }
    
    HumbleFinance.init('finance', priceData, volumeData, summaryData);
    HumbleFinance.setFlags(flagData); 
    
    var xaxis = HumbleFinance.graphs.summary.axes.x;
    var prevSelection = HumbleFinance.graphs.summary.prevSelection;
    var xmin = xaxis.p2d(prevSelection.first.x);
    var xmax = xaxis.p2d(prevSelection.second.x);
    
    $('dateRange').update(jsonData[xmin].date + ' - ' + jsonData[xmax].date);
    
    Event.observe(HumbleFinance.containers.summary, 'flotr:select', function (e) {
        
        var area = e.memo[0];
        xmin = Math.floor(area.x1);
        xmax = Math.ceil(area.x2);
        
        var date1 = jsonData[xmin].date;
        var date2 = jsonData[xmax].date;
        
        $('dateRange').update(jsonData[xmin].date + ' - ' + jsonData[xmax].date);
    });
});

}