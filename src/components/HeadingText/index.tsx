import React from 'react'
import styles from './HeadingText.module.css'

function HeadingText({ text, color }: { text:string, color: string }) {
    return (
        <h1 className={styles.h1} style={{ color }}>{text}</h1>
    )
}  

HeadingText.defaultProps = {
    color: '#ffffff'
}

export default HeadingText