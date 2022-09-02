import React from 'react'
import { ReactComponent as LogoIcon } from '../../../assets/Logo.svg'
import HamburgerMenu from '../HamburgerMenu'
import { useOverlayContext } from '../OverlayMenu/Context'
import styles from './NavBar.module.css'

function NavBar() {

    const { openOverlay } = useOverlayContext()

    return (
        <div className={styles.navBarContainer}>
            <LogoIcon height={30} width={33} />
            <HamburgerMenu onClick={openOverlay}  />
        </div>   
    )
}

export default NavBar