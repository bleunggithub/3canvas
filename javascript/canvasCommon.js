//The canvas
const canvasR = document.getElementById("canvas-real");
const contextReal = canvasR.getContext("2d");
const canvasD = document.getElementById("canvas-draft");
const contextDraft = canvasD.getContext("2d");
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
canvasR.width = window.innerWidth;
canvasR.height = window.innerHeight - 75;
canvasD.width = window.innerWidth;
canvasD.height = window.innerHeight - 75;

// function description
$("#drawRectangle").hover(
	function () {
		$("#description").append("<span> draw rectangle</span>");
	},
	function () {
		$("#description").find("span").last().remove();
	}
);

$("#drawFreehand").hover(
	function () {
		$("#description").append("<span> pencil</span>");
	},
	function () {
		$("#description").find("span").last().remove();
	}
);

$("#paintbrush").hover(
	function () {
		$("#description").append("<span> paint brush</span>");
	},
	function () {
		$("#description").find("span").last().remove();
	}
);

$("#drawPolygon").hover(
	function () {
		$("#description").append("<span> draw polygon</span>");
	},
	function () {
		$("#description").find("span").last().remove();
	}
);

$("#bucket").hover(
	function () {
		$("#description").append("<span> bucket</span>");
	},
	function () {
		$("#description").find("span").last().remove();
	}
);

// implementing functions to buttons
$(() => {
	currentFunction = new DrawingLine(contextReal);
	$("#drawRectangle").click(() => {
		currentFunction = new DrawingRectangle(contextReal, contextDraft);
	});
	$("#drawFreehand").click(() => {
		currentFunction = new DrawingLine(contextReal);
	});
});
