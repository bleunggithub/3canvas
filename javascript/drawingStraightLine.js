class DrawingStraightLine extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
	}
	onMouseDown(coord) {
		this.contextReal.strokeStyle = curStroke;
		this.contextReal.lineWidth = 3;
		this.origX = coord[0];
		this.origY = coord[1];
		this.contextReal.beginPath();
		this.contextReal.moveTo(this.origX, this.origY);
	}

	onDragging(coord) {
		//these part are affecting the Draft Canvas//
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		this.contextDraft.strokeStyle = curStroke;
		this.contextDraft.lineWidth = 3;
		this.contextDraft.beginPath();
		this.contextDraft.moveTo(this.origX, this.origY);
		this.contextDraft.lineTo(coord[0], coord[1]);
		this.contextDraft.stroke();
	}

	onMouseUp(coord) {
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		this.contextReal.strokeStyle = curStroke;
		this.contextReal.lineTo(coord[0], coord[1]);
		this.contextReal.stroke();
	}
	onMouseLeave() {}
	onMouseEnter() {}
}
