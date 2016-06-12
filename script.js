
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
     



