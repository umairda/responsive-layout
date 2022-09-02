import React from 'react'
import styles from './StartFreeTrialButton.module.css'

function StartFreeTrialButton({ color }: { color?: string }) {
    return (
        <a
            className={styles.button}
            style={{ background: color }}
            href="/"
            title="Start Free Trial">Start Free Trial</a>
    )
}

StartFreeTrialButton.defaultProps = {
    color: "#4B5563"
}

export default StartFreeTrialButton