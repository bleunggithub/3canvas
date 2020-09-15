class DrawingPolygon extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
	}

	onMouseDown(coord, event) {
		this.contextReal.strokeStyle = curStroke;
		this.contextReal.fillStyle = curFill;
		this.contextReal.beginPath();
		this.origX = coord[0];
		this.origY = coord[1];
	}
	onDragging(coord) {
		this.contextDraft.strokeStyle = curStroke;
		this.contextDraft.fillStyle = curFill;
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		var numberOfSides = 6;
		var size = Math.sqrt(
			Math.pow(this.origX - coord[0], 2) + Math.pow(this.origY - coord[1], 2)
		);
		this.contextDraft.beginPath();
		this.contextDraft.moveTo(
			this.origX + size * Math.cos(0),
			this.origY + size * Math.sin(0)
		);
		for (var i = 1; i <= numberOfSides; i += 1) {
			this.contextDraft.lineTo(
				this.origX + size * Math.cos((i * 2 * Math.PI) / numberOfSides),
				this.origY + size * Math.sin((i * 2 * Math.PI) / numberOfSides)
			);
		}
		this.contextDraft.lineWidth = 3;
		this.contextDraft.stroke();
	}
	onMouseUp(coord) {
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		var numberOfSides = 6;
		var size = Math.sqrt(
			Math.pow(this.origX - coord[0], 2) + Math.pow(this.origY - coord[1], 2)
		);
		this.contextReal.moveTo(
			this.origX + size * Math.cos(0),
			this.origY + size * Math.sin(0)
		);
		for (var i = 1; i <= numberOfSides; i += 1) {
			this.contextReal.lineTo(
				this.origX + size * Math.cos((i * 2 * Math.PI) / numberOfSides),
				this.origY + size * Math.sin((i * 2 * Math.PI) / numberOfSides)
			);
		}
		this.contextReal.lineWidth = 3;
		this.contextReal.stroke();
		this.contextReal.strokeStyle = curStroke;
	}
}
