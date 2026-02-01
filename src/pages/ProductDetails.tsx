import { useParams, Link } from 'react-router-dom'
import Layout from '../components/Layout'

function ProductDetails() {
  const { id } = useParams()

  // Sample product data - in a real app, this would come from an API or database
  const product = {
    id: 1,
    name: 'Toyota OEM Front Suspension Accumulator Control (49141-60020) 1Piece',
    brand: 'Toyota',
    price: 320000,
    images: [
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=600&h=600&fit=crop'
    ],
    partNumber: '49141-60020',
    description: 'Fits Left or Right; Sold Individually',
    fullDescription: 'Maintain your Toyota or Lexus with Genuine OEM Toyota Parts and Lexus Parts.',
    inStock: true,
    reviews: 0,
    specifications: {
      manufacturerPartNumber: '49141-60020',
      partName: 'ACCUMULATOR, FRONT SUSPENSION CONTROL, RH/LH',
      brand: 'Toyota / Lexus',
      madeIn: 'Japan',
      warranty: '6Months',
      condition: 'Brand New',
      fitmentType: 'OEM Genuine - Direct Replacement',
      weight: '2.275 kg',
      dimensions: '16 x 15 x 15 cm'
    }
  }

  const formatPrice = (price: number) => {
    return '₦' + price.toLocaleString()
  }

  return (
    <Layout>
      <div className="product-details-page">
        {/* Breadcrumb */}
        <div className="product-breadcrumb">
          <Link to="/">HOME</Link> / <Link to="/automotive-parts">SUSPENSION PARTS</Link> / <span>{product.name.toUpperCase()}</span>
        </div>

        <div className="product-details-container">
          {/* Left Side - Images */}
          <div className="product-images-section">
            <div className="product-thumbnails">
              {product.images.map((img, index) => (
                <div key={index} className="thumbnail-item">
                  <img src={img} alt={`${product.name} ${index + 1}`} />
                </div>
              ))}
            </div>
            <div className="product-main-image">
              <img src={product.images[0]} alt={product.name} />
            </div>
          </div>

          {/* Right Side - Product Info */}
          <div className="product-info-section">
            <h1 className="product-detail-title">{product.name}</h1>
            <p className="product-detail-subtitle">{product.description}</p>
            
            <div className="product-rating">
              <span className="stars">☆☆☆☆☆</span>
              <span className="review-count">( {product.reviews} Reviews )</span>
            </div>

            <div className="vehicle-fit-notice">
              <span className="warning-icon">⚠</span>
              <span>Click to confirm it fits your vehicle</span>
            </div>

            <div className="product-price-section">
              <div className="price-display">
                <span className="product-detail-price">{formatPrice(product.price)}</span>
              </div>
              <div className="need-help">
                <span>Need Help?</span>
                <button className="chat-with-us-btn">Chat with us</button>
              </div>
            </div>

            <button className="add-to-cart-detail-btn">ADD TO CART</button>
          </div>
        </div>

        {/* Product Specifications and Description */}
        <div className="product-details-bottom">
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
