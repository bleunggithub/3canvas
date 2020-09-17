class GeoLines extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextDraft = contextDraft;
		this.contextReal = contextReal;
		this.contextReal.lineCap = "round";
		this.contextReal.lineWidth = 1;
	}

	onMouseDown(coord, event) {
		isDrawing = true;
		points.push({ x: coord[0], y: coord[1] });
	}

	onDragging(coord, event) {
		if (!isDrawing) return;

		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		points.push({ x: coord[0], y: coord[1] });
		this.contextDraft.beginPath();
		this.contextDraft.moveTo(points[0].x, points[0].y);
		for (var i = 1; i < points.length; i++) {
			this.contextDraft.lineTo(points[i].x, points[i].y);
			var nearPoint = points[i - 15];
			if (nearPoint) {
				this.contextDraft.moveTo(nearPoint.x, nearPoint.y);
				this.contextDraft.lineTo(points[i].x, points[i].y);
			}
		}
		this.contextDraft.stroke();
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
		};
		points.length = 0;
	}

	onMouseLeave() {}
	onMouseEnter() {}
}
