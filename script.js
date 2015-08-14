// create 10 divs
var body = document.querySelector('body');

var colorPallette = document.createElement('section');
colorPallette.style.width = "95%";
colorPallette.style.float = 'left';
colorPallette.style.paddingBottom = '5%';
colorPallette.style.paddingRight = '5%';
body.appendChild(colorPallette);


var br = document.createElement('br');
colorPallette.appendChild(br);
var coloringBoard = document.createElement('section');
body.appendChild(coloringBoard);

// create a function that can make any number of divs
function createDiv(numOfDiv) {
	// just in case a someone doesn't put in a number...
	if(isNaN(numOfDiv)) {
		numOfDiv === 10;
	}

	// for loop creates numOfDiv
	for (var i = 0; i < numOfDiv; i++) {
		var divElement = document.createElement('div');
		divElement.setAttribute('id', 'div' + [i]);
		coloringBoard.appendChild(divElement);
		divElement.style.border = 'solid 1px black'
		divElement.style.width = '1.5%';
		divElement.style.float = 'left';
		divElement.style.paddingBottom = '1.5%';
	}
}

createDiv(1500);

// create a function that
function addColor(color) {
	div = document.querySelectorAll('div:not(.paintPal');
	for(var i = 0; i < div.length; i++){
		if(color == undefined) {
			div[i].style.backgroundColor = 'white';
			div[i].setAttribute('class', 'nonPaintPal');
		}
		div[i].style.backgroundColor = color;
	}
}
addColor();

function createPaintPal() {
	// create a paint pallete
	paintDiv = document.createElement('div');
	paintDiv.setAttribute('class', 'paintPal');
	colorPallette.appendChild(paintDiv);
}

createPaintPal();

function paintPal(colorPaintPal){
	// give the paint pallette style
	paintDiv.style.border = 'solid 3px black'
	paintDiv.style.width = '3%';
	paintDiv.style.float = 'left';
	paintDiv.style.paddingBottom = '3%';
	paintDiv.style.backgroundColor = colorPaintPal;
	paintDiv.style.marginTop = '2px';
	paintDiv.style.marginBottom = '2px';
	paintDiv.style.marginRight = '2px';
	paintDiv.style.marginLeft = '2px';
}
paintPal();

function createTonsofPaintPals() {
	var colorOptions = ['IndianRed', 'Honeydew', 'Azure', 'AliceBlue', 'LightCoral', 'Salmon', 'Crimson', 'Red',
	'DarkRed', 'Pink', 'DeepPink', 'PaleVioletRed', 'Coral', 'OrangeRed', 'Orange',
	'Gold', 'yellow', 'DarkKhaki', 'Lavender', 'MediumOrchid', 'BlueViolet', 'Purple',
	'Indigo', 'GreenYellow', 'LimeGreen', 'PaleGreen', 'Green', 'DarkGreen', 'Turquoise',
	'DodgerBlue', 'Blue', 'SkyBlue', 'SteelBlue', 'MediumSlateBlue', 'Navy',
	'Cornsilk', 'LavenderBlush', 'DimGray', 'Black'];
	for(var i = 0; i < colorOptions.length; i++) {
		createPaintPal();
		paintPal(colorOptions[i]);
	}
}
createTonsofPaintPals();

function eventfulDiv() {
	var choosenColor = 'red';
	var painterPals = document.querySelectorAll('.paintPal');
	for(var j = 0; j < painterPals.length; j++) {
		painterPals[j].addEventListener('click', function() {
			choosenColor = (this).style.backgroundColor;
		});
	}

	for(var i = 0; i < div.length; i++){
		div[i].addEventListener('click', function() {
			(this).style.backgroundColor = choosenColor;
		})
	}
}
eventfulDiv();

function clearTheBoard() {
	var btn = document.createElement('button');
	btn.innerHTML = 'Clear the Canvas!';
	colorPallette.appendChild(btn);

	btn.addEventListener('click', function() {
		addColor();
	})
}

clearTheBoard();



