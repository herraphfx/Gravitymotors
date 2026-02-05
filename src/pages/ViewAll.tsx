import '../App.css'
import '../styles/Modal.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

function ViewAll() {
  const navigate = useNavigate()
  const PHONE_NUMBER = '404-254-4131'
  const [selectedMakes, setSelectedMakes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const [mileageRange, setMileageRange] = useState({ min: 0, max: 200000 })
  const [showModal, setShowModal] = useState(false)
  const [showTestDriveModal, setShowTestDriveModal] = useState(false)
  const [selectedVehicle, setSelectedVehicle] = useState<any>(null)
  const [sortBy, setSortBy] = useState('Best Match')
  const [showSortDropdown, setShowSortDropdown] = useState(false)
  const [showRefineSearch, setShowRefineSearch] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    comments: ''
  })
  const [testDriveFormData, setTestDriveFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTimeToContact: 'Morning',
    timeZone: '',
    firstPreferenceDate: '',
    firstPreferenceTime: '8 a.m.',
    secondPreferenceDate: '',
    secondPreferenceTime: '8 a.m.',
    comments: ''
  })

  const handleApplyNow = (vehicle: any) => {
    navigate('/credit-approval', { state: { vehicle } })
  }

  const handleRequestInfo = (vehicle: any) => {
    setSelectedVehicle(vehicle)
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
    setSelectedVehicle(null)
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      comments: ''
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Request submitted for ${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`)
    closeModal()
  }

  const handleScheduleTestDrive = (vehicle: any) => {
    setSelectedVehicle(vehicle)
    setShowTestDriveModal(true)
  }

  const closeTestDriveModal = () => {
    setShowTestDriveModal(false)
    setSelectedVehicle(null)
    setTestDriveFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      bestTimeToContact: 'Morning',
      timeZone: '',
      firstPreferenceDate: '',
      firstPreferenceTime: '8 a.m.',
      secondPreferenceDate: '',
      secondPreferenceTime: '8 a.m.',
      comments: ''
    })
  }

  const handleTestDriveInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setTestDriveFormData({
      ...testDriveFormData,
      [e.target.name]: e.target.value
    })
  }

  const handleTestDriveSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Test drive scheduled for ${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`)
    closeTestDriveModal()
  }

  const vehicles = [
    {
      id: 1,
      year: 2020,
      make: 'ACURA',
      model: 'INTEGRA',
      trim: 'A-Spec',
      price: 30999,
      image: 'https://images.unsplash.com/photo-1617531653332-bd46c24f2068?w=500&h=350&fit=crop',
      engine: '1.5L I-4 Cylinder',
      transmission: 'Automatic',
      drivetrain: 'FWD',
      exteriorColor: 'White',
      interiorColor: 'Black',
      mileage: 35000,
      vin: '19UDE2F77PA******',
      stock: 'A1001'
    },
    {
      id: 2,
      year: 2020,
      make: 'ACURA',
      model: 'MDX',
      trim: 'SH-AWD',
      price: 42999,
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=500&h=350&fit=crop',
      engine: '3.5L V-6 Cylinder',
      transmission: 'Automatic',
      drivetrain: 'AWD',
      exteriorColor: 'Silver',
      interiorColor: 'Ebony',
      mileage: 48000,
      vin: '5J8YD4H86LL******',
      stock: 'A1002'
    },
    {
      id: 3,
      year: 2023,
      make: 'ALFA ROMEO',
      model: 'GIULIA',
      trim: 'Ti RWD',
      price: 23999,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=350&fit=crop',
      engine: '2.0L I-4 Cylinder Turbo',
      transmission: 'Automatic',
      drivetrain: 'RWD',
      exteriorColor: 'White',
      interiorColor: 'Black',
      mileage: 18000,
      vin: 'ZARFAEAN3P7******',
      stock: 'AR1001'
    },
    {
      id: 4,
      year: 2019,
      make: 'AUDI',
      model: 'A5 SPORTBACK',
      trim: 'Premium Plus',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=500&h=350&fit=crop',
      engine: '2.0L I-4 Cylinder Turbo',
      transmission: 'Automatic',
      drivetrain: 'AWD',
      exteriorColor: 'Black',
      interiorColor: 'Black',
      mileage: 65000,
      vin: 'WAUENCF50KA******',
      stock: 'AU1001'
    },
    {
      id: 5,
      year: 2019,
      make: 'AUDI',
      model: 'E-TRON',
      trim: 'Premium Plus',
      price: 28999,
      image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&h=350&fit=crop',
      engine: 'Electric Motor',
      transmission: 'Automatic',
      drivetrain: 'AWD',
      exteriorColor: 'Red',
      interiorColor: 'Black',
      mileage: 42000,
      vin: 'WA1VAAGE5KB******',
      stock: 'AU1002'
    },
    {
      id: 6,
      year: 2019,
      make: 'AUDI',
      model: 'Q5',
      trim: 'Premium Plus Quattro',
      price: 35999,
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=500&h=350&fit=crop',
      engine: '2.0L I-4 Cylinder',
      transmission: 'Automatic',
      drivetrain: 'AWD',
      exteriorColor: 'Gray',
      interiorColor: 'Black',
      mileage: 55000,
      vin: 'WA1BNAFY5K2******',
      stock: 'AU1003'
    },
    {
      id: 7,
      year: 2026,
      make: 'AUDI',
      model: 'Q7',
      trim: 'Premium Plus Quattro',
      price: 37599,
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500&h=350&fit=crop',
      engine: '2.0L I-4 Cylinder',
      transmission: 'Automatic',
      drivetrain: 'AWD',
      exteriorColor: 'Blue',
      interiorColor: 'Black',
      mileage: 12000,
      vin: 'WA1LHAFEXRD******',
      stock: 'AU1004'
    },
    {
      id: 8,
      year: 2023,
      make: 'BMW',
      model: '3 SERIES',
      trim: '330i',
      price: 28999,
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=500&h=350&fit=crop',
      engine: '2.0L I-4 Cylinder',
      transmission: 'Automatic',
      drivetrain: 'RWD',
      exteriorColor: 'White',
      interiorColor: 'Black',
      mileage: 25000,
      vin: 'WBA5R1C09P7******',
      stock: 'BM1001'
    }
  ]

  return (
    <Layout>
      <div className="inventory-page">
        <div className="inventory-header">
          <h1>159 USED VEHICLES FOR SALE</h1>
          <p>FOREST PARK, GA</p>
        </div>

        <div className="inventory-controls">
          <div className="inventory-pagination">
            <span>Page: 1 2 3 ... 16</span>
          </div>
          <div className="inventory-view-options">
            <button className="view-btn">Vehicles Per Page</button>
            <button className="view-btn">Show 30 Vehicles</button>
          </div>
        </div>

        <div className="inventory-sort">
          <button 
            className="refine-search-btn" 
            onClick={() => setShowRefineSearch(!showRefineSearch)}
          >
            <span className="filter-icon">▼</span> Refine Search
          </button>
          <div className="sort-dropdown-container">
            <button 
              className="sort-dropdown-btn" 
              onClick={() => setShowSortDropdown(!showSortDropdown)}
            >
              <span className="sort-icon">⇅</span> Sort By
            </button>
            {showSortDropdown && (
              <div className="sort-dropdown-menu">
                <button 
                  className="sort-dropdown-item" 
                  onClick={() => {
                    setSortBy('Best Match')
                    setShowSortDropdown(false)
                  }}
                >
                  Best Match
                </button>
                <button 
                  className="sort-dropdown-item" 
                  onClick={() => {
                    setSortBy('Model')
                    setShowSortDropdown(false)
                  }}
                >
                  Model
                </button>
                <button 
                  className="sort-dropdown-item" 
                  onClick={() => {
                    setSortBy('Mileage')
                    setShowSortDropdown(false)
                  }}
                >
                  Mileage
                </button>
                <button 
                  className="sort-dropdown-item" 
                  onClick={() => {
                    setSortBy('Price')
                    setShowSortDropdown(false)
                  }}
                >
                  Price
                </button>
                <button 
                  className="sort-dropdown-item" 
                  onClick={() => {
                    setSortBy('Photos')
                    setShowSortDropdown(false)
                  }}
                >
                  Photos
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="inventory-layout">
          {/* Mobile Filter Modal */}
          {showRefineSearch && (
            <div className="mobile-filter-modal-overlay" onClick={() => setShowRefineSearch(false)}>
              <div className="mobile-filter-modal" onClick={(e) => e.stopPropagation()}>
                <div className="mobile-filter-header">
                  <h2>Refine Your Search</h2>
                  <button className="mobile-filter-close" onClick={() => setShowRefineSearch(false)}>×</button>
                </div>
                <div className="mobile-filter-content">
                  <div className="filter-section">
                    <h3>YOUR CURRENT SEARCH</h3>
                    <div className="current-search">
                      <p><strong>Condition:</strong> Used</p>
                    </div>
                  </div>

                  <div className="filter-section">
                    <h3>REFINE YOUR SEARCH</h3>
                    
                    <div className="filter-group">
                      <h4>Make</h4>
                      <div className="checkbox-list">
                        {['Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'FIAT', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai', 'INFINITI', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Maserati', 'Mazda', 'Mercedes-Benz', 'MINI', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'].map(make => (
                          <label key={make} className="checkbox-label">
                            <input type="checkbox" /> {make}
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="filter-group">
                      <h4>Price</h4>
                      <div className="range-inputs">
                        <input type="number" placeholder="Min" className="range-input" />
                        <span>to</span>
                        <input type="number" placeholder="Max" className="range-input" />
                      </div>
                      <button className="apply-btn">Apply</button>
                    </div>

                    <div className="filter-group">
                      <h4>Body Style</h4>
                      <div className="checkbox-list">
                        <label className="checkbox-label"><input type="checkbox" /> Convertible</label>
                        <label className="checkbox-label"><input type="checkbox" /> Coupe</label>
                        <label className="checkbox-label"><input type="checkbox" /> Hatchback</label>
                        <label className="checkbox-label"><input type="checkbox" /> Sedan</label>
                        <label className="checkbox-label"><input type="checkbox" /> SUV</label>
                        <label className="checkbox-label"><input type="checkbox" /> Truck</label>
                        <label className="checkbox-label"><input type="checkbox" /> Van/Minivan</label>
                        <label className="checkbox-label"><input type="checkbox" /> Wagon</label>
                      </div>
                    </div>

                    <div className="filter-group">
                      <h4>Mileage</h4>
                      <div className="range-inputs">
                        <input type="number" placeholder="Min" className="range-input" />
                        <span>to</span>
                        <input type="number" placeholder="Max" className="range-input" />
                      </div>
                      <button className="apply-btn">Apply</button>
                    </div>

                    <div className="filter-group">
                      <h4>Transmission</h4>
                      <div className="checkbox-list">
                        <label className="checkbox-label"><input type="checkbox" /> Automatic</label>
                        <label className="checkbox-label"><input type="checkbox" /> Manual</label>
                      </div>
                    </div>

                    <div className="filter-group">
                      <h4>Drivetrain</h4>
                      <div className="checkbox-list">
                        <label className="checkbox-label"><input type="checkbox" /> AWD/4WD</label>
                        <label className="checkbox-label"><input type="checkbox" /> FWD</label>
                        <label className="checkbox-label"><input type="checkbox" /> RWD</label>
                      </div>
                    </div>

                    <div className="filter-group">
                      <h4>Fuel Type</h4>
                      <div className="checkbox-list">
                        <label className="checkbox-label"><input type="checkbox" /> Diesel</label>
                        <label className="checkbox-label"><input type="checkbox" /> Electric</label>
                        <label className="checkbox-label"><input type="checkbox" /> Flex Fuel</label>
                        <label className="checkbox-label"><input type="checkbox" /> Gasoline</label>
                        <label className="checkbox-label"><input type="checkbox" /> Hybrid</label>
                        <label className="checkbox-label"><input type="checkbox" /> Not Specified</label>
                      </div>
                    </div>

                    <div className="filter-group">
                      <h4>Exterior Color</h4>
                      <div className="checkbox-list">
                        <label className="checkbox-label"><input type="checkbox" /> Beige</label>
                        <label className="checkbox-label"><input type="checkbox" /> Black</label>
                        <label className="checkbox-label"><input type="checkbox" /> Blue</label>
                        <label className="checkbox-label"><input type="checkbox" /> Brown</label>
                        <label className="checkbox-label"><input type="checkbox" /> Gold</label>
                        <label className="checkbox-label"><input type="checkbox" /> Gray</label>
                        <label className="checkbox-label"><input type="checkbox" /> Green</label>
                        <label className="checkbox-label"><input type="checkbox" /> Orange</label>
                        <label className="checkbox-label"><input type="checkbox" /> Red</label>
                        <label className="checkbox-label"><input type="checkbox" /> Silver</label>
                        <label className="checkbox-label"><input type="checkbox" /> White</label>
                        <label className="checkbox-label"><input type="checkbox" /> Yellow</label>
                      </div>
                    </div>
                  </div>

                  <button className="reset-filters-btn">Reset Search Filters</button>
                </div>
              </div>
            </div>
          )}

          {/* Sidebar Filters */}
          <aside className="inventory-sidebar">
            <div className="filter-section">
              <h3>YOUR CURRENT SEARCH</h3>
              <div className="current-search">
                <p><strong>Condition:</strong> Used</p>
              </div>
            </div>

            <div className="filter-section">
              <h3>REFINE YOUR SEARCH</h3>
              
              <div className="filter-group">
                <h4>Make</h4>
                <div className="checkbox-list">
                  {['Acura', 'Alfa Romeo', 'Audi', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler', 'Dodge', 'FIAT', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai', 'INFINITI', 'Jaguar', 'Jeep', 'Kia', 'Land Rover', 'Lexus', 'Lincoln', 'Maserati', 'Mazda', 'Mercedes-Benz', 'MINI', 'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'].map(make => (
                    <label key={make} className="checkbox-label">
                      <input type="checkbox" /> {make}
                    </label>
                  ))}
                </div>
              </div>

              <div className="filter-group">
                <h4>Price</h4>
                <div className="range-inputs">
                  <input type="number" placeholder="Min" className="range-input" />
                  <span>to</span>
                  <input type="number" placeholder="Max" className="range-input" />
                </div>
                <button className="apply-btn">Apply</button>
              </div>

              <div className="filter-group">
                <h4>Body Style</h4>
                <div className="checkbox-list">
                  <label className="checkbox-label"><input type="checkbox" /> Convertible</label>
                  <label className="checkbox-label"><input type="checkbox" /> Coupe</label>
                  <label className="checkbox-label"><input type="checkbox" /> Hatchback</label>
                  <label className="checkbox-label"><input type="checkbox" /> Sedan</label>
                  <label className="checkbox-label"><input type="checkbox" /> SUV</label>
                  <label className="checkbox-label"><input type="checkbox" /> Truck</label>
                  <label className="checkbox-label"><input type="checkbox" /> Van/Minivan</label>
                  <label className="checkbox-label"><input type="checkbox" /> Wagon</label>
                </div>
              </div>

              <div className="filter-group">
                <h4>Mileage</h4>
                <div className="range-inputs">
                  <input type="number" placeholder="Min" className="range-input" />
                  <span>to</span>
                  <input type="number" placeholder="Max" className="range-input" />
                </div>
                <button className="apply-btn">Apply</button>
              </div>

              <div className="filter-group">
                <h4>Transmission</h4>
                <div className="checkbox-list">
                  <label className="checkbox-label"><input type="checkbox" /> Automatic</label>
                  <label className="checkbox-label"><input type="checkbox" /> Manual</label>
                </div>
              </div>

              <div className="filter-group">
                <h4>Drivetrain</h4>
                <div className="checkbox-list">
                  <label className="checkbox-label"><input type="checkbox" /> AWD/4WD</label>
                  <label className="checkbox-label"><input type="checkbox" /> FWD</label>
                  <label className="checkbox-label"><input type="checkbox" /> RWD</label>
                </div>
              </div>

              <div className="filter-group">
                <h4>Fuel Type</h4>
                <div className="checkbox-list">
                  <label className="checkbox-label"><input type="checkbox" /> Diesel</label>
                  <label className="checkbox-label"><input type="checkbox" /> Electric</label>
                  <label className="checkbox-label"><input type="checkbox" /> Flex Fuel</label>
                  <label className="checkbox-label"><input type="checkbox" /> Gasoline</label>
                  <label className="checkbox-label"><input type="checkbox" /> Hybrid</label>
                  <label className="checkbox-label"><input type="checkbox" /> Not Specified</label>
                </div>
              </div>

              <div className="filter-group">
                <h4>Exterior Color</h4>
                <div className="checkbox-list">
                  <label className="checkbox-label"><input type="checkbox" /> Beige</label>
                  <label className="checkbox-label"><input type="checkbox" /> Black</label>
                  <label className="checkbox-label"><input type="checkbox" /> Blue</label>
                  <label className="checkbox-label"><input type="checkbox" /> Brown</label>
                  <label className="checkbox-label"><input type="checkbox" /> Gold</label>
                  <label className="checkbox-label"><input type="checkbox" /> Gray</label>
                  <label className="checkbox-label"><input type="checkbox" /> Green</label>
                  <label className="checkbox-label"><input type="checkbox" /> Orange</label>
                  <label className="checkbox-label"><input type="checkbox" /> Red</label>
                  <label className="checkbox-label"><input type="checkbox" /> Silver</label>
                  <label className="checkbox-label"><input type="checkbox" /> White</label>
                  <label className="checkbox-label"><input type="checkbox" /> Yellow</label>
                </div>
              </div>
            </div>

            <button className="reset-filters-btn">Reset Search Filters</button>
          </aside>

          {/* Vehicle Listings */}
          <div className="inventory-listings">
            {vehicles.map(vehicle => (
              <div key={vehicle.id} className="vehicle-listing-card">
                <Link to={`/vehicle/${vehicle.id}`} className="vehicle-listing-image">
                  <img src={vehicle.image} alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`} />
                  <button className="favorite-icon-btn" onClick={(e) => e.preventDefault()}>♡</button>
                  <button className="compare-btn" onClick={(e) => e.preventDefault()}>Compare ☐</button>
                </Link>

                <div className="vehicle-listing-details">
                  <div className="vehicle-header">
                    <Link to={`/vehicle/${vehicle.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h3>{vehicle.year} {vehicle.make} {vehicle.model}</h3>
                    </Link>
                    <button className="compare-link">Compare ☐</button>
                  </div>
                  
                  <div className="vehicle-specs-grid">
                    <div className="spec-item">
                      <strong>Engine:</strong> {vehicle.engine}
                    </div>
                    <div className="spec-item">
                      <strong>Miles:</strong> {vehicle.mileage.toLocaleString()}
                    </div>
                    <div className="spec-item">
                      <strong>Transmission:</strong> {vehicle.transmission}
                    </div>
                    <div className="spec-item">
                      <strong>Exterior Color:</strong> {vehicle.exteriorColor}
                    </div>
                    <div className="spec-item">
                      <strong>Drivetrain:</strong> {vehicle.drivetrain}
                    </div>
                    <div className="spec-item">
                      <strong>Interior Color:</strong> {vehicle.interiorColor}
                    </div>
                    <div className="spec-item">
                      <strong>Stock #:</strong> {vehicle.stock}
                    </div>
                    <div className="spec-item">
                      <strong>VIN #:</strong> {vehicle.vin}
                    </div>
                  </div>

                     <div className="action-buttons">
                    <button className="btn-action btn-details" onClick={() => handleScheduleTestDrive(vehicle)}>SCHEDULE A TEST DRIVE</button>
                    <button className="btn-action btn-email" onClick={() => handleApplyNow(vehicle)}>Apply Now</button>
                    <button className="btn-action btn-request" onClick={() => handleRequestInfo(vehicle)}>Request More Info</button>
                  </div>
                </div>

                <div className="vehicle-listing-actions">
                  <div className="price-section">
                    <div className="internet-price">
                      <span className="price-label">Internet Price</span>
                      <span className="price-amount">${vehicle.price.toLocaleString()}</span>
                    </div>
                    <div className="contact-info">
                      <p>Call Us</p>
                      <p className="phone-number">{PHONE_NUMBER}</p>
                    </div>
                  </div>

              
                  <div className="additional-actions">
                    <button className="btn-link">Get pre-approved</button>
                    <button className="btn-link">Calculate my payment</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="inventory-pagination-bottom">
          <span>Page: 1 2 3 ... 16</span>
          <div className="view-options">
            <button className="view-btn">Vehicles Per Page</button>
            <button className="view-btn">Show 30 Vehicles</button>
          </div>
        </div>
      </div>

      {/* Schedule Test Drive Modal */}
      {showTestDriveModal && selectedVehicle && (
        <div className="modal-overlay" onClick={closeTestDriveModal}>
          <div className="modal-content modal-content-large" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>SCHEDULE TEST DRIVE</h2>
              <button className="modal-close-btn" onClick={closeTestDriveModal}>×</button>
            </div>

            <div className="modal-body">
              <div className="modal-vehicle-info">
                <img src={selectedVehicle.image} alt={`${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`} />
                <div className="modal-vehicle-details">
                  <h3>{selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}</h3>
                  <p className="modal-vehicle-trim">{selectedVehicle.trim}</p>
                  <div className="modal-vehicle-price-phone">
                    <div>
                      <span className="modal-price-label">Retail Price</span>
                      <span className="modal-price-value">${selectedVehicle.price.toLocaleString()}</span>
                    </div>
                    <div className="modal-phone">{PHONE_NUMBER}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleTestDriveSubmit} className="modal-form">
                <h3 className="modal-section-title">CONTACT INFORMATION</h3>
                
                <div className="modal-form-row">
                  <div className="modal-form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={testDriveFormData.firstName}
                      onChange={handleTestDriveInputChange}
                      required
                    />
                  </div>
                  <div className="modal-form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={testDriveFormData.lastName}
                      onChange={handleTestDriveInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="modal-form-row">
                  <div className="modal-form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={testDriveFormData.email}
                      onChange={handleTestDriveInputChange}
                      placeholder="Example: name@domain.com"
                      required
                    />
                  </div>
                  <div className="modal-form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={testDriveFormData.phone}
                      onChange={handleTestDriveInputChange}
                      placeholder="Example: 999-999-9999"
                    />
                  </div>
                </div>

                <div className="modal-form-row">
                  <div className="modal-form-group">
                    <label>Best Time To Contact</label>
                    <select
                      name="bestTimeToContact"
                      value={testDriveFormData.bestTimeToContact}
                      onChange={handleTestDriveInputChange}
                      className="modal-select"
                    >
                      <option value="Morning">Morning</option>
                      <option value="Afternoon">Afternoon</option>
                      <option value="Evening">Evening</option>
                    </select>
                  </div>
                  <div className="modal-form-group">
                    <label>Time Zone</label>
                    <select
                      name="timeZone"
                      value={testDriveFormData.timeZone}
                      onChange={handleTestDriveInputChange}
                      className="modal-select"
                    >
                      <option value="">Select Time Zone</option>
                      <option value="EST">Eastern Time</option>
                      <option value="CST">Central Time</option>
                      <option value="MST">Mountain Time</option>
                      <option value="PST">Pacific Time</option>
                    </select>
                  </div>
                </div>

                <h3 className="modal-section-title">APPOINTMENT DATE & TIME</h3>

                <div className="modal-form-row">
                  <div className="modal-form-group">
                    <label>1st Time Preference</label>
                    <input
                      type="date"
                      name="firstPreferenceDate"
                      value={testDriveFormData.firstPreferenceDate}
                      onChange={handleTestDriveInputChange}
                    />
                  </div>
                  <div className="modal-form-group">
                    <label>&nbsp;</label>
                    <select
                      name="firstPreferenceTime"
                      value={testDriveFormData.firstPreferenceTime}
                      onChange={handleTestDriveInputChange}
                      className="modal-select"
                    >
                      <option value="8 a.m.">8 a.m.</option>
                      <option value="9 a.m.">9 a.m.</option>
                      <option value="10 a.m.">10 a.m.</option>
                      <option value="11 a.m.">11 a.m.</option>
                      <option value="12 p.m.">12 p.m.</option>
                      <option value="1 p.m.">1 p.m.</option>
                      <option value="2 p.m.">2 p.m.</option>
                      <option value="3 p.m.">3 p.m.</option>
                      <option value="4 p.m.">4 p.m.</option>
                      <option value="5 p.m.">5 p.m.</option>
                      <option value="6 p.m.">6 p.m.</option>
                    </select>
                  </div>
                </div>

                <div className="modal-form-row">
                  <div className="modal-form-group">
                    <label>2nd Time Preference</label>
                    <input
                      type="date"
                      name="secondPreferenceDate"
                      value={testDriveFormData.secondPreferenceDate}
                      onChange={handleTestDriveInputChange}
                    />
                  </div>
                  <div className="modal-form-group">
                    <label>&nbsp;</label>
                    <select
                      name="secondPreferenceTime"
                      value={testDriveFormData.secondPreferenceTime}
                      onChange={handleTestDriveInputChange}
                      className="modal-select"
                    >
                      <option value="8 a.m.">8 a.m.</option>
                      <option value="9 a.m.">9 a.m.</option>
                      <option value="10 a.m.">10 a.m.</option>
                      <option value="11 a.m.">11 a.m.</option>
                      <option value="12 p.m.">12 p.m.</option>
                      <option value="1 p.m.">1 p.m.</option>
                      <option value="2 p.m.">2 p.m.</option>
                      <option value="3 p.m.">3 p.m.</option>
                      <option value="4 p.m.">4 p.m.</option>
                      <option value="5 p.m.">5 p.m.</option>
                      <option value="6 p.m.">6 p.m.</option>
                    </select>
                  </div>
                </div>

                <div className="modal-form-group">
                  <label>Comments</label>
                  <textarea
                    name="comments"
                    value={testDriveFormData.comments}
                    onChange={handleTestDriveInputChange}
                    rows={4}
                  />
                </div>

                <div className="modal-disclaimer">
                  <p>
                    By clicking "Submit", you agree to Gravity Motors Terms of Use and Privacy Policy. 
                    You consent to receive phone calls and SMS messages from Gravity Motors to provide 
                    updates on your order and/or for marketing purposes. Message frequency depends on your 
                    activity. You may opt-out by texting "STOP". Message and data rates may apply.
                  </p>
                </div>

                <p className="modal-required-note">* Denotes a Required Field.</p>

                <button type="submit" className="modal-submit-btn">Schedule Test Drive</button>

                <div className="modal-footer-text">
                  <p>Call Gravity Motors today for more information about this vehicle.</p>
                  <p className="modal-footer-phone">{PHONE_NUMBER}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Request More Info Modal */}
      {showModal && selectedVehicle && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>REQUEST MORE INFO</h2>
              <button className="modal-close-btn" onClick={closeModal}>×</button>
            </div>

            <div className="modal-body">
              <div className="modal-vehicle-info">
                <img src={selectedVehicle.image} alt={`${selectedVehicle.year} ${selectedVehicle.make} ${selectedVehicle.model}`} />
                <div className="modal-vehicle-details">
                  <h3>{selectedVehicle.year} {selectedVehicle.make} {selectedVehicle.model}</h3>
                  <p className="modal-vehicle-trim">{selectedVehicle.trim}</p>
                  <div className="modal-vehicle-price-phone">
                    <div>
                      <span className="modal-price-label">Retail Price</span>
                      <span className="modal-price-value">${selectedVehicle.price.toLocaleString()}</span>
                    </div>
                    <div className="modal-phone">{PHONE_NUMBER}</div>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="modal-form">
                <div className="modal-form-row">
                  <div className="modal-form-group">
                    <label>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="modal-form-group">
                    <label>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="modal-form-row">
                  <div className="modal-form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Example: name@domain.com"
                      required
                    />
                  </div>
                  <div className="modal-form-group">
                    <label>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Example: 999-999-9999"
                    />
                  </div>
                </div>

                <div className="modal-form-group">
                  <label>Comments</label>
                  <textarea
                    name="comments"
                    value={formData.comments}
                    onChange={handleInputChange}
                    rows={4}
                  />
                </div>

                <div className="modal-disclaimer">
                  <p>
                    By clicking "Submit", you agree to Gravity Motors Terms of Use and Privacy Policy. 
                    You consent to receive phone calls and SMS messages from Gravity Motors to provide 
                    updates on your order and/or for marketing purposes. Message frequency depends on your 
                    activity. You may opt-out by texting "STOP". Message and data rates may apply.
                  </p>
                </div>

                <p className="modal-required-note">* Denotes a required field.</p>

                <button type="submit" className="modal-submit-btn">Send</button>

                <div className="modal-footer-text">
                  <p>Call Gravity Motors today for more information about this vehicle.</p>
                  <p className="modal-footer-phone">{PHONE_NUMBER}</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Layout>
  )
}

export default ViewAll
