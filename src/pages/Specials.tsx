import '../App.css'
import Layout from '../components/Layout'
import { Link } from 'react-router-dom'

function Specials() {
  return (
    <Layout>
      <div className="specials-page">
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>Specials</span>
        </div>

        <div className="specials-page-header">
          <h1>USED CAR SPECIALS</h1>
        </div>

        <div className="specials-page-content">
          <div className="no-specials-section">
            <h2>NO SPECIALS FOUND</h2>
            <p>We're sorry. There are currently no specials available within your search Criteria.</p>
            
            <div className="view-all-link">
              <Link to="/view-all">View All Specials</Link>
            </div>

            <div className="thank-you-message">
              <p>Thank You,</p>
              <p><strong>Gravity Motors Inc.</strong></p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Specials
