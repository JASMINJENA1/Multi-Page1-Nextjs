import Link from 'next/link';
import styles from '../../app/components/Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/api-data">API Data</Link></li>
      </ul>
    </nav>
  );
}
