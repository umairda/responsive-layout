import React from 'react'
import { ReactComponent as HamburgerMenuIcon }  from '../../../assets/HamburgerMenu.svg'
import IconButton from '../../IconButton';

function HamburgerMenu({ onClick }: { onClick: () => void;  }) {
    return (
        <IconButton onClick={onClick}>
            <HamburgerMenuIcon />
        </IconButton>
    )
}

export default HamburgerMenu