import React from 'react'
import { useOverlayContext } from './Context';
import OverlayNavBar from './NavBar';
import styles from './Overlay.module.css'

function Overlay() {
    return (
        <div className={styles.overlayContainer}>
            <OverlayNavBar />
        </div>
    )
}

export default Overlay