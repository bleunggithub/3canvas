class Undo extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
	}

	onMouseDown() {}
	onDragging() {}
	onMouseMove() {}

	onMouseUp(coord, event) {
		if (cStep > -1) {
			cStep--;
			console.log(cStep);
			var canvasPic = new Image();
			//canvasPic becomes the image -1 step
			canvasPic.src = cPushArray[cStep];
			//clear the canvas
			contextReal.clearRect(
				0,
				0,
				contextReal.canvas.width,
				contextReal.canvas.height
			);
			//draw canvasPic from position 0,0
			canvasPic.onload = function () {
				contextReal.drawImage(canvasPic, 0, 0);
			};
		}
	}
	onMouseLeave() {}
	onMouseEnter() {}
}
