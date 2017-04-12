var listElement = document.getElementById('listElement');
var addNewLi = document.getElementById('addNewLi');
var itemList = document.getElementsByTagName('li');
addNewLi.addEventListener('click', function() {
	var listNumber = itemList.length;
	listElement.innerHTML += '<li>item ' + listNumber + '</li>';
	console.log();
});