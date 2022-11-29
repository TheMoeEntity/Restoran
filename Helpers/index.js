export function animate(element,revealpoint=150) {
    let height = window.innerHeight

    let revealTop = element.getBoundingClientRect().top
  
    if (revealTop < height - revealpoint) { 
      element.classList.add(styles.addWidth)
      container.current.classList.remove(styles.skills)
    } else {
      width.classList.remove(styles.addWidth)
      container.current.classList.add(styles.skills)
    }
}