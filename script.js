//your JS code here. If required.
let box1 = document.getElementById("square1")
let box2 = document.getElementById("square2")
let box3 = document.getElementById("square3")



box1.addEventListener("mouseover" ,() =>{
	box2.style.backgroundColor = "#6F4E37"
	box3.style.backgroundColor = "#6F4E37"
})



box2.addEventListener("mouseover" ,() =>{
	box1.style.backgroundColor = "#6F4E37"
	box3.style.backgroundColor = "#6F4E37"
})


box3.addEventListener("mouseover" ,() =>{
	box2.style.backgroundColor = "#6F4E37"
	box1.style.backgroundColor = "#6F4E37"
})


box1.addEventListener("mouseout" ,() =>{
	box2.style.backgroundColor = "#E6E6FA"
	box3.style.backgroundColor = "#E6E6FA"
})



box2.addEventListener("mouseout" ,() =>{
	box1.style.backgroundColor = "#E6E6FA"
	box3.style.backgroundColor = "#E6E6FA"
})


box3.addEventListener("mouseout" ,() =>{
	box2.style.backgroundColor = "#E6E6FA"
	box1.style.backgroundColor = "#E6E6FA"
})




// OR







// let boxes = document.getElementsByClassName("square");

// for (let i = 0; i < boxes.length; i++) {
//   boxes[i].addEventListener("mouseover", () => {
//     for (let j = 0; j < boxes.length; j++) {
//       if (i !== j) {
//         boxes[j].style.backgroundColor = "#6F4E37"; // Coffee
//       }
//     }
//   });

//   boxes[i].addEventListener("mouseout", () => {
//     for (let j = 0; j < boxes.length; j++) {
//       if (i !== j) {
//         boxes[j].style.backgroundColor = "#E6E6FA"; // Lavender
//       }
//     }
//   });
// }



