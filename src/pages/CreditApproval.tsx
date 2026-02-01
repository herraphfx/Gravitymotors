import '../App.css'
import { useState } from 'react'
import Layout from '../components/Layout'

function CreditApproval() {
  const [formData, setFormData] = useState({
    // Vehicle of Interest
    year: '',
    make: '',
    model: '',
    stockNumber: '',
    
    // Purchase Information
    downPayment: '',
    
    // Trade-in Information
    tradeYear: '',
    tradeMake: '',
    tradeModel: '',
    tradeMileage: '',
    tradeValue: '',
    
    // Applicant Information
    firstName: '',
    initial: '',
    lastName: '',
    suffix: '',
    ssn: '',
    dateOfBirth: '',
    driversLicense: '',
    state: '',
    expirationDate: '',
    phone: '',
    email: '',
    maritalStatus: '',
    
    // Residence Address
    addressLine1: '',
    addressLine2: '',
    city: '',
    residenceState: '',
    zip: '',
    residenceStatus: '',
    ownFreeAndClear: false,
    other: false,
    mortgageRentAmount: '',
    residenceLength: '',
    residenceLengthMonths: '',
    
    // Current Employer
    employerName: '',
    selfEmployed: false,
    jobTitle: '',
    workPhone: '',
    employmentLength: '',
    employmentLengthMonths: '',
    grossIncome: '',
    grossIncomeFrequency: '',
    
    // Employment Address
    employmentAddressLine1: '',
    employmentAddressLine2: '',
    employmentCity: '',
    employmentState: '',
    employmentZip: '',
    
    // Other Income
    otherIncomeSource: '',
    otherGrossIncome: '',
    otherIncomeFrequency: '',
    
    // Bank Information
    accountType: '',
    bankName: '',
    accountNumber: '',
    accountBalance: '',
    
    // Co-Applicant
    hasCoApplicant: false,
    applicationCompletionProgress: '',
    comments: '',
    
    // Agreements
    agreeTerms: false,
    agreeCredit: false,
    agreeContact: false,
    
    // Signature
    typedSignature: '',
    dateSigned: ''
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
    alert('Credit application submitted! We will review your information and contact you shortly.')
  }

  return (
    <Layout>
      <div className="credit-application-page">
        <div className="credit-app-header">
          <div className="company-info-header">
            <div className="company-name-header">AMAZING LUXURY CARS</div>
            <div className="company-address-header">3591 Stone Mountain Highway 78 W, Snellville, GA 30039</div>
          </div>
          <div className="company-phone-header">PHONE: 770-982-3733</div>
        </div>

        <div className="credit-app-title">
          <h1>CREDIT APPLICATION</h1>
        </div>

        <form className="credit-application-form" onSubmit={handleSubmit}>
          {/* Vehicle of Interest */}
          <div className="form-section-credit">
            <h2 className="section-title-credit">VEHICLE OF INTEREST</h2>
            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Make</label>
                <input
                  type="text"
                  name="make"
                  value={formData.make}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Model</label>
                <input
                  type="text"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Stock #</label>
                <input
                  type="text"
                  name="stockNumber"
                  value={formData.stockNumber}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
            </div>
          </div>

          {/* Purchase and Trade-in Information */}
          <div className="form-section-credit">
            <div className="two-column-section">
              <div className="column-left">
                <h2 className="section-title-credit">PURCHASE INFORMATION</h2>
                <div className="form-field-credit">
                  <label>Down Payment</label>
                  <input
                    type="text"
                    name="downPayment"
                    value={formData.downPayment}
                    onChange={handleChange}
                    className="input-credit"
                  />
                </div>
              </div>
              <div className="column-right">
                <h2 className="section-title-credit">TRADE-IN INFORMATION</h2>
                <div className="form-row-credit">
                  <div className="form-field-credit">
                    <label>Year</label>
                    <input
                      type="text"
                      name="tradeYear"
                      value={formData.tradeYear}
                      onChange={handleChange}
                      className="input-credit"
                    />
                  </div>
                  <div className="form-field-credit">
                    <label>Make</label>
                    <input
                      type="text"
                      name="tradeMake"
                      value={formData.tradeMake}
                      onChange={handleChange}
                      className="input-credit"
                    />
                  </div>
                  <div className="form-field-credit">
                    <label>Model</label>
                    <input
                      type="text"
                      name="tradeModel"
                      value={formData.tradeModel}
                      onChange={handleChange}
                      className="input-credit"
                    />
                  </div>
                </div>
                <div className="form-row-credit">
                  <div className="form-field-credit">
                    <label>Mileage</label>
                    <input
                      type="text"
                      name="tradeMileage"
                      value={formData.tradeMileage}
                      onChange={handleChange}
                      className="input-credit"
                    />
                  </div>
                  <div className="form-field-credit">
                    <label>Est. Trade-In Value</label>
                    <input
                      type="text"
                      name="tradeValue"
                      value={formData.tradeValue}
                      onChange={handleChange}
                      className="input-credit"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applicant Information */}
          <div className="form-section-credit">
            <h2 className="section-title-credit">APPLICANT INFORMATION</h2>
            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit form-field-small">
                <label>Initial</label>
                <input
                  type="text"
                  name="initial"
                  value={formData.initial}
                  onChange={handleChange}
                  className="input-credit"
                  maxLength={1}
                />
              </div>
              <div className="form-field-credit">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit form-field-small">
                <label>Suffix</label>
                <input
                  type="text"
                  name="suffix"
                  value={formData.suffix}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
            </div>

            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Social Security Number *</label>
                <input
                  type="text"
                  name="ssn"
                  value={formData.ssn}
                  onChange={handleChange}
                  required
                  className="input-credit"
                  placeholder="Example: xxx-xx-xxxx"
                />
              </div>
              <div className="form-field-credit">
                <label>Date of Birth *</label>
                <input
                  type="text"
                  name="dateOfBirth"
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  required
                  className="input-credit"
                  placeholder="Example: mm/dd/yyyy"
                />
              </div>
              <div className="form-field-credit">
                <label>Drivers License Number</label>
                <input
                  type="text"
                  name="driversLicense"
                  value={formData.driversLicense}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit form-field-small">
                <label>State</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Exp. Date</label>
                <input
                  type="text"
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleChange}
                  className="input-credit"
                  placeholder="Example: mm/dd/yyyy"
                />
              </div>
            </div>

            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="input-credit"
                  placeholder="Example: 999-999-9999"
                />
              </div>
              <div className="form-field-credit">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="input-credit"
                  placeholder="Example: name@domain.com"
                />
              </div>
              <div className="form-field-credit">
                <label>Marital Status</label>
                <div className="radio-group-inline">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="unmarried"
                      checked={formData.maritalStatus === 'unmarried'}
                      onChange={handleChange}
                    />
                    Unmarried
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="married"
                      checked={formData.maritalStatus === 'married'}
                      onChange={handleChange}
                    />
                    Married
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="maritalStatus"
                      value="separated"
                      checked={formData.maritalStatus === 'separated'}
                      onChange={handleChange}
                    />
                    Separated
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Residence Address */}
          <div className="form-section-credit">
            <h2 className="section-title-credit">RESIDENCE ADDRESS</h2>
            <div className="form-field-credit">
              <label>Address Line 1 *</label>
              <input
                type="text"
                name="addressLine1"
                value={formData.addressLine1}
                onChange={handleChange}
                required
                className="input-credit"
              />
            </div>
            <div className="form-field-credit">
              <label>Address Line 2</label>
              <input
                type="text"
                name="addressLine2"
                value={formData.addressLine2}
                onChange={handleChange}
                className="input-credit"
              />
            </div>
            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>State *</label>
                <input
                  type="text"
                  name="residenceState"
                  value={formData.residenceState}
                  onChange={handleChange}
                  required
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Zip *</label>
                <input
                  type="text"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  required
                  className="input-credit"
                />
              </div>
            </div>

            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Residence Status</label>
                <div className="radio-group-inline">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="residenceStatus"
                      value="rent"
                      checked={formData.residenceStatus === 'rent'}
                      onChange={handleChange}
                    />
                    Rent
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="residenceStatus"
                      value="own"
                      checked={formData.residenceStatus === 'own'}
                      onChange={handleChange}
                    />
                    Own
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="residenceStatus"
                      value="ownFreeAndClear"
                      checked={formData.residenceStatus === 'ownFreeAndClear'}
                      onChange={handleChange}
                    />
                    Own Free Clear
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="residenceStatus"
                      value="other"
                      checked={formData.residenceStatus === 'other'}
                      onChange={handleChange}
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>

            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Mortgage / Rent Amount *</label>
                <input
                  type="text"
                  name="mortgageRentAmount"
                  value={formData.mortgageRentAmount}
                  onChange={handleChange}
                  required
                  className="input-credit"
                />
              </div>
            </div>

            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Residence Length *</label>
                <div className="inline-fields">
                  <input
                    type="text"
                    name="residenceLength"
                    value={formData.residenceLength}
                    onChange={handleChange}
                    required
                    className="input-credit input-small"
                    placeholder="Year(s)"
                  />
                  <input
                    type="text"
                    name="residenceLengthMonths"
                    value={formData.residenceLengthMonths}
                    onChange={handleChange}
                    className="input-credit input-small"
                    placeholder="Month(s)"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Applicant Financial Information */}
          <div className="form-section-credit">
            <h2 className="section-title-credit">APPLICANT FINANCIAL INFORMATION</h2>
            
            <h3 className="subsection-title-credit">CURRENT EMPLOYER</h3>
            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Employer Name</label>
                <input
                  type="text"
                  name="employerName"
                  value={formData.employerName}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Self Employed</label>
                <div className="radio-group-inline">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="selfEmployed"
                      value="yes"
                      onChange={handleChange}
                    />
                    Yes
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="selfEmployed"
                      value="no"
                      onChange={handleChange}
                    />
                    No
                  </label>
                </div>
              </div>
            </div>

            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Work Phone</label>
                <input
                  type="tel"
                  name="workPhone"
                  value={formData.workPhone}
                  onChange={handleChange}
                  className="input-credit"
                  placeholder="Example: 999-999-9999"
                />
              </div>
            </div>

            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Employment Length</label>
                <div className="inline-fields">
                  <input
                    type="text"
                    name="employmentLength"
                    value={formData.employmentLength}
                    onChange={handleChange}
                    className="input-credit input-small"
                    placeholder="Year(s)"
                  />
                  <input
                    type="text"
                    name="employmentLengthMonths"
                    value={formData.employmentLengthMonths}
                    onChange={handleChange}
                    className="input-credit input-small"
                    placeholder="Month(s)"
                  />
                </div>
              </div>
            </div>

            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Gross Income</label>
                <input
                  type="text"
                  name="grossIncome"
                  value={formData.grossIncome}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Frequency</label>
                <select
                  name="grossIncomeFrequency"
                  value={formData.grossIncomeFrequency}
                  onChange={handleChange}
                  className="input-credit"
                >
                  <option value="">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
            </div>

            <h3 className="subsection-title-credit">EMPLOYMENT ADDRESS</h3>
            <div className="form-field-credit">
              <label>Address Line 1</label>
              <input
                type="text"
                name="employmentAddressLine1"
                value={formData.employmentAddressLine1}
                onChange={handleChange}
                className="input-credit"
              />
            </div>
            <div className="form-field-credit">
              <label>Address Line 2</label>
              <input
                type="text"
                name="employmentAddressLine2"
                value={formData.employmentAddressLine2}
                onChange={handleChange}
                className="input-credit"
              />
            </div>
            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>City</label>
                <input
                  type="text"
                  name="employmentCity"
                  value={formData.employmentCity}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>State</label>
                <input
                  type="text"
                  name="employmentState"
                  value={formData.employmentState}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Zip</label>
                <input
                  type="text"
                  name="employmentZip"
                  value={formData.employmentZip}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
            </div>

            <h3 className="subsection-title-credit">OTHER INCOME</h3>
            <div className="form-field-credit">
              <label>Source</label>
              <input
                type="text"
                name="otherIncomeSource"
                value={formData.otherIncomeSource}
                onChange={handleChange}
                className="input-credit"
              />
            </div>
            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Gross Income</label>
                <input
                  type="text"
                  name="otherGrossIncome"
                  value={formData.otherGrossIncome}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Frequency</label>
                <select
                  name="otherIncomeFrequency"
                  value={formData.otherIncomeFrequency}
                  onChange={handleChange}
                  className="input-credit"
                >
                  <option value="">Monthly</option>
                  <option value="weekly">Weekly</option>
                  <option value="biweekly">Bi-Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
            </div>
          </div>

          {/* Bank Information */}
          <div className="form-section-credit">
            <h2 className="section-title-credit">BANK INFORMATION</h2>
            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Account Type</label>
                <div className="radio-group-inline">
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="accountType"
                      value="checking"
                      checked={formData.accountType === 'checking'}
                      onChange={handleChange}
                    />
                    Checking
                  </label>
                  <label className="radio-inline">
                    <input
                      type="radio"
                      name="accountType"
                      value="savings"
                      checked={formData.accountType === 'savings'}
                      onChange={handleChange}
                    />
                    Savings
                  </label>
                </div>
              </div>
              <div className="form-field-credit">
                <label>Bank Name</label>
                <input
                  type="text"
                  name="bankName"
                  value={formData.bankName}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
            </div>
            <div className="form-row-credit">
              <div className="form-field-credit">
                <label>Account Number</label>
                <input
                  type="text"
                  name="accountNumber"
                  value={formData.accountNumber}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
              <div className="form-field-credit">
                <label>Account Balance</label>
                <input
                  type="text"
                  name="accountBalance"
                  value={formData.accountBalance}
                  onChange={handleChange}
                  className="input-credit"
                />
              </div>
            </div>
          </div>

          {/* Co-Applicant Information */}
          <div className="form-section-credit">
            <h2 className="section-title-credit">CO-APPLICANT INFORMATION</h2>
            <div className="form-field-credit">
              <label>Is there a Co-Applicant?</label>
              <div className="radio-group-inline">
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="hasCoApplicant"
                    value="yes"
                    onChange={handleChange}
                  />
                  Yes
                </label>
                <label className="radio-inline">
                  <input
                    type="radio"
                    name="hasCoApplicant"
                    value="no"
                    onChange={handleChange}
                  />
                  No
                </label>
              </div>
            </div>

            <div className="form-field-credit">
              <label>Application Completion Progress:</label>
              <input
                type="text"
                name="applicationCompletionProgress"
                value={formData.applicationCompletionProgress}
                onChange={handleChange}
                className="input-credit"
              />
            </div>

            <div className="form-field-credit">
              <label>Comments</label>
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                rows={4}
                className="input-credit textarea-credit"
              ></textarea>
            </div>
          </div>

          {/* Terms and Agreements */}
          <div className="form-section-credit">
            <div className="terms-box">
              <p className="terms-text">
                In submitting this credit application, I/We certify that the information provided on this application is, to the best of my/our knowledge, complete and accurate. I/We understand that false or misleading information may result in the denial of credit and employment termination. In conjunction with what they may already have obtained from any or all consumer reporting agencies, I/We understand that false statements may subject me/us to criminal prosecution. I/We further understand that this application is not a contract or commitment to extend credit. I/We authorize Amazing Luxury Cars Inc. to obtain credit reports and employment verification of me/us and any co-applicant. I/We understand that Amazing Luxury Cars Inc. may retain this application whether or not it is approved. I/We authorize Amazing Luxury Cars Inc. to investigate all statements in this application and to obtain any additional information Amazing Luxury Cars Inc. may deem necessary in connection with this application.
              </p>
            </div>

            <div className="terms-section">
              <h3 className="terms-heading">TERMS OF USE</h3>
              <div className="checkbox-agreement">
                <label className="checkbox-label-agreement">
                  <input
                    type="checkbox"
                    name="agreeTerms"
                    checked={formData.agreeTerms}
                    onChange={handleChange}
                    required
                  />
                  I agree to the terms and conditions of this application and give permission to Amazing Luxury Cars to run an automotive credit check on my behalf.
                </label>
              </div>
              <div className="checkbox-agreement">
                <label className="checkbox-label-agreement">
                  <input
                    type="checkbox"
                    name="agreeContact"
                    checked={formData.agreeContact}
                    onChange={handleChange}
                    required
                  />
                  By submitting this form I understand that Amazing Luxury Cars may contact me with offers or information about their products and services.
                </label>
              </div>
            </div>

            <div className="signature-section">
              <div className="form-row-credit">
                <div className="form-field-credit">
                  <label>Typed Signature / Name *</label>
                  <input
                    type="text"
                    name="typedSignature"
                    value={formData.typedSignature}
                    onChange={handleChange}
                    required
                    className="input-credit"
                  />
                </div>
                <div className="form-field-credit">
                  <label>Date Signed *</label>
                  <input
                    type="text"
                    name="dateSigned"
                    value={formData.dateSigned}
                    onChange={handleChange}
                    required
                    className="input-credit"
                    placeholder="Example: mm/dd/yyyy"
                  />
                </div>
              </div>
            </div>

            <div className="submit-section">
              <button type="submit" className="btn-submit-credit">Submit Your Application</button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  )
}

export default CreditApproval
