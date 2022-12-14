import React from 'react'
import BadgeCallout from '../../BadgeCallout'
import DescriptionCallout from '../../DescriptionCallout'
import DetailsCallout from '../../DetailsCallout'
import Input from '../../Input'
import PitchCallout from '../../PitchCallout'
import StartFreeTrialButton from '../../StartFreeTrialButton'
import NavBar from '../NavBar'
import Overlay from '../OverlayMenu'
import { useOverlayContext } from '../OverlayMenu/Context'
import styles from './Layout.module.css'
import { ReactComponent as Graphics } from '../../../assets/Graphics.svg'

function Layout() {

    const { showOverlay, closeOverlay } = useOverlayContext()

    return (
        <>
            <Overlay />
            <div className={styles.mobileLayoutContainer} style={{ opacity: showOverlay ? 0.5 : 1 }} onClick={showOverlay ? closeOverlay : () => {}}>
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
                <div className={styles.graphicsContainer}>
                    <Graphics height={275} />
                </div>
            </div>
        </>
    )
}

export default Layout