import React from 'react'
import BadgeCallout from '../../BadgeCallout'
import DescriptionCallout from '../../DescriptionCallout'
import PitchCallout from '../../PitchCallout'
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
                <div className={styles.pitchCalloutContainer}>
                    <PitchCallout />
                </div>
                <div className={styles.descriptionCalloutContainer}>
                    <DescriptionCallout />
                </div>
            </div>
        </div>
    )
}

export default Layout