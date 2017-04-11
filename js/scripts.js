var buttonElement = document.getElementsByClassName('button');
console.log(buttonElement);
var howManyButtons = buttonElement.length;
console.log(howManyButtons);
for (var x = 0; x < howManyButtons; x++) {
	alert(buttonElement[x].innerText)
}