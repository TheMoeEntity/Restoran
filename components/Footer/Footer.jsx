import styles from './Footer.module.css'

const Footer = () => {
  return (
        
		<section id={styles.footer}>
            
			<div className={styles.first}>
                <div>
                    <span className={styles.zzlogo}>
                    <h2>Moe Restoran</h2>
                    </span>
                    
                </div>
                <div>
                    <div>
                        <h2>HOME</h2>
                        <span>
                            <h2>HOURS</h2>
                            <h4>Mon-Sat</h4>
                            <h4>10AM-6PM</h4>
                            <h4>Sun</h4>
                            <h4>12PM</h4>
                        </span>
                        <h2>About Me</h2>
                    </div>
                    <div>
                    <h2>OUR PROCESS</h2>
                    <span>
                        <h2>NEWS</h2>
                        <h4>Mon-Sat</h4>
                    </span>
                    <button>
                        INQUIRE
                    </button>
                    </div>
                </div>
                <div>
                    <span>
                        <i className='fa-solid fa-phone'></i>
                        (+234) 807-548-9362
                    </span>
                    <span>
                        <i className='fa-solid fa-envelope'></i>
                        mosesnwigberi@icloud.com
                    </span>
                    <span>
                        <i className='fa-solid fa-envelope'></i>
                        mosesnwigberi@gmail.com
                    </span>
                </div>
            </div>
            
            <div>
                <h2>Inquire/Contact Us</h2>
                Got any questions or message for us?
                <form>
                    <input required type="text" placeholder='First Name' />
                    <input required type="text" placeholder='Last Name' />
                    <input required type="email" placeholder='Your Email' />
                    <input required type="phone" placeholder='Your Phone' />
                    <textarea required name="" id="" placeholder='Your Message' cols="30" rows="10"></textarea>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>

		</section>
  )
}

export default Footer