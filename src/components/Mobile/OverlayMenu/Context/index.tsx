import React, { useContext, useState, ReactNode } from 'react';

export type OverlayInterface = {
    showOverlay: boolean;
    closeOverlay: () => void;
    openOverlay: () => void;
};

export const OverlayContext = React.createContext<OverlayInterface>({
    showOverlay: false,
    closeOverlay: () => {},
    openOverlay: () => {}
});

export const OverlayProvider = ({ children }: { children: ReactNode }) => {
    const [showOverlay, setShowOverlay] = useState(false);

    const closeOverlay = () => setShowOverlay(false);
    const openOverlay = () => setShowOverlay(true);

    return (
        <OverlayContext.Provider value={{ showOverlay, closeOverlay, openOverlay }}>
            {children}
        </OverlayContext.Provider>
    )
}

export const useOverlayContext = () => useContext(OverlayContext);
