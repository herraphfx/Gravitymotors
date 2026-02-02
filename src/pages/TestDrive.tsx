import '../App.css'
import { useState } from 'react'
import Layout from '../components/Layout'

function TestDrive() {
  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    bestTimeToContact: '',
    timeZone: '',
    firstPreferenceDate: '',
    firstPreferenceTime: '',
    secondPreferenceDate: '',
    secondPreferenceTime: '',
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
    alert('Test drive request submitted! We will contact you shortly.')
  }

  return (
    <Layout>
      <div className="test-drive-page">
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>Inventory</span> &gt; <span>Schedule a Test Drive</span>
        </div>

        <div className="test-drive-header">
          <h1>SCHEDULE A TEST DRIVE</h1>
        </div>

        <div className="test-drive-content">
          <div className="test-drive-intro">
            <p>
              Are you looking to test drive a new or used car in Forest Park Georgia? Amazing Luxury Cars Inc lets those of you who are ready to test drive a car, truck, SUV or crossover before making your purchase. We also have a selection of s to test drive in Forest Park GA. If you are ready to take a test drive, simply complete the form below to schedule a test drive at your convenience. Our friendly, experienced sales professionals will put you in the driver's seat and give you a complete walk-around so you know all the details about the car you are test driving.
            </p>
          </div>

          <form className="test-drive-form-layout" onSubmit={handleSubmit}>
            <div className="form-section-box">
              <h2 className="section-heading">VEHICLE OF INTEREST</h2>
              
              <div className="form-row-three">
                <div className="form-group">
                  <label htmlFor="year">Year</label>
                  <input
                    type="text"
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="make">Make</label>
                  <input
                    type="text"
                    id="make"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="model">Model</label>
                  <input
                    type="text"
                    id="model"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-section-box">
              <h2 className="section-heading">CONTACT INFORMATION</h2>
              
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
                    placeholder="Example: name@domain.com"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Example: 999-999-9999"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="bestTimeToContact">Best Time To Contact</label>
                  <select
                    id="bestTimeToContact"
                    name="bestTimeToContact"
                    value={formData.bestTimeToContact}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Morning</option>
                    <option value="morning">Morning</option>
                    <option value="afternoon">Afternoon</option>
                    <option value="evening">Evening</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="timeZone">Time Zone</label>
                  <select
                    id="timeZone"
                    name="timeZone"
                    value={formData.timeZone}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select Time Zone</option>
                    <option value="EST">Eastern Standard Time (EST)</option>
                    <option value="CST">Central Standard Time (CST)</option>
                    <option value="MST">Mountain Standard Time (MST)</option>
                    <option value="PST">Pacific Standard Time (PST)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="form-section-box">
              <h2 className="section-heading">APPOINTMENT DATE & TIME</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstPreferenceDate">1st Time Preference</label>
                  <input
                    type="date"
                    id="firstPreferenceDate"
                    name="firstPreferenceDate"
                    value={formData.firstPreferenceDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="firstPreferenceTime">&nbsp;</label>
                  <select
                    id="firstPreferenceTime"
                    name="firstPreferenceTime"
                    value={formData.firstPreferenceTime}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">8 a.m.</option>
                    <option value="8am">8 a.m.</option>
                    <option value="9am">9 a.m.</option>
                    <option value="10am">10 a.m.</option>
                    <option value="11am">11 a.m.</option>
                    <option value="12pm">12 p.m.</option>
                    <option value="1pm">1 p.m.</option>
                    <option value="2pm">2 p.m.</option>
                    <option value="3pm">3 p.m.</option>
                    <option value="4pm">4 p.m.</option>
                    <option value="5pm">5 p.m.</option>
                    <option value="6pm">6 p.m.</option>
                    <option value="7pm">7 p.m.</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="secondPreferenceDate">2nd Time Preference</label>
                  <input
                    type="date"
                    id="secondPreferenceDate"
                    name="secondPreferenceDate"
                    value={formData.secondPreferenceDate}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="secondPreferenceTime">&nbsp;</label>
                  <select
                    id="secondPreferenceTime"
                    name="secondPreferenceTime"
                    value={formData.secondPreferenceTime}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">8 a.m.</option>
                    <option value="8am">8 a.m.</option>
                    <option value="9am">9 a.m.</option>
                    <option value="10am">10 a.m.</option>
                    <option value="11am">11 a.m.</option>
                    <option value="12pm">12 p.m.</option>
                    <option value="1pm">1 p.m.</option>
                    <option value="2pm">2 p.m.</option>
                    <option value="3pm">3 p.m.</option>
                    <option value="4pm">4 p.m.</option>
                    <option value="5pm">5 p.m.</option>
                    <option value="6pm">6 p.m.</option>
                    <option value="7pm">7 p.m.</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={5}
                  className="form-input"
                ></textarea>
              </div>

              <div className="form-disclaimer">
                <p>
                  By clicking "Submit", you agree to Amazing Luxury Cars Terms of Use and Privacy Policy. You consent to receive phone calls and SMS messages from Amazing Luxury Cars to provide updates on your order and/or for marketing purposes. Message frequency depends on your activity. You may opt-out by texting "STOP". Message and data rates may apply.
                </p>
              </div>

              <div className="form-required-note">
                <p>* Denotes a Required Field.</p>
              </div>

              <div className="form-submit-wrapper">
                <button type="submit" className="btn-submit-testdrive">Schedule Test Drive</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default TestDrive
