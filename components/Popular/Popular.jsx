import Dishcard from './DishCard/Dishcard'
import styles from './Popular.module.css'
import grill from './../../public/assets/grill.png'
import steak from './../../public/assets/bg-hero.jpeg'
import efoRiro from './../../public/assets/efo-riro.webp'
import firstsect from './../../public/assets/firstsect.webp'
import { useRef,useEffect } from 'react'
import { slide } from '../../Helpers'

const assets = [
  {
    title: "Roast Chicken",
    img: grill,
    price: "₦1,200.99"
  },
  {
    title: "Beef and Steak",
    img:steak,
    price: "₦2,000.99"
  },
  {
    title: "Eforiro and Beef",
    img: efoRiro,
    price: "₦750.99"
  },
  {
    title: "Ham and Chips",
    img: firstsect,
    price: "₦600.99"
  }
]
const Popular = () => {

  const container = useRef(null)
  useEffect(()=> {
    window.addEventListener("scroll", ()=> {
      slide(container,190)
    })
  },[])
  return (
    <div ref={container} className={styles.popular}>
        <div className={styles.caption}>
            <h3><span><i className="fa fa-cutlery" aria-hidden="true"></i></span>  Popular Menu</h3>
            <h2>Our Popular Delicious <span>Foods</span></h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing <br />Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, nulla esse at explicabo doloremque enim?</p>
            <br /><br /> 

        </div>
        <div className={styles.dishes}>
            {
              assets.map((item,i)=> (
                <Dishcard price={item.price} title={item.title} key={i} img={item.img} />
              ))
            }
            

        </div>

        <div className={styles.menu}>
            <button>View Full Menu</button>
        </div>
    </div>
  )
}

export default Popular