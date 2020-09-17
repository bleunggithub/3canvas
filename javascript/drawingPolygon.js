class DrawingPolygon extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		this.contextDraft = contextDraft;
	}

	onMouseDown(coord, event) {
		this.contextReal.strokeStyle = curStroke;
		this.contextReal.fillStyle = curFill;

		this.origX = coord[0];
		this.origY = coord[1];
	}
	onDragging(coord) {
		let value = document.getElementById("myRange");
		let input = value.valueAsNumber;
		this.contextDraft.strokeStyle = curStroke;
		this.contextDraft.fillStyle = curFill;
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		var numberOfSides = input;

		//this is the radius a2+b2=C2//
		var size = Math.sqrt(
			Math.pow(this.origX - coord[0], 2) + Math.pow(this.origY - coord[1], 2)
		);

		var startAngle = coord[1] * 0.005;
		this.contextDraft.moveTo(
			this.origX + size * Math.cos(startAngle), // starting X coord.
			this.origY - size * Math.sin(startAngle) //starting Y coord.
		);
		this.contextDraft.beginPath();
		for (var i = 1; i <= numberOfSides; i += 1) {
			let rotateAngle = i * ((2 * Math.PI) / numberOfSides);
			this.contextDraft.lineTo(
				this.origX +
					size * Math.cos(startAngle + i * ((2 * Math.PI) / numberOfSides)),
				this.origY -
					size * Math.sin(startAngle + i * ((2 * Math.PI) / numberOfSides))
			);
		}
		this.contextDraft.closePath();
		this.contextDraft.lineWidth = curThick;
		this.contextDraft.stroke();
		this.contextDraft.fill();
	}
	onMouseUp(coord) {
		let value = document.getElementById("myRange");
		let input = value.valueAsNumber;
		this.contextReal.strokeStyle = curStroke;
		this.contextReal.fillStyle = curFill;
		this.contextReal.lineWidth = curThick;

		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		var numberOfSides = input;

		//this is the radius a2+b2=C2//
		var size = Math.sqrt(
			Math.pow(this.origX - coord[0], 2) + Math.pow(this.origY - coord[1], 2)
		);

		var startAngle = coord[1] * 0.005;
		this.contextReal.moveTo(
			this.origX + size * Math.cos(startAngle), // starting X coord.
			this.origY - size * Math.sin(startAngle) //starting Y coord.
		);
		this.contextReal.beginPath();
		for (var i = 1; i <= numberOfSides; i += 1) {
			let rotateAngle = i * ((2 * Math.PI) / numberOfSides);
			this.contextReal.lineTo(
				this.origX +
					size * Math.cos(startAngle + i * ((2 * Math.PI) / numberOfSides)),
				this.origY -
					size * Math.sin(startAngle + i * ((2 * Math.PI) / numberOfSides))
			);
		}
		this.contextReal.closePath();
		this.contextReal.stroke();
		this.contextReal.fill();

		this.contextReal.strokeStyle = curStroke;
		this.contextReal.lineWidth = curThick;

		cPush();
		// console.log(cPushArray);
	}
}
