import Link from 'next/link';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy - fund-stream',
  description: 'Privacy policy for fund-stream by BPC Group',
};

export default function Privacy() {
  return (
    <main>
      <section className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-[#00B8A9] hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg text-[#6B7280] space-y-6">
            <p className="text-xl text-[#1E3A5F] font-semibold">Last Updated: October 7, 2025</p>
            
            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Overview</h2>
              <p>
                fund-stream by BPC Group ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Information We Collect</h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Contact information (name, email, phone number, company name)</li>
                <li>Business information (industry, business age, funding needs)</li>
                <li>Financing requirements and purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Connect you with qualified financial partners</li>
                <li>Process your financing application</li>
                <li>Communicate with you about our services</li>
                <li>Improve our services and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Information Sharing</h2>
              <p>
                We share your information with selected financial partners (banks, fintechs, brokers) who have been verified and are suited to your financing profile. Your consent is required before sharing your information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Your Rights (CCPA)</h2>
              <p>Under the California Consumer Privacy Act (CCPA), you have the right to:</p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Know what personal information we collect about you</li>
                <li>Access your personal information</li>
                <li>Request deletion of your personal information</li>
                <li>Opt-out of the sale of your personal information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#1E3A5F] mt-8 mb-4">Contact Us</h2>
              <p>
                For any questions about this Privacy Policy or to exercise your rights, please contact us at:
                <br />
                <a href="mailto:privacy@fundstream.com" className="text-[#00B8A9] hover:underline">
                  privacy@fundstream.com
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

