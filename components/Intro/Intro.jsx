import styles from './Intro.module.css'
import Card from './Card/Card'
import Image from 'next/image'
import about1 from '../../public/assets/about-1.jpeg'
import about2 from '../../public/assets/about-2.jpeg'
import about3 from '../../public/assets/about-3.jpeg'
import about4 from '../../public/assets/about-4.jpeg'
import { useEffect } from 'react'
import { animate } from '../../Helpers'
import { useRef } from 'react'

const assets = [
    {
      title: "Master Chefs",
      icon: "fa-solid fa-user-tie"
    },
    { 
      title: "Quality Food",
      icon: "fa fa-cutlery"
    },
    {
      title: "Online Order",
      icon: "fa-solid fa-cart-plus"
    },
    {
      title: "24/7 Service",
      icon: "fa-solid fa-clock-rotate-left"
    }
  ]
const Intro = () => {

  const cardsref = useRef(null)

  useEffect(()=> {
    window.addEventListener('scroll', ()=> {
        animate(cardsref,120,styles.animateIn)
    })
  },[])

  return (
    <div className={styles.intro}>
        <div ref={cardsref} className={styles.desc}>
            {
            assets.map((item)=> (
                <Card key={Math.random()} title={item.title} icon={item.icon} />
            ))
            }
        </div>

        <div className={styles.gallery}>
          <div>
          <div className={styles.grid}>
                <div><Image objectFit='cover' alt='intro pictures' src={about1} layout="fill" /></div>
                <div>
                    <div className={styles.second}>
                        <Image objectFit='cover' alt='intro pictures' src={about2} layout="fill" />
                    </div>
                </div>
                <div>
                <div className={styles.third}>
                        <Image objectFit='cover' alt='intro pictures' src={about3} layout="fill" />
                    </div>
                </div>
                <div><Image objectFit='cover'  alt='intro pictures'src={about4} layout="fill" /></div>
            </div>
          </div>

            <div>
              <div className={styles.about}>
                <h3>About us</h3>
                <span></span>
              </div>
                <h2>Welcome to <span><i className="fa fa-cutlery" aria-hidden="true"></i></span> Moe Restoran</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur
                     adipisicing elit. Ea culpa numquam eveniet quidem labore 
                     alias voluptatum ab autem deleniti eum.
                </p>
                <p>
                    Lorem ipsum dolor, sit amet consectetur
                     adipisicing elit. Ea culpa numquam eveniet quidem labore 
                     alias voluptatum ab autem deleniti eum.
                </p>

                <div>
                    <div>
                        <div><h2>15</h2></div>
                        <div>years of <br /> <b>EXPERIENCE</b></div>
                    </div>
                    <div>
                    <div>
                        <h2>20</h2></div>
                        <div>popular master<br /> <b>CHEFS</b></div>
                    </div>
                </div>

                <button>READ MORE</button>
            </div>
        </div>
        
    </div>
  )
}

export default Intro