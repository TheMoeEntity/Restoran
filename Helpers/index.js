
export function animate(container,revealpoint=150,galleryref,appear) {

    let height = window.innerHeight
    let widths = container.current.children
  
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

export function slide(container,revealpoint=150) {
  let height = window.innerHeight

  const reveal = ()=> {
    let counter = 0
    const interval = setInterval(() => {
        if (counter == 3) {
          clearInterval(interval)
        }
          
        container.current.children[1].children[counter].style.transform = 'translateY(0)'
        container.current.children[1].children[counter].style.opacity= '1'
        counter++
      }, 550);
  }


  if (container.current.getBoundingClientRect().top < height - revealpoint) {
    reveal()
  }
} 