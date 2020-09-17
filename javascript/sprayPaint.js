class SprayPaint extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextDraft = contextDraft;
		this.contextReal = contextReal;
	}

	onMouseDown(coord, event) {
		isDrawing = true;
		this.contextDraft.lineJoin = "round";
		this.contextDraft.lineCap = "round";
		this.contextDraft.fillStyle = curStroke;
		this.contextDraft.beginPath();
		this.contextDraft.moveTo(coord[0], coord[1]);
	}

	onDragging(coord, event) {
		if (isDrawing) {
			for (var i = density; i--; ) {
				var radius = 10;
				var offsetX = getRandomInt(-radius, radius);
				var offsetY = getRandomInt(-radius, radius);
				this.contextDraft.fillRect(
					coord[0] + offsetX,
					coord[1] + offsetY,
					1,
					1
				);
			}
		}
	}

	onMouseMove() {}

	onMouseUp() {
		isDrawing = false;

		let snapshot = new Image();
		snapshot.src = canvasDraft.toDataURL();
		snapshot.onload = function () {
			contextReal.drawImage(snapshot, 0, 0);
			contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			cPush();
			console.log(cPushArray);
		};
	}
	onMouseLeave() {}
	onMouseEnter() {}
}
