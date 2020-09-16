class Bucket extends PaintFunction {
	// This class extends the PaintFunction class
	constructor(contextReal, contextDraft) {
		super();
		this.contextDraft = contextDraft;
		this.contextReal = contextReal;
	}
	onMouseDown() {}
	onDragging() {}
	onMouseMove() {}
	onMouseUp(coord, event) {
		toBucket(coord, this.contextReal);
		cPush();
		// console.log(cPushArray);
	}
	onMouseLeave() {}
	onMouseEnter() {}
}
// this solution uses the .getImageData function to access the RGBA colour
// of the pixel the user clicked (.getImageData returns an array),
// and then check adjacent pixels to see if the colours are the same.
// If the colours of the adjacent pixels (pixelStack)matches the pixel clicked,
// the pixels will be filled with a new colour by replacing the rgba values in imgData.

function toBucket(coord, context) {
	var newPos, x, y, pixelPos, reachLeft, reachRight;

	var imgData = context.getImageData(0, 0, canvasWidth, canvasHeight);

	var pixelData = context.getImageData(coord[0], coord[1], 1, 1);
	console.log(pixelData);
	var pixelStack = [coord];

	var startR = pixelData.data[0];
	var startG = pixelData.data[1];
	var startB = pixelData.data[2];

	//removing all spaces, brackets, etc.
	//result array : ["num","num","num","num"]
	var curFillRGBA = curFill
		.replace(/\s+/g, "")
		.split("(")[1]
		.split(")")[0]
		.split(",");

	while (pixelStack.length) {
		newPos = pixelStack.pop();
		x = newPos[0];
		y = newPos[1];

		// Get current pixel coordinates
		pixelPos = (y * canvasWidth + x) * 4;
		// console.log(pixelPos);

		// Go up the page as long as the colour matches
		while (y >= 0 && matchColour(pixelPos, startR, startG, startB, imgData)) {
			y--;
			pixelPos -= canvasWidth * 4;
		}

		pixelPos += canvasWidth * 4;
		y++;
		reachLeft = false;
		reachRight = false;

		// Go down the page as long as the colour matches and is in the canvas
		while (
			y <= canvasHeight - 1 &&
			matchColour(pixelPos, startR, startG, startB, imgData)
		) {
			y++;

			colourPixel(pixelPos, imgData, curFillRGBA);

			if (pixelPos === undefined || imgData.data[pixelPos] === undefined) {
				y = canvasHeight;
			}

			if (x > 0) {
				if (matchColour(pixelPos - 4, startR, startG, startB, imgData)) {
					if (!reachLeft) {
						// Add pixel to stack
						pixelStack.push([x - 1, y]);
						reachLeft = true;
					}
				} else if (reachLeft) {
					reachLeft = false;
				}
			}

			if (x < canvasWidth - 1) {
				if (matchColour(pixelPos + 4, startR, startG, startB, imgData)) {
					if (!reachRight) {
						// Add pixel to stack
						pixelStack.push([x + 1, y]);
						reachRight = true;
					}
				} else if (reachRight) {
					reachRight = false;
				}
			}

			pixelPos += canvasWidth * 4;
		}
	}
	context.putImageData(imgData, 0, 0);
}

//compare adjacent pixel colours
function matchColour(pixelPos, startR, startG, startB, imgData) {
	var r = imgData.data[pixelPos];
	var g = imgData.data[pixelPos + 1];
	var b = imgData.data[pixelPos + 2];

	return r == startR && g == startG && b == startB;
}

// colouring the pixels (changing the value in the .imgData rgba array and replace them by the currentfill colour)
function colourPixel(pixelPos, imgData, curFillRGBA) {
	imgData.data[pixelPos] = Number(curFillRGBA[0]);
	imgData.data[pixelPos + 1] = Number(curFillRGBA[1]);
	imgData.data[pixelPos + 2] = Number(curFillRGBA[2]);
	imgData.data[pixelPos + 3] = Math.round(Number(curFillRGBA[3]) * 255);
}
