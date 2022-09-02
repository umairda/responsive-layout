import React from 'react'
import DetailsText from '../DetailsText'
import styles from './DetailsCallout.module.css'

function DetailsCallout() {
    return (
        <DetailsText>
            <span>
                Start your free 14-day trial, no credit card necessary.
                By providing your email, you agree to our{" "}
                <a className={styles.tosLink} href="/" title="Terms of Service">terms of service</a>
            </span>
        </DetailsText>
    )
}

export default DetailsCallout