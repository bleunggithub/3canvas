// resizing canvas to match height & width of browser
const canvasR = document.getElementById("canvas-real");
const canvasD = document.getElementById("canvas-draft");

console.log(canvasD);
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
// $(() => {
// 	currentFunction = new DrawingLine(contextReal);
// 	$("#drawRect").click(() => {
// 		currentFunction = new DrawingRectangle(contextReal, contextDraft);
// 	});
// 	$("#drawFreehand").click(() => {
// 		currentFunction = new DrawingLine(contextReal);
// 	});
// });
