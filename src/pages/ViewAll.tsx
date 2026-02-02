import '../App.css'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

function ViewAll() {
  const [selectedMakes, setSelectedMakes] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 })
  const [mileageRange, setMileageRange] = useState({ min: 0, max: 200000 })

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
          <span>Sort By:</span>
          <button className="sort-btn">Best Match</button>
          <button className="sort-btn">Model</button>
          <button className="sort-btn">Mileage</button>
          <button className="sort-btn">Price</button>
          <button className="sort-btn">Photos</button>
        </div>

        <div className="inventory-layout">
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
                    <button className="btn-action btn-details">404-254-4131</button>
                    <button className="btn-action btn-email">Apply Now</button>
                    <button className="btn-action btn-request">Request More Info</button>
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
                      <p className="phone-number">404-254-4131</p>
                    </div>
                  </div>

              
                  <div className="additional-actions">
                    <button className="btn-link">Estimate payment</button>
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
    </Layout>
  )
}

export default ViewAll
