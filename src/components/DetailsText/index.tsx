import React, { ReactNode } from 'react'
import styles from './DetailsText.module.css'

function DetailsText({ children }: { children: ReactNode }) {
    return (
        <p className={styles.detailsText}>
            {children}
        </p>
    )
}

export default DetailsText