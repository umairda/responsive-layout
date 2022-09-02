import React from 'react';
import { useMediaQuery } from 'react-responsive';
import MobileLayout from './components/Mobile/Layout'
import DesktopLayout from './components/Desktop/Layout'
import styles from './App.module.css'
import { OverlayProvider } from './components/Mobile/OverlayMenu/Context';

function App() {
  /*
  const isMobile = useMediaQuery({
    query: "(min-device-width: 480px)",
  });

  const isTablet = useMediaQuery({
    query: "(min-device-width: 768px)",
   });
   */
  
  const isDesktop = useMediaQuery({
    query: "(min-device-width: 1200px)",
  });

  return (
    <div className={styles.container}>
      {isDesktop ? <DesktopLayout /> :
        <OverlayProvider>
          <MobileLayout />
        </OverlayProvider>
      }
    </div>
  )
}

export default App;
