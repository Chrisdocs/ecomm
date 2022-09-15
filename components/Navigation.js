import React from "react";
import { useState } from "react";
import Link from "next/link";
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
						<Link href="/">
            <a ><HomeIcon /> Home</a>
						</Link>
          </li>
          <li>
					<Link href="/products">
            <a ><CategoryIcon /> Products</a>
					</Link>
          </li>
					<li>
					<Link href="/signin">
            <a ><LoginIcon /> Login</a>
					</Link>
          </li>
          <li>
					<Link href="/cart">
            <a ><ShoppingCartIcon /> Cart</a>
					</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
