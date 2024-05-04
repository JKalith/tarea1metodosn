
import { useState } from 'react'
import styles from './NavBar.module.css';
//import logo from '../assets/GaussGenius.png'

const NavBar = () => {
  // adding the states 
  const [isActive, setIsActive] = useState(false);

  //add the active class
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  //clean up function to remove the active class
  const removeActive = () => {
    setIsActive(false)
  }
  return (
    <header className="App-header">
      <nav className={`${styles.navbar}`}>
        {/* logo */}
        <a href='#home' className={`${styles.logo}`}>GaussGenius </a>
        <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>Inicio</a>
          </li>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>GausJordan</a>
          </li>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>Jacobí</a>
          </li>
          <li onClick={removeActive}>
            <a href='#home' className={`${styles.navLink}`}>Analisis</a>
          </li>
        </ul>
        <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
          <span className={`${styles.bar}`}></span>
        </div>
      </nav>
    </header>
  );
}

export default NavBar
