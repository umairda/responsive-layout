import React from 'react'
import styles from './ParagraphText.module.css'

function ParagraphText({ text }: { text: string }) {
    return (
        <p className={styles.paragraphTextContainer}>
            {text}
        </p>
    )
}

export default ParagraphText