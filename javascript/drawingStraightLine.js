class DrawingStraightLine extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
	}
	onMouseDown(coord) {
		this.contextReal.fillStyle = "purple";
		this.origX = coord[0];
		this.origY = coord[1];
	}

	onDragging(coord) {
		//these part are affecting the Draft Canvas//
		this.contextDraft.fillStyle = "#f44";
		this.contextDraft.beginPath();
		this.contextDraft.moveTo(this.origX, this.origY);
		this.contextDraft.lineTo(coord[0], coord[1]);
		this.contextDraft.stroke();
	}

	onMouseUp(coord) {
		this.contextReal.fillStyle = "#f44";
		this.contextReal.beginPath();
		this.contextReal.moveTo(this.origX, this.origY);
		this.contextReal.lineTo(coord[0], coord[1]);
		this.contextReal.stroke();
	}
	onMouseLeave() {}
	onMouseEnter() {}
}
