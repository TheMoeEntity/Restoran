import styles from './Gallery.module.css'

const Gallery = () => {
  return (
    <div className={styles.gallery}>
        <div className={styles.caption}>
            <h3>Gallery</h3>
            <h2>Our Foods <span>Gallery</span></h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur <br /> adipisicing elit. Aperiam iusto nesciunt nisi, placeat inventore similique.
            </p>
        </div>
    </div>
  )
}

export default Gallery