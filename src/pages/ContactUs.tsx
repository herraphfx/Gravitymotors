import '../App.css'
import { useState } from 'react'
import Layout from '../components/Layout'

function ContactUs() {
  const [contactData, setContactData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    preferredContact: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Thank you for contacting Gravity Motors! We will respond to your message shortly.')
  }

  return (
    <Layout>
      <div className="page-container">
        <div className="page-hero">
          <h1 className="page-title">CONTACT US</h1>
          <p className="page-subtitle">We're here to answer all your questions</p>
        </div>

        <div className="page-content">
          <div className="specials-intro">
            <h2>Get in Touch</h2>
            <p>Whether you have questions about our inventory, need financing assistance, or want to schedule a service appointment, our team is ready to help.</p>
          </div>

          <div className="mpg-benefits">
            <div className="benefit-card">
              <span className="benefit-icon">📞</span>
              <h3>Call Us</h3>
              <p><strong style={{ fontSize: '20px', color: '#8B7355' }}>404-254-4131</strong></p>
              <p>Monday - Saturday<br/>9:00 AM - 7:00 PM</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">💬</span>
              <h3>Text or Chat</h3>
              <p>Text: <strong>404-254-4131</strong></p>
              <p>Live chat available on our website</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">✉️</span>
              <h3>Email Us</h3>
              <p><strong>info@gravitymotors.com</strong></p>
              <p>We respond within 24 hours</p>
            </div>
            <div className="benefit-card">
              <span className="benefit-icon">📍</span>
              <h3>Visit Us</h3>
              <p>3591 Stone Mountain Hwy 78 W</p>
              <p>Forest Park, GA 30297</p>
            </div>
          </div>

          <div className="form-section">
            <div className="form-intro">
              <h2>Send Us a Message</h2>
              <p>Complete the form below and a member of our team will contact you shortly.</p>
            </div>

            <form className="test-drive-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName">First Name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={contactData.firstName}
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
                    value={contactData.lastName}
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
                    value={contactData.email}
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
                    value={contactData.phone}
                    onChange={handleChange}
                    required
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="preferredContact">Preferred Contact Method *</label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  value={contactData.preferredContact}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select method</option>
                  <option value="phone">Phone Call</option>
                  <option value="text">Text Message</option>
                  <option value="email">Email</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject *</label>
                <select
                  id="subject"
                  name="subject"
                  value={contactData.subject}
                  onChange={handleChange}
                  required
                  className="form-input"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="inventory">Vehicle Inventory Question</option>
                  <option value="financing">Financing Question</option>
                  <option value="service">Service Appointment</option>
                  <option value="trade">Trade-In/Sell My Car</option>
                  <option value="test-drive">Schedule Test Drive</option>
                  <option value="complaint">Complaint or Concern</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={contactData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="form-input"
                  placeholder="Please provide details about your inquiry..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">Send Message</button>
            </form>
          </div>

          <div className="trade-info">
            <h3>Our Departments</h3>
            <div className="trade-benefits-grid">
              <div className="benefit-box">
                <span className="benefit-icon">🚗</span>
                <h4>Sales Department</h4>
                <p>Questions about our inventory, pricing, or availability</p>
                <p><strong>sales@gravitymotors.com</strong></p>
              </div>
              <div className="benefit-box">
                <span className="benefit-icon">💰</span>
                <h4>Finance Department</h4>
                <p>Financing, credit approval, and payment questions</p>
                <p><strong>finance@gravitymotors.com</strong></p>
              </div>
              <div className="benefit-box">
                <span className="benefit-icon">🔧</span>
                <h4>Service Department</h4>
                <p>Maintenance, repairs, and service appointments</p>
                <p><strong>service@gravitymotors.com</strong></p>
              </div>
              <div className="benefit-box">
                <span className="benefit-icon">👥</span>
                <h4>General Manager</h4>
                <p>Feedback, concerns, or special requests</p>
                <p><strong>manager@gravitymotors.com</strong></p>
              </div>
            </div>
          </div>

          <div className="financing-promo">
            <h2>📍 Visit Our Showroom</h2>
            <p>4040 Jonesboro Road, Forest Park, GA 30297</p>
            <p>Monday - Saturday: 9:00 AM - 7:00 PM | Sunday: Closed</p>
            <button className="btn-financing">Get Directions</button>
          </div>

          <div className="contact-cta">
            <h3>Prefer Immediate Assistance?</h3>
            <p>Call us now at <strong>404-254-4131</strong> or use our live chat feature!</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
