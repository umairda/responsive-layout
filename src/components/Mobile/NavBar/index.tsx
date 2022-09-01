import React from 'react'
import Logo from '../../Logo'
import HamburgerMenu from '../HamburgerMenu'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className={styles.navBarContainer}>
            <Logo />
            <HamburgerMenu />
        </div>
    )
}

export default NavBar