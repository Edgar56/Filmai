/**
 * Created by VerGil on 8/4/2016.
 */
var request;
if(window.XMLHttpRequest) {
    request = new XMLHttpRequest();
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'filmai.json');
request.onreadystatechange = function () {
if ((request.readyState===4) && (request.status===200)) {
var items = JSON.parse(request.responseText);
    var output = '<ul>';
    for (var key in items) {
    output += '<il>' + items[key].Title + '</il>'  + '<il>' + items[key].Year + '</il>' +  '<il>' + items[key].imdbID + '</il>' + '<il>' + items[key].Type + '</il>' + '<il>' + items[key].Poster +'</il>';
    }
    output += '</ul>';
    document.getElementById('update').innerHTML = output;

}
}
request.send();/*papildyti  output*/
