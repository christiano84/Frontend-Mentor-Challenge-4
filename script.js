function showMenu() {
  var nav = document.getElementById("navMenu")
  nav.style.right = '0'
  nav.classList.add('dimmer')
}

function hideMenu() {
  var nav = document.getElementById("navMenu")
  nav.style.right = '-300px'
  nav.classList.remove('dimmer')
}
