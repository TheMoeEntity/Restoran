import styles from './Header.module.css'
import { motion } from 'framer-motion'

const Header = ({open}) => {
  return (
    <motion.div
    initial="hidden" animate="visible"
    variants={{
       hidden: {
         x:'100vw',
       },
       visible: {
         x:0,
         transition: {
           delay: .55,
           duration:1,
           type:"spring",
           bounce:0.55
         }
       }
     }}
    >
    <div className={styles.header}>
        <div className={styles.logo}>
            <h1><i className="fa fa-cutlery" aria-hidden="true"></i> Moe-Restoran</h1>
        </div>
        <div onClick={open} className={styles.hamburger}>
          <div>
          <div></div>
          <div></div>
          <div></div>
          </div>

        </div>
        <div className={styles.nav}>
        <ul>
            <li className={styles.active}>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Menu</li>
            <li>Pages</li>
            <li>Contact</li>
            <li><span>BOOK A TABLE</span></li>
        </ul>
        </div>

    </div>
    </motion.div>
  )
}

export default Header