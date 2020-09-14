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
	$("#drawRectangle").click(() => {
		currentFunction = new DrawingRectangle(contextReal, contextDraft);
	});
	$("#drawFreehand").click(() => {
		currentFunction = new DrawingLine(contextReal);
	});
	$("#drawCircle").click(() => {
		currentFunction = new DrawingCircle(contextReal, contextDraft);
	});
	$("#line").click(() => {
		currentFunction = new DrawingStraightLine(contextReal, contextDraft);
	});
	$("#grid").click(() => {
		$("#canvas-grid").toggle();
	});
});

//credits
function credits() {
	var creditsBtn = document.getElementById("credits");
	var creditsPopup = document.getElementById("creditsPopup");
	var closeBtn = document.getElementById("closeBtn");

	creditsBtn.addEventListener("click", function () {
		creditsPopup.style.display = "block";
		closeBtn.style.display = "block";
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
