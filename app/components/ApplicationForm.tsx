'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { trackFormEvent } from './Analytics';

type FormData = {
  fundingAmount: string;
  purpose: string;
  industry: string;
  businessAge: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  consentPartners: boolean;
  consentMarketing: boolean;
  // Hidden tracking fields
  utmSource: string;
  utmCampaign: string;
  utmMedium: string;
  utmContent: string;
  utmTerm: string;
  device: string;
  referrer: string;
};

export default function ApplicationForm() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    fundingAmount: '',
    purpose: '',
    industry: '',
    businessAge: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    consentPartners: true, // Pre-checked as per requirements
    consentMarketing: false,
    // Tracking fields (populated on mount)
    utmSource: '',
    utmCampaign: '',
    utmMedium: '',
    utmContent: '',
    utmTerm: '',
    device: '',
    referrer: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Populate tracking data on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const getDeviceType = () => {
        const ua = navigator.userAgent;
        if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) return 'tablet';
        if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) return 'mobile';
        return 'desktop';
      };

      setFormData(prev => ({
        ...prev,
        utmSource: urlParams.get('utm_source') || '',
        utmCampaign: urlParams.get('utm_campaign') || '',
        utmMedium: urlParams.get('utm_medium') || '',
        utmContent: urlParams.get('utm_content') || '',
        utmTerm: urlParams.get('utm_term') || '',
        device: getDeviceType(),
        referrer: document.referrer || '',
      }));

      // Track form view
      trackFormEvent('form_view', {
        form_name: 'application_form'
      });
    }
  }, []);

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fundingAmount) newErrors.fundingAmount = 'Please select a funding amount';
      if (!formData.purpose) newErrors.purpose = 'Please select a purpose';
    } else if (step === 2) {
      if (!formData.industry) newErrors.industry = 'Please select an industry';
      if (!formData.businessAge) newErrors.businessAge = 'Please select business age';
    } else if (step === 3) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = 'Valid email is required';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
    } else if (step === 4) {
      if (!formData.consentPartners) newErrors.consentPartners = 'You must agree to share your information with partners';
    }

    setErrors(newErrors);
    
    // Track validation errors
    if (Object.keys(newErrors).length > 0) {
      trackFormEvent('form_error', {
        step,
        errors: Object.keys(newErrors),
      });
    }
    
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      const newStep = Math.min(currentStep + 1, 4);
      setCurrentStep(newStep);
      
      // Track step progression
      if (currentStep === 1) {
        trackFormEvent('form_start', {
          funding_amount: formData.fundingAmount,
          purpose: formData.purpose,
        });
      } else {
        trackFormEvent('form_progress', {
          step: newStep,
        });
      }
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      // Track successful submission
      trackFormEvent('form_submit', {
        funding_amount: formData.fundingAmount,
        purpose: formData.purpose,
        industry: formData.industry,
        business_age: formData.businessAge,
        device: formData.device,
        utm_source: formData.utmSource,
      });
      
      // TODO: In production, send to GoHighLevel
      console.log('Form submitted:', formData);
      router.push('/thank-you');
    }
  };

  return (
    <section id="application-form" className="py-20 px-6 bg-gradient-to-b from-[#F5F7FA] to-white">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#1E3A5F] mb-4">
            Start Your Application
          </h2>
          <p className="text-lg text-[#6B7280]">Complete the form in 4 simple steps · Takes only 2 minutes</p>
        </div>

        {/* Privacy Notice */}
        <div className="mb-8 bg-[#F5F7FA] rounded-lg p-4 border border-gray-200">
          <h3 className="text-sm font-semibold text-[#1E3A5F] mb-2 flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Privacy Notice
          </h3>
          <p className="text-sm text-[#6B7280] mb-3">
            We collect the information you provide (contact details, company info, financing needs) to connect you with suitable finance partners. We may share this information with partners only with your permission.
          </p>
          <p className="text-sm text-[#6B7280] mb-3">
            <strong>Your rights:</strong> You can opt-out of data sharing, access your data, request deletion, and correct inaccuracies. State-specific privacy rights apply (CA, VA, CO, CT, UT).
          </p>
          <p className="text-sm text-[#6B7280]">
            <strong>Learn more:</strong>{' '}
            <a href="/privacy" className="text-[#00B8A9] underline hover:text-[#00E5D0]">Privacy Policy</a>
            {' | '}
            <a href="/privacy-choices" className="text-[#00B8A9] underline hover:text-[#00E5D0]">Your Privacy Choices</a>
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl shadow-[#1E3A5F]/10 p-8 md:p-12 border border-gray-100">
          {/* Progress Bar - Enhanced */}
          <div className="mb-10">
            <div className="flex justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex-1 relative">
                  <div className={`h-2.5 rounded-full transition-all duration-500 ${step <= currentStep ? 'bg-gradient-to-r from-[#00B8A9] to-[#00E5D0]' : 'bg-gray-200'} ${step !== 4 ? 'mr-2' : ''}`}>
                    {step === currentStep && (
                      <div className="absolute inset-0 bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] rounded-full animate-pulse"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between text-xs text-[#6B7280] px-1">
              <span className={currentStep === 1 ? 'font-bold text-[#00B8A9]' : ''}>Financing</span>
              <span className={currentStep === 2 ? 'font-bold text-[#00B8A9]' : ''}>Business</span>
              <span className={currentStep === 3 ? 'font-bold text-[#00B8A9]' : ''}>Contact</span>
              <span className={currentStep === 4 ? 'font-bold text-[#00B8A9]' : ''}>Consent</span>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Financing Need */}
            {currentStep === 1 && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] rounded-lg flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <h2 className="text-3xl font-bold text-[#1E3A5F]">Your Financing Need</h2>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                    How much funding do you need? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      { value: '<50k', label: 'Less than $50,000' },
                      { value: '50k-100k', label: '$50,000 - $100,000' },
                      { value: '100k-250k', label: '$100,000 - $250,000' },
                      { value: '250k-500k', label: '$250,000 - $500,000' },
                      { value: '>500k', label: 'More than $500,000' },
                    ].map((option) => (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => updateField('fundingAmount', option.value)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 font-medium ${
                          formData.fundingAmount === option.value
                            ? 'border-[#00B8A9] bg-gradient-to-br from-[#00B8A9]/10 to-[#00B8A9]/5 shadow-md'
                            : 'border-gray-300 hover:border-[#00B8A9]/50 hover:shadow-sm'
                        }`}
                      >
                        {option.label}
                      </button>
                    ))}
                  </div>
                  {errors.fundingAmount && <p className="text-[#EF4444] text-sm mt-2">{errors.fundingAmount}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                    What is the purpose of the financing? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Working Capital / Cash Flow',
                      'Equipment Purchase',
                      'Business Growth / Expansion',
                      'Real Estate / Property',
                      'Other',
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => updateField('purpose', option)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 font-medium ${
                          formData.purpose === option
                            ? 'border-[#00B8A9] bg-gradient-to-br from-[#00B8A9]/10 to-[#00B8A9]/5 shadow-md'
                            : 'border-gray-300 hover:border-[#00B8A9]/50 hover:shadow-sm'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {errors.purpose && <p className="text-[#EF4444] text-sm mt-2">{errors.purpose}</p>}
                </div>
              </div>
            )}

            {/* Step 2: Business */}
            {currentStep === 2 && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] rounded-lg flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <h2 className="text-3xl font-bold text-[#1E3A5F]">Your Business</h2>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                    What is your industry? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Construction / Contracting',
                      'Retail / E-commerce',
                      'Professional Services',
                      'Technology / Software',
                      'Manufacturing / Industrial',
                      'Other',
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => updateField('industry', option)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 font-medium ${
                          formData.industry === option
                            ? 'border-[#00B8A9] bg-gradient-to-br from-[#00B8A9]/10 to-[#00B8A9]/5 shadow-md'
                            : 'border-gray-300 hover:border-[#00B8A9]/50 hover:shadow-sm'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {errors.industry && <p className="text-[#EF4444] text-sm mt-2">{errors.industry}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-3">
                    How long has your business been operating? *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      'Less than 1 year',
                      '1 to 3 years',
                      '3 to 5 years',
                      'More than 5 years',
                    ].map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => updateField('businessAge', option)}
                        className={`p-4 rounded-xl border-2 text-left transition-all duration-200 font-medium ${
                          formData.businessAge === option
                            ? 'border-[#00B8A9] bg-gradient-to-br from-[#00B8A9]/10 to-[#00B8A9]/5 shadow-md'
                            : 'border-gray-300 hover:border-[#00B8A9]/50 hover:shadow-sm'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                  {errors.businessAge && <p className="text-[#EF4444] text-sm mt-2">{errors.businessAge}</p>}
                </div>
              </div>
            )}

            {/* Step 3: Contact Information */}
            {currentStep === 3 && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] rounded-lg flex items-center justify-center text-white font-bold">
                    3
                  </div>
                  <h2 className="text-3xl font-bold text-[#1E3A5F]">Your Contact Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => updateField('firstName', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.firstName ? 'border-[#EF4444]' : 'border-gray-300'
                      } focus:border-[#00B8A9] focus:outline-none transition-colors`}
                      placeholder="John"
                    />
                    {errors.firstName && <p className="text-[#EF4444] text-sm mt-1">{errors.firstName}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => updateField('lastName', e.target.value)}
                      className={`w-full px-4 py-3 rounded-lg border-2 ${
                        errors.lastName ? 'border-[#EF4444]' : 'border-gray-300'
                      } focus:border-[#00B8A9] focus:outline-none transition-colors`}
                      placeholder="Doe"
                    />
                    {errors.lastName && <p className="text-[#EF4444] text-sm mt-1">{errors.lastName}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.email ? 'border-[#EF4444]' : 'border-gray-300'
                    } focus:border-[#00B8A9] focus:outline-none transition-colors`}
                    placeholder="john@company.com"
                  />
                  {errors.email && <p className="text-[#EF4444] text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.phone ? 'border-[#EF4444]' : 'border-gray-300'
                    } focus:border-[#00B8A9] focus:outline-none transition-colors`}
                    placeholder="(555) 123-4567"
                  />
                  {errors.phone && <p className="text-[#EF4444] text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1E3A5F] mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => updateField('companyName', e.target.value)}
                    className={`w-full px-4 py-3 rounded-lg border-2 ${
                      errors.companyName ? 'border-[#EF4444]' : 'border-gray-300'
                    } focus:border-[#00B8A9] focus:outline-none transition-colors`}
                    placeholder="Your Company LLC"
                  />
                  {errors.companyName && <p className="text-[#EF4444] text-sm mt-1">{errors.companyName}</p>}
                </div>
              </div>
            )}

            {/* Step 4: Consent */}
            {currentStep === 4 && (
              <div className="space-y-8 animate-fade-in">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="w-10 h-10 bg-gradient-to-br from-[#00B8A9] to-[#00E5D0] rounded-lg flex items-center justify-center text-white font-bold">
                    4
                  </div>
                  <h2 className="text-3xl font-bold text-[#1E3A5F]">Consent</h2>
                </div>
                
                <div className="space-y-4">
                  <div className={`p-4 rounded-lg border-2 ${errors.consentPartners ? 'border-[#EF4444]' : 'border-gray-300'}`}>
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentPartners}
                        onChange={(e) => updateField('consentPartners', e.target.checked)}
                        className="w-5 h-5 mt-0.5 text-[#00B8A9] border-gray-300 rounded focus:ring-[#00B8A9] cursor-pointer"
                      />
                      <span className="ml-3 text-sm text-[#1E3A5F]">
                        I authorize fund-stream to share my request with selected finance partners so they may contact me by phone, email, and/or SMS to review my application. This may include calls or texts using an automatic telephone dialing system or prerecorded voice. I am not required to consent to purchase. See{' '}
                        <a href="/privacy" target="_blank" className="text-[#00B8A9] underline">Privacy Policy</a>. *
                      </span>
                    </label>
                    {errors.consentPartners && <p className="text-[#EF4444] text-sm mt-2 ml-8">{errors.consentPartners}</p>}
                  </div>

                  <div className="p-4 rounded-lg border-2 border-gray-300">
                    <label className="flex items-start cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consentMarketing}
                        onChange={(e) => updateField('consentMarketing', e.target.checked)}
                        className="w-5 h-5 mt-0.5 text-[#00B8A9] border-gray-300 rounded focus:ring-[#00B8A9] cursor-pointer"
                      />
                      <span className="ml-3 text-sm text-[#1E3A5F]">
                        I agree to receive marketing communications from fund-stream.
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 pt-8 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="group px-6 py-3.5 border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold rounded-xl hover:bg-[#1E3A5F] hover:text-white transition-all inline-flex items-center space-x-2"
                >
                  <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                  </svg>
                  <span>Previous</span>
                </button>
              )}
              
              <div className={currentStep === 1 ? 'ml-auto' : ''}>
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="group px-8 py-3.5 bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] text-white font-semibold rounded-xl hover:shadow-lg transition-all inline-flex items-center space-x-2"
                  >
                    <span>Next Step</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                ) : (
                  <div className="space-y-4">
                    <button
                      type="submit"
                      className="group px-8 py-3.5 bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] text-white font-semibold rounded-xl hover:shadow-lg transition-all inline-flex items-center space-x-2"
                    >
                      <span>Submit Application</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <p className="text-xs text-[#6B7280] text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="/terms" target="_blank" className="text-[#00B8A9] underline">Terms of Service</a>.
                      <br />
                      Privacy rights: You have the right to opt-out of data sharing and exercise other privacy rights under applicable state laws. See{' '}
                      <a href="/privacy-choices" target="_blank" className="text-[#00B8A9] underline">Your Privacy Choices</a>.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

