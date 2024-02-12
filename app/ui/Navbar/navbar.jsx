import Link from "next/link"
import { SiSteamdeck } from "react-icons/si";
import styles from "./navbar.module.sass"

const Navbar = () => {
     return (
          <div className={styles.container}>
               <div className={styles.logo}> <SiSteamdeck style={{ color: 'black', fontSize: '25px', fontWeight: 'bold', textAlign: 'center'}} />Teamway</div>
               <nav className={styles.nav}>
                    <ul className={styles.navlist}>
                         <li className={styles.list}><Link href={'/'}> Companies </Link></li>
                         <li className={styles.list}><Link href={'/'}> Members </Link></li>
                         <li className={styles.list}><Link href={'/'}> Society </Link></li>
                         <li className={styles.list}><Link href={'/About'}> About </Link></li>
                         <li className={styles.list}><Link href={'/Login'}> Login </Link></li>
                    </ul>
               </nav>
               <div className={styles.buttons}>
                    <button className={styles.button}>Join society</button>
                    <button className={styles.button}>Hire talent</button>
               </div>
          </div>
     )
}

export default Navbar