var canvasWidth = canvasGrid.width;
var canvasHeight = canvasGrid.height;

function drawGrid() {
	for (var x = 0; x <= canvasWidth; x += 50) {
		contextGrid.moveTo(x, 0);
		contextGrid.lineTo(x, canvasHeight);
	}

	for (var x = 0; x <= canvasHeight; x += 50) {
		contextGrid.moveTo(0, x);
		contextGrid.lineTo(canvasWidth, x);
	}
	contextGrid.strokeStyle = "#afafaf";
	contextGrid.stroke();
}

drawGrid();
