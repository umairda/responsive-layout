import React from 'react'
import { ReactComponent as LogoIcon } from '../../../../assets/Logo.svg'
import { ReactComponent as XIcon } from '../../../../assets/X.svg'
import IconButton from '../../../IconButton';
import { useOverlayContext } from '../Context';
import styles from './NavBar.module.css'

function NavBar() {

    const { closeOverlay } = useOverlayContext()

    return (
        <div className={styles.navBarContainer}>
            <LogoIcon height={30} width={33} />
            <IconButton onClick={closeOverlay}>
                <XIcon height={12} width={12} />
            </IconButton>
        </div>
    )
}

export default NavBar