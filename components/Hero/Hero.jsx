import styles from './Hero.module.css'
import Image from 'next/image'
import cake from '../../public/assets/bg-hero.jpeg'
import grill from '../../public/assets/grill.png'
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

function Hero() {
    const [sidebar, setSideBar] = useState(false) 
    const spinRef = useRef(null)
    useEffect(()=> {
        spinRef.current.classList.add(styles.animateIn)
      },[])

  return (
    <div className={styles.hero}>
        <div className={styles.header}>
            <Header open={()=> setSideBar(true)} />
        </div>
        <Sidebar close={()=> setSideBar(false)} sidebar={sidebar} />
        <Image src={cake} alt="Hero Image" priority layout="fill" objectFit='cover' />
        <div className={styles.overlay}></div>
        <div className={styles.caption}>
        
        <ParallaxProvider>
            <Parallax speed={-10}>
            <motion.div
         initial="hidden" animate="visible"
         variants={{
            hidden: {
              x:'-100vw',
              opacity:0
            },
            visible: {
              x:0,
              opacity:1,
              transition: {
                delay: 1,
                duration:1,
                type:"spring",
                bounce:0.4
              }
            }
          }}
            >   
            <div>
                <div>
                    <h1>Enjoy Our <br/> Delicious Meal</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam optio nostrum nam quam rerum sunt suscipit quibusdam quas facilis, autem expedita ad, consequatur aperiam qui?</p>
                    <br />
                    <div className={styles.book}><button> BOOK A TABLE</button></div>
                </div>
            </div>
            </motion.div>
        </Parallax>
        </ParallaxProvider>
            <div>
                <div ref={spinRef} className={styles.spin}>
                    <Image className={`${styles.spinImg}`} src={grill} alt="grill" priority layout="fill" objectFit='cover' />
                </div>
            </div>

        </div>
    </div>
  )
}

export default Hero