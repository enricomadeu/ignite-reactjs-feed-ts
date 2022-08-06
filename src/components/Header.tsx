import styles from './Header.module.css'; // Import the stylesheet

import igniteLogo from '../assets/ignite-logo.svg'; // Import the ignite logo

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Ignite Logo" />
    </header>
  );
}