import './App.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInventoryDropdownOpen, setIsInventoryDropdownOpen] = useState(false)
  const [isFinanceDropdownOpen, setIsFinanceDropdownOpen] = useState(false)
  const [isMobileInventoryOpen, setIsMobileInventoryOpen] = useState(false)
  const [isMobileFinanceOpen, setIsMobileFinanceOpen] = useState(false)
  const [currentDay, setCurrentDay] = useState('')

  // Detect current day
  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = new Date().getDay()
    setCurrentDay(days[today])
  }, [])

  // Helper function to check if a day is today
  const isToday = (day: string) => {
    return day === currentDay
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobileInventoryOpen(false)
    setIsMobileFinanceOpen(false)
  }

  const toggleInventoryDropdown = () => {
    setIsInventoryDropdownOpen(!isInventoryDropdownOpen)
  }

  const closeInventoryDropdown = () => {
    setIsInventoryDropdownOpen(false)
  }

  const toggleFinanceDropdown = () => {
    setIsFinanceDropdownOpen(!isFinanceDropdownOpen)
  }

  const closeFinanceDropdown = () => {
    setIsFinanceDropdownOpen(false)
  }

  const toggleMobileInventory = () => {
    setIsMobileInventoryOpen(!isMobileInventoryOpen)
  }

  const toggleMobileFinance = () => {
    setIsMobileFinanceOpen(!isMobileFinanceOpen)
  }

  return (
    <div className="app">
      {/* Top Search Bar */}
      <div className="top-search-bar">
        <div className="search-container">
          <div className="search-box">
            <input type="text" placeholder="Search Inventory" />
            <button className="search-btn">🔍</button>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="top-header">
        <div className="header-container">
          <div className="logo-section">
            <img src="/gravity-motors-logo.svg" alt="Gravity Motors Logo" className="company-logo" />
            <h1 className="company-name">Gravity Motors</h1>
          </div>
          <div className="address-info">
            <p className="address-line">4040 Jonesboro Road</p>
            <p className="address-line">Forest Park, GA 30297 📍 Map</p>
            <p className="address-line">Sales & Service: 404-254-4131</p>
          </div>
        </div>
      </header>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
        <span className="hamburger-line"></span>
      </button>

      {/* Main Navigation */}
      <nav className="main-nav">
        <Link to="/" className="nav-link">HOME</Link>
        <div 
          className="nav-dropdown"
          onMouseEnter={() => setIsInventoryDropdownOpen(true)}
          onMouseLeave={() => setIsInventoryDropdownOpen(false)}
        >
          <button className="nav-link dropdown-toggle">
            INVENTORY <span className="dropdown-arrow">▼</span>
          </button>
          <div className={`dropdown-menu ${isInventoryDropdownOpen ? 'show' : ''}`}>
            <Link to="/view-all" className="dropdown-item">VIEW ALL</Link>
            <Link to="/test-drive" className="dropdown-item">SCHEDULE A TEST DRIVE</Link>
            <Link to="/current-specials" className="dropdown-item">CURRENT SPECIALS</Link>
            <Link to="/over-30-mpg" className="dropdown-item">OVER 30 MPG</Link>
          </div>
        </div>
        <Link to="/trade-or-sell" className="nav-link">TRADE OR SELL YOUR CAR</Link>
        <Link to="/automotive-parts" className="nav-link">AUTOMOTIVE PARTS</Link>
        <div 
          className="nav-dropdown"
          onMouseEnter={() => setIsFinanceDropdownOpen(true)}
          onMouseLeave={() => setIsFinanceDropdownOpen(false)}
        >
          <button className="nav-link dropdown-toggle">
            FINANCE <span className="dropdown-arrow">▼</span>
          </button>
          <div className={`dropdown-menu ${isFinanceDropdownOpen ? 'show' : ''}`}>
            <Link to="/credit-approval" className="dropdown-item">CREDIT APPROVAL</Link>
            <Link to="/calculate-trade" className="dropdown-item">CALCULATE YOUR TRADE</Link>
            <Link to="/calculate-payments" className="dropdown-item">CALCULATE PAYMENTS</Link>
            <Link to="/get-pre-qualified" className="dropdown-item">GET PRE-QUALIFIED</Link>
          </div>
        </div>
        <Link to="/view-all" className="nav-link">SHOP FROM HOME</Link>
        <Link to="/services" className="nav-link">SERVICES</Link>
        <Link to="/about-us" className="nav-link">ABOUT US</Link>
      </nav>

      {/* Mobile Side Navigation */}
      <div className={`mobile-nav-overlay ${isMobileMenuOpen ? 'active' : ''}`} onClick={closeMobileMenu}></div>
      <nav className={`mobile-nav ${isMobileMenuOpen ? 'active' : ''}`}>
        <button className="mobile-nav-close" onClick={closeMobileMenu}>✕</button>
        <Link to="/" className="mobile-nav-link" onClick={closeMobileMenu}>HOME</Link>
        
        {/* Mobile Inventory Dropdown */}
        <div className="mobile-dropdown">
          <button className="mobile-nav-link mobile-dropdown-toggle" onClick={toggleMobileInventory}>
            INVENTORY <span className={`mobile-arrow ${isMobileInventoryOpen ? 'open' : ''}`}>▼</span>
          </button>
          <div className={`mobile-dropdown-menu ${isMobileInventoryOpen ? 'open' : ''}`}>
            <Link to="/view-all" className="mobile-dropdown-item" onClick={closeMobileMenu}>VIEW ALL</Link>
            <Link to="/test-drive" className="mobile-dropdown-item" onClick={closeMobileMenu}>SCHEDULE A TEST DRIVE</Link>
            <Link to="/current-specials" className="mobile-dropdown-item" onClick={closeMobileMenu}>CURRENT SPECIALS</Link>
            <Link to="/over-30-mpg" className="mobile-dropdown-item" onClick={closeMobileMenu}>OVER 30 MPG</Link>
          </div>
        </div>

        <Link to="/trade-or-sell" className="mobile-nav-link" onClick={closeMobileMenu}>TRADE OR SELL YOUR CAR</Link>
        <Link to="/automotive-parts" className="mobile-nav-link" onClick={closeMobileMenu}>AUTOMOTIVE PARTS</Link>
        
        {/* Mobile Finance Dropdown */}
        <div className="mobile-dropdown">
          <button className="mobile-nav-link mobile-dropdown-toggle" onClick={toggleMobileFinance}>
            FINANCE <span className={`mobile-arrow ${isMobileFinanceOpen ? 'open' : ''}`}>▼</span>
          </button>
          <div className={`mobile-dropdown-menu ${isMobileFinanceOpen ? 'open' : ''}`}>
            <Link to="/credit-approval" className="mobile-dropdown-item" onClick={closeMobileMenu}>CREDIT APPROVAL</Link>
            <Link to="/calculate-trade" className="mobile-dropdown-item" onClick={closeMobileMenu}>CALCULATE YOUR TRADE</Link>
            <Link to="/calculate-payments" className="mobile-dropdown-item" onClick={closeMobileMenu}>CALCULATE PAYMENTS</Link>
            <Link to="/get-pre-qualified" className="mobile-dropdown-item" onClick={closeMobileMenu}>GET PRE-QUALIFIED</Link>
          </div>
        </div>

        <Link to="/view-all" className="mobile-nav-link" onClick={closeMobileMenu}>SHOP FROM HOME</Link>
        <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>SERVICES</Link>
        <Link to="/about-us" className="mobile-nav-link" onClick={closeMobileMenu}>ABOUT US</Link>
        <Link to="/map-and-hours" className="mobile-nav-link" onClick={closeMobileMenu}>MAP AND HOURS</Link>
        <Link to="/contact-us" className="mobile-nav-link" onClick={closeMobileMenu}>CONTACT US</Link>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">WELCOME TO GRAVITY MOTORS</h1>
          <div className="vehicle-search">
            <select className="vehicle-select">
              <option>Select Vehicle Make</option>
              <option>BMW</option>
              <option>Mercedes-Benz</option>
              <option>Audi</option>
              <option>Cadillac</option>
              <option>Volkswagen</option>
              <option>Infiniti</option>
            </select>
            <select className="vehicle-select">
              <option>Select Vehicle Model</option>
            </select>
            <button className="search-inventory-btn">Search Inventory</button>
          </div>
          <div className="scroll-indicator">⌄</div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="service-grid">
        <Link to="/view-all" className="service-box">
          <h3>Pre-Owned Vehicles</h3>
          <p>High Quality Selection</p>
        </Link>
        <Link to="/calculate-payments" className="service-box">
          <h3>Finance</h3>
          <p>Get Pre-approved Online</p>
        </Link>
        <Link to="/automotive-parts" className="service-box">
          <h3>Automotive Parts</h3>
          <p>View Details</p>
        </Link>
        <Link to="/trade-or-sell" className="service-box">
          <h3>Sell Us Your Car</h3>
          <p>Fast & Easy</p>
        </Link>
      </section>

      {/* Browse Inventory */}
      <section className="browse-inventory">
        <h2>BROWSE INVENTORY</h2>
        <div className="inventory-filters">
          <select className="filter-select">
            <option>Select Vehicle Make</option>
            <option>BMW</option>
            <option>Mercedes-Benz</option>
            <option>Audi</option>
            <option>Cadillac</option>
            <option>Volkswagen</option>
            <option>Infiniti</option>
          </select>
          <select className="filter-select">
            <option>Select Vehicle Model</option>
          </select>
          <button className="search-inventory-btn">Search Inventory</button>
        </div>
      </section>

      {/* Featured Vehicles */}
      <section className="featured-vehicles">
        <h2>FEATURED VEHICLES</h2>
        <div className="vehicle-carousel">
          <div className="vehicle-card">
            <div className="favorite-icon">♡</div>
            <div className="vehicle-image">
              <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=400&h=300&fit=crop" alt="2019 Infiniti Q50" />
            </div>
            <div className="vehicle-info">
              <p className="vehicle-price">$18,599</p>
              <p className="vehicle-name">2019 INFINITI<br/>Q50</p>
            </div>
          </div>
          <div className="vehicle-card">
            <div className="favorite-icon">♡</div>
            <div className="vehicle-image">
              <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop" alt="2021 BMW" />
            </div>
            <div className="vehicle-info">
              <p className="vehicle-price">$46,999</p>
              <p className="vehicle-name">2021 BMW</p>
            </div>
          </div>
          <div className="vehicle-card">
            <div className="favorite-icon">♡</div>
            <div className="vehicle-image">
              <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400&h=300&fit=crop" alt="2019 Cadillac XTS" />
            </div>
            <div className="vehicle-info">
              <p className="vehicle-price">$17,999</p>
              <p className="vehicle-name">2019 CADILLAC<br/>XTS</p>
            </div>
          </div>
          <div className="vehicle-card">
            <div className="favorite-icon">♡</div>
            <div className="vehicle-image">
              <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop" alt="2024 Mercedes-Benz EQS" />
            </div>
            <div className="vehicle-info">
              <p className="vehicle-price">$60,599</p>
              <p className="vehicle-name">2024 MERCEDES-BENZ<br/>EQS</p>
            </div>
          </div>
          <div className="vehicle-card">
            <div className="favorite-icon">♡</div>
            <div className="vehicle-image">
              <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop" alt="2022 Volkswagen Passat" />
            </div>
            <div className="vehicle-info">
              <p className="vehicle-price">$20,999</p>
              <p className="vehicle-name">2022 VOLKSWAGEN<br/>PASSAT</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Department */}
      <section className="service-department">
        <div className="service-content">
          <h2>SERVICE DEPARTMENT</h2>
          <p>Visit our Service Department to Schedule Service</p>
          <button className="schedule-btn">Schedule Service</button>
        </div>
      </section>

      {/* Get In Touch */}
      <section className="get-in-touch">
        <h2>GET IN TOUCH</h2>
        <div className="map-container">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2!2d-84.3544!3d33.6562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f51cedf7c5c3c5%3A0x0!2s4040%20Jonesboro%20Rd%2C%20Forest%20Park%2C%20GA%2030297!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GRAVITY MOTORS</h3>
            <p>4040 Jonesboro Road</p>
            <p>Forest Park, GA 30297</p>
            <p>Sales: 404-254-4131</p>
           
          </div>
          <div className="footer-section">
            <h3>ABOUT US</h3>
            <p>Our name says it all at Gravity Motors Inc. We are the source in the Forest Park area for car shoppers looking for an impressive selection of high-line pre-owned vehicles. We have a wide variety of luxury cars in different makes and models, all offered at the best price possible. We offer models from all of the top high-line names: Mercedes, BMW, Audi, Cadillac, Land Rover, Jaguar, Infiniti, Audi, Porsche, Tesla and many more.</p>
            <p style={{ marginTop: '15px' }}>If you are looking to upgrade your current car to something with a little more style, Gravity Motors Inc is here to help. Take a look at our inventory to learn more about everything we have to offer our Forest Park customers.</p>
          </div>
          <div className="footer-section">
            <h3>HOURS OF OPERATION</h3>
            <div className="hours-table">
              <div className="hours-row">
                <span className={isToday('Monday') ? 'current-day' : ''}>Monday:</span>
                <span className={isToday('Monday') ? 'current-day' : ''}>9:00 a.m. - 7:00 p.m.</span>
              </div>
              <div className="hours-row">
                <span className={isToday('Tuesday') ? 'current-day' : ''}>Tuesday:</span>
                <span className={isToday('Tuesday') ? 'current-day' : ''}>9:00 a.m. - 7:00 p.m.</span>
              </div>
              <div className="hours-row">
                <span className={isToday('Wednesday') ? 'current-day' : ''}>Wednesday:</span>
                <span className={isToday('Wednesday') ? 'current-day' : ''}>9:00 a.m. - 7:00 p.m.</span>
              </div>
              <div className="hours-row">
                <span className={isToday('Thursday') ? 'current-day' : ''}>Thursday:</span>
                <span className={isToday('Thursday') ? 'current-day' : ''}>9:00 a.m. - 7:00 p.m.</span>
              </div>
              <div className="hours-row">
                <span className={isToday('Friday') ? 'current-day' : ''}>Friday:</span>
                <span className={isToday('Friday') ? 'current-day' : ''}>9:00 a.m. - 7:00 p.m.</span>
              </div>
              <div className="hours-row">
                <span className={isToday('Saturday') ? 'current-day' : ''}>Saturday:</span>
                <span className={isToday('Saturday') ? 'current-day' : ''}>9:00 a.m. - 7:00 p.m.</span>
              </div>
              <div className="hours-row">
                <span className={isToday('Sunday') ? 'current-day' : ''}>Sunday:</span>
                <span className={isToday('Sunday') ? 'current-day' : ''}>Closed</span>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-links">
            <a href="#terms">Terms of Use</a>
            <span>|</span>
            <a href="#privacy">Privacy Policy</a>
            <span>|</span>
            <a href="#sitemap">Site Map</a>
            <span>|</span>
            <a href="#email">Email</a>
          </div>
          <p>© Copyright 2026 Gravity Motors</p>
          <div className="social-icons">
            <a href="#facebook" className="social-icon">f</a>
            <a href="#twitter" className="social-icon">𝕏</a>
          </div>
        </div>
      </footer>

      {/* Chat Widgets */}
      <div className="chat-widgets">
        <button className="chat-btn text-btn">
          <span className="chat-icon">💬</span> Text us
        </button>
        <button className="chat-btn live-chat-btn">
          <span className="chat-icon">💬</span> Live chat
        </button>
      </div>

      {/* Sidebar Buttons */}
      <div className="sidebar-buttons">
        <button className="sidebar-btn sidebar-phone" title="Call Us">📱</button>
        <button className="sidebar-btn sidebar-email" title="Email Us">✉️</button>
        <button className="sidebar-btn sidebar-location" title="Location">📍</button>
        <button className="sidebar-btn sidebar-contact" title="Contact">💬</button>
      </div>
    </div>
  )
}

export default App
