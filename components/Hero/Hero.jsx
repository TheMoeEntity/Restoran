import styles from './Hero.module.css'
import Image from 'next/image'
import cake from '../../public/assets/bg-hero.jpeg'
import grill from '../../public/assets/grill.png'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'

function Hero() {
    const [sidebar, setSideBar] = useState(false) 

  return (
    <div className={styles.hero}>
        <div className={styles.header}>
            <Header open={()=> setSideBar(true)} />
        </div>
        <Sidebar close={()=> setSideBar(false)} sidebar={sidebar} />
        <Image src={cake} alt="Hero Image" priority layout="fill" objectFit='cover' />
        <div className={styles.overlay}></div>
        <div className={styles.caption}>
            <div>
                <div>
                    <h1>Enjoy Our <br/> Delicious Meal</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam optio nostrum nam quam rerum sunt suscipit quibusdam quas facilis, autem expedita ad, consequatur aperiam qui?</p>
                    <br />
                    <div className={styles.book}><button>BOOK A TABLE</button></div>
                </div>
            </div>
            <div>
                <div className={styles.spin}>
                    <Image src={grill} alt="grill" priority layout="fill" objectFit='cover' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero