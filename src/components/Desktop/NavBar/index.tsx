import React from 'react'
import Logo from '../../Logo'
import StartFreeTrialButton from '../../StartFreeTrialButton'
import styles from './NavBar.module.css'

function LeftNav() {
    return (
        <div>
            <Logo />
            <a href="" alt="Product">Product</a>
            <a href="" alt="Features">Features</a>
            <a href="" alt="Marketplace">Marketplace</a>
            <a href="" alt="Company">Company</a>
        </div>
    )
}

function RightNav() {
    return (
        <div>
            <a href="" alt="Log in">Log in</a>
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