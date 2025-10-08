import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Do Not Sell My Personal Information - fund-stream',
  description: 'CCPA opt-out for fund-stream by BPC Group',
};

export default function CCPA() {
  return (
    <main>
      <section className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#00B8A9] hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">
            Do Not Sell My Personal Information (CCPA)
          </h1>
          
          <div className="prose prose-lg text-[#6B7280] space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Your CCPA Rights</h2>
              <p>
                The California Consumer Privacy Act (CCPA) provides California residents with specific rights regarding their personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Right to Opt-Out</h2>
              <p>
                Under CCPA, you have the right to opt-out of the &ldquo;sale&rdquo; of your personal information. At fund-stream, we share your information with financial partners to help you find financing opportunities. This sharing may be considered a &ldquo;sale&rdquo; under CCPA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">How to Exercise Your Rights</h2>
              <p>To exercise your right to opt-out or to request:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access to your personal information</li>
                <li>Deletion of your personal information</li>
                <li>Correction of your personal information</li>
                <li>Opt-out of sale of personal information</li>
              </ul>
              <p className="mt-4">
                Please contact us at:
                <br />
                <a href="mailto:privacy@fundstream.com" className="text-[#00B8A9] hover:underline">
                  privacy@fundstream.com
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Verification Process</h2>
              <p>
                To protect your privacy, we will verify your identity before processing your request. We may ask for additional information to confirm your identity.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">No Discrimination</h2>
              <p>
                We will not discriminate against you for exercising any of your CCPA rights. You will not receive different pricing or service quality for exercising your rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Response Time</h2>
              <p>
                We will respond to verifiable consumer requests within 45 days of receipt. If we require more time, we will inform you of the reason and extension period in writing.
              </p>
            </section>

            <div className="bg-[#F5F7FA] p-6 rounded-xl mt-8">
              <h3 className="text-xl font-bold text-[#1E3A5F] mb-3">Submit a Request</h3>
              <p className="mb-4">
                To submit a CCPA request, please email us at:
              </p>
              <a 
                href="mailto:privacy@fundstream.com?subject=CCPA Request"
                className="inline-block bg-[#00B8A9] hover:bg-[#009688] text-white font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Send CCPA Request
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

