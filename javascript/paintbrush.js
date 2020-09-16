// to use the .shadowblur method we have to take a snapshot of the stroke (using toDataURL()) and
// push it into an array after drawn, otherwise all other items drawn will be affected by the shadow

class Paintbrush extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextDraft = contextDraft;
		this.contextReal = contextReal;
	}

	onMouseDown(coord, event) {
		this.contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
		this.contextDraft.strokeStyle = curStroke;
		this.contextDraft.lineJoin = "round";
		this.contextDraft.shadowColor = curStroke;
		this.contextDraft.shadowBlur = 5;
		this.contextDraft.lineWidth = 1;
		this.contextDraft.beginPath();
		this.contextDraft.moveTo(coord[0], coord[1]);
		this.draw(coord[0], coord[1], this.contextDraft);
	}
	onDragging(coord, event) {
		this.draw(coord[0], coord[1], this.contextDraft);
	}

	onMouseMove() {}
	onMouseUp() {
		//take a snapshot of canvasDraft and call it in canvasReal using drawImage method
		let snapshot = new Image();
		snapshot.src = canvasDraft.toDataURL();
		snapshot.onload = function () {
			contextReal.drawImage(snapshot, 0, 0);
			contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			cPush();
			// console.log(cPushArray);
		};
		//reset shadow blur on canvasDraft
		this.contextDraft.shadowBlur = 0;
		this.contextDraft.shadowColor = "";
	}
	onMouseLeave() {}
	onMouseEnter() {}

	draw(x, y, context) {
		context.lineTo(x, y);
		context.moveTo(x, y);
		context.stroke();
		context.closePath();
	}
}
