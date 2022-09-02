import React from 'react'
import styles from './Badge.module.css'

function Badge({ text }: { text: string }) {
    return (
        <div className={styles.badge}>{text}</div>
    )
}

export default Badge