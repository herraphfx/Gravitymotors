import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'
import '../styles/VehicleDetails.css'

interface Product {
  id: number
  name: string
  brand: string
  price: number
  image: string
  partNumber: string
  description: string
  inStock: boolean
  subtitle: string
  reviews: number
  rating: number
  specifications: {
    manufacturerPartNumber: string
    partName: string
    brand: string
    madeIn: string
    warranty: string
    condition: string
    fitmentType: string
    weight: string
    dimensions: string
  }
  fullDescription: string
}

function ProductDetails() {
  const { id } = useParams<{ id: string }>()
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)

  // Sample product data - in a real app, this would come from an API
  const products: Product[] = [
    {
      id: 1,
      name: 'Toyota OEM Front Suspension Accumulator Control (49141-60020) 1Piece',
      subtitle: 'Fits Left or Right; Sold Individually',
      brand: 'Toyota / Lexus',
      price: 320000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop',
      partNumber: '49141-60020',
      description: 'Fits Left or Right: Sold Individually',
      inStock: true,
      reviews: 0,
      rating: 0,
      specifications: {
        manufacturerPartNumber: '49141-60020',
        partName: 'ACCUMULATOR, FRONT SUSPENSION CONTROL, RH/LH',
        brand: 'Toyota / Lexus',
        madeIn: 'Japan',
        warranty: '6Months',
        condition: 'Brand New',
        fitmentType: 'OEM Genuine - Direct Replacement',
        weight: '2.275 kg',
        dimensions: '(L x W x H): 16 x 15 x 15 cm'
      },
      fullDescription: 'Maintain your Toyota or Lexus with Genuine OEM Toyota Parts and Lexus Parts.'
    },
    {
      id: 2,
      name: 'Toyota OEM Rear Suspension Accumulator Control (49151-60020) 1Piece',
      subtitle: 'Fits Left or Right: Sold Individually',
      brand: 'Toyota / Lexus',
      price: 320000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop',
      partNumber: '49151-60020',
      description: 'Fits Left or Right: Sold Individually',
      inStock: true,
      reviews: 0,
      rating: 0,
      specifications: {
        manufacturerPartNumber: '49151-60020',
        partName: 'ACCUMULATOR, REAR SUSPENSION CONTROL, RH/LH',
        brand: 'Toyota / Lexus',
        madeIn: 'Japan',
        warranty: '6Months',
        condition: 'Brand New',
        fitmentType: 'OEM Genuine - Direct Replacement',
        weight: '2.275 kg',
        dimensions: '(L x W x H): 16 x 15 x 15 cm'
      },
      fullDescription: 'Maintain your Toyota or Lexus with Genuine OEM Toyota Parts and Lexus Parts.'
    },
    {
      id: 3,
      name: 'Mercedes Benz Front Lower Control Arm (1673309301 & 1673309401) Pair',
      subtitle: 'Left & Right',
      brand: 'Mercedes Benz',
      price: 800000,
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop',
      partNumber: '1673309301',
      description: 'Left & Right',
      inStock: true,
      reviews: 0,
      rating: 0,
      specifications: {
        manufacturerPartNumber: '1673309301',
        partName: 'Front Lower Control Arm',
        brand: 'Mercedes Benz',
        madeIn: 'Germany',
        warranty: '12Months',
        condition: 'Brand New',
        fitmentType: 'OEM Genuine - Direct Replacement',
        weight: '3.5 kg',
        dimensions: '(L x W x H): 45 x 20 x 15 cm'
      },
      fullDescription: 'Genuine Mercedes Benz OEM Front Lower Control Arm for optimal performance and safety.'
    }
  ]

  const product = products.find(p => p.id === Number(id)) || products[0]

  const productImages = [
    product.image,
    product.image,
    product.image,
    product.image
  ]

  const formatPrice = (price: number) => {
    return '₦' + price.toLocaleString()
  }

  const handlePrevImage = () => {
    setSelectedImage((prev) => (prev === 0 ? productImages.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setSelectedImage((prev) => (prev === productImages.length - 1 ? 0 : prev + 1))
  }

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name} to cart`)
  }

  return (
    <Layout>
      <div className="product-details-page">
        {/* Breadcrumb */}
        <div className="product-breadcrumb">
          <Link to="/">HOME</Link> / <Link to="/automotive-parts">SUSPENSION PARTS</Link> / <span>{product.name.toUpperCase()}</span>
        </div>

        {/* Product Details Container */}
        <div className="product-details-container">
          {/* Left Side - Images */}
          <div className="product-images-section">
            <div className="product-thumbnails">
              {productImages.map((img, index) => (
                <div 
                  key={index} 
                  className="thumbnail-item"
                  onClick={() => setSelectedImage(index)}
                  style={{ borderColor: selectedImage === index ? '#ff6600' : '#e0e0e0' }}
                >
                  <img src={img} alt={`Product ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="product-main-image-wrapper">
              <div className="product-main-image">
                <img src={productImages[selectedImage]} alt={product.name} />
              </div>
              <div className="image-navigation-dots">
                {productImages.map((_, index) => (
                  <button
                    key={index}
                    className={`image-dot ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                    aria-label={`View image ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="product-info-section">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-subtitle">{product.subtitle}</p>

            {/* Rating */}
            <div className="product-rating">
              <span className="stars">
                {product.rating > 0 ? '★★★★★' : '☆☆☆☆☆'}
              </span>
              <span className="review-count">( {product.reviews} Reviews )</span>
            </div>

            {/* Vehicle Fit Notice */}
            <div className="vehicle-fit-notice">
              <span className="warning-icon">⚠</span>
              <span>Click to confirm it fits your vehicle</span>
            </div>

            {/* Price Section */}
            <div className="product-price-section">
              <div className="price-display">
                <div className="product-detail-price">{formatPrice(product.price)}</div>
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="quantity-section" style={{ marginBottom: '20px' }}>
              <label style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>
                Quantity:
              </label>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ddd', borderRadius: '4px' }}>
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    style={{ 
                      padding: '10px 15px', 
                      border: 'none', 
                      background: '#f5f5f5', 
                      cursor: 'pointer',
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}
                  >
                    −
                  </button>
                  <input 
                    type="number" 
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    style={{ 
                      width: '60px', 
                      textAlign: 'center', 
                      border: 'none', 
                      padding: '10px',
                      fontSize: '16px'
                    }}
                  />
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    style={{ 
                      padding: '10px 15px', 
                      border: 'none', 
                      background: '#f5f5f5', 
                      cursor: 'pointer',
                      fontSize: '18px',
                      fontWeight: 'bold'
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            <button className="add-to-cart-detail-btn" onClick={handleAddToCart}>
              ADD TO CART
            </button>
          </div>
        </div>

        {/* Product Details Bottom Section */}
        <div className="product-details-bottom">
          {/* Specifications */}
          <div className="specifications-section">
            <h2>PRODUCT SPECIFICATIONS</h2>
            <table className="specs-table">
              <tbody>
                <tr>
                  <td className="spec-label">Manufacturer Part Number:</td>
                  <td className="spec-value">{product.specifications.manufacturerPartNumber}</td>
                </tr>
                <tr className="spec-row-alt">
                  <td className="spec-label">Part Name:</td>
                  <td className="spec-value">{product.specifications.partName}</td>
                </tr>
                <tr>
                  <td className="spec-label">Brand:</td>
                  <td className="spec-value">{product.specifications.brand}</td>
                </tr>
                <tr className="spec-row-alt">
                  <td className="spec-label">Made In:</td>
                  <td className="spec-value">{product.specifications.madeIn}</td>
                </tr>
                <tr>
                  <td className="spec-label">Warranty:</td>
                  <td className="spec-value">{product.specifications.warranty}</td>
                </tr>
                <tr className="spec-row-alt">
                  <td className="spec-label">Condition:</td>
                  <td className="spec-value">{product.specifications.condition}</td>
                </tr>
                <tr>
                  <td className="spec-label">Fitment Type:</td>
                  <td className="spec-value">{product.specifications.fitmentType}</td>
                </tr>
                <tr className="spec-row-alt">
                  <td className="spec-label">Weight:</td>
                  <td className="spec-value">{product.specifications.weight}</td>
                </tr>
                <tr>
                  <td className="spec-label">Dimensions (L x W x H):</td>
                  <td className="spec-value">{product.specifications.dimensions}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Description */}
          <div className="description-section">
            <h2>PRODUCT DESCRIPTION</h2>
            <p>{product.fullDescription}</p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetails
