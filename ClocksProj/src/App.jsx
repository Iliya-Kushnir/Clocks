import React from 'react';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'; 
import HomePage from './HomePage/HomePage.jsx'
import AllServicesPage from './AllServicesPage/AllServicesPage.jsx';
import ExamplesPage from './ExamplesPage/ExamplesPage.jsx';
import PricePage from './PricePage/PricePage.jsx';
import MechanicRepairPage from './MechanicWatchRepair/MechanicWatchRepair.jsx';
import PolishingPage from './PolishingPage/PolishingPage.jsx';
import BatteryPage from './BatteryPage/BatteryPage.jsx';
import StrapPage from './StrapPage/StrapPage.jsx';
import CleaningPage from './CleaningPage/CleaningPage.jsx';
import MajorRenovationPage from './MajorRenovationPage/MajorRenovationPage.jsx';
import DeliveryPage from './DeliveryPage/DeliveryPage.jsx';
import { LanguageProvider } from './LanguageContext/LanguageContext';
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx';
import ExperiencePage from './ExperiencePage/ExperiencePage.jsx';
import MarriageWatchPage from './Marriage_Watch_USSR_Molnija3602/MarriageWatch.jsx';
import './App.style.scss'

function App() {
  return (
    <>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-TNCLHCZ4"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

    <LanguageProvider>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/AllServices' element={<AllServicesPage />} />
          <Route path='/Examples' element={<ExamplesPage />} />
          <Route path='/PriceList' element={<PricePage />} />
          <Route path='/FirstService' element={<MechanicRepairPage />} />
          <Route path='/SecondService' element={<PolishingPage />} />
          <Route path='/ThirdService' element={<BatteryPage />} />
          <Route path='/FourthService' element={<StrapPage />} />
          <Route path='/FifthService' element={<CleaningPage />} />
          <Route path='/SixthService' element={<MajorRenovationPage />} />
          <Route path='/DeliveryPage' element={<DeliveryPage />} />
          <Route path='/ExperiencePage' element={<ExperiencePage />} />
          <Route path='/MarriagePage' element={<MarriageWatchPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    </>
  )
}

export default App