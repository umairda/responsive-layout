import React from 'react'
import BadgeCallout from '../../BadgeCallout'
import DescriptionCallout from '../../DescriptionCallout'
import PitchCallout from '../../PitchCallout'
import StartFreeTrialButton from '../../StartFreeTrialButton'
import NavBar from '../NavBar'
import Input from '../../Input'
import styles from './Layout.module.css'
import DetailsCallout from '../../DetailsCallout'

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
                <div className={styles.emailSignupContainer}>
                    <Input placeholder="Enter your email" />
                    <StartFreeTrialButton />
                </div>
                <div className={styles.detailsCalloutContainer}>
                    <DetailsCallout />
                </div>
            </div>
        </div>
    )
}

export default Layout