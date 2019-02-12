const canvas = document.querySelector('.animation');
const context = canvas.getContext('2d');

const splashQuestion = document.querySelector('.splash-question');
const form = document.querySelector('form');
const habitField = document.querySelector('#habit-field')


document.addEventListener('DOMContentLoaded', function() {
   splashQuestion.classList.add("no-task-entered")
}, false);

//Handling input and displaying the input at the bottom of the screen

let userHabit = ''

form.addEventListener("submit", e => {
	e.preventDefault();
	console.log(habitField.value)
	userHabit = habitField.value;
	console.log(userHabit)
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


function drawNozzle() {
	context.drawImage(rocketNozzle,
					  //source rectangle
					  0, 0, 68, 40,
					  //destination rectange. -1 to compensate for blank left of sprite
					  0,0,68,40);
}


function draw() {
	drawNozzle()
}



//adapted from https://stackoverflow.com/questions/31299509/call-a-function-when-html5-canvas-is-ready
//because the images load asychronously, wait for  all the images to load before calling the 
//main animation frame for the first time

var images = [
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
     workDone();
   }
 };
 img.src = images[i];
};

// Call upon all images loaded.
var workDone = function() {
	requestAnimationFrame(main)
}

// Start to load all images
var i;
for(i = 0; i < imagesLoading; ++i) {
	loadImage(i);
}

//resource for rAF and main loop: https://developer.mozilla.org/en-US/docs/Games/Anatomy
//main loop for the game. Keeps track of time and calls draw function to compute and 
//draw each frame once the player hits a button to start a game ("restart game" or "start game"). The
//main animation loop starts
let lastTime = 0;
function main(time) {
		requestAnimationFrame(main);
		deltaTime = time - lastTime;
		lastTime = time;
		draw(deltaTime, time);
}
