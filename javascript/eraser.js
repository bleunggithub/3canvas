/**********************************************
 * Drawing Line Functionality
 * ==================================
 ***********************************************/
class Eraser extends PaintFunction {
	// This class extends the PaintFunction class
	constructor(contextReal) {
		super();
		this.context = contextReal;
	}

	// On mouse down, ensure that the pen has these features
	onMouseDown(coord, event) {
		this.context.strokeStyle = "#ffffff";
		this.context.lineCap = "square";
		this.context.lineWidth = curThick;
		this.context.beginPath();
		this.context.moveTo(coord[0], coord[1]);
		this.draw(coord[0], coord[1]);
	}
	onDragging(coord, event) {
		this.draw(coord[0], coord[1]);
		cPush();
		// console.log(cPushArray);
	}

	onMouseMove() {}
	onMouseUp() {}
	onMouseLeave() {}
	onMouseEnter() {}

	draw(x, y) {
		this.context.lineTo(x, y);
		this.context.moveTo(x, y);
		this.context.closePath();
		this.context.stroke();
	}
}
