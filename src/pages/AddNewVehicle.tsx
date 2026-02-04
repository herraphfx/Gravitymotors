import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import '../styles/AddNewVehicle.css'

function AddNewVehicle() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    listingTitle: '',
    make: '',
    model: '',
    year: '',
    price: '',
    condition: 'Used',
    vin: '',
    mileage: '',
    transmission: '',
    fuelType: '',
    drivetrain: '',
    exteriorColor: '',
    interiorColor: '',
    bodyStyle: '',
    doors: '',
    seats: '',
    horsepower: '',
    description: '',
    features: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Vehicle listing created successfully!')
    navigate('/admin')
  }

  const handleCancel = () => {
    navigate('/admin')
  }

  return (
    <Layout>
      <div className="add-vehicle-page">
        <div className="add-vehicle-container">
          <button className="back-to-dashboard" onClick={() => navigate('/admin')}>
            <span className="back-arrow">←</span>
            Back to Dashboard
          </button>

          <div className="add-vehicle-card">
            <div className="add-vehicle-header">
              <h1 className="add-vehicle-title">
                <span className="title-icon">🚗</span>
                Add New Vehicle
              </h1>
              <p className="add-vehicle-subtitle">Fill in the details below to list your vehicle on the marketplace.</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Basic Information */}
              <section className="form-section">
                <h2 className="section-title">Basic Information</h2>

                <div className="form-group full-width">
                  <label htmlFor="listingTitle">Listing Title</label>
                  <input
                    type="text"
                    id="listingTitle"
                    name="listingTitle"
                    value={formData.listingTitle}
                    onChange={handleChange}
                    placeholder="e.g., 2022 Toyota Camry SE - Low Miles!"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="make">Make</label>
                    <select
                      id="make"
                      name="make"
                      value={formData.make}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select make</option>
                      <option value="BMW">BMW</option>
                      <option value="Mercedes-Benz">Mercedes-Benz</option>
                      <option value="Audi">Audi</option>
                      <option value="Cadillac">Cadillac</option>
                      <option value="Volkswagen">Volkswagen</option>
                      <option value="Infiniti">Infiniti</option>
                      <option value="Toyota">Toyota</option>
                      <option value="Honda">Honda</option>
                      <option value="Ford">Ford</option>
                      <option value="Chevrolet">Chevrolet</option>
                      <option value="Nissan">Nissan</option>
                      <option value="Lexus">Lexus</option>
                      <option value="Tesla">Tesla</option>
                      <option value="Porsche">Porsche</option>
                      <option value="Jaguar">Jaguar</option>
                      <option value="Land Rover">Land Rover</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="model">Model</label>
                    <input
                      type="text"
                      id="model"
                      name="model"
                      value={formData.model}
                      onChange={handleChange}
                      placeholder="e.g., Camry"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="year">Year</label>
                    <input
                      type="number"
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      placeholder="2026"
                      min="1900"
                      max="2030"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="price">Price ($)</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="25000"
                      min="0"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="condition">Condition</label>
                    <select
                      id="condition"
                      name="condition"
                      value={formData.condition}
                      onChange={handleChange}
                      required
                    >
                      <option value="Used">Used</option>
                      <option value="New">New</option>
                      <option value="Certified Pre-Owned">Certified Pre-Owned</option>
                    </select>
                  </div>
                </div>
              </section>

              {/* Vehicle Details */}
              <section className="form-section">
                <h2 className="section-title">Vehicle Details</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="vin">VIN (Optional)</label>
                    <input
                      type="text"
                      id="vin"
                      name="vin"
                      value={formData.vin}
                      onChange={handleChange}
                      placeholder="17-character VIN"
                      maxLength={17}
                    />
                    <small className="field-hint">Vehicle Identification Number</small>
                  </div>

                  <div className="form-group">
                    <label htmlFor="mileage">Mileage</label>
                    <input
                      type="number"
                      id="mileage"
                      name="mileage"
                      value={formData.mileage}
                      onChange={handleChange}
                      placeholder="45000"
                      min="0"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="transmission">Transmission</label>
                    <select
                      id="transmission"
                      name="transmission"
                      value={formData.transmission}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Automatic">Automatic</option>
                      <option value="Manual">Manual</option>
                      <option value="CVT">CVT</option>
                      <option value="Semi-Automatic">Semi-Automatic</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="fuelType">Fuel Type</label>
                    <select
                      id="fuelType"
                      name="fuelType"
                      value={formData.fuelType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Gasoline">Gasoline</option>
                      <option value="Diesel">Diesel</option>
                      <option value="Electric">Electric</option>
                      <option value="Hybrid">Hybrid</option>
                      <option value="Plug-in Hybrid">Plug-in Hybrid</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="drivetrain">Drivetrain</label>
                    <select
                      id="drivetrain"
                      name="drivetrain"
                      value={formData.drivetrain}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="FWD">FWD</option>
                      <option value="RWD">RWD</option>
                      <option value="AWD">AWD</option>
                      <option value="4WD">4WD</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="exteriorColor">Exterior Color</label>
                    <input
                      type="text"
                      id="exteriorColor"
                      name="exteriorColor"
                      value={formData.exteriorColor}
                      onChange={handleChange}
                      placeholder="e.g., Silver"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="interiorColor">Interior Color</label>
                    <input
                      type="text"
                      id="interiorColor"
                      name="interiorColor"
                      value={formData.interiorColor}
                      onChange={handleChange}
                      placeholder="e.g., Black"
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="bodyStyle">Body Style</label>
                    <select
                      id="bodyStyle"
                      name="bodyStyle"
                      value={formData.bodyStyle}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="Sedan">Sedan</option>
                      <option value="SUV">SUV</option>
                      <option value="Truck">Truck</option>
                      <option value="Coupe">Coupe</option>
                      <option value="Convertible">Convertible</option>
                      <option value="Hatchback">Hatchback</option>
                      <option value="Wagon">Wagon</option>
                      <option value="Van">Van</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="doors">Doors</label>
                    <input
                      type="number"
                      id="doors"
                      name="doors"
                      value={formData.doors}
                      onChange={handleChange}
                      placeholder="4"
                      min="2"
                      max="5"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="seats">Seats</label>
                    <input
                      type="number"
                      id="seats"
                      name="seats"
                      value={formData.seats}
                      onChange={handleChange}
                      placeholder="5"
                      min="2"
                      max="9"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="horsepower">Horsepower</label>
                    <input
                      type="number"
                      id="horsepower"
                      name="horsepower"
                      value={formData.horsepower}
                      onChange={handleChange}
                      placeholder="203"
                      min="0"
                    />
                  </div>
                </div>
              </section>

              {/* Description & Features */}
              <section className="form-section">
                <h2 className="section-title">Description & Features</h2>

                <div className="form-group full-width">
                  <label htmlFor="description">Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your vehicle, its history, and any notable features..."
                    rows={6}
                    required
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="features">Features (comma-separated)</label>
                  <input
                    type="text"
                    id="features"
                    name="features"
                    value={formData.features}
                    onChange={handleChange}
                    placeholder="e.g., Leather Seats, Sunroof, Navigation, Backup Camera"
                  />
                  <small className="field-hint">Enter features separated by commas</small>
                </div>
              </section>

              {/* Photos */}
              <section className="form-section">
                <h2 className="section-title">Photos</h2>

                <div className="photo-upload-grid">
                  <div className="upload-box">
                    <div className="upload-area">
                      <div className="upload-icon">⬆️</div>
                      <p className="upload-text">
                        <span className="upload-link">Click to upload</span> or drag and drop
                      </p>
                      <p className="upload-hint">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                    <p className="upload-label">Front View</p>
                  </div>

                  <div className="upload-box">
                    <div className="upload-area">
                      <div className="upload-icon">⬆️</div>
                      <p className="upload-text">
                        <span className="upload-link">Click to upload</span> or drag and drop
                      </p>
                      <p className="upload-hint">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                    <p className="upload-label">Side View</p>
                  </div>

                  <div className="upload-box">
                    <div className="upload-area">
                      <div className="upload-icon">⬆️</div>
                      <p className="upload-text">
                        <span className="upload-link">Click to upload</span> or drag and drop
                      </p>
                      <p className="upload-hint">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                    <p className="upload-label">Rear View</p>
                  </div>

                  <div className="upload-box">
                    <div className="upload-area">
                      <div className="upload-icon">⬆️</div>
                      <p className="upload-text">
                        <span className="upload-link">Click to upload</span> or drag and drop
                      </p>
                      <p className="upload-hint">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                    <p className="upload-label">Interior View</p>
                  </div>

                  <div className="upload-box">
                    <div className="upload-area">
                      <div className="upload-icon">⬆️</div>
                      <p className="upload-text">
                        <span className="upload-link">Click to upload</span> or drag and drop
                      </p>
                      <p className="upload-hint">PNG, JPG, GIF up to 10MB each</p>
                    </div>
                    <p className="upload-label">Additional Photo</p>
                  </div>
                </div>
              </section>

              {/* Form Actions */}
              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  List Vehicle
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddNewVehicle
