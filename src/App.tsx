import React from 'react';
import MediaQuery from 'react-responsive';
import MobileLayout from './components/Mobile/Layout'
import DesktopLayout from './components/Desktop/Layout'
import styles from './App.module.css'
import { OverlayProvider } from './components/Mobile/OverlayMenu/Context';

function App() {
  return (
    <div className={styles.container}>
      <MediaQuery maxWidth={480}>
        <OverlayProvider>
          <MobileLayout />
        </OverlayProvider>
      </MediaQuery>
      <MediaQuery minWidth={481}>
        <DesktopLayout />
      </MediaQuery>
    </div>
  )
}

export default App;
