function showMenu() {
  var nav = document.getElementById("navMenu")
  nav.style.right = '0'
  nav.classList.add('dimmer')
}

function hideMenu() {
  var nav = document.getElementById("navMenu")
  nav.style.right = '-100%'
  nav.classList.remove('dimmer')
}