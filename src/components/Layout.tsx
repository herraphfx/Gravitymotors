import { useState, useEffect, ReactNode } from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
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
            <Link to="/" className="company-name" style={{ textDecoration: 'none', color: 'white' }}>
              Gravity Motors
            </Link>
          </div>
          <div className="address-info">
            <p className="address-line">3591 Stone Mountain Highway 78 W</p>
            <p className="address-line">Snellville, GA 30039 📍 Map</p>
            <p className="address-line">Sales & Service: 770-982-3733</p>
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
        <Link to="/shop-from-home" className="nav-link">SHOP FROM HOME</Link>
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

        <Link to="/shop-from-home" className="mobile-nav-link" onClick={closeMobileMenu}>SHOP FROM HOME</Link>
        <Link to="/services" className="mobile-nav-link" onClick={closeMobileMenu}>SERVICES</Link>
        <Link to="/about-us" className="mobile-nav-link" onClick={closeMobileMenu}>ABOUT US</Link>
      </nav>

      {/* Page Content */}
      {children}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>GRAVITY MOTORS</h3>
            <p>3591 Stone Mountain Highway 78 W</p>
            <p>Snellville, GA 30039</p>
            <p>Sales: 770-982-3733</p>
            <div className="footer-badges">
              <img src="https://via.placeholder.com/60x40/4A90E2/FFFFFF?text=BBB" alt="BBB Accredited" />
              <img src="https://via.placeholder.com/60x40/0066CC/FFFFFF?text=Dealer" alt="Dealer Badge" />
            </div>
          </div>
          <div className="footer-section">
            <h3>ABOUT US</h3>
            <p>Our name says it all at Gravity Motors Inc. We are the source in the Snellville area for car shoppers looking for an impressive selection of high-line pre-owned vehicles. We have a wide variety of luxury cars in different makes and models, all offered at the best price possible. We offer models from all of the top high-line names: Mercedes, BMW, Audi, Cadillac, Land Rover, Jaguar, Infiniti, Audi, Porsche, Tesla and many more.</p>
            <p style={{ marginTop: '15px' }}>If you are looking to upgrade your current car to something with a little more style, Gravity Motors Inc is here to help. Take a look at our inventory to learn more about everything we have to offer our Snellville customers.</p>
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

export default Layout
