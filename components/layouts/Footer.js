import styles from './Footer.module.css'
import Link from 'next/link'

function Footer (){
    return <div className={styles.footer}>
          Coded with love by
        <Link
          href="https://www.github.io/jeraldlashy"
          target="_blank"
          rel="noopener noreferrer"
        >
           Jerald Lashy Jeffery
        </Link>
    </div>
}

export default Footer