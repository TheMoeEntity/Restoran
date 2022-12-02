import styles from './Dishcard.module.css'
import Image from 'next/image'
import grill from './../../../public/assets/grill.png'

const Dishcard = ({img,title,price}) => {
  return (
    <div className={styles.Card}>
        <div className={styles.img}>
            <Image layout='fill' objectFit='cover' src={img} alt="dish"/>
        </div>
        <div className={styles.description}>
            <div>
                Grill 
            </div>
            <div className={styles.rating}>
                <span>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star-half" aria-hidden="true"></i>
                </span>
                <span>(3.50)</span>
            </div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <h3>{price}</h3>
            </div> <br />
            <div className={styles.cart}>
                <i className="fa-solid fa-cart-plus"></i>
            </div>
        </div>
    </div>
  )
}

export default Dishcard