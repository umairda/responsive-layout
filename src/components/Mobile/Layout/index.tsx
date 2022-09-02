import React from 'react'
import BadgeCallout from '../../BadgeCallout'
import DescriptionCallout from '../../DescriptionCallout'
import DetailsCallout from '../../DetailsCallout'
import Input from '../../Input'
import PitchCallout from '../../PitchCallout'
import StartFreeTrialButton from '../../StartFreeTrialButton'
import NavBar from '../NavBar'
import styles from './Layout.module.css'

function Layout() {
    return (
        <div className={styles.mobileLayoutContainer}>
            <NavBar />
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
                <StartFreeTrialButton color="#6366F1" />
            </div>
            <div className={styles.detailsCalloutContainer}>
                <DetailsCallout />
            </div>
        </div>
    )
}

export default Layout