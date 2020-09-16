class Redo extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
	}

	onMouseDown() {}
	onDragging() {}
	onMouseMove() {}

	onMouseUp(coord, event) {
		if (cStep < cPushArray.length - 1) {
			cStep++;
			console.log(cStep);
			var canvasPic = new Image();
			canvasPic.src = cPushArray[cStep];
			contextReal.clearRect(
				0,
				0,
				contextReal.canvas.width,
				contextReal.canvas.height
			);
			canvasPic.onload = function () {
				contextReal.drawImage(canvasPic, 0, 0);
			};
		}
	}
	onMouseLeave() {}
	onMouseEnter() {}
}
