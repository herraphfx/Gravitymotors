import { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

interface Product {
  id: number
  name: string
  brand: string
  price: number
  image: string
  partNumber: string
  description: string
  inStock: boolean
}

function AutomotiveParts() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('')
  const [sortBy, setSortBy] = useState('default')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('list')
  const [showBrands, setShowBrands] = useState(true)
  const [showCategories, setShowCategories] = useState(true)
  const [showPrices, setShowPrices] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)

  // Sample automotive parts products
  const products: Product[] = [
    {
      id: 1,
      name: 'Toyota OEM Front Suspension Accumulator Control (49141-60020) 1Piece',
      brand: 'Toyota',
      price: 320000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: '49141-60020',
      description: 'Fits Left or Right: Sold Individually',
      inStock: true
    },
    {
      id: 2,
      name: 'Toyota OEM Rear Suspension Accumulator Control (49151-60020) 1Piece',
      brand: 'Toyota',
      price: 320000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: '49151-60020',
      description: 'Fits Left or Right: Sold Individually',
      inStock: true
    },
    {
      id: 3,
      name: 'Mercedes Benz Front Lower Control Arm (1673309301 & 1673309401) Pair',
      brand: 'Mercedes Benz',
      price: 800000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: '1673309301',
      description: 'Left & Right',
      inStock: true
    },
    {
      id: 4,
      name: 'Mercedes Benz OEM Rear Shocks/Struts (1673203705) Pair',
      brand: 'Mercedes Benz',
      price: 650000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: '1673203705',
      description: 'With Air Suspension/Adaptive Damper',
      inStock: true
    },
    {
      id: 5,
      name: 'Mercedes Benz OEM Front Lower Control Arm Bushing (48655-0C010)',
      brand: 'Mercedes Benz',
      price: 80000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: '48655-0C010',
      description: 'Pair#643300743',
      inStock: true
    },
    {
      id: 6,
      name: 'Bilstein OEM Rear Shocks/Struts (1673200230) Pair',
      brand: 'Bilstein',
      price: 460000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: '1673200230',
      description: 'Without Air Suspension',
      inStock: true
    },
    {
      id: 7,
      name: 'Mercedes Benz Front Lower Forward Control Arm (2133302100 & 2133302200) Pair',
      brand: 'Mercedes Benz',
      price: 220000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: '2133302100',
      description: 'Fits: 4Matic/AWD Trim Only',
      inStock: true
    },
    {
      id: 8,
      name: 'Honda OEM Front Suspension Strut Assembly',
      brand: 'Honda',
      price: 450000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'HD-51605-T2A',
      description: 'Complete Assembly with Spring',
      inStock: true
    },
    {
      id: 9,
      name: 'Lexus OEM Rear Air Suspension Shock',
      brand: 'Lexus',
      price: 750000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'LX-48090-50180',
      description: 'Air Suspension System',
      inStock: true
    },
    {
      id: 10,
      name: 'Nissan Front Lower Control Arm Bushing Kit',
      brand: 'Nissan',
      price: 95000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'NS-54560-JA00A',
      description: 'Complete Bushing Set',
      inStock: true
    },
    {
      id: 11,
      name: 'Acura OEM Front Brake Pads Set',
      brand: 'Acura',
      price: 125000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'AC-45022-TZ5-A01',
      description: 'Premium Ceramic Brake Pads',
      inStock: true
    },
    {
      id: 12,
      name: 'Nissan OEM Rear Brake Rotors Pair',
      brand: 'Nissan',
      price: 280000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'NS-43206-JA00B',
      description: 'Vented Disc Rotors',
      inStock: true
    },
    {
      id: 13,
      name: 'Honda OEM Engine Air Filter',
      brand: 'Honda',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'HD-17220-RZA-000',
      description: 'High Flow Air Filter',
      inStock: true
    },
    {
      id: 14,
      name: 'Toyota OEM Cabin Air Filter',
      brand: 'Toyota',
      price: 38000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'TY-87139-YZZ08',
      description: 'Activated Carbon Filter',
      inStock: true
    },
    {
      id: 15,
      name: 'Lexus OEM Spark Plugs Set of 6',
      brand: 'Lexus',
      price: 180000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'LX-90919-01253',
      description: 'Iridium Spark Plugs',
      inStock: true
    },
    {
      id: 16,
      name: 'Kia OEM Front Wheel Bearing Hub Assembly',
      brand: 'Kia',
      price: 195000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'KI-51750-3X000',
      description: 'Complete Hub Assembly',
      inStock: true
    },
    {
      id: 17,
      name: 'Mitsubishi OEM Timing Belt Kit',
      brand: 'Mitsubishi',
      price: 420000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'MT-1300A113',
      description: 'Includes Tensioner and Pulleys',
      inStock: true
    },
    {
      id: 18,
      name: 'Hyundai OEM Water Pump',
      brand: 'Hyundai',
      price: 165000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'HY-25100-2G100',
      description: 'High Performance Water Pump',
      inStock: true
    },
    {
      id: 19,
      name: 'Ford OEM Fuel Pump Assembly',
      brand: 'Ford',
      price: 385000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'FD-E2363M',
      description: 'Electric Fuel Pump Module',
      inStock: true
    },
    {
      id: 20,
      name: 'Land Rover OEM Air Suspension Compressor',
      brand: 'Land Rover',
      price: 1250000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'LR-LR072537',
      description: 'Air Suspension Pump',
      inStock: true
    },
    {
      id: 21,
      name: 'Mercedes Benz OEM Radiator',
      brand: 'Mercedes Benz',
      price: 580000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'MB-2045001403',
      description: 'Aluminum Core Radiator',
      inStock: true
    },
    {
      id: 22,
      name: 'Toyota OEM Alternator',
      brand: 'Toyota',
      price: 425000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'TY-27060-0H050',
      description: '130 Amp Alternator',
      inStock: true
    },
    {
      id: 23,
      name: 'Honda OEM Starter Motor',
      brand: 'Honda',
      price: 365000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'HD-31200-5AA-A01',
      description: 'High Torque Starter',
      inStock: true
    },
    {
      id: 24,
      name: 'Nissan OEM Clutch Kit',
      brand: 'Nissan',
      price: 485000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'NS-30100-RPC-003',
      description: 'Complete Clutch Assembly',
      inStock: true
    },
    {
      id: 25,
      name: 'Acura OEM CV Axle Shaft',
      brand: 'Acura',
      price: 295000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'AC-44305-SDA-A00',
      description: 'Front Right CV Axle',
      inStock: true
    },
    {
      id: 26,
      name: 'Lexus OEM Oxygen Sensor',
      brand: 'Lexus',
      price: 215000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'LX-89465-48080',
      description: 'Heated O2 Sensor',
      inStock: true
    },
    {
      id: 27,
      name: 'Kia OEM Catalytic Converter',
      brand: 'Kia',
      price: 725000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'KI-28950-2E000',
      description: 'Direct Fit Catalytic Converter',
      inStock: true
    },
    {
      id: 28,
      name: 'Mitsubishi OEM Exhaust Manifold',
      brand: 'Mitsubishi',
      price: 395000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'MT-MR984037',
      description: 'Cast Iron Manifold',
      inStock: true
    },
    {
      id: 29,
      name: 'Hyundai OEM Throttle Body',
      brand: 'Hyundai',
      price: 285000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'HY-35100-2G700',
      description: 'Electronic Throttle Body',
      inStock: true
    },
    {
      id: 30,
      name: 'Ford OEM Mass Air Flow Sensor',
      brand: 'Ford',
      price: 245000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'FD-3L3A-12B579-BA',
      description: 'MAF Sensor with Housing',
      inStock: true
    },
    {
      id: 31,
      name: 'Bilstein B6 Performance Shock Absorber',
      brand: 'Bilstein',
      price: 185000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'BL-24-186728',
      description: 'Gas Pressure Shock',
      inStock: true
    },
    {
      id: 32,
      name: 'KYB Excel-G Strut Assembly',
      brand: 'KYB',
      price: 225000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'KY-235606',
      description: 'Complete Strut Assembly',
      inStock: true
    },
    {
      id: 33,
      name: 'Motorcraft Oil Filter',
      brand: 'Motorcraft',
      price: 28000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'MC-FL820S',
      description: 'Premium Oil Filter',
      inStock: true
    },
    {
      id: 34,
      name: 'Genuine Toyota Engine Oil 5W-30',
      brand: 'Genuine Toyota',
      price: 65000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'GT-00279-1QT5W',
      description: 'Synthetic Motor Oil - 5 Quarts',
      inStock: true
    },
    {
      id: 35,
      name: 'Mercedes Benz OEM Transmission Filter Kit',
      brand: 'Mercedes Benz',
      price: 155000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=300&fit=crop',
      partNumber: 'MB-1402770095',
      description: 'Includes Gasket and Filter',
      inStock: true
    }
  ]

  const brands = [
    'Acura', 'Nissan', 'Honda', 'Lexus', 'Toyota', 'Kia', 'Mitsubishi',
    'Hyundai', 'RBI', 'Highlink', 'Carrdo', 'Land Rover', 'Lemforder',
    'HiParts', '555', 'CTR', 'KYB', 'Motorcraft', 'Bilstein',
    'Mercedes Benz', 'PRT', 'Genuine Toyota', 'Ford'
  ]

  const categories = [
    'Cooling and Heating Systems',
    'Drivetrain',
    'Suspension Parts',
    'Air Filters',
    'Oil Filters',
    'Spark Plugs',
    'Tools, Gadgets, Safety Products',
    'Tyres',
    'Engine Oil',
    'Transmission Fluids',
    'Coolants & Appearance Products',
    'Batteries'
  ]

  const priceRanges = [
    { label: '$5 - $100', min: 5, max: 100 },
    { label: '$100 - $500', min: 100, max: 500 },
    { label: '$500 - $2,000', min: 500, max: 2000 },
    { label: '$2,000 - $10,000', min: 2000, max: 10000 }
  ]

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const filteredProducts = products.filter(product => {
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand)
    
    let matchesPrice = true
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange)
      if (range) {
        matchesPrice = product.price >= range.min && product.price <= range.max
      }
    }
    
    return matchesBrand && matchesPrice
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price
      case 'price-high':
        return b.price - a.price
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })

  // Pagination calculations
  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentProducts = sortedProducts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleItemsPerPageChange = (value: number) => {
    setItemsPerPage(value)
    setCurrentPage(1)
  }

  const formatPrice = (price: number) => {
    return '$' + price.toLocaleString()
  }

  const renderPagination = () => {
    const pages = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i)
        }
        pages.push('...')
        pages.push(totalPages)
      } else if (currentPage >= totalPages - 2) {
        pages.push(1)
        pages.push('...')
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i)
        }
      } else {
        pages.push(1)
        pages.push('...')
        pages.push(currentPage - 1)
        pages.push(currentPage)
        pages.push(currentPage + 1)
        pages.push('...')
        pages.push(totalPages)
      }
    }

    return pages
  }

  return (
    <Layout>
      <div className="auto-parts-page">
        {/* Breadcrumb */}
        <div className="parts-breadcrumb">
          <Link to="/">HOME</Link> / <span>SUSPENSION PARTS</span>
        </div>

        {/* Page Title */}
        <div className="parts-page-title">
          <h1>SUSPENSION PARTS</h1>
        </div>

        <div className="parts-container">
          {/* Left Sidebar */}
          <aside className="parts-sidebar">
            {/* Brands Filter */}
            <div className="filter-section">
              <div className="filter-header" onClick={() => setShowBrands(!showBrands)}>
                <h3>BRANDS</h3>
                <span className={`filter-arrow ${showBrands ? 'open' : ''}`}>▼</span>
              </div>
              {showBrands && (
                <div className="filter-content">
                  {brands.map(brand => (
                    <label key={brand} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Categories Filter */}
            <div className="filter-section">
              <div className="filter-header" onClick={() => setShowCategories(!showCategories)}>
                <h3>CATEGORIES</h3>
                <span className={`filter-arrow ${showCategories ? 'open' : ''}`}>▼</span>
              </div>
              {showCategories && (
                <div className="filter-content">
                  {categories.map(category => (
                    <label key={category} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Price Filter */}
            <div className="filter-section">
              <div className="filter-header" onClick={() => setShowPrices(!showPrices)}>
                <h3>PRICES</h3>
                <span className={`filter-arrow ${showPrices ? 'open' : ''}`}>▼</span>
              </div>
              {showPrices && (
                <div className="filter-content">
                  {priceRanges.map(range => (
                    <label key={range.label} className="filter-checkbox">
                      <input
                        type="radio"
                        name="priceRange"
                        checked={selectedPriceRange === range.label}
                        onChange={() => setSelectedPriceRange(range.label)}
                      />
                      <span>{range.label}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>
          </aside>

          {/* Main Content */}
          <main className="parts-main-content">
            {/* Vehicle Selector */}
            <div className="vehicle-selector">
              <div className="vehicle-selector-header">
                <h2>ADD YOUR VEHICLE</h2>
                <p>Find an exact match for your vehicle.</p>
              </div>
              <div className="vehicle-selector-dropdowns">
                <select className="vehicle-dropdown">
                  <option>Year</option>
                </select>
                <select className="vehicle-dropdown">
                  <option>Model</option>
                </select>
                <select className="vehicle-dropdown">
                  <option>Make</option>
                </select>
                <select className="vehicle-dropdown">
                  <option>Engine</option>
                </select>
              </div>
            </div>

            {/* Toolbar */}
            <div className="parts-toolbar">
              <div className="toolbar-left">
                <span className="results-count">
                  {startIndex + 1} - {Math.min(endIndex, sortedProducts.length)} of {sortedProducts.length} Records
                </span>
              </div>
              <div className="toolbar-right">
                <label>Sort By:</label>
                <select 
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="default">Default</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
                <label>Show:</label>
                <select 
                  className="show-select"
                  value={itemsPerPage}
                  onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
                >
                  <option value={10}>10</option>
                  <option value={20}>20</option>
                  <option value={30}>30</option>
                </select>
                <div className="view-toggle">
                  <button 
                    className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                    onClick={() => setViewMode('grid')}
                  >
                    ⊞
                  </button>
                  <button 
                    className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                    onClick={() => setViewMode('list')}
                  >
                    ☰
                  </button>
                </div>
              </div>
            </div>

            {/* Products List */}
            <div className={`parts-products ${viewMode === 'grid' ? 'grid-view' : 'list-view'}`}>
              {currentProducts.map(product => (
                <div key={product.id} className="parts-product-card">
                  <Link to={`/product/${product.id}`} className="product-image-section">
                    <img src={product.image} alt={product.name} />
                  </Link>
                  <div className="product-details-section">
                    <Link to={`/product/${product.id}`} className="product-title-link">
                      <h3 className="product-title">{product.name}</h3>
                    </Link>
                    <p className="product-description">{product.description}</p>
                    <div className="product-compatibility">
                      <span className="compatibility-icon">⚠</span>
                      <span>Click to confirm it fits your vehicle</span>
                    </div>
                    <div className="product-price">{formatPrice(product.price)}</div>
                    <button className="add-to-cart-btn">ADD TO CART</button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="pagination-container">
                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  ← Previous
                </button>

                <div className="pagination-numbers">
                  {renderPagination().map((page, index) => (
                    typeof page === 'number' ? (
                      <button
                        key={index}
                        className={`pagination-number ${currentPage === page ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                      >
                        {page}
                      </button>
                    ) : (
                      <span key={index} className="pagination-ellipsis">{page}</span>
                    )
                  ))}
                </div>

                <button
                  className="pagination-btn"
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                >
                  Next →
                </button>
              </div>
            )}
          </main>
        </div>

        {/* Chat Widget */}
        <div className="chat-widget">
          <div className="chat-bubble">
            <span>Need Help?</span>
            <strong>Chat with us</strong>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AutomotiveParts
