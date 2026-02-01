import '../App.css'
import { useState } from 'react'
import Layout from '../components/Layout'

function GetPreQualified() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    dateOfBirth: '',
    ssn: '',
    employmentStatus: '',
    monthlyIncome: '',
    housingStatus: '',
    monthlyHousingPayment: '',
    desiredVehiclePrice: '',
    downPayment: '',
    creditScore: ''
  })

  const [isPreQualified, setIsPreQualified] = useState(false)
  const [qualificationResult, setQualificationResult] = useState({
    approved: false,
    maxAmount: 0,
    estimatedRate: 0,
    estimatedPayment: 0
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    // Simulate pre-qualification
    const income = parseFloat(formData.monthlyIncome)
    const creditScore = parseInt(formData.creditScore)
    
    // Simple qualification logic
    const maxAmount = income * 36 // 3 years of income
    const rate = creditScore >= 700 ? 4.99 : creditScore >= 650 ? 6.99 : 9.99
    const estimatedPayment = Math.round((maxAmount * 0.4) / 60) // Rough estimate
    
    setQualificationResult({
      approved: true,
      maxAmount: Math.round(maxAmount),
      estimatedRate: rate,
      estimatedPayment: estimatedPayment
    })
    
    setIsPreQualified(true)
  }

  return (
    <Layout>
      <div className="page-container">
      <div className="page-hero">
        <h1 className="page-title">GET PRE-QUALIFIED</h1>
        <p className="page-subtitle">Know your budget before you shop - No impact on credit score!</p>
      </div>

      <div className="page-content">
        {!isPreQualified ? (
          <>
            <div className="prequalify-intro">
              <h2>Pre-Qualification Benefits</h2>
              <div className="benefits-row">
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <div>
                    <h4>Soft Credit Check</h4>
                    <p>Won't affect your credit score</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <div>
                    <h4>Know Your Budget</h4>
                    <p>Shop with confidence</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <div>
                    <h4>Fast Results</h4>
                    <p>Get approved in minutes</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <span className="benefit-icon">✓</span>
                  <div>
                    <h4>Better Negotiation</h4>
                    <p>Shop like a cash buyer</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="prequalify-form" onSubmit={handleSubmit}>
              <div className="form-section-title">Personal Information</div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last Name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Street Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  className="form-input"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State *</label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="zipCode">ZIP Code *</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dateOfBirth">Date of Birth *</label>
                  <input
                    type="date"
                    id="dateOfBirth"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="ssn">Last 4 of SSN *</label>
                  <input
                    type="text"
                    id="ssn"
                    name="ssn"
                    value={formData.ssn}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="XXXX"
                    maxLength={4}
                  />
                </div>
              </div>

              <div className="form-section-title">Financial Information</div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="employmentStatus">Employment Status *</label>
                  <select
                    id="employmentStatus"
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select status</option>
                    <option value="employed">Employed Full-Time</option>
                    <option value="part-time">Employed Part-Time</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="retired">Retired</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="monthlyIncome">Monthly Income *</label>
                  <input
                    type="number"
                    id="monthlyIncome"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="$4,000"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="housingStatus">Housing Status *</label>
                  <select
                    id="housingStatus"
                    name="housingStatus"
                    value={formData.housingStatus}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select status</option>
                    <option value="own">Own</option>
                    <option value="rent">Rent</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="monthlyHousingPayment">Monthly Housing Payment *</label>
                  <input
                    type="number"
                    id="monthlyHousingPayment"
                    name="monthlyHousingPayment"
                    value={formData.monthlyHousingPayment}
                    onChange={handleChange}
                    required
                    className="form-input"
                    placeholder="$1,200"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="creditScore">Estimated Credit Score *</label>
                  <select
                    id="creditScore"
                    name="creditScore"
                    value={formData.creditScore}
                    onChange={handleChange}
                    required
                    className="form-input"
                  >
                    <option value="">Select range</option>
                    <option value="750">Excellent (750+)</option>
                    <option value="700">Good (700-749)</option>
                    <option value="650">Fair (650-699)</option>
                    <option value="600">Poor (600-649)</option>
                    <option value="550">Below 600</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="desiredVehiclePrice">Desired Vehicle Price</label>
                  <input
                    type="number"
                    id="desiredVehiclePrice"
                    name="desiredVehiclePrice"
                    value={formData.desiredVehiclePrice}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="$25,000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="downPayment">Down Payment Amount</label>
                <input
                  type="number"
                  id="downPayment"
                  name="downPayment"
                  value={formData.downPayment}
                  onChange={handleChange}
                  className="form-input"
                  placeholder="$5,000"
                />
              </div>

              <div className="form-disclaimer">
                <p>By submitting this form, you authorize Gravity Motors to perform a soft credit inquiry which will not affect your credit score. Your information is secure and confidential.</p>
              </div>

              <button type="submit" className="btn-submit">Get Pre-Qualified Now</button>
            </form>
          </>
        ) : (
          <div className="qualification-results">
            <div className="results-header">
              <div className="success-icon">✓</div>
              <h2>Congratulations! You're Pre-Qualified</h2>
              <p>Based on the information provided, here's your pre-qualification summary:</p>
            </div>

            <div className="results-grid">
              <div className="result-card">
                <h3>Maximum Loan Amount</h3>
                <div className="result-value">${qualificationResult.maxAmount.toLocaleString()}</div>
              </div>
              <div className="result-card">
                <h3>Estimated Interest Rate</h3>
                <div className="result-value">{qualificationResult.estimatedRate}% APR</div>
              </div>
              <div className="result-card">
                <h3>Estimated Monthly Payment</h3>
                <div className="result-value">${qualificationResult.estimatedPayment.toLocaleString()}</div>
                <p className="result-note">Based on 60-month term</p>
              </div>
            </div>

            <div className="next-steps">
              <h3>What's Next?</h3>
              <div className="steps-list">
                <div className="step-item">
                  <span className="step-number">1</span>
                  <div>
                    <h4>Browse Our Inventory</h4>
                    <p>Shop vehicles within your approved budget</p>
                  </div>
                </div>
                <div className="step-item">
                  <span className="step-number">2</span>
                  <div>
                    <h4>Schedule a Test Drive</h4>
                    <p>Experience your favorite vehicles in person</p>
                  </div>
                </div>
                <div className="step-item">
                  <span className="step-number">3</span>
                  <div>
                    <h4>Finalize Your Financing</h4>
                    <p>Complete the full application when you're ready</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="results-actions">
              <button className="btn-primary">Browse Inventory</button>
              <button className="btn-secondary">Schedule Test Drive</button>
            </div>

            <div className="results-disclaimer">
              <p>* Pre-qualification is not a guarantee of financing. Final approval is subject to full credit application and verification of information. Rates and terms may vary.</p>
            </div>
          </div>
        )}
      </div>
      </div>
    </Layout>
  )
}

export default GetPreQualified
