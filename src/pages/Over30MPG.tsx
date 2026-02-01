import '../App.css'
import Layout from '../components/Layout'

function Over30MPG() {
  return (
    <Layout>
      <div className="page-container">
      <div className="page-hero">
        <h1 className="page-title">OVER 30 MPG</h1>
        <p className="page-subtitle">Fuel-efficient vehicles that save you money</p>
      </div>

      <div className="page-content">
        <div className="mpg-intro">
          <h2>Eco-Friendly & Economical</h2>
          <p>Browse our selection of fuel-efficient vehicles that deliver over 30 MPG. Save money at the pump while reducing your environmental impact.</p>
        </div>

        <div className="mpg-benefits">
          <div className="benefit-card">
            <span className="benefit-icon">💰</span>
            <h3>Save on Fuel</h3>
            <p>Lower fuel costs mean more money in your pocket</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🌱</span>
            <h3>Eco-Friendly</h3>
            <p>Reduce your carbon footprint</p>
          </div>
          <div className="benefit-card">
            <span className="benefit-icon">🚗</span>
            <h3>Great Performance</h3>
            <p>Efficiency without sacrificing power</p>
          </div>
        </div>

        <div className="inventory-grid">
          <div className="inventory-item mpg-vehicle">
            <div className="mpg-badge">38 MPG</div>
            <div className="inventory-image">
              <img src="https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop" alt="Vehicle" />
              <span className="favorite-badge">♡</span>
            </div>
            <div className="inventory-details">
              <h3>2022 VOLKSWAGEN PASSAT</h3>
              <p className="inventory-price">$20,999</p>
              <p className="inventory-specs">2.0L I4 Turbo • Automatic • FWD</p>
              <div className="mpg-info">
                <span className="mpg-city">32 City</span>
                <span className="mpg-highway">44 Highway</span>
              </div>
              <p className="inventory-mileage">35,000 miles</p>
              <button className="btn-details">View Details</button>
            </div>
          </div>

          <div className="inventory-item mpg-vehicle">
            <div className="mpg-badge">35 MPG</div>
            <div className="inventory-image">
              <img src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=300&fit=crop" alt="Vehicle" />
              <span className="favorite-badge">♡</span>
            </div>
            <div className="inventory-details">
              <h3>2020 AUDI A4</h3>
              <p className="inventory-price">$32,999</p>
              <p className="inventory-specs">2.0L I4 Turbo • Automatic • AWD</p>
              <div className="mpg-info">
                <span className="mpg-city">27 City</span>
                <span className="mpg-highway">34 Highway</span>
              </div>
              <p className="inventory-mileage">38,000 miles</p>
              <button className="btn-details">View Details</button>
            </div>
          </div>

          <div className="inventory-item mpg-vehicle">
            <div className="mpg-badge">100+ MPGe</div>
            <div className="inventory-image">
              <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop" alt="Vehicle" />
              <span className="favorite-badge">♡</span>
            </div>
            <div className="inventory-details">
              <h3>2024 MERCEDES-BENZ EQS</h3>
              <p className="inventory-price">$60,599</p>
              <p className="inventory-specs">Electric • Automatic • AWD</p>
              <div className="mpg-info">
                <span className="mpg-electric">340 Mile Range</span>
              </div>
              <p className="inventory-mileage">8,000 miles</p>
              <button className="btn-details">View Details</button>
            </div>
          </div>

          <div className="inventory-item mpg-vehicle">
            <div className="mpg-badge">33 MPG</div>
            <div className="inventory-image">
              <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=300&fit=crop" alt="Vehicle" />
              <span className="favorite-badge">♡</span>
            </div>
            <div className="inventory-details">
              <h3>2021 HONDA ACCORD</h3>
              <p className="inventory-price">$24,999</p>
              <p className="inventory-specs">1.5L I4 Turbo • CVT • FWD</p>
              <div className="mpg-info">
                <span className="mpg-city">30 City</span>
                <span className="mpg-highway">38 Highway</span>
              </div>
              <p className="inventory-mileage">32,000 miles</p>
              <button className="btn-details">View Details</button>
            </div>
          </div>

          <div className="inventory-item mpg-vehicle">
            <div className="mpg-badge">36 MPG</div>
            <div className="inventory-image">
              <img src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&h=300&fit=crop" alt="Vehicle" />
              <span className="favorite-badge">♡</span>
            </div>
            <div className="inventory-details">
              <h3>2020 TOYOTA CAMRY</h3>
              <p className="inventory-price">$22,999</p>
              <p className="inventory-specs">2.5L I4 • Automatic • FWD</p>
              <div className="mpg-info">
                <span className="mpg-city">28 City</span>
                <span className="mpg-highway">39 Highway</span>
              </div>
              <p className="inventory-mileage">41,000 miles</p>
              <button className="btn-details">View Details</button>
            </div>
          </div>

          <div className="inventory-item mpg-vehicle">
            <div className="mpg-badge">40 MPG</div>
            <div className="inventory-image">
              <img src="https://images.unsplash.com/photo-1590362891991-f776e747a588?w=400&h=300&fit=crop" alt="Vehicle" />
              <span className="favorite-badge">♡</span>
            </div>
            <div className="inventory-details">
              <h3>2021 HYUNDAI ELANTRA</h3>
              <p className="inventory-price">$18,999</p>
              <p className="inventory-specs">2.0L I4 • CVT • FWD</p>
              <div className="mpg-info">
                <span className="mpg-city">33 City</span>
                <span className="mpg-highway">43 Highway</span>
              </div>
              <p className="inventory-mileage">29,000 miles</p>
              <button className="btn-details">View Details</button>
            </div>
          </div>
        </div>

        <div className="fuel-calculator">
          <h2>💡 Fuel Savings Calculator</h2>
          <p>Interested in calculating your potential fuel savings? Our finance team can help you compare the cost of ownership between different vehicles.</p>
          <button className="btn-calculator">Calculate Savings</button>
        </div>
      </div>
      </div>
    </Layout>
  )
}

export default Over30MPG
