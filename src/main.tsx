import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ViewAll from './pages/ViewAll.tsx'
import TestDrive from './pages/TestDrive.tsx'
import CurrentSpecials from './pages/CurrentSpecials.tsx'
import Over30MPG from './pages/Over30MPG.tsx'
import CreditApproval from './pages/CreditApproval.tsx'
import CalculateTrade from './pages/CalculateTrade.tsx'
import CalculatePayments from './pages/CalculatePayments.tsx'
import GetPreQualified from './pages/GetPreQualified.tsx'
import TradeOrSell from './pages/TradeOrSell.tsx'
import AutomotiveParts from './pages/AutomotiveParts.tsx'
import ShopFromHome from './pages/ShopFromHome.tsx'
import Services from './pages/Services.tsx'
import AboutUs from './pages/AboutUs.tsx'
import MapAndHours from './pages/MapAndHours.tsx'
import ContactUs from './pages/ContactUs.tsx'
import VehicleDetails from './pages/VehicleDetails.tsx'
import ProductDetails from './pages/ProductDetails.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/view-all" element={<ViewAll />} />
        <Route path="/test-drive" element={<TestDrive />} />
        <Route path="/current-specials" element={<CurrentSpecials />} />
        <Route path="/over-30-mpg" element={<Over30MPG />} />
        <Route path="/credit-approval" element={<CreditApproval />} />
        <Route path="/calculate-trade" element={<CalculateTrade />} />
        <Route path="/calculate-payments" element={<CalculatePayments />} />
        <Route path="/get-pre-qualified" element={<GetPreQualified />} />
        <Route path="/trade-or-sell" element={<TradeOrSell />} />
        <Route path="/automotive-parts" element={<AutomotiveParts />} />
        <Route path="/shop-from-home" element={<ShopFromHome />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/map-and-hours" element={<MapAndHours />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/vehicle/:id" element={<VehicleDetails />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
