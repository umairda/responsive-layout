import React from 'react'
import { ReactComponent as LogoIcon } from '../../../assets/Logo.svg'
import HamburgerMenu from '../HamburgerMenu'
import styles from './NavBar.module.css'

function NavBar() {
    return (
        <div className={styles.navBarContainer}>
            <LogoIcon height={30} width={33} />
            <HamburgerMenu />
        </div>
    )
}

export default NavBar