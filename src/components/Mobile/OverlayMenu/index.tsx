import React from 'react'
import StartFreeTrialButton from '../../StartFreeTrialButton';
import { useOverlayContext } from './Context';
import OverlayNavBar from './NavBar';
import styles from './Overlay.module.css'

function Overlay() {

    const { showOverlay } = useOverlayContext()

    return (
        <div className={showOverlay ? styles.overlayContainerOpen : styles.overlayContainerClosed}>
            {showOverlay && (
                <>
                    <OverlayNavBar />
                    <div className={styles.linksContainer}>
                        <a href="/" title="Product">Product</a>
                        <a href="/" title="Features">Features</a>
                        <a href="/" title="Marketplace">Marketplace</a>
                        <a href="/" title="Company">Company</a>
                    </div>
                    <div className={styles.freeTrialContainer}>
                        <StartFreeTrialButton color="#4F46E5" />
                    </div>
                    <div className={styles.loginContainer}>
                        <span>Existing customer?</span>
                        {" "}
                        <a href="/" title="login">Login</a>
                    </div>
                </>
            )}
        </div>
    )
}

export default Overlay