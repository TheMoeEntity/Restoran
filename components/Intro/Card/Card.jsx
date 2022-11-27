import styles from './Card.module.css'

const Card = ({title,icon}) => {
  return (
    <div className={styles.Card}>
        <span><i className={icon} aria-hidden="true"></i></span>
        <span><h3>{title}</h3></span>
        <span><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quod omnis nam.</p></span>
    </div>
  )
}

export default Card