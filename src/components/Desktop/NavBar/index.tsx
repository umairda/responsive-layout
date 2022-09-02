import React from 'react'
import Logo from '../../Logo'
import StartFreeTrialButton from '../../StartFreeTrialButton'
import styles from './NavBar.module.css'

function LeftNav() {
    return (
        <div className={styles.gap}>
            <a href="/" title="Product">Product</a>
            <a href="/" title="Features">Features</a>
            <a href="/" title="Marketplace">Marketplace</a>
            <a href="/" title="Company">Company</a>
        </div>
    )
}

function RightNav() {
    return (
        <div className={styles.gap}>
            <a href="/" title="Log in">Log in</a>
            <StartFreeTrialButton />
        </div>
    )
}

function NavBar() {
    return (
        <div className={styles.navBarContainer} >
            <Logo />
            <span className={styles.navContainer}>
                <LeftNav />
                <RightNav />
            </span>
        </div>
    )
}

export default NavBar