
import styles from './Sidebar.module.css'
const Sidebar = ({sidebar,close}) => {


  return (
    <div style={{left:!sidebar ? '-100%':'0'}} className={styles.sidebar}>
        <div className={styles.content}>
        <div className={styles.logo}>
            <h2><i className="fa fa-cutlery" aria-hidden="true"></i> Moe-Restoran</h2>
        </div>
        <ul>
            <li><i className="fa-solid fa-angle-right"></i> Home</li>
            <li><i className="fa-solid fa-angle-right"></i> About</li>
            <li><i className="fa-solid fa-angle-right"></i> Service</li>
            <li><i className="fa-solid fa-angle-right"></i> Menu</li>
            <li><i className="fa-solid fa-angle-right"></i> Pages</li>
            <li><i className="fa-solid fa-angle-right"></i> Contact</li>
            <li><i className="fa-solid fa-angle-right"></i> Book a Table</li>
        </ul>
            <div onClick={close} className={styles.close}>
                &times;
            </div>
        </div>
    </div>
  )
}

export default Sidebar