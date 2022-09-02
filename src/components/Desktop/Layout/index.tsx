import React from 'react'
import BadgeCallout from '../../BadgeCallout'
import DescriptionCallout from '../../DescriptionCallout'
import PitchCallout from '../../PitchCallout'
import StartFreeTrialButton from '../../StartFreeTrialButton'
import NavBar from '../NavBar'
import Input from '../../Input'
import styles from './Layout.module.css'
import DetailsCallout from '../../DetailsCallout'
import { ReactComponent as Graphics } from '../../../assets/Graphics.svg'
import MediaQuery from 'react-responsive'

function Layout() {
    return (
        <>
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
                        <StartFreeTrialButton color="#6366F1" />
                    </div>
                    <div className={styles.detailsCalloutContainer}>
                        <DetailsCallout />
                    </div>
                </div>
            </div>
            <MediaQuery minWidth={950}>
                <div className={styles.graphicsContainer}>
                    <Graphics height={600} />
                </div>
            </MediaQuery>
            <MediaQuery minWidth={500} maxWidth={949}>
                <div className={styles.graphicsContainerSmall}>
                    <Graphics height={400} />
                </div>
            </MediaQuery>
        </>
    )
}

export default Layout