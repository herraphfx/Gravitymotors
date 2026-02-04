import '../App.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Layout from '../components/Layout'

function CalculatePayments() {
  const navigate = useNavigate()

  // Calculate Payment calculator state
  const [paymentCalc, setPaymentCalc] = useState({
    vehiclePrice: '',
    downPayment: '1000',
    salesTax: '0%',
    termMonths: '36',
    interestRate: '6%'
  })
  const [estimatedPayment, setEstimatedPayment] = useState('$0.00')

  // Affordability Calculator state
  const [affordCalc, setAffordCalc] = useState({
    monthlyPayment: '',
    downPayment: '1000',
    salesTax: '0%',
    termMonths: '36',
    interestRate: '6%'
  })
  const [estimatedPrice, setEstimatedPrice] = useState('$0.00')

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentCalc({
      ...paymentCalc,
      [e.target.name]: e.target.value
    })
  }

  const handleAffordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAffordCalc({
      ...affordCalc,
      [e.target.name]: e.target.value
    })
  }

  const calculateMonthlyPayment = () => {
    const price = parseFloat(paymentCalc.vehiclePrice) || 0
    const down = parseFloat(paymentCalc.downPayment) || 0
    const taxRate = parseFloat(paymentCalc.salesTax.replace('%', '')) / 100
    const term = parseInt(paymentCalc.termMonths) || 36
    const annualRate = parseFloat(paymentCalc.interestRate.replace('%', '')) || 0

    // Step 1: Calculate the principal (P)
    // P = (Vehicle Price - Down Payment) × (1 + Sales Tax Rate)
    const principal = (price - down) * (1 + taxRate)

    // Step 2: Convert annual interest rate to monthly rate (r)
    // r = Annual Interest Rate / 12 / 100
    const monthlyRate = annualRate / 12 / 100

    // Handle edge cases
    if (principal <= 0) {
      setEstimatedPayment('$0.00')
      return
    }

    // If interest rate is 0, simple division
    if (monthlyRate === 0) {
      const monthly = principal / term
      setEstimatedPayment('$' + monthly.toFixed(2))
      return
    }

    // Step 3: Apply the formula M = P × (r(1 + r)^n) / ((1 + r)^n - 1)
    const powerTerm = Math.pow(1 + monthlyRate, term)
    const monthly = principal * (monthlyRate * powerTerm) / (powerTerm - 1)
    
    setEstimatedPayment('$' + monthly.toFixed(2))
  }

  const calculateVehiclePrice = () => {
    const monthly = parseFloat(affordCalc.monthlyPayment) || 0
    const down = parseFloat(affordCalc.downPayment) || 0
    const taxRate = parseFloat(affordCalc.salesTax.replace('%', '')) / 100
    const term = parseInt(affordCalc.termMonths) || 36
    const annualRate = parseFloat(affordCalc.interestRate.replace('%', '')) || 0
    const monthlyRate = annualRate / 12 / 100

    if (monthly <= 0) {
      setEstimatedPrice('$0.00')
      return
    }

    // If interest rate is 0
    if (monthlyRate === 0) {
      const principal = monthly * term
      const price = (principal / (1 + taxRate)) + down
      setEstimatedPrice('$' + price.toFixed(2))
      return
    }

    // Calculate principal from monthly payment using reverse formula
    const powerTerm = Math.pow(1 + monthlyRate, term)
    const principal = monthly * (powerTerm - 1) / (monthlyRate * powerTerm)
    
    // Calculate vehicle price: P = (Vehicle Price - Down Payment) × (1 + Sales Tax Rate)
    // So: Vehicle Price = (P / (1 + Sales Tax Rate)) + Down Payment
    const price = (principal / (1 + taxRate)) + down
    
    setEstimatedPrice('$' + price.toFixed(2))
  }

  return (
    <Layout>
      <div className="calculate-payments-page">
        <div className="breadcrumb">
          <span>Home</span> &gt; <span>Finance</span> &gt; <span>Calculate Payments</span>
        </div>

        <div className="payments-header">
          <h1>CALCULATE PAYMENTS</h1>
        </div>

        <div className="payments-intro">
          <h2>CONTACT US AT <a href="tel:404-254-4131" style={{color: '#8B7355', textDecoration: 'none'}}>404-254-4131</a> FOR MORE INFORMATION.</h2>
          <p>Or you can start the pre-approval process by using our online credit application</p>
          <button className="btn-preapproved" onClick={() => navigate('/get-pre-qualified')}>Get Pre-Approved</button>
        </div>

        <div className="calculators-container">
          {/* Calculate Payment Calculator */}
          <div className="calculator-box">
            <h2 className="calculator-title">CALCULATE PAYMENT</h2>
            <p className="calculator-description">
              Use this calculator if you know the price of your vehicle and need to estimate the Monthly Payment.
            </p>

            <div className="calculator-form-grid">
              <div className="form-field-calc">
                <label>Vehicle Price *</label>
                <input
                  type="text"
                  name="vehiclePrice"
                  value={paymentCalc.vehiclePrice}
                  onChange={handlePaymentChange}
                  className="input-calc"
                />
              </div>
              <div className="form-field-calc">
                <label>Down Payment/Trade-In</label>
                <input
                  type="text"
                  name="downPayment"
                  value={paymentCalc.downPayment}
                  onChange={handlePaymentChange}
                  className="input-calc"
                />
              </div>
            </div>

            <div className="calculator-form-grid">
              <div className="form-field-calc">
                <label>Sales Tax:</label>
                <input
                  type="text"
                  name="salesTax"
                  value={paymentCalc.salesTax}
                  onChange={handlePaymentChange}
                  className="input-calc"
                />
              </div>
              <div className="form-field-calc">
                <label>Term (months) *</label>
                <input
                  type="text"
                  name="termMonths"
                  value={paymentCalc.termMonths}
                  onChange={handlePaymentChange}
                  className="input-calc"
                />
              </div>
              <div className="form-field-calc">
                <label>Interest Rate *</label>
                <input
                  type="text"
                  name="interestRate"
                  value={paymentCalc.interestRate}
                  onChange={handlePaymentChange}
                  className="input-calc"
                />
              </div>
            </div>

            <div className="calculator-result">
              <div className="result-label-calc">ESTIMATED MONTHLY PAYMENT:</div>
              <div className="result-value-calc">{estimatedPayment}</div>
            </div>

            <button onClick={calculateMonthlyPayment} className="btn-search-used">Calculate Monthly Payment</button>
          </div>

          {/* Affordability Calculator */}
          <div className="calculator-box">
            <h2 className="calculator-title">AFFORDABILITY CALCULATOR</h2>
            <p className="calculator-description">
              Use this calculator if you know the monthly payment you can afford and need to estimate the Vehicle Price.
            </p>

            <div className="calculator-form-grid">
              <div className="form-field-calc">
                <label>Monthly Payment*</label>
                <input
                  type="text"
                  name="monthlyPayment"
                  value={affordCalc.monthlyPayment}
                  onChange={handleAffordChange}
                  className="input-calc"
                />
              </div>
              <div className="form-field-calc">
                <label>Down Payment/Trade-In</label>
                <input
                  type="text"
                  name="downPayment"
                  value={affordCalc.downPayment}
                  onChange={handleAffordChange}
                  className="input-calc"
                />
              </div>
            </div>

            <div className="calculator-form-grid">
              <div className="form-field-calc">
                <label>Sales Tax:</label>
                <input
                  type="text"
                  name="salesTax"
                  value={affordCalc.salesTax}
                  onChange={handleAffordChange}
                  className="input-calc"
                />
              </div>
              <div className="form-field-calc">
                <label>Term (months) *</label>
                <input
                  type="text"
                  name="termMonths"
                  value={affordCalc.termMonths}
                  onChange={handleAffordChange}
                  className="input-calc"
                />
              </div>
              <div className="form-field-calc">
                <label>Interest Rate *</label>
                <input
                  type="text"
                  name="interestRate"
                  value={affordCalc.interestRate}
                  onChange={handleAffordChange}
                  className="input-calc"
                />
              </div>
            </div>

            <div className="calculator-result">
              <div className="result-label-calc">ESTIMATED VEHICLE PRICE:</div>
              <div className="result-value-calc">{estimatedPrice}</div>
            </div>

            <button onClick={calculateVehiclePrice} className="btn-search-used">Calculate Affordability</button>
          </div>
        </div>

        <div className="calculator-disclaimer">
          <p>
            Title and other fees and incentives are not included in this calculation, which is an estimate only. Monthly payment estimates are for informational purpose and do not represent a financing offer from this dealership. Other taxes may apply.
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default CalculatePayments
