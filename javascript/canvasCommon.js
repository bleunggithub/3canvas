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

// function description
$("#drawFreehand").hover(
	function () {
		$("#description1").append("<span> pencil</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#paintbrush").hover(
	function () {
		$("#description1").append("<span> paint brush</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#drawRectangle").hover(
	function () {
		$("#description1").append("<span> draw rectangle</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#drawTriangle").hover(
	function () {
		$("#description1").append("<span> draw triangle</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#drawCircle").hover(
	function () {
		$("#description1").append("<span> draw circle</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#drawStar").hover(
	function () {
		$("#description1").append("<span> draw star</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#drawPolygon").hover(
	function () {
		$("#description1").append("<span> draw polygon</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#text").hover(
	function () {
		$("#description1").append("<span> add text</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#line").hover(
	function () {
		$("#description1").append("<span> draw straight line</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#curveQuadratic").hover(
	function () {
		$("#description1").append(
			"<span> draw quadratic curve (single control point)</span>"
		);
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#curveBezier").hover(
	function () {
		$("#description1").append(
			"<span> draw bezier curve (multi-control points)</span>"
		);
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#bucket").hover(
	function () {
		$("#description2").append("<span> bucket</span>");
	},
	function () {
		$("#description2").find("span").last().remove();
	}
);
$("#eraser").hover(
	function () {
		$("#description2").append("<span> eraser</span>");
	},
	function () {
		$("#description2").find("span").last().remove();
	}
);
$("#thickness").hover(
	function () {
		$("#description2").append("<span> thickness</span>");
	},
	function () {
		$("#description2").find("span").last().remove();
	}
);
$("#dropper").hover(
	function () {
		$("#description2").append("<span> colours</span>");
	},
	function () {
		$("#description2").find("span").last().remove();
	}
);
$("#undo").hover(
	function () {
		$("#description3").append("<span> undo</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#redo").hover(
	function () {
		$("#description3").append("<span> redo</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#zoomIn").hover(
	function () {
		$("#description3").append("<span> zoom in</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#zoomOut").hover(
	function () {
		$("#description3").append("<span> zoom out</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#grid").hover(
	function () {
		$("#description3").append("<span> grid (50*50 pixel per grid)</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#save").hover(
	function () {
		$("#description3").append("<span> save</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
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
