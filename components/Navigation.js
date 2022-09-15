import React from "react";
import { useState } from "react";
import styles from "../styles/Navigation.module.scss";

export default function Navigation() {
  const [navIsOpen, setNavIsOpen] = useState(false);

	const handleToggle = () => {
		setNavIsOpen(prev => !prev)
	}

  return (
    <div className={styles.navWrapper}>
      <nav className={styles.navBar}>
        <button className={styles.navToggle} onClick={handleToggle}>{navIsOpen ? "Close" : "Open"}</button>
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
