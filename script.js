let boxes = document.getElementsByClassName("square");

for (let i = 0; i < boxes.length; i++) {
  boxes[i].addEventListener("mouseover", () => {
    for (let j = 0; j < boxes.length; j++) {
      if (i !== j) {
        boxes[j].style.backgroundColor = "#6F4E37"; // Coffee
      }
    }
  });

  boxes[i].addEventListener("mouseout", () => {
    for (let j = 0; j < boxes.length; j++) {
      if (i !== j) {
        boxes[j].style.backgroundColor = "#E6E6FA"; // Lavender
      }
    }
  });
}
