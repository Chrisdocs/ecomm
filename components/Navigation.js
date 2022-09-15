import React from "react";
import { useState } from "react";
import styles from "../styles/Navigation.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import CategoryIcon from '@mui/icons-material/Category';
import HomeIcon from '@mui/icons-material/Home';

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleToggle = () => {
    setNavIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navBar}>
        <button onClick={handleToggle}>
          {navIsOpen ? <CloseIcon fontSize="large"/> : <MenuIcon fontSize="large"/>}
        </button>
        <ul className={navIsOpen ? styles.showMenu : styles.menuNav}>
          <li>
            <a href="/"><HomeIcon /> Home</a>
          </li>
          <li>
            <a href="/products"><CategoryIcon /> Products</a>
          </li>
					<li>
            <a href="/signin"><LoginIcon /> Login</a>
          </li>
          <li>
            <a href="/cart"><ShoppingCartIcon /> Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
