class DrawingLine extends PaintFunction {
	// This class extends the PaintFunction class
	constructor(contextReal) {
		super();
		this.context = contextReal;
	}

	// On mouse down, ensure that the pen has these features
	onMouseDown(coord, event) {
		this.context.strokeStyle = curStroke;
		this.context.lineJoin = "round";
		this.context.lineCap = "round";
		this.context.lineWidth = curThick;
		this.context.beginPath();
		this.context.moveTo(coord[0], coord[1]);
		this.draw(coord[0], coord[1]);
	}
	onDragging(coord, event) {
		this.draw(coord[0], coord[1]);
	}

	onMouseMove() {}
	onMouseUp(coord, event) {
		//taking a snapshot on mouseup instead of counting each turn as individual unit
		// so that the line isn't broken into pieces when undo/redo
		let canvasPic = new Image();
		canvasPic.src = canvasReal.toDataURL();
		canvasPic.onload = function () {
			contextReal.drawImage(canvasPic, 0, 0);
			cPush();
		};
	}
	onMouseLeave() {}
	onMouseEnter() {}

	draw(x, y) {
		this.context.lineTo(x, y);
		this.context.moveTo(x, y);
		this.context.closePath();
		this.context.stroke();
	}
}
