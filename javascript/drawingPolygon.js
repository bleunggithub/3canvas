//--Drawing Polygon---//
class DrawingPolygon extends PaintFunction {
  constructor(contextReal, contextDraft) {
    super();
    this.contextReal = contextReal;
    this.contextDraft = contextDraft;
  }
  onMouseDown(coord, event) {
    this.contextReal.fillStyle = "#f44";
    this.origX = coord[0];
    this.origY = coord[1];
  }
  onDragging() {}
  onMouseMove() {}
  onMouseUp() {}
  onMouseLeave() {}
  onMouseEnter() {}

  drawPolygon(sides, angles) {
    var coordinates = [];
    let radius = Math.sqrt(
      Math.pow(this.origX - coord[0], 2) + Math.pow(this.origY - coord[1], 2)
    );

    for (let index = 0; index < sides; index++) {
      coordinates.push({
        x: this.origX + radius * Math.cos(angle),
        y: this.origY - radius * Math.sign(angle),
      });
      angle += (2 * Math.PI) / sides;
    }
    contextDraft.beginPath();
  }
}
