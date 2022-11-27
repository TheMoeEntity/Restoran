import styles from './Reservation.module.css'
import Image from 'next/image'
import restaurant from '../../public/assets/rest.webp'

const Reservation = () => {
  return (
    <div className={styles.reservation}>
        <Image src={restaurant} layout="fill" alt='Book reservation' objectFit='cover' />
        <div className={styles.overlay}></div>
        <div className={styles.form}>
            <div className={styles.about}>
                <span></span>
                <h3>Reservation</h3>
                <span></span>
            </div>
            <h2>Book a Table <span>Now!</span></h2> <br />
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni eaque necessitatibus beatae <br /> incidunt quas doloribus soluta fuga laborum. Asperiores, voluptate.</p>
 
            <form onSubmit={e => e.preventDefault()}>
                <div><input type="text" name="" id="" placeholder='20-20-20' /></div>
                <div><input type="text" name="" id="" placeholder='09:00AM' /></div>
                <div><input type="text" name="" id="" placeholder='Number of Guests' /></div>
                <div>
                    <textarea name="" id="" cols="60" rows="10" placeholder='Write a Message here...'></textarea>
                </div>
            </form>
            <div className={styles.submit}><button>Make Reservation</button></div>
        </div>
    </div>
  )
}

export default Reservation