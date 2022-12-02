export function animate(container,revealpoint=150,animation) {


    let widths = container.current.children
    let height = window.innerHeight

    for (const child of widths) {

        let revealTop = child.getBoundingClientRect().top;
        if (revealTop < height - revealpoint) {
          child.style.opacity= '1'
          child.style.transform = 'scale(1) translateY(0)'
        } 
    }

}