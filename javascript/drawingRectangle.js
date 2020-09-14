/**********************************************
 * Drawing Rectangle Functionality
 * ==================================
 ***********************************************/
// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clearRect
class DrawingRectangle extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
	}

	onMouseDown(coord, event) {
		this.contextReal.fillStyle = curFill;
		this.contextReal.strokeStyle = curStroke;
		this.contextReal.beginPath();

		this.origX = coord[0];
		this.origY = coord[1];
	}
	onDragging(coord, event) {
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		this.contextDraft.fillStyle = curFill;
		this.contextDraft.strokeStyle = curStroke;
		this.contextDraft.strokeRect(
			this.origX,
			this.origY,
			coord[0] - this.origX,
			coord[1] - this.origY
		);
		this.contextDraft.fillRect(
			this.origX,
			this.origY,
			coord[0] - this.origX,
			coord[1] - this.origY
		);
	}

	onMouseMove() {}
	onMouseUp(coord) {
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		this.contextReal.strokeRect(
			this.origX,
			this.origY,
			coord[0] - this.origX,
			coord[1] - this.origY
		);
		this.contextReal.fillRect(
			this.origX,
			this.origY,
			coord[0] - this.origX,
			coord[1] - this.origY
		);
	}
	onMouseLeave() {}
	onMouseEnter() {}
}
