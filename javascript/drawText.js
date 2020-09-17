class Text extends PaintFunction {
	constructor(contextReal, contextDraft) {
		super();
		this.contextReal = contextReal;
		//this.contextDraft = contextDraft;
		this.input = document.createElement("input");
	}
	onMouseDown(coord, event) {
		this.contextReal.fillStyle = curFill;
		this.origX = coord[0];
		this.origY = coord[1];
		this.addInput(this.origX, this.origY);
	}
	addInput(x, y) {
		console.log("Hello");
		console.log(this.input.value);
		this.input.type = "text";
		this.input.style.position = "fixed";
		this.input.style.left = x + "px";
		this.input.style.top = y + "px";
		this.input.onkeydown = this.handleEnter;

		document.body.appendChild(this.input);
	}

	drawText(txt, x, y) {
		this.contextReal.textBaseline = "top";
		this.contextReal.textAlign = "left";
		this.contextReal.font = "50px serif";
		this.contextReal.fillStyle = curFill;
		this.contextReal.fillText(txt, x, y);
	}
	handleEnter = (event) => {
		console.log("this scope");
		console.log(this.input.value);
		var keyCode = event.keyCode;
		if (keyCode === 13) {
			this.drawText(this.input.value, this.origX, this.origY);

			document.body.removeChild(this.input);
		}
	};
}

function abc() {
	let a = 5;
	bcd();
	function bcd() {
		console.log(a);
	}
}

abc();
