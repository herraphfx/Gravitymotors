import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'
import '../styles/AddNewAccessory.css'

function AddNewAccessory() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    productTitle: '',
    category: '',
    brand: '',
    partNumber: '',
    price: '',
    condition: 'New',
    warranty: '',
    quantityInStock: '',
    shippingPrice: '',
    inStock: true,
    compatibleMakes: '',
    compatibleModels: '',
    compatibleYears: '',
    description: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData({
        ...formData,
        [name]: checked
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Accessory listing created successfully!')
    navigate('/admin')
  }

  const handleCancel = () => {
    navigate('/admin')
  }

  return (
    <Layout>
      <div className="add-accessory-page">
        <div className="add-accessory-container">
          <button className="back-to-dashboard" onClick={() => navigate('/admin')}>
            <span className="back-arrow">←</span>
            Back to Dashboard
          </button>

          <div className="add-accessory-card">
            <div className="add-accessory-header">
              <h1 className="add-accessory-title">
                <span className="title-icon">📦</span>
                Add New Accessory
              </h1>
              <p className="add-accessory-subtitle">Fill in the details below to list your part or accessory on the marketplace.</p>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Basic Information */}
              <section className="form-section">
                <h2 className="section-title">Basic Information</h2>

                <div className="form-group full-width">
                  <label htmlFor="productTitle">Product Title</label>
                  <input
                    type="text"
                    id="productTitle"
                    name="productTitle"
                    value={formData.productTitle}
                    onChange={handleChange}
                    placeholder="e.g., Premium Brake Pads - Front Set"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select category</option>
                      <option value="Brakes">Brakes</option>
                      <option value="Engine Parts">Engine Parts</option>
                      <option value="Suspension">Suspension</option>
                      <option value="Exhaust">Exhaust</option>
                      <option value="Filters">Filters</option>
                      <option value="Lighting">Lighting</option>
                      <option value="Interior">Interior</option>
                      <option value="Exterior">Exterior</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Wheels & Tires">Wheels & Tires</option>
                      <option value="Body Parts">Body Parts</option>
                      <option value="Performance">Performance</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="brand">Brand</label>
                    <input
                      type="text"
                      id="brand"
                      name="brand"
                      value={formData.brand}
                      onChange={handleChange}
                      placeholder="e.g., Bosch"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="partNumber">Part Number</label>
                    <input
                      type="text"
                      id="partNumber"
                      name="partNumber"
                      value={formData.partNumber}
                      onChange={handleChange}
                      placeholder="e.g., BP-2234"
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
                      placeholder="49.99"
                      min="0"
                      step="0.01"
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
                      <option value="New">New</option>
                      <option value="Used">Used</option>
                      <option value="Refurbished">Refurbished</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="warranty">Warranty</label>
                    <input
                      type="text"
                      id="warranty"
                      name="warranty"
                      value={formData.warranty}
                      onChange={handleChange}
                      placeholder="e.g., 1 Year"
                    />
                  </div>
                </div>
              </section>

              {/* Inventory */}
              <section className="form-section">
                <h2 className="section-title">Inventory</h2>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="quantityInStock">Quantity in Stock</label>
                    <input
                      type="number"
                      id="quantityInStock"
                      name="quantityInStock"
                      value={formData.quantityInStock}
                      onChange={handleChange}
                      placeholder="1"
                      min="0"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="shippingPrice">Shipping Price ($)</label>
                    <input
                      type="number"
                      id="shippingPrice"
                      name="shippingPrice"
                      value={formData.shippingPrice}
                      onChange={handleChange}
                      placeholder="9.99"
                      min="0"
                      step="0.01"
                    />
                    <small className="field-hint">Leave empty for free shipping</small>
                  </div>

                  <div className="form-group checkbox-group">
                    <label className="checkbox-label">
                      <input
                        type="checkbox"
                        name="inStock"
                        checked={formData.inStock}
                        onChange={handleChange}
                      />
                      <span className="checkbox-text">In Stock</span>
                    </label>
                  </div>
                </div>
              </section>

              {/* Vehicle Compatibility */}
              <section className="form-section">
                <h2 className="section-title">Vehicle Compatibility</h2>

                <div className="form-group full-width">
                  <label htmlFor="compatibleMakes">Compatible Makes (comma-separated)</label>
                  <input
                    type="text"
                    id="compatibleMakes"
                    name="compatibleMakes"
                    value={formData.compatibleMakes}
                    onChange={handleChange}
                    placeholder="e.g., Toyota, Honda, Nissan"
                  />
                  <small className="field-hint">Leave empty if universal fit. Popular: Toyota, Honda, Ford, Chevrolet</small>
                </div>

                <div className="form-group full-width">
                  <label htmlFor="compatibleModels">Compatible Models (comma-separated)</label>
                  <input
                    type="text"
                    id="compatibleModels"
                    name="compatibleModels"
                    value={formData.compatibleModels}
                    onChange={handleChange}
                    placeholder="e.g., Camry, Accord, Civic"
                  />
                </div>

                <div className="form-group full-width">
                  <label htmlFor="compatibleYears">Compatible Years (comma-separated)</label>
                  <input
                    type="text"
                    id="compatibleYears"
                    name="compatibleYears"
                    value={formData.compatibleYears}
                    onChange={handleChange}
                    placeholder="e.g., 2018, 2019, 2020, 2021, 2022"
                  />
                </div>
              </section>

              {/* Description */}
              <section className="form-section">
                <h2 className="section-title">Description</h2>

                <div className="form-group full-width">
                  <label htmlFor="description">Product Description</label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe your product, features, and any important specifications..."
                    rows={6}
                    required
                  />
                </div>
              </section>

              {/* Photos */}
              <section className="form-section">
                <h2 className="section-title">Photos</h2>

                <div className="upload-area">
                  <div className="upload-icon">⬆️</div>
                  <p className="upload-text">
                    <span className="upload-link">Click to upload</span> or drag and drop
                  </p>
                  <p className="upload-hint">PNG, JPG, GIF up to 10MB each</p>
                </div>
              </section>

              {/* Form Actions */}
              <div className="form-actions">
                <button type="button" className="btn-cancel" onClick={handleCancel}>
                  Cancel
                </button>
                <button type="submit" className="btn-submit">
                  List Accessory
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AddNewAccessory
