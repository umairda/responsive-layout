import React from 'react'
import { ReactComponent as ArrowRight } from '../../assets/ArrowRight.svg'
import Badge from '../Badge'
import styles from './BadgeCallout.module.css'

function BadgeCallout() {
    return (
        <div className={styles.calloutContainer}>
            <Badge text="We're Hiring" />
            <div className={styles.callout}>Visit our careers page</div>
            <a href="/" title="Visit our careers page">
                <ArrowRight width={6} height={10} />
            </a>
        </div>
    )
}

export default BadgeCallout