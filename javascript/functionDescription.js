// function description
$("#drawFreehand").hover(
	function () {
		$("#description1").append("<span> pencil</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#paintbrush").hover(
	function () {
		$("#description1").append("<span> paint brush</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#drawRectangle").hover(
	function () {
		$("#description1").append("<span> draw rectangle</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#drawTriangle").hover(
	function () {
		$("#description1").append("<span> draw polygon (fixed)</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#drawCircle").hover(
	function () {
		$("#description1").append("<span> draw circle</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);

$("#drawPolygon").hover(
	function () {
		$("#description1").append("<span> draw polygon (freehand)</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#text").hover(
	function () {
		$("#description1").append("<span> add text</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#line").hover(
	function () {
		$("#description1").append("<span> draw straight line</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#curveQuadratic").hover(
	function () {
		$("#description1").append(
			"<span> draw quadratic curve (single control point)</span>"
		);
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#curveBezier").hover(
	function () {
		$("#description1").append(
			"<span> draw bezier curve (multi-control points)</span>"
		);
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#bucket").hover(
	function () {
		$("#description1").append("<span> bucket</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#eraser").hover(
	function () {
		$("#description1").append("<span> eraser</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#thickness").hover(
	function () {
		$("#description1").append("<span> thickness</span>");
	},
	function () {
		$("#description1").find("span").last().remove();
	}
);
$("#pickr-container").hover(
	function () {
		$("#description2").append("<span> Fill colour</span>");
	},
	function () {
		$("#description2").find("span").last().remove();
	}
);
$("#pickr-container-outline").hover(
	function () {
		$("#description2").append("<span> Outline colour</span>");
	},
	function () {
		$("#description2").find("span").last().remove();
	}
);
$("#undo").hover(
	function () {
		$("#description3").append("<span> undo</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#redo").hover(
	function () {
		$("#description3").append("<span> redo</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#zoomIn").hover(
	function () {
		$("#description3").append("<span> zoom in</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#zoomOut").hover(
	function () {
		$("#description3").append("<span> zoom out</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#grid").hover(
	function () {
		$("#description3").append("<span> grid (50*50 pixel per grid)</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#save").hover(
	function () {
		$("#description3").append("<span> save</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
$("#credits").hover(
	function () {
		$("#description3").append("<span> credits</span>");
	},
	function () {
		$("#description3").find("span").last().remove();
	}
);
