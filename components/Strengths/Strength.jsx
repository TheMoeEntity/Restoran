import styles from './Strength.module.css'
import svg from '../../public/assets/wave.svg'
import Image from 'next/image'

const Strength = () => {
  return (
    <div className={styles.strength}>
        <div className={styles.svg}></div>
        <div className={styles.caption}>
                <h3>Our Strength</h3>
                <h2>Our Most Loved <span>Foods</span></h2>
        </div>
    </div>  
  )
}

export default Strength