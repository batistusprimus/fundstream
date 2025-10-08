'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
    consentPartners: false,
    consentMarketing: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

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
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep(4)) {
      // In production, send to backend
      console.log('Form submitted:', formData);
      router.push('/thank-you');
    }
  };

  return (
    <section id="application-form" className="py-16 px-6 bg-[#F5F7FA]">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between mb-2">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex-1">
                  <div className={`h-2 rounded-full ${step <= currentStep ? 'bg-[#00B8A9]' : 'bg-gray-200'} ${step !== 4 ? 'mr-2' : ''}`}></div>
                </div>
              ))}
            </div>
            <p className="text-sm text-[#6B7280] text-center">Step {currentStep} of 4</p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Financing Need */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Your Financing Need</h2>
                
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
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.fundingAmount === option.value
                            ? 'border-[#00B8A9] bg-[#00B8A9]/5'
                            : 'border-gray-300 hover:border-[#00B8A9]/50'
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
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.purpose === option
                            ? 'border-[#00B8A9] bg-[#00B8A9]/5'
                            : 'border-gray-300 hover:border-[#00B8A9]/50'
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
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Your Business</h2>
                
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
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.industry === option
                            ? 'border-[#00B8A9] bg-[#00B8A9]/5'
                            : 'border-gray-300 hover:border-[#00B8A9]/50'
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
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.businessAge === option
                            ? 'border-[#00B8A9] bg-[#00B8A9]/5'
                            : 'border-gray-300 hover:border-[#00B8A9]/50'
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
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Your Contact Information</h2>
                
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
              <div className="space-y-6">
                <h2 className="text-3xl font-bold text-[#1E3A5F] mb-6">Consent</h2>
                
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
                        I agree that my information will be shared with selected financial partners (banks, fintechs, brokers) so they can contact me to review my financing request.{' '}
                        <a href="/privacy" target="_blank" className="text-[#00B8A9] underline">Privacy Policy</a> *
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
                        I agree to receive marketing communications from fund-stream and its partners. (Optional)
                      </span>
                    </label>
                  </div>
                </div>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <p className="text-xs text-[#6B7280]">
                    In accordance with CCPA, you have the right to access, correct, and delete your data. To exercise your rights, contact us at privacy@fundstream.com.
                  </p>
                </div>

                <div className="text-center">
                  <p className="text-sm text-[#6B7280]">
                    Free and no obligation · Response in 48-72h · CCPA protected data
                  </p>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#1E3A5F] hover:text-white transition-all"
                >
                  Previous
                </button>
              )}
              
              <div className={currentStep === 1 ? 'ml-auto' : ''}>
                {currentStep < 4 ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="px-8 py-3 bg-[#00B8A9] text-white font-semibold rounded-lg hover:bg-[#009688] transition-all"
                  >
                    Next Step
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-8 py-3 bg-[#00B8A9] text-white font-semibold rounded-lg hover:bg-[#009688] transition-all"
                  >
                    Submit Application
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

