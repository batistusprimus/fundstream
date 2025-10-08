import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Thank You - fund-stream',
  description: 'Your financing application has been submitted successfully.',
};

export default function ThankYou() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1E3A5F] to-[#2C4F7C] text-white py-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Logo */}
          <div className="mb-12 text-center">
            <Link href="/">
              <Image 
                src="/fundstream_transparent.png" 
                alt="fund-stream logo" 
                width={200} 
                height={64}
                className="h-12 w-auto inline-block"
              />
            </Link>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Success Icon */}
            <div className="inline-flex items-center justify-center w-24 h-24 bg-[#10B981] rounded-full mb-8">
              <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Thank you! Your request has been submitted.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
              Our financial partners will review your request and contact you within 48-72h if your profile matches their criteria.
            </p>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1E3A5F] text-center mb-12">What Happens Next?</h2>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="flex items-start space-x-4 p-6 bg-[#F5F7FA] rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00B8A9] text-white rounded-full flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Check Your Email</h3>
                <p className="text-[#6B7280]">
                  We&apos;ve sent a confirmation email to your inbox. Please check your spam folder if you don&apos;t see it.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4 p-6 bg-[#F5F7FA] rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00B8A9] text-white rounded-full flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">Prepare Your Documents</h3>
                <p className="text-[#6B7280] mb-3">
                  While you wait, prepare the following documents:
                </p>
                <ul className="list-disc list-inside text-[#6B7280] space-y-1 ml-2">
                  <li>Balance sheet (most recent)</li>
                  <li>Income statement (profit & loss)</li>
                  <li>Business tax returns (last 2 years)</li>
                  <li>Bank statements (last 3-6 months)</li>
                  <li>Business plan or financial projections (if available)</li>
                </ul>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4 p-6 bg-[#F5F7FA] rounded-xl">
              <div className="flex-shrink-0 w-12 h-12 bg-[#00B8A9] text-white rounded-full flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-2">You&apos;ll Be Contacted</h3>
                <p className="text-[#6B7280]">
                  Interested financial partners will contact you within 48-72h by email or phone to discuss your financing request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Information */}
      <section className="py-16 px-6 bg-[#F5F7FA]">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-start space-x-4">
              <svg className="w-8 h-8 text-[#00B8A9] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Important Reminders</h3>
                <ul className="space-y-2 text-[#6B7280]">
                  <li className="flex items-start">
                    <span className="text-[#00B8A9] mr-2">•</span>
                    <span>This service is 100% free. You will never be charged for our matching service.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00B8A9] mr-2">•</span>
                    <span>You have no obligation to accept any offer. Feel free to compare and choose what&apos;s best for your business.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00B8A9] mr-2">•</span>
                    <span>The number of partners contacting you may vary based on your profile and financing needs.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#00B8A9] mr-2">•</span>
                    <span>Your data is protected under CCPA and will only be shared with authorized partners.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#1E3A5F] mb-4">Need Help?</h2>
          <p className="text-lg text-[#6B7280] mb-8">
            If you have any questions or need assistance, our support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:contact@fundstream.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-[#00B8A9] text-white font-semibold rounded-lg hover:bg-[#009688] transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Us
            </a>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-[#1E3A5F] text-[#1E3A5F] font-semibold rounded-lg hover:bg-[#1E3A5F] hover:text-white transition-all"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

