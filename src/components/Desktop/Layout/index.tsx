import React from 'react'
import BadgeCallout from '../../BadgeCallout'
import NavBar from '../NavBar'
import styles from './Layout.module.css'

function Layout() {
    return (
        <div className={styles.layoutContainer}>
            <NavBar />
            <div className={styles.insetContainer}>
                <div className={styles.badgeCalloutContainer}>
                    <BadgeCallout />
                </div>
            </div>
        </div>
    )
}

export default Layout