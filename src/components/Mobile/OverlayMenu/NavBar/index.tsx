import React from 'react'
import { ReactComponent as LogoIcon } from '../../../assets/Logo.svg'
import { ReactComponent as XIcon } from '../../../assets/X.svg'
import styles from './NavBar.module.css'

function CloseButton({ onClick }: { onClick: () => void;  }) {
    return (
        <button onClick={e => onClick()}>
            <XIcon height={12} width={12} />
        </button>
    )
}

function NavBar({ onClose }: { onClose: () => void;  }) {
    return (
        <div className={styles.navBarContainer}>
            <LogoIcon height={30} width={33} />
            <CloseButton onClick={onClose} />
        </div>
    )
}

export default NavBar