import '../App.css'
import { useState } from 'react'
import Layout from '../components/Layout'

function Services() {
  const [formData, setFormData] = useState({
    year: '',
    make: '',
    model: '',
    mileage: '',
    vin: '',
    recommendedMaintenance: false,
    engineRepair: false,
    exhaustRepair: false,
    startingBatteryIssues: false,
    acHeatingIssue: false,
    alignment: false,
    transmissionIssues: false,
    brakingSystem: false,
    electricalAudioSystem: false,
    emissionsInspection: false,
    oilFilterChange: false,
    comments: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    date: '',
    time: ''
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
    alert('Service request submitted! We will contact you shortly to confirm your appointment.')
  }

  return (
    <Layout>
      <div className="services-page">
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>Services</span>
        </div>

        <div className="services-header">
          <h1>SERVICES</h1>
        </div>

        <div className="services-content">
          <div className="services-intro">
            <p>
              In addition to offering the best selection of pre-owned luxury cars in the area, Amazing Luxury Cars Inc is home to a service department that is capable of taking care of these impressive vehicles. Let a practiced hand take care of your high-line car through the Amazing Luxury Cars Inc service department.
            </p>
            <p>
              If your car needs routine maintenance, or more substantial repairs, the Amazing Luxury Cars Inc service center is here to help. Schedule your appointment with us today.
            </p>
          </div>

          <div className="services-list-section">
            <h2>COME TO US FOR:</h2>
            <div className="services-two-column">
              <ul className="services-list">
                <li>Lube, Oil & Filter Change</li>
                <li>Brakes, Rotors, Adjust Brakes</li>
                <li>Coolant Flush</li>
                <li>Electrical Service</li>
                <li>Tire Rotation</li>
              </ul>
              <ul className="services-list">
                <li>Front End Alignment</li>
                <li>Steering & Suspension</li>
                <li>Vehicle Checkup / Inspection</li>
                <li>Tire Balance</li>
                <li>Much More!</li>
              </ul>
              <ul className="services-list">
                <li>Maintenance (Wipers, Headlights, Etc)</li>
                <li>Tune-Up Service</li>
                <li>Transmission Flush</li>
                <li>Filter Replacement</li>
              </ul>
            </div>
          </div>

          <form className="services-form" onSubmit={handleSubmit}>
            <div className="form-section-box">
              <h2 className="section-heading">VEHICLE INFORMATION</h2>
              
              <div className="form-row">
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
              </div>

              <div className="form-row">
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
                <div className="form-group">
                  <label htmlFor="mileage">Mileage</label>
                  <input
                    type="text"
                    id="mileage"
                    name="mileage"
                    value={formData.mileage}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="vin">Vin</label>
                <input
                  type="text"
                  id="vin"
                  name="vin"
                  value={formData.vin}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>
            </div>

            <div className="form-section-box">
              <h2 className="section-heading">REASON FOR SERVICE</h2>
              
              <div className="checkbox-grid">
                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Recommended Maintenance
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="recommendedMaintenance"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="recommendedMaintenance"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Transmission Issues
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="transmissionIssues"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="transmissionIssues"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Engine Repair
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="engineRepair"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="engineRepair"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Braking System
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="brakingSystem"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="brakingSystem"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Exhaust Repair
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="exhaustRepair"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="exhaustRepair"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Electrical & Audio System
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="electricalAudioSystem"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="electricalAudioSystem"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Starting / Battery Issues
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="startingBatteryIssues"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="startingBatteryIssues"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Emissions Inspection
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="emissionsInspection"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="emissionsInspection"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    A/C or Heating Issue
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="acHeatingIssue"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="acHeatingIssue"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Oil & Filter Change
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="oilFilterChange"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="oilFilterChange"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>

                <div className="checkbox-row">
                  <label className="checkbox-label-service">
                    Alignment
                  </label>
                  <div className="radio-group">
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="alignment"
                        value="yes"
                        onChange={handleChange}
                      />
                      Yes
                    </label>
                    <label className="radio-label">
                      <input
                        type="radio"
                        name="alignment"
                        value="no"
                        onChange={handleChange}
                      />
                      No
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="comments">Comments</label>
                <textarea
                  id="comments"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  className="form-input"
                  placeholder="Briefly describe the reason you want to schedule service"
                ></textarea>
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

              <div className="form-group">
                <label htmlFor="address1">Address 1</label>
                <input
                  type="text"
                  id="address1"
                  name="address1"
                  value={formData.address1}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="address2">Address 2</label>
                <input
                  type="text"
                  id="address2"
                  name="address2"
                  value={formData.address2}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-row-three">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <select
                    id="state"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="form-input"
                  >
                    <option value="">Select State</option>
                    <option value="GA">Georgia</option>
                    <option value="AL">Alabama</option>
                    <option value="FL">Florida</option>
                    <option value="NC">North Carolina</option>
                    <option value="SC">South Carolina</option>
                    <option value="TN">Tennessee</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="zip">Zip</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>
            </div>

            <div className="form-section-box">
              <h2 className="section-heading">PREFERRED APPOINTMENT DATE & TIME</h2>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="date">Date</label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="time">Time</label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="appointment-note">
                <p>Appointment requests must be confirmed to be valid.</p>
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
                <button type="submit" className="btn-submit-testdrive">Submit Request</button>
              </div>
            </div>
          </form>

          <div className="service-hours-map">
            <div className="map-section">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3308.7!2d-84.0!3d33.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDU0JzAwLjAiTiA4NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="hours-section">
              <h3>SERVICE DEPARTMENT HOURS</h3>
              <div className="hours-list">
                <div className="hours-item">
                  <span>Monday:</span>
                  <span>8:30 a.m. - 4:30p.m.</span>
                </div>
                <div className="hours-item">
                  <span>Tuesday:</span>
                  <span>8:30 a.m. - 4:30p.m.</span>
                </div>
                <div className="hours-item">
                  <span>Wednesday:</span>
                  <span>8:30 a.m. - 4:30p.m.</span>
                </div>
                <div className="hours-item">
                  <span>Thursday:</span>
                  <span>8:30 a.m. - 4:30p.m.</span>
                </div>
                <div className="hours-item">
                  <span>Friday:</span>
                  <span>8:30 a.m. - 4:30p.m.</span>
                </div>
                <div className="hours-item">
                  <span>Saturday:</span>
                  <span>9:00 a.m. - 3 p.m.</span>
                </div>
                <div className="hours-item">
                  <span>Sunday:</span>
                  <span className="closed">Closed</span>
                </div>
              </div>
              <div className="service-contact">
                <h4>Service Department</h4>
                <p>3591 Stone Mountain Highway 78 W</p>
                <p>Snellville, GA 30039</p>
                <p><strong>Phone: 770-425-3500</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Services
