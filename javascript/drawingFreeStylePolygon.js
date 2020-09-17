class DrawingFreeStylePolygon extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		//this.contextDraft = contextDraft;
		this.clickNum = 0;
		this.finished = false;
		this.fillOutput = [];
		this.contextReal.fillStyle = curFill;
		this.contextReal.strokeStyle = curStroke;
		this.contextReal.lineWidth = curThick;
	}
	onMouseDown(coord) {
		if (this.clickNum === 0) {
			this.realOrigX = coord[0];
			this.realOrigY = coord[1];
			this.origX = coord[0];
			this.origY = coord[1];
			this.clickNum++;
			this.fillOutput.push([this.realOrigX, this.realOrigY]);
			console.log(this.clickNum);
		} else if (
			this.clickNum > 0 &&
			coord[0] < this.realOrigX + 10 &&
			coord[0] > this.realOrigX - 10 &&
			coord[1] < this.realOrigY + 10 &&
			coord[1] > this.realOrigY - 10
		) {
			this.contextReal.lineTo(this.realOrigX, this.realOrigY);
			contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.output();
			this.origX = this.realOrigX;
			this.origY = this.realOrigY;
			this.finished = true;
		} else if (
			this.clickNum > 0 &&
			this.realOrigX !== coord[0] &&
			this.realOrigY !== coord[1]
		) {
			this.onMouseMove(coord);
			contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.contextReal.beginPath();
			this.contextReal.moveTo(this.origX, this.origY);
			this.contextReal.lineTo(coord[0], coord[1]);
			this.fillOutput.push([coord[0], coord[1]]);
			console.log(this.fillOutput);
			this.contextReal.stroke();
			this.origX = coord[0];
			this.origY = coord[1];
			this.clickNum++;
			console.log(this.clickNum);
		}
	}
	onDragging(coord) {}
	onMouseMove(coord) {
		if (this.finished == false) {
			contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			contextDraft.beginPath();
			contextDraft.moveTo(this.origX, this.origY);
			contextDraft.lineTo(coord[0], coord[1]);
			contextDraft.strokeStyle = curStroke;
			contextDraft.lineWidth = curThick;

			contextDraft.stroke();
		} else if (this.finished == true) {
			contextDraft.clearRect(0, 0, canvasDraft.width, canvasDraft.height);
			this.clickNum = 0;
			currentFunction = new DrawingFreeStylePolygon(contextReal);
			this.contextReal.fillStyle = curFill;
			this.contextReal.strokeStyle = curStroke;
			this.contextReal.lineWidth = curThick;
			console.log("finished");
			cPush();
			// console.log(cPushArray);
		}
	}
	onMouseUp(coord) {}
	onMouseLeave() {}
	onMouseEnter() {}
	output() {
		let point = this.fillOutput.length;
		let region = new Path2D();
		region.moveTo(this.fillOutput[0][0], this.fillOutput[0][1]);
		for (let i = 1; i < point; i++) {
			region.lineTo(this.fillOutput[i][0], this.fillOutput[i][1]);
		}
		region.closePath();
		this.contextReal.stroke(region);
		this.contextReal.fill(region);
	}
}
