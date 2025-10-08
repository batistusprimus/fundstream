import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service - fund-stream',
  description: 'Terms of service for fund-stream by BPC Group',
};

export default function Terms() {
  return (
    <main>
      <section className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#00B8A9] hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg text-[#6B7280] space-y-6">
            <p className="text-xl text-[#1E3A5F] font-semibold">Last Updated: October 7, 2025</p>
            
            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using fund-stream's services, you accept and agree to be bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">2. Description of Service</h2>
              <p>
                fund-stream is a lead generation service that connects businesses seeking financing with qualified financial partners. Our service is free for businesses and we are compensated by our financial partners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">3. No Guarantee</h2>
              <p>
                We do not guarantee that you will receive financing offers or that any particular number of partners will contact you. The number and timing of responses depends on various factors including your business profile and partner availability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">4. User Responsibilities</h2>
              <p>You agree to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Respond to partner inquiries in a timely manner</li>
                <li>Not use the service for fraudulent purposes</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">5. Limitation of Liability</h2>
              <p>
                fund-stream acts solely as an intermediary. We are not responsible for the offers, terms, or conduct of financial partners. Any financing agreement is directly between you and the financial partner.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">6. Contact</h2>
              <p>
                For questions about these Terms of Service, please contact:
                <br />
                <a href="mailto:contact@fundstream.com" className="text-[#00B8A9] hover:underline">
                  contact@fundstream.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

