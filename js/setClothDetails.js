
let x = document.getElementById("")

function cloth(event) {
    let img1 = event.target.previousElementSibling.getAttribute("src")
    let img2 = event.target.getAttribute("src")
    let data = [img1, img2]
    console.log(data)
    localStorage.setItem("data", data)
}