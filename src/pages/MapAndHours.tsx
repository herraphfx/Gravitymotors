import '../App.css'
import Layout from '../components/Layout'

function MapAndHours() {
  return (
    <Layout>
      <div className="page-container">
        <div className="page-hero">
          <h1 className="page-title">MAP & HOURS</h1>
          <p className="page-subtitle">Visit us at our convenient Forest Park location</p>
        </div>

        <div className="page-content">
          <div className="specials-intro">
            <h2>Find Us</h2>
            <p>We're conveniently located in Forest Park, GA. Stop by during our business hours to browse our inventory, schedule service, or speak with our team.</p>
          </div>

          <div className="get-in-touch">
            <h2>OUR LOCATION</h2>
            <div className="map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2!2d-84.3544!3d33.6562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f51cedf7c5c3c5%3A0x0!2s4040%20Jonesboro%20Rd%2C%20Forest%20Park%2C%20GA%2030297!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="info-section">
            <div className="info-card">
              <h3>📍 Address</h3>
              <p>4040 Jonesboro Road<br/>Forest Park, GA 30297</p>
              <button className="btn-calculator">Get Directions</button>
            </div>
            <div className="info-card">
              <h3>📞 Phone</h3>
              <p>Sales & Service: 404-254-4131<br/>Text: 404-254-4131</p>
              <button className="btn-calculator">Call Now</button>
            </div>
            <div className="info-card">
              <h3>✉️ Email</h3>
              <p>info@gravitymotors.com<br/>service@gravitymotors.com</p>
              <button className="btn-calculator">Send Email</button>
            </div>
          </div>

          <div className="trade-info">
            <h3>Hours of Operation</h3>
            <div className="hours-table" style={{ maxWidth: '600px', margin: '30px auto', fontSize: '18px' }}>
              <div className="hours-row" style={{ padding: '15px 0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#8B7355' }}>Monday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-row" style={{ padding: '15px 0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#8B7355' }}>Tuesday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-row" style={{ padding: '15px 0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#8B7355' }}>Wednesday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-row" style={{ padding: '15px 0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#8B7355' }}>Thursday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-row" style={{ padding: '15px 0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#8B7355' }}>Friday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-row" style={{ padding: '15px 0', borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#8B7355' }}>Saturday:</span>
                <span>9:00 AM - 7:00 PM</span>
              </div>
              <div className="hours-row" style={{ padding: '15px 0', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 'bold', color: '#8B7355' }}>Sunday:</span>
                <span style={{ color: '#E31E24', fontWeight: 'bold' }}>Closed</span>
              </div>
            </div>
          </div>

          <div className="financing-promo">
            <h2>🚗 Visit Our Showroom</h2>
            <p>Stop by to see our complete inventory of premium pre-owned vehicles. Our friendly team is ready to help you find your perfect car!</p>
            <button className="btn-financing">Browse Inventory</button>
          </div>

          <div className="trade-benefits-grid">
            <div className="benefit-box">
              <span className="benefit-icon">🅿️</span>
              <h4>Free Parking</h4>
              <p>Ample parking available for all customers</p>
            </div>
            <div className="benefit-box">
              <span className="benefit-icon">☕</span>
              <h4>Comfortable Waiting Area</h4>
              <p>Relax in our customer lounge while we assist you</p>
            </div>
            <div className="benefit-box">
              <span className="benefit-icon">🔧</span>
              <h4>Service Department</h4>
              <p>Full-service facility on-site</p>
            </div>
            <div className="benefit-box">
              <span className="benefit-icon">👨‍💼</span>
              <h4>Expert Staff</h4>
              <p>Knowledgeable team ready to help</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default MapAndHours
