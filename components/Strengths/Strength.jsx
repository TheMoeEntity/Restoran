import styles from './Strength.module.css'
import burger from '../../public/assets/feature_3_1.svg'
import burger2 from '../../public/assets/feature_3_2.svg'
import burger3 from '../../public/assets/feature_3_3.svg'
import Image from 'next/image'

const Strength = () => {
  return (
    <div className={styles.strength}>
        <div className={styles.svg}></div>
        <div className={styles.caption}>
                <h3>Our Strength</h3>
                <h2>Our Most Loved <span>Foods</span></h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Aperiam iusto nesciunt nisi, placeat inventore similique.
                </p>
        </div>

        <div className={styles.flexbox}>
            <div>
                <div>
                    <Image src={burger} alt="hamburger-Img" priority layout="fill" objectFit='contain' />
                </div>
                <h2>Fast Foods</h2>
                <p>Professionally fabricate e-business vortals and impactful core competencie. Compellingly impact technically sound</p>
            </div>
           
            <div>
                <div>
                  <Image src={burger2} alt="hamburger-Img" priority layout="fill" objectFit='contain' />
                </div>
                <h2>Healthy Foods</h2>
                <p>Professionally fabricate e-business vortals and impactful core competencie. Compellingly impact technically sound</p>
            </div>
            <div>
                <div>
                  <Image src={burger3} alt="hamburger-Img" priority layout="fill" objectFit='contain' />
                </div>
                <h2>Hygienic Foods</h2>
                <p>Professionally fabricate e-business vortals and impactful core competencie. Compellingly impact technically sound</p>
            </div>
        </div>
    </div>  
  )
}

export default Strength