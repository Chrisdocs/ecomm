import React from "react";
import { useState } from "react";
import styles from "../styles/Navigation.module.scss";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const handleToggle = () => {
    setNavIsOpen((prev) => !prev);
  };

  console.log(MenuIcon);

  return (
    <div className={styles.navWrapper}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <nav className={styles.navBar}>
        <button onClick={handleToggle}>
          {navIsOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
        <ul className={navIsOpen ? styles.showMenu : styles.menuNav}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/cart">Cart</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
