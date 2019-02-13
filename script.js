const canvas = document.querySelector('.animation');
const context = canvas.getContext('2d');

const splashQuestion = document.querySelector('.splash-question');
const form = document.querySelector('form');
const habitField = document.querySelector('#habit-field')
const completedButton = document.querySelector('.completedButton');

document.addEventListener('DOMContentLoaded', function() {
   splashQuestion.classList.add("no-task-entered")
}, false);

//Handling input and displaying the input at the bottom of the screen

let userHabit = ''

form.addEventListener("submit", e => {
	e.preventDefault();
	userHabit = habitField.value;
	splashQuestion.style.display = "none";
	CreateHabitEl();
})

function CreateHabitEl() {
	console.log(userHabit)
	let node = document.querySelector('.habit-heading');
	let textNode = document.createTextNode(`my new habit will be ${userHabit}`)
	node.appendChild(textNode);
}


//create rocket image elements

let rocketNozzleImg = document.createElement("img");
rocketNozzleImg.src = "rocketParts/nozzle.png"

let rocketFrameBottomImg = document.createElement("img");
rocketFrameBottomImg.src = "rocketParts/frameBottom.png"

let rocketFrameMiddleImg = document.createElement("img");
rocketFrameBottomImg.src = "rocketParts/frameMiddle.png"

let rocketFrameTopImg = document.createElement("img");
rocketFrameTopImg.src = "rocketParts/frameTop.png"

let rocketWindowImg = document.createElement("img");
rocketWindowImg.src = "rocketParts/window.png"

let rocketNoseConeImg = document.createElement("img");
rocketNoseConeImg.src = "rocketParts/noseCone.png"

let rocketSideBoosterImg = document.createElement("img");
rocketSideBoosterImg.src = "rocketParts/sideBooster.png"

//make sure all the images are loaded before trying to draw then in the canvas

let imagesLoaded = false
var images = [
			'rocketParts/Nozzle.png',
			'rocketParts/frameBottom.png',
            'rocketParts/frameMiddle.png',
            'rocketParts/frameTop.png',
            'rocketParts/window.png',
            'rocketParts/noseCone.png',
            'rocketParts/sideBooster.png'
          ];
var imagesLoading = images.length;

// Image loader.
var loadImage = function(i) {
 var img = new Image();
 img.onload = function() {
   images[i] = img;
   --imagesLoading;
   // Call the complete callback when all images loaded.
   if (imagesLoading === 0) {
     imagesLoaded = true;
   }
 };
 img.src = images[i];
};

// Start to load all images
var i;
for(i = 0; i < imagesLoading; ++i) {
	loadImage(i);
}

//Define the location of the images for drawing.

rocketNozzle = {
	width: 68,
	height: 40,
	xPos: 450,
	yPos: 450
};

frameBottom = {
	width: 68,
	height: 64,
	xPos: 450,
	yPos: 386
};

frameMiddleLower = {
	width: 68,
	height: 64,
	xPos: 450,
	yPos: 322
};

frameMiddleUpper = {
	width: 68,
	height: 64,
	xPos: 450,
	yPos: 258
}

frameTop = {
	width: 68,
	height: 64,
	xPos: 450,
	yPos: 192
};

rocketWindow = {
	width: 28,
	height: 28,
	xPos: 470,
	yPos: 208
}

noseCone = {
	width: 68,
	height: 78,
	xPos: 450,
	yPos: 114
}

leftSideBooster = { 422 365
	width: 29,
	height: 170,
	xPos: 422,
	yPos: 315
}

middleSideBooster = {468 346
	width: 29,
	height: 170,
	xPos: 468,
	yPos: 296
}

rightSideBooster = { 516 365
	width: 29,
	height: 170,
	xPos: 516,
	yPos: 315	
}

//When the completed button is pressed draw the next image.
function drawNextImage() {
	context.drawImage(rocketNozzleImg,
					  //source rectangle
					  0, 0, 68, 40,
					  //destination rectange
					  0,0,68,40);
}

function drawNozzle() {
	context.drawImage(rocketNozzleImg,
					  //source rectangle
					  0, 0, 68, 64,
					  //destination rectange
					  0,0,68,40);
}


//This is dangerous, because if all the images are not yet loaded the button will not do anything.
//Consider a loading screen or a way to disable input.
completedButton.addEventListener('click', e => {
	if (imagesLoaded) {
		drawNextImage()
	}
})


//adapted from https://stackoverflow.com/questions/31299509/call-a-function-when-html5-canvas-is-ready
//because the images load asychronously, wait for all the images to load first
//keeping this information up to date in two separate places is bad design.
//See if you can find some other way to do this


let imagesLoaded = false

var images = [
			'rocketParts/Nozzle.png',
			'rocketParts/frameBottom.png',
            'rocketParts/frameMiddle.png',
            'rocketParts/frameTop.png',
            'rocketParts/window.png',
            'rocketParts/noseCone.png',
            'rocketParts/sideBooster.png'
          ];
var imagesLoading = images.length;

// Image loader.
var loadImage = function(i) {
 var img = new Image();
 img.onload = function() {
   images[i] = img;
   --imagesLoading;
   // Call the complete callback when all images loaded.
   if (imagesLoading === 0) {
     imagesLoaded = true;
   }
 };
 img.src = images[i];
};

// Start to load all images
var i;
for(i = 0; i < imagesLoading; ++i) {
	loadImage(i);
}


myImages = [

]
