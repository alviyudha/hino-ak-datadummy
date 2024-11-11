import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from "./pages/Home"
import Vehicles from "./pages/Vehicles"
import Dealer from "./pages/Dealer"
import ErrorPage from "./pages/ErrorPage"
import VehiclesDetail from './pages/VehiclesDetail'
import BookingServices from './pages/BookingServices'
import CookieConsentComp from './components/CookieConsent'
import PrivacyPolicy from './pages/PrivacyPolicy'

function App() {


  return (
    <>
    <CookieConsentComp />
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Vehicles' element={<Vehicles />} />
          <Route path='vehicles/details/:modelName' element={<VehiclesDetail />} />
          <Route path='dealer' element={<Dealer />} />
          <Route path='booking-service' element={<BookingServices />} />
          <Route path='/privacy-policy' element={<PrivacyPolicy />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
