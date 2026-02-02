import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import '../styles/VehicleDetails.css'

interface Vehicle {
  id: number
  year: number
  make: string
  model: string
  trim: string
  price: number
  image: string
  exteriorColor: string
  interiorColor: string
  mileage: number
  vin: string
  engine?: string
  transmission?: string
  drivetrain?: string
  fuelType?: string
  cityMPG?: number
  highwayMPG?: number
  stockNumber?: string
}

// Sample vehicle data - this should match your ViewAll data
const vehiclesData: Vehicle[] = [
  {
    id: 1,
    year: 2020,
    make: 'ACURA',
    model: 'INTEGRA',
    trim: 'A-Spec',
    price: 30999,
    image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500&h=350&fit=crop',
    exteriorColor: 'White',
    interiorColor: 'Black',
    mileage: 35000,
    vin: '19UDE2F77PA******',
    engine: '1.5L 4-Cylinder',
    transmission: 'CVT',
    drivetrain: 'Front Wheel Drive',
    fuelType: 'Gasoline',
    cityMPG: 30,
    highwayMPG: 37,
    stockNumber: '000721'
  },
  {
    id: 2,
    year: 2020,
    make: 'ACURA',
    model: 'MDX',
    trim: 'SH-AWD',
    price: 42999,
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=350&fit=crop',
    exteriorColor: 'Black',
    interiorColor: 'Ebony',
    mileage: 48000,
    vin: '5J8YD4H86LL******',
    engine: '3.5L V6',
    transmission: 'Automatic',
    drivetrain: 'All Wheel Drive',
    fuelType: 'Gasoline',
    cityMPG: 19,
    highwayMPG: 26,
    stockNumber: '000722'
  }
]

function VehicleDetails() {
  const { id } = useParams<{ id: string }>()
  const [vehicle, setVehicle] = useState<Vehicle | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  })

  // Gallery images (using same image for demo - you can add more images)
  const galleryImages = vehicle ? [
    vehicle.image,
    vehicle.image,
    vehicle.image,
    vehicle.image,
    vehicle.image,
    vehicle.image
  ] : []

  useEffect(() => {
    // Find vehicle by id
    const foundVehicle = vehiclesData.find(v => v.id === Number(id))
    if (foundVehicle) {
      setVehicle(foundVehicle)
    }
  }, [id])

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? galleryImages.length - 1 : prev - 1
    )
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === galleryImages.length - 1 ? 0 : prev + 1
    )
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will contact you soon.')
  }

  if (!vehicle) {
    return (
      <Layout>
        <div className="vehicle-details-container">
          <p>Vehicle not found</p>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="vehicle-details-container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">HOME</Link>
          <span> &gt; </span>
          <Link to="/view-all">INVENTORY</Link>
          <span> &gt; </span>
          <Link to="/view-all">USED CARS FOR SALE</Link>
          <span> &gt; </span>
          <span>CVT</span>
        </div>

        {/* Vehicle Header */}
        <div className="vehicle-header">
          <div className="vehicle-title-section">
            <h1>{vehicle.year} {vehicle.make} {vehicle.model}</h1>
            <p className="vehicle-trim">CVT</p>
            <div className="social-share">
              <a href="#" className="social-icon facebook">f</a>
              <a href="#" className="social-icon twitter">𝕏</a>
              <a href="#" className="social-icon pinterest">P</a>
              <a href="#" className="social-icon email">✉</a>
            </div>
          </div>
          <div className="vehicle-price-section">
            <p className="retail-price">Retail Price</p>
            <h2 className="price">${vehicle.price.toLocaleString()}</h2>
            <p className="phone-number">404-254-4131</p>
            <button className="get-preapproved-btn">Get Preapproved</button>
          </div>
        </div>

        {/* Main Content */}
        <div className="vehicle-content">
          {/* Left Column - Images */}
          <div className="vehicle-images-section">
            {/* Action Buttons */}
            <div className="action-buttons">
              <button className="action-btn">404-254-4131</button>
              <button className="action-btn">Apply Now</button>
              <button className="action-btn">Schedule Test Drive</button>
              <button className="action-btn">Request More Info</button>
            </div>

            {/* Main Image Gallery */}
            <div className="image-gallery">
              <button className="gallery-nav prev" onClick={handlePrevImage}>‹</button>
              <div className="main-image">
                <img src={galleryImages[currentImageIndex]} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} />
                <div className="amazing-luxury-badge">AMAZING LUXURY CARS</div>
              </div>
              <button className="gallery-nav next" onClick={handleNextImage}>›</button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="thumbnail-gallery">
              {galleryImages.map((img, index) => (
                <div 
                  key={index} 
                  className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img src={img} alt={`Thumbnail ${index + 1}`} />
                </div>
              ))}
            </div>

            {/* Media Buttons */}
            <div className="media-buttons">
              <button className="media-btn">📷 Photos</button>
              <button className="media-btn">🎥 Video</button>
            </div>

            {/* About This Vehicle */}
            <div className="about-vehicle">
              <h3>ABOUT THIS ACURA</h3>
              <p className="window-sticker">🖨️ Download Window Sticker</p>
              
              <div className="vehicle-specs-grid">
                <div className="spec-item">
                  <span className="spec-label">Condition</span>
                  <span className="spec-value">Used</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Used Crew Title</span>
                  <span className="spec-value">{vehicle.trim}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Exterior Color</span>
                  <span className="spec-value">⚪ {vehicle.exteriorColor}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Make</span>
                  <span className="spec-value">{vehicle.make}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Engine</span>
                  <span className="spec-value">{vehicle.engine || '1.5L 4-Cylinder'}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Interior Color</span>
                  <span className="spec-value">⚫ {vehicle.interiorColor}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Model</span>
                  <span className="spec-value">{vehicle.model}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Transmission</span>
                  <span className="spec-value">{vehicle.transmission || 'CVT'}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Stock #</span>
                  <span className="spec-value">{vehicle.stockNumber || '000721'}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Drivetrain</span>
                  <span className="spec-value">{vehicle.drivetrain || 'Front Wheel Drive'}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">VIN</span>
                  <span className="spec-value">{vehicle.vin}</span>
                </div>
                <div className="spec-item">
                  <span className="spec-label">Warranty</span>
                  <span className="spec-value">Warranty Available</span>
                </div>
              </div>

              {/* MPG Display */}
              <div className="mpg-display">
                <div className="mpg-item">
                  <div className="mpg-icon">🏙️</div>
                  <div className="mpg-value">{vehicle.cityMPG || 30}</div>
                  <div className="mpg-label">City MPG</div>
                </div>
                <div className="mpg-item">
                  <div className="mpg-icon">⛽</div>
                  <div className="mpg-value">{vehicle.highwayMPG || 37}</div>
                  <div className="mpg-label">Hwy MPG</div>
                </div>
              </div>

              <p className="disclaimer">Actual rating will vary with options, driving conditions, habits and vehicle condition.</p>
            </div>

            {/* Vehicle Overview */}
            <div className="vehicle-overview">
              <h3>VEHICLE OVERVIEW</h3>
              <p className="overview-text">
                <strong>Option: PLATINUM WHITE PEARL.</strong> Thank you for visiting another one of Amazing Luxury Cars's online listings! 
                Please continue for more information on this {vehicle.year} Acura Integra with 17,087mi. This Acura includes: 
                <strong>PLATINUM WHITE PEARL</strong> *Note - For third party subscriptions or services, please contact the dealer for 
                more information.* You don't have to sacrifice style or comfort with this fuel-efficient Acura Integra. This low mileage 
                Acura Integra has barely been touched. It's the next best thing to buying new. More information about the {vehicle.year} 
                Acura Integra: This vehicle is loaded with great features, plus it comes with the peace of mind CARFAX Buyback Guarantee. 
                Reliability and Character.
              </p>
            </div>

            {/* Options & Features */}
            <div className="options-features">
              <h3>OPTIONS & FEATURES</h3>
              
              <details className="feature-section">
                <summary>Ext / Int Color</summary>
                <div className="feature-content">
                  <p>Exterior Color: {vehicle.exteriorColor}</p>
                  <p>Interior Color: {vehicle.interiorColor}</p>
                </div>
              </details>

              <details className="feature-section">
                <summary>Luxury Features</summary>
                <div className="feature-content">
                  <ul>
                    <li>Premium Sound System</li>
                    <li>Leather Seats</li>
                    <li>Heated Front Seats</li>
                    <li>Power Sunroof</li>
                  </ul>
                </div>
              </details>

              <details className="feature-section">
                <summary>Power Equipment</summary>
                <div className="feature-content">
                  <ul>
                    <li>Power Windows</li>
                    <li>Power Door Locks</li>
                    <li>Power Mirrors</li>
                    <li>Power Steering</li>
                  </ul>
                </div>
              </details>

              <details className="feature-section">
                <summary>Safety Features</summary>
                <div className="feature-content">
                  <ul>
                    <li>Anti-Lock Brakes (ABS)</li>
                    <li>Electronic Stability Control</li>
                    <li>Backup Camera</li>
                    <li>Blind Spot Monitor</li>
                    <li>Lane Departure Warning</li>
                  </ul>
                </div>
              </details>

              <details className="feature-section">
                <summary>Interior</summary>
                <div className="feature-content">
                  <ul>
                    <li>Leather Upholstery</li>
                    <li>Dual-Zone Climate Control</li>
                    <li>Cruise Control</li>
                    <li>Keyless Entry</li>
                  </ul>
                </div>
              </details>

              <details className="feature-section">
                <summary>Exterior</summary>
                <div className="feature-content">
                  <ul>
                    <li>Alloy Wheels</li>
                    <li>LED Headlights</li>
                    <li>Fog Lights</li>
                    <li>Rear Spoiler</li>
                  </ul>
                </div>
              </details>

              <details className="feature-section">
                <summary>Audio / Video</summary>
                <div className="feature-content">
                  <ul>
                    <li>Premium Audio System</li>
                    <li>Bluetooth Connectivity</li>
                    <li>USB Ports</li>
                    <li>Apple CarPlay / Android Auto</li>
                  </ul>
                </div>
              </details>

              <details className="feature-section">
                <summary>Additional Features</summary>
                <div className="feature-content">
                  <ul>
                    <li>Push Button Start</li>
                    <li>Remote Start</li>
                    <li>Adaptive Cruise Control</li>
                    <li>Parking Sensors</li>
                  </ul>
                </div>
              </details>
            </div>

            {/* Features & Specifications */}
            <div className="features-specifications">
              <h3>FEATURES & SPECIFICATIONS *</h3>
              <p className="disclaimer-text">
                * These are standard features and specifications for the vehicle above. Please see the details for the vehicle above 
                for more information. Please note the details for this vehicle above may vary. Please contact the dealership for 
                more information.
              </p>

              <details className="spec-section">
                <summary>MECHANICAL</summary>
                <div className="spec-content">
                  <p>Engine: {vehicle.engine || '1.5L 4-Cylinder'}</p>
                  <p>Transmission: {vehicle.transmission || 'CVT'}</p>
                  <p>Drivetrain: {vehicle.drivetrain || 'Front Wheel Drive'}</p>
                </div>
              </details>

              <details className="spec-section">
                <summary>EXTERIOR</summary>
                <div className="spec-content">
                  <p>Color: {vehicle.exteriorColor}</p>
                  <p>Wheels: 18" Alloy</p>
                </div>
              </details>

              <details className="spec-section">
                <summary>ENTERTAINMENT</summary>
                <div className="spec-content">
                  <p>Premium Audio System</p>
                  <p>Bluetooth Connectivity</p>
                </div>
              </details>

              <details className="spec-section">
                <summary>INTERIOR</summary>
                <div className="spec-content">
                  <p>Color: {vehicle.interiorColor}</p>
                  <p>Material: Leather</p>
                </div>
              </details>

              <details className="spec-section">
                <summary>SAFETY</summary>
                <div className="spec-content">
                  <p>ABS Brakes</p>
                  <p>Stability Control</p>
                  <p>Multiple Airbags</p>
                </div>
              </details>

              <details className="spec-section">
                <summary>EPA Fuel Economy & Specification</summary>
                <div className="spec-content">
                  <p>City MPG: {vehicle.cityMPG || 30}</p>
                  <p>Highway MPG: {vehicle.highwayMPG || 37}</p>
                </div>
              </details>
            </div>

            {/* Vehicle Condition */}
            <div className="vehicle-condition">
              <h3>VEHICLE CONDITION</h3>
              <details className="condition-section">
                <summary>Warranty</summary>
                <div className="condition-content">
                  <p>* DISCLAIMER: Actual rating will vary with options, driving conditions, habits and vehicle condition.</p>
                  <p>It is the customer's sole responsibility to verify the existence and condition of any equipment listed. 
                  Neither the dealership nor AutoRevo is responsible for misprints on prices or equipment. It is the customer's 
                  sole responsibility to verify the accuracy of the prices with the dealer. Pricing subject to change without notice.</p>
                </div>
              </details>
            </div>

            {/* Your Recommendations */}
            <div className="recommendations">
              <h3>YOUR RECOMMENDATIONS</h3>
              <div className="recommendation-grid">
                <div className="recommendation-card">
                  <div className="rec-image">
                    <img src="https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=300&h=200&fit=crop" alt="2024 ACURA INTEGRA CVT" />
                    <div className="favorite-icon">♡</div>
                  </div>
                  <div className="rec-info">
                    <h4>2024 ACURA<br/>INTEGRA CVT</h4>
                    <p className="rec-price">$28,999</p>
                  </div>
                </div>
                <div className="recommendation-card">
                  <div className="rec-image">
                    <img src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=300&h=200&fit=crop" alt="2023 ACURA MDX" />
                    <div className="favorite-icon">♡</div>
                  </div>
                  <div className="rec-info">
                    <h4>2023 ACURA<br/>FWD W/TECH PACKAGE</h4>
                    <p className="rec-price">$35,999</p>
                  </div>
                </div>
                <div className="recommendation-card">
                  <div className="rec-image">
                    <img src="https://images.unsplash.com/photo-1555215695-3004980ad54e?w=300&h=200&fit=crop" alt="2020 ACURA TLX" />
                    <div className="favorite-icon">♡</div>
                  </div>
                  <div className="rec-info">
                    <h4>2020 ACURA<br/>SH-AWD 9-SPD AT W/TECH PACKAGE</h4>
                    <p className="rec-price">$32,999</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form-sticky">
              <h3>REQUEST INFO</h3>
              <div className="contact-tabs">
                <button className="tab-btn active">✉️ Text Us</button>
                <button className="tab-btn">💬 Live Chat</button>
              </div>

              <form onSubmit={handleSubmit} className="vehicle-contact-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name *</label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Last Name *</label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required 
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Example: user@email.com"
                      required 
                    />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Example: 555-555-5555"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Comments</label>
                  <textarea 
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Enter your comments here..."
                  ></textarea>
                </div>

                <div className="form-disclaimer">
                  <p>By clicking "Submit" you agree to Amazing Luxury Cars <a href="#">Terms of Use</a> and <a href="#">Privacy Policy</a>. 
                  You consent to receive calls and text messages from Amazing Luxury Cars to provide updates on your order and/or for 
                  marketing purposes. Message/data rates may apply. Consent is not a condition of purchase. Message frequency depends on 
                  your activity. You may opt-out by texting "STOP". For SMS support, text HELP anytime or call or email us.</p>
                  <p>* Denotes a required field</p>
                </div>

                <button type="submit" className="submit-btn">Send</button>
              </form>

              {/* Payment Options */}
              <div className="payment-options">
                <button className="payment-btn estimate-btn">
                  <span className="payment-icon">💳</span>
                  Estimate payment<br/>
                  <small>through Ally Financial</small>
                </button>
                <button className="payment-btn prequalify-btn">
                  <span className="payment-icon">✓</span>
                  Prequalify for Payment
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default VehicleDetails
