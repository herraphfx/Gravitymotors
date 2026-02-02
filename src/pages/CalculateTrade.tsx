import '../App.css'
import { useState } from 'react'
import Layout from '../components/Layout'

function CalculateTrade() {
  const [formData, setFormData] = useState({
    // Vehicle of Interest
    interestYear: '',
    interestMake: '',
    interestModel: '',
    stockNumber: '',
    
    // About Your Vehicle
    year: '',
    make: '',
    model: '',
    mileage: '',
    exteriorColor: '',
    interiorColor: '',
    payoffBalance: '',
    condition: '',
    vin: '',
    conditionComments: '',
    
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTimeToContact: '',
    purchaseTimeframe: '',
    comments: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Trade appraisal request submitted! We will contact you shortly with an estimate.')
  }

  return (
    <Layout>
      <div className="calculate-trade-page">
        <div className="breadcrumb">
          <span>Home</span>
        </div>

        <div className="trade-page-header">
          <h1>CALCULATE YOUR TRADE</h1>
        </div>

        <div className="trade-page-content">
          <div className="trade-intro-section">
            <h2>WHAT IS MY VEHICLE WORTH?</h2>
            <p>
              Interested in trading in your current vehicle? It would probably be good to have an estimate of what it's worth first. After all, trading in a vehicle is a lot less hassle than selling it yourself. And you can often lower your payments by trading in a vehicle as well. Win-win!
            </p>
            <p>
              We're here to help you make an informed decision here at Gravity Motors Inc. Fill out the simple form below, and we'll send you an estimated appraisal within 48 hours. From there, it's up to you what you want to do!
            </p>
          </div>

          <form className="trade-appraisal-form" onSubmit={handleSubmit}>
            {/* Vehicle of Interest */}
            <div className="form-section-trade">
              <h2 className="section-title-trade">VEHICLE OF INTEREST</h2>
              <div className="form-row-trade">
                <div className="form-field-trade">
                  <label>Year</label>
                  <input
                    type="text"
                    name="interestYear"
                    value={formData.interestYear}
                    onChange={handleChange}
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Make</label>
                  <input
                    type="text"
                    name="interestMake"
                    value={formData.interestMake}
                    onChange={handleChange}
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Model</label>
                  <input
                    type="text"
                    name="interestModel"
                    value={formData.interestModel}
                    onChange={handleChange}
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Stock #</label>
                  <input
                    type="text"
                    name="stockNumber"
                    value={formData.stockNumber}
                    onChange={handleChange}
                    className="input-trade"
                  />
                </div>
              </div>
            </div>

            {/* About Your Vehicle */}
            <div className="form-section-trade">
              <h2 className="section-title-trade">ABOUT YOUR VEHICLE</h2>
              <div className="form-row-trade">
                <div className="form-field-trade">
                  <label>Year *</label>
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    required
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Make *</label>
                  <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    required
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Model *</label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    required
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Mileage *</label>
                  <input
                    type="text"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    required
                    className="input-trade"
                  />
                </div>
              </div>

              <div className="form-row-trade">
                <div className="form-field-trade">
                  <label>Exterior Color</label>
                  <input
                    type="text"
                    name="exteriorColor"
                    value={formData.exteriorColor}
                    onChange={handleChange}
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Interior Color</label>
                  <input
                    type="text"
                    name="interiorColor"
                    value={formData.interiorColor}
                    onChange={handleChange}
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Payoff Balance</label>
                  <input
                    type="text"
                    name="payoffBalance"
                    value={formData.payoffBalance}
                    onChange={handleChange}
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Condition</label>
                  <select
                    name="condition"
                    value={formData.condition}
                    onChange={handleChange}
                    className="input-trade"
                  >
                    <option value="">Excellent Condition</option>
                    <option value="excellent">Excellent Condition</option>
                    <option value="good">Good Condition</option>
                    <option value="fair">Fair Condition</option>
                    <option value="poor">Poor Condition</option>
                  </select>
                </div>
              </div>

              <div className="form-field-trade">
                <label>VIN *</label>
                <input
                  type="text"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  required
                  className="input-trade"
                />
              </div>

              <div className="form-field-trade">
                <label>Condition Comments</label>
                <textarea
                  name="conditionComments"
                  value={formData.conditionComments}
                  onChange={handleChange}
                  rows={4}
                  className="input-trade textarea-trade"
                ></textarea>
              </div>
            </div>

            {/* Contact Information */}
            <div className="form-section-trade">
              <h2 className="section-title-trade">CONTACT INFORMATION</h2>
              <div className="form-row-trade">
                <div className="form-field-trade">
                  <label>First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="input-trade"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="input-trade"
                  />
                </div>
              </div>

              <div className="form-row-trade">
                <div className="form-field-trade">
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input-trade"
                    placeholder="Example: name@domain.com"
                  />
                </div>
                <div className="form-field-trade">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="input-trade"
                    placeholder="Example: 999-999-9999"
                  />
                </div>
              </div>

              <div className="form-row-trade">
                <div className="form-field-trade">
                  <label>Best Time To Contact</label>
                  <select
                    name="bestTimeToContact"
                    value={formData.bestTimeToContact}
                    onChange={handleChange}
                    className="input-trade"
                  >
                    <option value="">Morning</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
                <div className="form-field-trade">
                  <label>Purchase Timeframe</label>
                  <select
                    name="purchaseTimeframe"
                    value={formData.purchaseTimeframe}
                    onChange={handleChange}
                    className="input-trade"
                  >
                    <option value="">Within the next 24 hours</option>
                    <option value="24hours">Within the next 24 hours</option>
                    <option value="week">Within a week</option>
                    <option value="month">Within a month</option>
                    <option value="3months">Within 3 months</option>
                    <option value="researching">Just researching</option>
                  </select>
                </div>
              </div>

              <div className="form-field-trade">
                <label>Comments</label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="input-trade textarea-trade"
                ></textarea>
              </div>

              <div className="form-disclaimer-trade">
                <p>
                  By clicking "Submit", you agree to Gravity Motors Terms of Use and Privacy Policy. You consent to receive phone calls and SMS messages from Gravity Motors to provide updates on your order and/or for marketing purposes. Message frequency depends on your activity. You may opt-out by texting "STOP". Message and data rates may apply.
                </p>
              </div>

              <div className="form-required-note">
                <p>* Denotes a Required Field.</p>
              </div>

              <div className="form-submit-wrapper">
                <button type="submit" className="btn-submit-trade">Send Trade Appraisal</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default CalculateTrade
