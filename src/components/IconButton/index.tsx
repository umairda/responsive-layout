import React, { ReactNode } from 'react'
import styles from './IconButton.module.css'

function IconButton({ children, onClick }: { children: ReactNode, onClick: () => void; }) {
    return (
        <button className={styles.iconButton} onClick={e => onClick()}>
            {children}
        </button>
    )
}

export default IconButton