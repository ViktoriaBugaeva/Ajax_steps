var request;
if (window.XMLHttpRequest) {
 	request = new XMLHttpRequest();
 } else {
 	request = new ActiveXObject("Microsoft.XMLHTTP");
 }
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		var items = JSON.parse(request.responseText);
		var output = '<ul>';
		for (var key in items) {
			output += '<ul>' + items[key].name + '</ul>';
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
}
request.send();