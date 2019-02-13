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


//create rocket image elemets

let rocketNozzle = document.createElement("img");
rocketNozzle.src = "rocketParts/picOne.png"
let rocketNozzleX = 0

console.log(rocketNozzle.src)

let rocketFrameBottom = document.createElement("img");
rocketFrameBottom.src = "rocketParts/spaceRocketParts_017.png"
let rocketFrameBottomX = 0

let rocketFrameTop = document.createElement("img");
rocketFrameTop.src = "rocketParts/spaceRocketParts_009.png"
let rocketFrameTopX = 0

let rocketWindow = document.createElement("img");
rocketWindow.src = "rocketParts/spaceRocketParts_015.png"
let rocketWindowX = 0

let rocketNoseCone = document.createElement("img");
rocketNoseCone.src = "rocketParts/spaceRocketParts_002.png"
let rocketNoseConeX = 0

let rocketSideBooster = document.createElement("img");
rocketSideBooster.src = "rocketParts/spaceRocketParts_020.png"
let rocketSideBoosterX = 0


function drawNextImage() {
	
}

function drawNozzle() {
	context.drawImage(rocketNozzle,
					  //source rectangle
					  0, 0, 68, 40,
					  //destination rectange. -1 to compensate for blank left of sprite
					  0,0,68,40);
}


//This is dangerous, because if all the images are not yet loaded the button will not do anything.
//Consider a loading screen or a way to disable input.
completedButton.addEventListener('click', e => {
	if (imagesLoaded) {
		drawNozzle()
	}
})


//adapted from https://stackoverflow.com/questions/31299509/call-a-function-when-html5-canvas-is-ready
//because the images load asychronously, wait for  all the images to load before calling the 
//main animation frame for the first time

let imagesLoaded = false

var images = [
			'rocketParts/picOne.png',
            'rocketParts/spaceRocketParts_017.png',
            'rocketParts/spaceRocketParts_009.png',
            'rocketParts/spaceRocketParts_015.png',
            'rocketParts/spaceRocketParts_002.png',
            'rocketParts/spaceRocketParts_020.png'
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

// Call upon all images loaded.
var workDone = function() {
	drawNozzle();
}

// Start to load all images
var i;
for(i = 0; i < imagesLoading; ++i) {
	loadImage(i);
}

