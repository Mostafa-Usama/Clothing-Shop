let img1 = document.querySelectorAll(".img1")
let img2 = document.querySelectorAll(".img2")

let data = localStorage.getItem("data").split(",")
let storedImg1 = data[0]
let storedImg2 = data[1]


img1.forEach(ele => ele.src = storedImg1)
img2.forEach(ele => ele.src = storedImg2)



function changeImg(event) {
    let src = event.target.src
    console.log(src)
    img1[0].src = src
}