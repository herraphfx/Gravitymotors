import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function AutomotiveParts() {
  return (
    <Layout>
      <div className="page-container">
        {/* Page Header */}
        <div className="services-page">
          <div className="services-header">
            <h1>AUTOMOTIVE PARTS</h1>
          </div>

          <div className="services-content">
            {/* Introduction */}
            <div className="services-intro">
              <p>
                At Gravity Motors, we understand that maintaining your luxury vehicle requires quality parts and expert service. 
                Our automotive parts department offers a comprehensive selection of genuine OEM and high-quality aftermarket parts 
                for all major luxury brands including Mercedes-Benz, BMW, Audi, Cadillac, Infiniti, and more.
              </p>
              <p>
                Whether you're looking for routine maintenance parts, performance upgrades, or specialized components, our 
                knowledgeable parts specialists are here to help you find exactly what you need to keep your vehicle running 
                at its best.
              </p>
            </div>

            {/* Parts Categories */}
            <div className="services-list-section">
              <h2>Available Parts & Accessories</h2>
              <div className="services-two-column">
                <ul className="services-list">
                  <li>Engine Components</li>
                  <li>Transmission Parts</li>
                  <li>Brake Systems</li>
                  <li>Suspension Components</li>
                  <li>Exhaust Systems</li>
                  <li>Cooling System Parts</li>
                  <li>Electrical Components</li>
                  <li>Fuel System Parts</li>
                </ul>
                <ul className="services-list">
                  <li>Air Filters & Oil Filters</li>
                  <li>Belts & Hoses</li>
                  <li>Batteries</li>
                  <li>Lighting & Bulbs</li>
                  <li>Wiper Blades</li>
                  <li>Interior Accessories</li>
                  <li>Exterior Accessories</li>
                  <li>Performance Upgrades</li>
                </ul>
                <ul className="services-list">
                  <li>Wheels & Tires</li>
                  <li>Body Parts & Panels</li>
                  <li>Glass & Mirrors</li>
                  <li>Climate Control Parts</li>
                  <li>Steering Components</li>
                  <li>Fluids & Lubricants</li>
                  <li>Maintenance Kits</li>
                  <li>Genuine OEM Parts</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us Section */}
            <div className="services-list-section" style={{ marginTop: '40px' }}>
              <h2>Why Choose Gravity Motors for Parts?</h2>
              <div className="mpg-benefits" style={{ marginTop: '30px' }}>
                <div className="benefit-card">
                  <span className="benefit-icon">✓</span>
                  <h3>Genuine OEM Parts</h3>
                  <p>We stock authentic manufacturer parts to ensure perfect fit and optimal performance for your luxury vehicle.</p>
                </div>
                <div className="benefit-card">
                  <span className="benefit-icon">💰</span>
                  <h3>Competitive Pricing</h3>
                  <p>Get the best value with our competitive pricing on both OEM and quality aftermarket parts.</p>
                </div>
                <div className="benefit-card">
                  <span className="benefit-icon">🚚</span>
                  <h3>Fast Availability</h3>
                  <p>Most parts in stock or available for quick order. We'll get you back on the road as soon as possible.</p>
                </div>
                <div className="benefit-card">
                  <span className="benefit-icon">👨‍🔧</span>
                  <h3>Expert Advice</h3>
                  <p>Our knowledgeable parts specialists can help you identify the right parts for your specific vehicle.</p>
                </div>
              </div>
            </div>

            {/* Parts Request Form */}
            <div className="services-form" style={{ marginTop: '50px' }}>
              <h2 style={{ fontSize: '24px', color: '#8B7355', marginBottom: '30px', textAlign: 'center' }}>
                Request a Part
              </h2>
              <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
                Can't find what you're looking for? Fill out the form below and our parts department will contact you with availability and pricing.
              </p>

              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input type="text" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input type="text" className="form-input" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" className="form-input" required />
                  </div>
                  <div className="form-group">
                    <label>Phone *</label>
                    <input type="tel" className="form-input" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Vehicle Year *</label>
                    <input type="text" className="form-input" placeholder="e.g., 2020" required />
                  </div>
                  <div className="form-group">
                    <label>Vehicle Make *</label>
                    <input type="text" className="form-input" placeholder="e.g., BMW" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Vehicle Model *</label>
                    <input type="text" className="form-input" placeholder="e.g., 3 Series" required />
                  </div>
                  <div className="form-group">
                    <label>VIN (Optional)</label>
                    <input type="text" className="form-input" placeholder="17-digit VIN" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Part Description *</label>
                  <textarea 
                    className="form-input" 
                    rows={4}
                    placeholder="Please describe the part you need (e.g., front brake pads, air filter, headlight assembly, etc.)"
                    required
                  ></textarea>
                </div>

                <div className="form-group">
                  <label>Additional Comments</label>
                  <textarea 
                    className="form-input" 
                    rows={3}
                    placeholder="Any additional information that might help us locate the right part"
                  ></textarea>
                </div>

                <div className="form-disclaimer">
                  <p>
                    * Required fields. By submitting this form, you agree to be contacted by Gravity Motors regarding your parts request. 
                    We respect your privacy and will not share your information with third parties.
                  </p>
                </div>

                <button type="submit" className="btn-submit">
                  Submit Parts Request
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-cta" style={{ marginTop: '50px' }}>
              <h3>Need Help Finding a Part?</h3>
              <p>Call our parts department directly at <strong>770-982-3733</strong></p>
              <p style={{ marginTop: '10px' }}>
                Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: Closed
              </p>
              <div style={{ marginTop: '20px' }}>
                <Link to="/contact-us" className="btn-preapproved">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AutomotiveParts
