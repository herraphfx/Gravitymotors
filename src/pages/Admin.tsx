import { useState } from 'react'
import Layout from '../components/Layout'
import '../styles/Admin.css'

function Admin() {
  const [activeTab, setActiveTab] = useState<'vehicles' | 'accessories'>('vehicles')
  const [vehicles] = useState([])
  const [accessories] = useState([])

  const stats = {
    vehicles: vehicles.length,
    accessories: accessories.length,
    totalViews: 0,
    rating: 0.0,
    reviews: 0
  }

  return (
    <Layout>
      <div className="admin-page">
        <div className="admin-header">
          <div className="admin-title-section">
            <h1 className="admin-title">
              My Vendor Dashboard
              <span className="admin-badge">FREE Tier</span>
            </h1>
            <p className="admin-subtitle">Manage your listings and grow your business</p>
          </div>
          <div className="admin-actions">
            <button className="admin-settings-btn">
              <span className="settings-icon">⚙️</span>
              Settings
            </button>
            <button className="admin-upgrade-btn">
              <span className="upgrade-icon">📈</span>
              Upgrade Plan
            </button>
          </div>
        </div>

        <div className="admin-stats">
          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Vehicles</div>
              <div className="stat-value">{stats.vehicles}</div>
            </div>
            <div className="stat-icon stat-icon-red">
              <span>🚗</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Accessories</div>
              <div className="stat-value">{stats.accessories}</div>
            </div>
            <div className="stat-icon stat-icon-green">
              <span>📦</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Total Views</div>
              <div className="stat-value">{stats.totalViews}</div>
            </div>
            <div className="stat-icon stat-icon-orange">
              <span>👁️</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Rating</div>
              <div className="stat-value">{stats.rating.toFixed(1)}</div>
            </div>
            <div className="stat-icon stat-icon-yellow">
              <span>⭐</span>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-content">
              <div className="stat-label">Reviews</div>
              <div className="stat-value">{stats.reviews}</div>
            </div>
            <div className="stat-icon stat-icon-purple">
              <span>💬</span>
            </div>
          </div>
        </div>

        <div className="admin-content">
          <div className="admin-tabs">
            <button
              className={`admin-tab ${activeTab === 'vehicles' ? 'active' : ''}`}
              onClick={() => setActiveTab('vehicles')}
            >
              <span className="tab-icon">🚗</span>
              Vehicles ({stats.vehicles})
            </button>
            <button
              className={`admin-tab ${activeTab === 'accessories' ? 'active' : ''}`}
              onClick={() => setActiveTab('accessories')}
            >
              <span className="tab-icon">📦</span>
              Accessories ({stats.accessories})
            </button>
          </div>

          <div className="admin-add-buttons">
            {activeTab === 'vehicles' ? (
              <button className="admin-add-btn admin-add-vehicle">
                <span className="add-icon">+</span>
                Add Vehicle
              </button>
            ) : (
              <button className="admin-add-btn admin-add-accessory">
                <span className="add-icon">+</span>
                Add Accessory
              </button>
            )}
          </div>

          <div className="admin-listings">
            {activeTab === 'vehicles' && vehicles.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">🚗</div>
                <h3 className="empty-title">No vehicles listed</h3>
                <p className="empty-text">Start selling by adding your first vehicle listing.</p>
                <button className="empty-add-btn">Add Vehicle</button>
              </div>
            )}

            {activeTab === 'accessories' && accessories.length === 0 && (
              <div className="empty-state">
                <div className="empty-icon">📦</div>
                <h3 className="empty-title">No accessories listed</h3>
                <p className="empty-text">Start selling by adding your first accessory listing.</p>
                <button className="empty-add-btn">Add Accessory</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Admin
