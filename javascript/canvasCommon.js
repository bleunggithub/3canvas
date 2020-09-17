//The canvas
const canvasReal = document.getElementById("canvas-real");
const contextReal = canvasReal.getContext("2d");
const canvasGrid = document.getElementById("canvas-grid");
const contextGrid = canvasGrid.getContext("2d");
const canvasDraft = document.getElementById("canvas-draft");
const contextDraft = canvasDraft.getContext("2d");

let currentFunction;
let dragging = false;

$("#canvas-draft").mousedown(function (e) {
	let mouseX = e.offsetX;
	let mouseY = e.offsetY;
	currentFunction.onMouseDown([mouseX, mouseY], e);
	dragging = true;
});

$("#canvas-draft").mousemove(function (e) {
	let mouseX = e.offsetX;
	let mouseY = e.offsetY;
	if (dragging) {
		currentFunction.onDragging([mouseX, mouseY], e);
	}
	currentFunction.onMouseMove([mouseX, mouseY], e);
});

$("#canvas-draft").mouseup(function (e) {
	dragging = false;
	let mouseX = e.offsetX;
	let mouseY = e.offsetY;
	currentFunction.onMouseUp([mouseX, mouseY], e);
});

$("#canvas-draft").mouseleave(function (e) {
	dragging = false;
	let mouseX = e.offsetX;
	let mouseY = e.offsetY;
	currentFunction.onMouseLeave([mouseX, mouseY], e);
});

$("#canvas-draft").mouseenter(function (e) {
	let mouseX = e.offsetX;
	let mouseY = e.offsetY;
	currentFunction.onMouseEnter([mouseX, mouseY], e);
});

/** # Class (all classes will have these methods) #
/*  ====================== */
class PaintFunction {
	constructor() {}
	onMouseDown() {}
	onDragging() {}
	onMouseMove() {}
	onMouseUp() {}
	onMouseLeave() {}
	onMouseEnter() {}
}

// resizing canvas to match height & width of browser
canvasReal.width = window.innerWidth;
canvasReal.height = window.innerHeight - 80;
canvasGrid.width = window.innerWidth;
canvasGrid.height = window.innerHeight - 80;
canvasDraft.width = window.innerWidth;
canvasDraft.height = window.innerHeight - 80;

// implementing functions to buttons
$(() => {
	currentFunction = new DrawingLine(contextReal);

	$("#drawFreehand").click(() => {
		currentFunction = new DrawingLine(contextReal);
	});
	$("#paintbrush").click(() => {
		currentFunction = new Paintbrush(contextReal, contextDraft);
	});
	$("#sprayPaint").click(() => {
		currentFunction = new SprayPaint(contextReal, contextDraft);
	});
	$("#drawRectangle").click(() => {
		currentFunction = new DrawingRectangle(contextReal, contextDraft);
	});
	$("#drawPolygon").click(() => {
		currentFunction = new DrawingFreeStylePolygon(contextReal, contextDraft);
	});
	$(".btn").click(() => {
		currentFunction = new DrawingPolygon(contextReal, contextDraft);
	});
	$("#drawCircle").click(() => {
		currentFunction = new DrawingCircle(contextReal, contextDraft);
	});
	$("#line").click(() => {
		currentFunction = new DrawingStraightLine(contextReal, contextDraft);
	});
	$("#curveQuadratic").click(() => {
		currentFunction = new DrawQcurve(contextReal);
	});
	$("#curveBezier").click(() => {
		currentFunction = new DrawBcurve(contextReal);
	});
	$("#bucket").click(() => {
		currentFunction = new Bucket(contextReal);
	});
	$("#eraser").click(() => {
		currentFunction = new Eraser(contextReal);
	});
	$("#grid").click(() => {
		$("#canvas-grid").toggle();
	});
	$("#undo").click(() => {
		currentFunction = new Undo(contextReal, contextDraft);
	});
	$("#redo").click(() => {
		currentFunction = new Redo(contextReal, contextDraft);
	});
	$("#text").click(() => {
		currentFunction = new Text(contextReal);
	});
});

//credits
function credits() {
	var creditsBtn = document.getElementById("credits");
	var creditsPopup = document.getElementById("creditsPopup");
	var closeBtn2 = document.getElementById("closeBtn2");

	creditsBtn.addEventListener("click", function () {
		creditsPopup.style.display = "block";
		closeBtn2.style.display = "block";
	});
}
credits();

//coordinates
$(window).mousemove(function (event) {
	var pageCoordX = event.clientX;
	var pageCoordY = event.clientY;

	$("#coordX").text(pageCoordX);
	$("#coordY").text(pageCoordY);
});

//polygonPopup
function polygonPopup() {
	var polygonBtn = document.getElementById("drawPolygonFixed");
	var pForm = document.getElementById("polygonInput");
	var pPopup = document.getElementById("polygonPopup");
	var closeBtn1 = document.getElementById("closeBtn1");
	var confirmBtn = document.getElementById("btn1");

	polygonBtn.addEventListener("click", function () {
		pPopup.style.display = "block";
		pForm.style.display = "block";
		closeBtn1.style.display = "block";
	});
	confirmBtn.addEventListener("click", function () {
		pPopup.style.display = "none";
	});
}
polygonPopup();

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function () {
	output.innerHTML = this.value;
};

//undo, redo
let cPushArray = new Array();
let cStep = -1;

function cPush() {
	cStep++;
	if (cStep < cPushArray.length) {
		cPushArray.length = cStep;
	}
	cPushArray.push(canvasReal.toDataURL());
}

//panzoom
const elem = document.getElementById("canvas-real");
const panzoom = Panzoom(elem);
const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");

zoomIn.addEventListener("click", panzoom.zoomIn);
zoomOut.addEventListener("click", panzoom.zoomOut);

//variable for paintbrushes
var isDrawing;
var density = 10;
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min) + 1) + min;
}
function getRandomFloat(min, max) {
	return Math.random() * (max - min) + min;
}

//thickness slider

const sliderThick = document.getElementById("thickRange");
var outputThick = document.getElementById("descriptionT");

function thicknessPopup() {
	sliderThick.addEventListener("click", function () {
		outputThick.innerHTML = `<span> ${sliderThick.value} px</span>`;
	});
}
thicknessPopup();

// Update the current slider value (each time you drag the slider handle)
sliderThick.oninput = function () {
	outputThick.innerHTML = `<span> ${this.value} px</span>`;
};

//define thickness
var curThick = 4;

sliderThick.oninput = function () {
	curThick = this.value;
};
