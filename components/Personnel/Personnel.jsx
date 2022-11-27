import Chefcard from './Chefcard/Chefcard'
import styles from './Personnel.module.css'
import Tesimonial from './Testimonial/Tesimonial'
import chef from '../../public/assets/chef.jpeg'
import chef2 from '../../public/assets/chef2.jpeg'
import chef3 from '../../public/assets/chef3.png'
import chef4 from '../../public/assets/chef4.jpeg'
import man from '../../public/assets/man.webp'
import blackwoman from '../../public/assets/blackwoman.webp'
import fati from '../../public/assets/Fati.webp'

const assets = [
    {
        name: "Chef Moe",
        img:chef,
        position: "Head Chef and Director"
        
    },
    {
        name: "Chef Isaak",
        img:chef2,
        position: "Assitant Head Chef"
        
    },
    {
        name: "Mr Ayobami Musa",
        img:chef3,
        position: "Intercontinental Chef"
        
    },
    {
        name: "Chef Treb Ron",
        img:chef4,
        position: "Traditional Chef"
        
    }
]
const Testimonials = [
    {
        img:fati,
        name:"Ansu Fati",
        work:"Footballer, lagos"

    },
    {
        img:man,
        name:"Tim Cook",
        work:"Web Developer, USA"

    },
    {
        img:blackwoman,
        name:"Tasha Haddish",
        work:"Food Critic, Abuja"

    }
]
const Personnel = () => {
  return (
    <div className={styles.personnel}>
        <h3>Team Members</h3>
        <h2>Our Master Chefs</h2>

        <div className={styles.chefs}>
           {
            assets.map((item,i)=> (
              <Chefcard name={item.name} position={item.position} img={item.img} key={i} />  
            ))
           } 
        </div>
        
        <h3>Testimonials</h3>
        <h2>{`Here's`} what our customers say!</h2>
        <div className={styles.testimonials}>
        {
            Testimonials.map((item,i)=> (
              <Tesimonial name={item.name} img={item.img} work={item.work} key={i} />  
            ))
           } 
        </div>

    </div>
  )
}

export default Personnel