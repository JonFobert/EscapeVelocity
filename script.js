//x 913 to 940   y 492 to 84

const canvas = document.querySelector('.animation');
const context = canvas.getContext('2d');

const splashQuestion = document.querySelector('.splash-question');
const form = document.querySelector('form');
const habitField = document.querySelector('#habit-field')
const completedButton = document.querySelector('.completed-button');

document.addEventListener('DOMContentLoaded', function() {
   splashQuestion.classList.add("no-task-entered")
}, false);

//Handling input and displaying the input at the bottom of the screen

let userHabit = ''

document.querySelector('.first-card').addEventListener('click', e => {
	console.log('fired!')
	document.querySelector('.first-card').classList.add('hidden')
	document.querySelector('.second-card').classList.remove('hidden')
});

document.querySelector('.second-card').addEventListener('click', e => {
	document.querySelector('.second-card').classList.add('hidden')
	document.querySelector('.third-card').classList.remove('hidden')
});

document.querySelector('.third-card').addEventListener('click', e => {
	document.querySelector('.third-card').classList.add('hidden')
	document.querySelector('.fourth-card').classList.remove('hidden')
});

document.querySelector('.fourth-card').addEventListener('click', e => {
	document.querySelector('.fourth-card').classList.add('hidden')
	document.querySelector('.fifth-card').classList.remove('hidden')
});


form.addEventListener("submit", e => {
	e.preventDefault();
	userHabit = habitField.value;
	splashQuestion.style.display = "none";
	createHabitEl();
	document.querySelector('.page-heading').classList.remove('heading-not-shown')
	document.querySelector('.page-heading').classList.add('heading-shown')
})

function dayUpdate() {
	document.querySelector('.test').firstChild.nodeValue = `Day ${DayCounter}`
	
	console.log("fired day update")
	console.log(document.querySelector('.test'))
}

function createHabitEl() {
	let headingNode = document.querySelector('.habit-heading');
	let headingTextNode = document.createTextNode(`My New Habit Will Be:`)
	headingNode.appendChild(headingTextNode);
	let valueNode = document.querySelector('.new-habit-value');
	let valueTextNode = document.createTextNode(`${userHabit}`)
	valueNode.appendChild(valueTextNode);
}

//create background image elements

let backgroundImg = document.createElement("img");
backgroundImg.src = "otherImages/backgroundNew.png";

let fenceImg = document.createElement("img");
fenceImg.src = "otherImages/fence.png";

let fuelEFImg = document.createElement("img");
fuelEFImg.src = "otherImages/EF.png"

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
let DayCounter = 1;
let fuelLevel = 0
let daysFuelAdded = 0
let runAnimation = true;
let alreadyAnimatedImages = [];
let startingYPos = -150;

//Draw the next frame. To do this you first need to draw the previously drawn parts in their final positions.
//Then, if the current part has reached it's final position draw it at it's final position and add it to the previously
//drawn images. Finally, set the variables up for the next image.
function drawImageDropFrame() {
	if (startingYPos >= imagesDimAndPos[nextImage].finalYPos) {
		drawPreviouslyDroppedImages();
		context.drawImage(imagesDimAndPos[nextImage].image,
				  //source rectangle
				  0, 0, imagesDimAndPos[nextImage].width, imagesDimAndPos[nextImage].height,
				  //destination rectange
				  imagesDimAndPos[nextImage].xPos, imagesDimAndPos[nextImage].finalYPos, 
				  imagesDimAndPos[nextImage].width, imagesDimAndPos[nextImage].height);
		context.drawImage(fenceImg,
				  0, 0, 446, 113,
				  259, 423, 446, 113)
		context.drawImage(fuelEFImg, 
					  0, 0, 960, 540,
					  0, 0, 960, 540)
		runAnimation = false;
		alreadyAnimatedImages.push(imagesDimAndPos[nextImage]);
		startingYPos = -150;
		nextImage++
		DayCounter++
		dayUpdate() 
	} else {
		//draw the already existing parts in their final positions
		drawPreviouslyDroppedImages();
		//draw the currrent part in it's next position
		context.drawImage(imagesDimAndPos[nextImage].image,
					  //source rectangle
					  0, 0, imagesDimAndPos[nextImage].width, imagesDimAndPos[nextImage].height,
					  //destination rectange
					  imagesDimAndPos[nextImage].xPos, startingYPos, 
					  imagesDimAndPos[nextImage].width, imagesDimAndPos[nextImage].height);
		startingYPos+= 6
		//draw the fence
		context.drawImage(fenceImg,
	  				  0, 0, 446, 113,
	  				  259, 423, 446, 113)
		context.drawImage(fuelEFImg, 
					  0, 0, 960, 540,
					  0, 0, 960, 540)
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

//x 913 to 940   y 492 to 84. 492 - 84 = 408


function drawAddFuel() {
	if (fuelLevel < (24 + daysFuelAdded * 24)) {
			console.log("called drawAddFuel()")
			context.rect(913, 492, 27, -fuelLevel)
			context.fillStyle = "red";
			context.fill();
			fuelLevel += 2
		}
	else {
		context.rect(913, 492, 27, -fuelLevel)
		context.fillStyle = "red";
		context.fill();
		daysFuelAdded++
		runAnimation = false
	}
}

function animateNextFrame() {
	context.clearRect(0, 0, canvas.width, canvas.height)
	drawBackground();
	if (nextImage < imagesDimAndPos.length) {
		drawImageDropFrame();
	} else {
		console.log("called animateNextFrame()")
		drawAddFuel()
	}
}

function main(time) {
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
	context.drawImage(fuelEFImg, 
			  0, 0, 960, 540,
			  0, 0, 960, 540)
}

//When the completed button is pressed draw the next image.
function drawNextImage() {
	//if (nextImage < imagesDimAndPos.length + 10) {
		runAnimation = true;
		requestAnimationFrame(main)
		
		console.log(daysFuelAdded)
	//}
}

let imagesLoaded = false
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


var images = [
			'otherImages/backgroundNew.png',
			'otherImages/fence.png',
			'otherImages/EF.png',
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
