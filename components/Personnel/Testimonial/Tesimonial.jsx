import styles from './Testimonial.module.css'
import Image from 'next/image'
import grill from '../../../public/assets/grill.png'
import chef from '../../../public/assets/chef.jpeg'

const Testimonial = ({img,name,work}) => {
  return (
    <div className={styles.Card}>
        <div className={styles.quotes}>
            <i className="fas fa-quote-left"></i>
        </div>
        <span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis est ea omnis iure harum ratione aperiam fugiat at consequuntur ipsam hic, totam dolore voluptas repellat?</p></span>
        <span>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star" aria-hidden="true"></i>
            <i className="fa fa-star-half" aria-hidden="true"></i>
        </span>
        <span className={styles.profile}>
            <div className={styles.img}>
                <div>
                    <Image alt='food png' src={img} layout="fill" objectFit='cover' /> 
                </div>
            </div>
            <div>
                <b>- {name.toUpperCase()}</b> <br />
                <aside>{work}</aside>
            </div>
        </span>
        <div className={styles.food}>
            <Image alt='food png' src={grill} layout="fill" objectFit='cover' /> 
        </div>
    </div>
  )
}

export default Testimonial