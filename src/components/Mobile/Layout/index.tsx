import React from 'react'
import NavBar from '../NavBar'
import styles from './Layout.module.css'

function Layout() {
    return (
        <div className={styles.mobileLayoutContainer}>
            <NavBar />
        </div>
    )
}

export default Layout