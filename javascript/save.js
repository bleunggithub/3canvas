var saveButton = document.getElementById("save");
saveButton.addEventListener("click", function() {
  var imageName = prompt("Set the image name");
  var canvasDataURL = canvasReal.toDataURL();
  var a = document.createElement("a");
  a.href = canvasDataURL;
  a.download = imageName || "drawing";
  a.click();
});
