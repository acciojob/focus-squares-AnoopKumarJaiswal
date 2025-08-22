//your JS code here. If required.
let box1 = document.getElementById("square1")
let box2 = document.getElementById("square2")
let box3 = document.getElementById("square3")
let box = document.getElementsByClassName("square")


box1.addEventListener("mouseenter" ,() =>{
	box2.style.backgroundColor = "#6F4E37"
	box3.style.backgroundColor = "#6F4E37"
})



box2.addEventListener("mouseenter" ,() =>{
	box1.style.backgroundColor = "#6F4E37"
	box3.style.backgroundColor = "#6F4E37"
})


box3.addEventListener("mouseenter" ,() =>{
	box2.style.backgroundColor = "#6F4E37"
	box1.style.backgroundColor = "#6F4E37"
})


box1.addEventListener("mouseleave" ,() =>{
	box2.style.backgroundColor = "#E6E6FA"
	box3.style.backgroundColor = "#E6E6FA"
})


box2.addEventListener("mouseleave" ,() =>{
	box3.style.backgroundColor = "#E6E6FA"
	box1.style.backgroundColor = "#E6E6FA"
})


box3.addEventListener("mouseleave" ,() =>{
	box2.style.backgroundColor = "#E6E6FA"
	box1.style.backgroundColor = "#E6E6FA"
})

// for (let i = 0; i < box.length; i++) {
//   box[i].addEventListener("mouseleave", () => {
//     for (let j = 0; j < box.length; j++) {
//       box[j].style.backgroundColor = "#E6E6FA"; // default color
//     }
//   });
// }





