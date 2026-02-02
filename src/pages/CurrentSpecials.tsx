import '../App.css'
import Layout from '../components/Layout'

function CurrentSpecials() {
  return (
    <Layout>
      <div className="page-container">
      <div className="page-hero">
        <h1 className="page-title">CURRENT SPECIALS</h1>
        <p className="page-subtitle">Don't miss out on these incredible deals!</p>
      </div>

      <div className="page-content">
        <div className="specials-intro">
          <h2>Limited Time Offers</h2>
          <p>Take advantage of our current promotions and drive home your dream car today. All offers are subject to availability and may end without notice.</p>
        </div>

        <div className="specials-grid">
          <div className="special-card featured">
            <div className="special-badge">FEATURED DEAL</div>
            <div className="special-image">
              <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500&h=350&fit=crop" alt="Special Vehicle" />
            </div>
            <div className="special-content">
              <h3>2019 INFINITI Q50</h3>
              <div className="price-section">
                <span className="original-price">$21,999</span>
                <span className="special-price">$18,599</span>
                <span className="savings">SAVE $3,400!</span>
              </div>
              <ul className="special-features">
                <li>✓ 3.0L V6 Engine</li>
                <li>✓ All-Wheel Drive</li>
                <li>✓ Premium Sound System</li>
                <li>✓ Leather Interior</li>
                <li>✓ Only 45,000 miles</li>
              </ul>
              <button className="btn-special">View Details</button>
            </div>
          </div>

          <div className="special-card">
            <div className="special-badge">HOT DEAL</div>
            <div className="special-image">
              <img src="https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=350&fit=crop" alt="Special Vehicle" />
            </div>
            <div className="special-content">
              <h3>2019 CADILLAC XTS</h3>
              <div className="price-section">
                <span className="original-price">$19,999</span>
                <span className="special-price">$17,999</span>
                <span className="savings">SAVE $2,000!</span>
              </div>
              <ul className="special-features">
                <li>✓ 3.6L V6 Engine</li>
                <li>✓ Luxury Package</li>
                <li>✓ Navigation System</li>
                <li>✓ Heated Seats</li>
                <li>✓ 52,000 miles</li>
              </ul>
              <button className="btn-special">View Details</button>
            </div>
          </div>

          <div className="special-card">
            <div className="special-badge">PRICE DROP</div>
            <div className="special-image">
              <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=350&fit=crop" alt="Special Vehicle" />
            </div>
            <div className="special-content">
              <h3>2022 VOLKSWAGEN PASSAT</h3>
              <div className="price-section">
                <span className="original-price">$23,999</span>
                <span className="special-price">$20,999</span>
                <span className="savings">SAVE $3,000!</span>
              </div>
              <ul className="special-features">
                <li>✓ 2.0L Turbocharged</li>
                <li>✓ Apple CarPlay/Android Auto</li>
                <li>✓ Backup Camera</li>
                <li>✓ Blind Spot Monitor</li>
                <li>✓ 35,000 miles</li>
              </ul>
              <button className="btn-special">View Details</button>
            </div>
          </div>

          <div className="special-card">
            <div className="special-badge">WEEKEND SPECIAL</div>
            <div className="special-image">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=350&fit=crop" alt="Special Vehicle" />
            </div>
            <div className="special-content">
              <h3>2020 AUDI A4</h3>
              <div className="price-section">
                <span className="original-price">$35,999</span>
                <span className="special-price">$32,999</span>
                <span className="savings">SAVE $3,000!</span>
              </div>
              <ul className="special-features">
                <li>✓ Quattro AWD</li>
                <li>✓ Premium Plus Package</li>
                <li>✓ Virtual Cockpit</li>
                <li>✓ Panoramic Sunroof</li>
                <li>✓ 38,000 miles</li>
              </ul>
              <button className="btn-special">View Details</button>
            </div>
          </div>
        </div>

        <div className="financing-promo">
          <h2>🎉 Special Financing Available</h2>
          <p>Ask about our low APR financing options on select vehicles. Terms and conditions apply. Contact us for details.</p>
          <button className="btn-financing">Get Pre-Qualified</button>
        </div>

        <div className="contact-cta">
          <h3>Questions About Our Specials?</h3>
          <p>Call us at <strong>404-254-4131</strong> or visit our showroom today!</p>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default CurrentSpecials
