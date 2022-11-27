import styles from './Header.module.css'

const Header = ({open}) => {
  return (
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
  )
}

export default Header