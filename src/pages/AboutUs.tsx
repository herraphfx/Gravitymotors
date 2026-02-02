import '../App.css'
import Layout from '../components/Layout'
import { useState, useEffect } from 'react'

function AboutUs() {
  const [currentDay, setCurrentDay] = useState('')

  // Detect current day
  useEffect(() => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const today = new Date().getDay()
    setCurrentDay(days[today])
  }, [])

  // Helper function to check if a day is today
  const isToday = (day: string) => {
    return day === currentDay
  }

  return (
    <Layout>
      <div className="about-us-page">
        {/* Breadcrumb */}
        <div className="breadcrumb-section">
          <div className="breadcrumb-container">
            <a href="/">Home</a> &gt; <span>About Us</span>
          </div>
        </div>

        {/* Page Title */}
        <div className="about-title-section">
          <h1 className="about-main-title">MEET OUR TEAM OF AUTOMOTIVE SPECIALISTS</h1>
        </div>

        {/* Content Section */}
        <div className="about-content-section">
          <div className="about-text-content">
            <p className="about-paragraph">
              Gravity Motors Inc is a high-line car dealership serving Forest Park and the surrounding areas. We have been in business since 1987, and have offered an impressive selection of vehicles from all of the top luxury brands at the best prices possible.
            </p>

            <p className="about-paragraph">
              Once you find the perfect car in our inventory, the Gravity Motors Inc finance department will help get you behind the wheel at the best rate possible. Shoppers at all credit levels are welcome at Gravity Motors Inc.
            </p>

            <p className="about-paragraph">
              After you take home your new car from Gravity Motors Inc, our service center will help you keep it in the best condition possible. Our service team specializes in the high-line models we sell. Be sure only the highest trained hands service your car by scheduling an appointment at Gravity Motors Inc today.
            </p>
          </div>

          {/* Contact and Map Section */}
          <div className="about-contact-map-section">
            <div className="about-contact-info">
              <h2 className="about-contact-title">GRAVITY MOTORS</h2>
              <p className="about-address">4040 Jonesboro Road</p>
              <p className="about-address">Forest Park, GA 30297</p>
              <p className="about-phone">Phone: 404-254-4131</p>

              <h3 className="about-hours-title">HOURS OF OPERATION</h3>
              <div className="about-hours-list">
                <div className="about-hours-row">
                  <span className={isToday('Monday') ? 'current-day' : ''}>Monday:</span>
                  <span className={isToday('Monday') ? 'current-day' : ''}>9:00 a.m - 7:00 p.m.</span>
                </div>
                <div className="about-hours-row">
                  <span className={isToday('Tuesday') ? 'current-day' : ''}>Tuesday:</span>
                  <span className={isToday('Tuesday') ? 'current-day' : ''}>9:00 a.m - 7:00 p.m.</span>
                </div>
                <div className="about-hours-row">
                  <span className={isToday('Wednesday') ? 'current-day' : ''}>Wednesday:</span>
                  <span className={isToday('Wednesday') ? 'current-day' : ''}>9:00 a.m - 7:00 p.m.</span>
                </div>
                <div className="about-hours-row">
                  <span className={isToday('Thursday') ? 'current-day' : ''}>Thursday:</span>
                  <span className={isToday('Thursday') ? 'current-day' : ''}>9:00 a.m - 7:00 p.m.</span>
                </div>
                <div className="about-hours-row">
                  <span className={isToday('Friday') ? 'current-day' : ''}>Friday:</span>
                  <span className={isToday('Friday') ? 'current-day' : ''}>9:00 a.m - 7:00 p.m.</span>
                </div>
                <div className="about-hours-row">
                  <span className={isToday('Saturday') ? 'current-day' : ''}>Saturday:</span>
                  <span className={isToday('Saturday') ? 'current-day' : ''}>9:00 a.m - 7:00 p.m.</span>
                </div>
                <div className="about-hours-row">
                  <span className={isToday('Sunday') ? 'current-day' : ''}>Sunday:</span>
                  <span className={isToday('Sunday') ? 'current-day' : ''}>Closed</span>
                </div>
              </div>
            </div>

            <div className="about-map-container">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.2!2d-84.3544!3d33.6562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f51cedf7c5c3c5%3A0x0!2s4040%20Jonesboro%20Rd%2C%20Forest%20Park%2C%20GA%2030297!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs
