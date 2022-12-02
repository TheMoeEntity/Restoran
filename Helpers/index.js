export function animate(container,revealpoint=150,galleryref,appear) {


    let widths = container.current.children
    let height = window.innerHeight

    for (const child of widths) {

        let revealTop = child.getBoundingClientRect().top;
        if (revealTop < height - revealpoint) {
          child.style.opacity= '1'
          child.style.transform = 'scale(1) translateY(0)'
        } 
    }

    const reveal = ()=> {
      let counter = 0
      const interval = setInterval(() => {
          if (counter == 3) {
            clearInterval(interval)
            setTimeout(() => {
              galleryref.current.parentNode.parentNode.children[1].classList.add(appear)
            }, 700);
            
          }
            
            galleryref.current.children[counter].classList.add(appear)
            counter++
        }, 550);
  }

  if (galleryref.current.getBoundingClientRect().top < height - revealpoint) {
    reveal()
  }

}