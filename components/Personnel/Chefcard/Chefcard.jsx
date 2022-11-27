import styles from './Chefcard.module.css'
import Image from 'next/image'
import chef from '../../../public/assets/chef.jpeg'


const Chefcard = ({name,img,position}) => {
    const style = {fontSize:'20px',color:'white'}
  return (
    <div className={styles.Card}>
        <div className={styles.profile}> 
           <Image alt='chef image' src={img} layout="fill" fill objectFit='cover' /> 
        </div>
        <div className={styles.details}>
            <b>{name}</b>
            <h4>{position} at Moe Restoran</h4>
        </div>
        <div className={styles.socials}>
            <div>
                <span>
                    <i style={style} className="fa-brands fa-facebook"></i>
                </span>
                <span>
                    <i style={style} className="fa-brands fa-twitter"></i>
                </span>
                <span>
                    <i style={style} className="fa-brands fa-instagram"></i>
                </span>
            </div>

        </div>
    </div>
  )
}

export default Chefcard