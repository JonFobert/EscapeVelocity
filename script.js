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

//create background image elements

let backgroundImg = document.createElement("img");
backgroundImg.src = "otherImages/background.png";

let fenceImg = document.createElement("img");
fenceImg.src = "otherImages/fence.png";

//create rocket image elements

let nozzleImg = document.createElement("img");
nozzleImg.src = "rocketParts/nozzle.png"

let frameBottomImg = document.createElement("img");
frameBottomImg.src = "rocketParts/frameBottom.png"

let frameMiddleImg = document.createElement("img");
frameMiddleImg.src = "rocketParts/frameMiddle.png"

let frameTopImg = document.createElement("img");
frameTopImg.src = "rocketParts/frameTop.png"

let rocketWindowImg = document.createElement("img");
rocketWindowImg.src = "rocketParts/window.png"

let noseConeImg = document.createElement("img");
noseConeImg.src = "rocketParts/noseCone.png"

let sideBoosterImg = document.createElement("img");
sideBoosterImg.src = "rocketParts/sideBooster.png"


//Define the location of the images for drawing.

	let nozzle = {
		image: nozzleImg,
		width: 68,
		height: 40,
		xPos: 450,
		finalYPos: 450
	};

	let frameBottom = {
		image: frameBottomImg,
		width: 68,
		height: 64,
		xPos: 450,
		finalYPos: 386
	};

	 let frameMiddleLower = {
	 	image: frameMiddleImg,
		width: 68,
		height: 64,
		xPos: 450,
		finalYPos: 322
	};

	let frameMiddleUpper = {
		image: frameMiddleImg,
		width: 68,
		height: 64,
		xPos: 450,
		finalYPos: 258
	};

	let frameTop = {
		image: frameTopImg,
		width: 68,
		height: 64,
		xPos: 450,
		finalYPos: 194
	};

	let rocketWindow = {
		image: rocketWindowImg,
		width: 28,
		height: 28,
		xPos: 470,
		finalYPos: 210
	};

	let noseCone = {
		image: noseConeImg,
		width: 68,
		height: 78,
		xPos: 450,
		finalYPos: 116
	};

	let leftSideBooster = {
		image: sideBoosterImg,
		width: 29,
		height: 170,
		xPos: 422,
		finalYPos: 315
	};

	let middleSideBooster = {
		image: sideBoosterImg,
		width: 29,
		height: 170,
		xPos: 468,
		finalYPos: 296
	}

	let rightSideBooster = {
		image: sideBoosterImg,
		width: 29,
		height: 170,
		xPos: 516,
		finalYPos: 315	
	}

let imagesDimAndPos = [nozzle, frameBottom, frameMiddleLower, frameMiddleUpper, 
					   frameTop, rocketWindow, noseCone, leftSideBooster,
					   middleSideBooster, rightSideBooster];

let nextImage = 0;
let runAnimation = true;
let alreadyAnimatedImages = [];
let startingYPos = 0;

//When the completed button is pressed draw the next image.
function drawNextImage() {
	if (nextImage < imagesDimAndPos.length) {
		runAnimation = true;
		console.log(runAnimation)
		animateDroppingPart()
		/*
		context.drawImage(imagesDimAndPos[nextImage].image,
				  //source rectangle
				  0, 0, imagesDimAndPos[nextImage].width, imagesDimAndPos[nextImage].height,
				  //destination rectange
				  imagesDimAndPos[nextImage].xPos,imagesDimAndPos[nextImage].yPos, 
				  imagesDimAndPos[nextImage].width, imagesDimAndPos[nextImage].height);
		/*holding off on the fence for now. May not be worth it
		if animating the drop of the part
		draw the fence each time to keep it in front
		context.drawImage(fenceImg,
		  				  0, 0, 446, 113,
		  				  259, 423, 446, 113)
		 */
	}
}



function animateDroppingPart() {
	requestAnimationFrame(main)
}

function drawImageDropFrame() {
	drawPreviouslyDroppedImages();
	context.drawImage(imagesDimAndPos[nextImage].image,
				  //source rectangle
				  0, 0, imagesDimAndPos[nextImage].width, imagesDimAndPos[nextImage].height,
				  //destination rectange
				  imagesDimAndPos[nextImage].xPos, startingYPos, 
				  imagesDimAndPos[nextImage].width, imagesDimAndPos[nextImage].height);
	++startingYPos
	if (startingYPos >= imagesDimAndPos[nextImage].finalYPos) {
		runAnimation = false;
		alreadyAnimatedImages.push(imagesDimAndPos[nextImage]);
		startingYPos = 0;
	}
}

function drawPreviouslyDroppedImages() {
	alreadyAnimatedImages.forEach(image => {
		context.drawImage(image.image,
				  //source rectangle
				  0, 0, image.width, image.height,
				  //destination rectange
				  image.xPos, image.finalYPos, 
				  image.width, image.height
		)
	});
	
}

function animateNextFrame() {
	context.clearRect(0, 0, canvas.width, canvas.height)
	drawBackground();
	drawImageDropFrame();
}

function main(time) {
	console.log(runAnimation)
	if(runAnimation) {
		requestAnimationFrame(main);
		//deltaTime = time - lastTime;
		//lastTime = time;
		animateNextFrame();

	}
}

//When the button is hit:
//	Drop the part down to it's position
//  stop at a specific point
//When the button is hit again
//	keep the first part it it's position
//	drop the second part down
//When the button is hit again etc...

//when you are dropping the first part you need to keep the second one stationary. To do this: when you reach the end of an image
//being dropped add that image and it's x and y pos to an array.
//Then when drawing the next image first loop through the array and draw the original images in their fixed positions.

function drawBackground() {
	imagesLoaded = true
	context.drawImage(backgroundImg, 
					  0, 0, 960, 540,
					  0, 0, 960, 540)
	context.drawImage(fenceImg,
					  0, 0, 446, 113,
					  259, 423, 446, 113)
}

let imagesLoaded = false
//This is dangerous, because if all the images are not yet loaded the button will not do anything.
//Consider a loading screen or a way to disable input.
completedButton.addEventListener('click', e => {
	if (imagesLoaded) {
		drawNextImage()
		nextImage++
	}
})

//adapted from https://stackoverflow.com/questions/31299509/call-a-function-when-html5-canvas-is-ready
//because the images load asychronously, wait for all the images to load first
//keeping this information up to date in two separate places is bad design.
//See if you can find some other way to do this


var images = [
			'otherImages/background.png',
			'otherImages/fence.png',
			'rocketParts/nozzle.png',
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
     drawBackground();
   }
 };
 img.src = images[i];
};

// Start to load all images
var i;
for(i = 0; i < imagesLoading; ++i) {
	loadImage(i);
}
