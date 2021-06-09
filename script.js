document.getElementById('change-image').addEventListener('click', ChangeImage)
document.getElementById('change-text').addEventListener('click', ChangeText)
document.getElementById('hide-text').addEventListener('click', HideText)
document.getElementById('show-text').addEventListener('click', ShowText)
document.getElementById('background-color').addEventListener('click', ChangeBackgroundColor)

function ChangeImage () {
  document.getElementById("Image").src = "./images/wolf-two.jpg"
}

function ChangeText () {
  document.getElementById("text").innerHTML = "This is property of Andrea.B.Odumodu"
}

function HideText () {
  document.getElementById("text").style.display = "none"
}

function ShowText () {
  document.getElementById("text").style.display = "block"
}

function ChangeBackgroundColor () {
  document.body.style.backgroundColor = "blue"
}
