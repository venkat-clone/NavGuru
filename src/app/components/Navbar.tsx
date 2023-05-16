import Link from 'next/link';
import styles from '../styles/navbar.module.css';
const Navbar = () => {
  return (

    <nav className={styles.navbar}>
      <div className={styles.navbar__title}>
        <Link href="/">
          Name
        </Link>
      </div>
      <ul className={styles.navbar__tabs}>
        <li>
          <Link href='/'>HOME</Link>
        </li>
        <li>
          <Link href='/'>SERVICES</Link>
        </li>
        <li>
          <Link href='/'>WORKFLOW</Link>
        </li>
        <li>
          <Link href='/'>CONTACT US</Link>
        </li>
      </ul>

    </nav>

  );
};

export default Navbar;
