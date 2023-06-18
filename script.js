window.onload = () => {
    let btn = document.querySelector(".Hamburger")
    let menu = document.querySelector(".menu")
    if (window.outerWidth < 604){
        menu.style.display = "none"
    }
    btn.addEventListener ("click" , () => {
        if(menu.style.display == "none"){
            menu.style.display = "flex"
        } else {
            menu.style.display = "none"
        }
    })

   function handleResize() {
  if (window.outerWidth > 604) {
    menu.style.display = "flex"
  } else {
    menu.style.display = "none"
  }
}

window.addEventListener('resize', handleResize);
}