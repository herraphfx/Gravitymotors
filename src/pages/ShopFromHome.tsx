import '../App.css'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

function ShopFromHome() {
  return (
    <Layout>
      <div className="page-container">
        <div className="page-hero">
          <h1 className="page-title">SHOP FROM HOME</h1>
          <p className="page-subtitle">Complete your entire car buying experience online</p>
        </div>

        <div className="page-content">
          <div className="specials-intro">
            <h2>Buy Your Next Car From the Comfort of Home</h2>
            <p>At Gravity Motors, we make it easy to shop, finance, and purchase your next vehicle entirely online. Browse our inventory, get pre-approved, and schedule delivery - all from your couch!</p>
          </div>

          <div className="mpg-benefits">
            <div className="benefit-card">
              <span className="benefit-icon">🏠</span>
              <h3>Browse Online</h3>
              <p>View our complete inventory with detailed photos and specs</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">💰</span>
              <h3>Get Financed</h3>
              <p>Apply for financing and get approved in minutes</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">🚗</span>
              <h3>Home Delivery</h3>
              <p>We'll deliver your new vehicle right to your door</p>
            </div>
          </div>

          <div className="trade-info">
            <h3>How Shop From Home Works</h3>
            <div className="steps-list">
              <div className="step-item">
                <span className="step-number">1</span>
                <div>
                  <h4>Browse Our Inventory</h4>
                  <p>Search our complete selection of premium pre-owned vehicles online</p>
                  <Link to="/view-all">
                    <button className="btn-calculator">View Inventory</button>
                  </Link>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">2</span>
                <div>
                  <h4>Get Pre-Approved</h4>
                  <p>Complete our secure online credit application and get instant approval</p>
                  <Link to="/get-pre-qualified">
                    <button className="btn-calculator">Get Pre-Qualified</button>
                  </Link>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">3</span>
                <div>
                  <h4>Calculate Your Trade</h4>
                  <p>Get an instant estimate for your trade-in vehicle</p>
                  <Link to="/calculate-trade">
                    <button className="btn-calculator">Calculate Trade Value</button>
                  </Link>
                </div>
              </div>
              <div className="step-item">
                <span className="step-number">4</span>
                <div>
                  <h4>Complete Your Purchase</h4>
                  <p>Finalize paperwork online and schedule delivery or pickup</p>
                  <button className="btn-calculator">Contact Us</button>
                </div>
              </div>
            </div>
          </div>

          <div className="financing-promo">
            <h2>🎯 Virtual Test Drive Available</h2>
            <p>Can't make it to our showroom? Schedule a virtual test drive via video call with one of our product specialists. We'll walk you through the vehicle and answer all your questions.</p>
            <Link to="/test-drive">
              <button className="btn-financing">Schedule Virtual Test Drive</button>
            </Link>
          </div>

          <div className="trade-benefits-grid">
            <div className="benefit-box">
              <span className="benefit-icon">📱</span>
              <h4>Text or Call</h4>
              <p>Prefer to talk? Our team is available by phone or text</p>
              <p><strong>404-254-4131</strong></p>
            </div>
            <div className="benefit-box">
              <span className="benefit-icon">💬</span>
              <h4>Live Chat</h4>
              <p>Chat with our team in real-time for instant answers</p>
              <button className="btn-calculator">Start Chat</button>
            </div>
            <div className="benefit-box">
              <span className="benefit-icon">📧</span>
              <h4>Email Us</h4>
              <p>Send us your questions and we'll respond promptly</p>
              <button className="btn-calculator">Send Email</button>
            </div>
            <div className="benefit-box">
              <span className="benefit-icon">📹</span>
              <h4>Video Walkaround</h4>
              <p>Request a personalized video tour of any vehicle</p>
              <button className="btn-calculator">Request Video</button>
            </div>
          </div>

          <div className="contact-cta">
            <h3>Ready to Shop From Home?</h3>
            <p>Start browsing our inventory or contact us to get started!</p>
            <div className="results-actions">
              <Link to="/view-all">
                <button className="btn-primary">Browse Inventory</button>
              </Link>
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ShopFromHome
