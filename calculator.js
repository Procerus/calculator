let div = [];
let size = 3;
let screen = 0;
let table = 0;
let display = "";
let number = 0;
let sub = 0;
let lastop = 0;
const container = document.querySelector('#container');
container.setAttribute('style', ' position: absolute; top: 30%; left: 30%; height: 280px; width: 375px; padding: 0;  margin: 0; list-style: none; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;   -webkit-flex-flow: row wrap; justify-content: space-evenly;');
const screendiv = document.querySelector('#screen');
screendiv.setAttribute('style', ' background: grey; position: absolute; top: 40%; left: 60%; height: 60px; width: 450px; padding: 0;  margin: 0; list-style: none; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;   -webkit-flex-flow: row wrap; justify-content: space-evenly; margin-top:10px; line-height: 60px; color: white; font-weight: bold; font-size:2em; text-align: center;'); 
const tablediv = document.querySelector('#tables');
tablediv.setAttribute('style', ' background: grey; position: absolute; top: 30%; left: 60%; height: 60px; width: 450px; padding: 0;  margin: 0; list-style: none; display: -webkit-box; display: -moz-box; display: -ms-flexbox; display: -webkit-flex; display: flex;   -webkit-flex-flow: row wrap; justify-content: space-evenly; margin-top:10px; line-height: 60px; color: white; font-weight: bold; font-size:2em; text-align: center;'); 
screendiv.innerText = display;
tablediv.innerText = display;
let modify = 1;
for (let i = 0; i < 16; i++){
	div[i] = document.createElement('li');
	div[i].classList.add('flex-item');
	div[i].innerText = i + modify;
	if (i == 3){
		//multiply
		div[i].innerHTML = "<h>*</h>";
		modify--;
		container.appendChild(div[i]);
		div[i].addEventListener('click', function( event ){
			multiply();

	});
	}
	if (i == 7){
		//divide
		div[i].innerHTML = "<h>/</h>";
		modify--;
		container.appendChild(div[i]);
		div[i].addEventListener('click', function( event ){
			divide();

	});
	}
	if (i == 11){
		//addition
		div[i].innerHTML = "<h>+</h>";
		modify--;
		container.appendChild(div[i]);
		div[i].addEventListener('click', function( event ){
			add();

	});
	}
	if (i == 12){
		//decimal
		div[i].innerHTML = "<h></h>";
		container.appendChild(div[i]);
		div[i].addEventListener('click', function( event ){
			dot();

	});
	}
	if (i == 13){
		//zero
		div[i].innerHTML = "<h>0</h>";
		container.appendChild(div[i]);
	}
	if (i == 14){
		//equals
		div[i].innerHTML = "<h>=</h>";
		container.appendChild(div[i]);
		div[i].addEventListener('click', function( event ){
			equals();

	});
	}
	if (i == 15){
		//subtraction
		div[i].innerHTML = "<h>-</h>";
		container.appendChild(div[i]);
		div[i].addEventListener('click', function( event ){
			subtract();

	});
	}
	if (i == 3 || i == 7 || i == 11 || i == 12 || i == 14 || i == 15){
		div[i].setAttribute('style', 'background: black;  width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: white; font-weight: bold; font-size:3em; text-align: center;');
		div[i].addEventListener('mousedown', function( event ){
		div[i].setAttribute('style', 'background: white; border-style: groove; border-color: black; border-width: 2px; width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: black; font-weight: bold; font-size:3em; text-align: center;');
		});
		div[i].addEventListener('mouseup', function( event ){
		div[i].setAttribute('style', 'background: white; border-style: hidden; width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: black; font-weight: bold; font-size:3em; text-align: center;');
		});
		div[i].addEventListener('mouseover', function( event ){
		div[i].setAttribute('style', 'background: white;  width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: black; font-weight: bold; font-size:3em; text-align: center;');
		});
		div[i].addEventListener('mouseout', function( event ){
		div[i].setAttribute('style', 'background: black;  width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: white; font-weight: bold; font-size:3em; text-align: center;');
		});

	}
	else {
		div[i].setAttribute('style', 'background: grey;  width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: white; font-weight: bold; font-size:3em; text-align: center;');
		container.appendChild(div[i]);
		div[i].addEventListener('mousedown', function( event ){
		div[i].setAttribute('style', 'background: white; border-style: groove; border-color: black; border-width: 2px; width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: black; font-weight: bold; font-size:3em; text-align: center;');
		if(i < 4){
			screen = screen * 10 + (i + 1) % 10;
			screendiv.innerText = "" + display + screen;
		} else if ( i == 13 ) {
			screen = screen * 10 + (i - 3) % 10;
			screendiv.innerText = display + screen;
		} else if (i > 7){
			screen = screen * 10 + (i - 1) % 10;
			screendiv.innerText = "" + display + screen;
		} else{
			screen = screen * 10 + (i) % 10;
			screendiv.innerText = "" + display + screen;
		}
		});
		div[i].addEventListener('mouseup', function( event ){
		div[i].setAttribute('style', 'background: white; border-style: hidden; width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: black; font-weight: bold; font-size:3em; text-align: center;');
		});
		div[i].addEventListener('mouseover', function( event ){
		div[i].setAttribute('style', 'background: white;  width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: black; font-weight: bold; font-size:3em; text-align: center;');
		});
		div[i].addEventListener('mouseout', function( event ){
		div[i].setAttribute('style', 'background: grey;  width: ' + 250/size + 'px; height: ' + 280/size + 'px; margin-top:10px; line-height: 100px; color: white; font-weight: bold; font-size:3em; text-align: center;');
		});
	}
}

function add () {
	if (table == ""){
		tablediv.innerText = "" + screen + " +";
		table = screen;
		screen = 0;
		screendiv.innerText = "";
		lastop = 1;
	} else {
		next(" +");
		lastop = 1;
	}
}

function subtract () {
	if (table == ""){
		tablediv.innerText = "" + screen + " -";
		table = screen;
		screen = 0;
		screendiv.innerText = "";
		lastop = 2;
	} else {
		next(" -");
		lastop = 2;
	}
}


function multiply () {
	if (table == ""){
		tablediv.innerText = "" + screen + " X";
		table = screen;
		screen = 0;
		screendiv.innerText = "";
		lastop = 3;
	} else {
		next(" X");
		lastop = 3;
	}
}

function divide () {
	if (table == ""){
		tablediv.innerText = "" + screen + " /";
		table = screen;
		screen = 0;
		screendiv.innerText = "";
		lastop = 4;
	} else {
		next(" /");
		lastop = 4;
	}
}

function dot () {

}

function equals() {
	if (lastop == 1) {
		tablediv.innerText = table + screen;
		screendiv.innerText = "";
		table = 0;
		screen = 0;
	} else if (lastop == 2) {
		tablediv.innerText = table - screen;
		screendiv.innerText = "";
		table = 0;
		screen = 0;
	} else if (lastop == 3) {
		tablediv.innerText = table * screen;
		screendiv.innerText = "";
		table = 0;
		screen = 0;
	} else if (lastop == 4) {
		tablediv.innerText = table / screen;
		screendiv.innerText = "";
		table = 0;
		screen = 0;
	} else {

	}
	lastop = 0;

}
function next(ending) {
	if (lastop == 1) {
		table = table + screen;
		tablediv.innerText = table + ending;
		screendiv.innerText = "";
		screen = 0;
	} else if (lastop == 2) {
		table = table - screen;
		tablediv.innerText = table + ending;
		screendiv.innerText = "";
		screen = 0;
	} else if (lastop == 3) {
		table = table * screen;
		tablediv.innerText = table + ending;
		screendiv.innerText = "";
		screen = 0;
	} else if (lastop == 4) {
		table = table / screen;
		tablediv.innerText = table + ending;
		screendiv.innerText = "";
		screen = 0;
	} else {
		
	}
	lastop = 0;

}
function clear() {
	tablediv.innerText = "";
	screendiv.innerText = 0;
	screen = 0;
	table = 0;
	display = "";
}


