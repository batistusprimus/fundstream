import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Your Privacy Choices - fund-stream',
  description: 'Exercise your privacy rights - Opt-out of data sharing (CA, VA, CO, CT, UT)',
};

export default function PrivacyChoices() {
  return (
    <main>
      <section className="py-16 px-6 bg-white min-h-screen">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="inline-block mb-8">
            <Image 
              src="/fundstream_transparent.png" 
              alt="fund-stream logo" 
              width={200} 
              height={64}
              className="h-12 w-auto"
            />
          </Link>
          
          <Link href="/" className="text-[#00B8A9] hover:underline mb-8 inline-block">
            ← Back to Home
          </Link>
          
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Your Privacy Choices</h1>
          <p className="text-sm text-[#6B7280] italic mb-8">Last updated: October 8, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Your Rights</h2>
              <p className="text-[#6B7280]">
                Depending on your state of residence, you have rights regarding your personal information.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Opt-Out of Data Sharing</h2>
              <p className="text-[#6B7280] mb-4">
                If you are a resident of California, Virginia, Colorado, Connecticut, or Utah, you have the right to opt-out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of your personal information.
              </p>

              <div className="bg-[#F5F7FA] p-6 rounded-lg mb-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">What We &ldquo;Share&rdquo;</h3>
                <p className="text-[#6B7280] mb-3">Under state privacy laws, &ldquo;sale&rdquo; and &ldquo;sharing&rdquo; may include:</p>
                <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                  <li>Sharing your contact information and financing request with finance partners (banks, fintechs, brokers) so they can contact you</li>
                  <li>Using cookies and pixels for advertising purposes (e.g., Meta Pixel, Google Ads)</li>
                </ul>
                <p className="text-[#6B7280] mt-4">
                  <strong>Important:</strong> We only share your information with finance partners <strong>with your explicit consent</strong> when you submit the form.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">How to Opt-Out</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">Option 1: Email Request</h3>
                <p className="text-[#6B7280] mb-3">Send an email to <strong>baptiste@bpcorp.eu</strong> with:</p>
                <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                  <li>Subject: &ldquo;Privacy Rights Request&rdquo;</li>
                  <li>Your full name</li>
                  <li>Your email address</li>
                  <li>Your phone number (if applicable)</li>
                  <li>Your state of residence</li>
                </ul>
                <p className="text-[#6B7280] mt-4">
                  We will process your request within <strong>45 days</strong> (extendable by 45 days if necessary).
                </p>
              </div>

              <div className="bg-[#F5F7FA] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">Option 2: Global Privacy Control (GPC)</h3>
                <p className="text-[#6B7280] mb-3">
                  We honor Global Privacy Control (GPC) signals from your browser. If your browser sends a GPC signal, we will treat it as a request to opt-out.
                </p>
                <p className="text-[#6B7280] mb-2">To enable GPC:</p>
                <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                  <li>Use a browser that supports GPC (e.g., Firefox, Brave, DuckDuckGo)</li>
                  <li>Enable the GPC setting in your browser preferences</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Other Privacy Rights</h2>
              <p className="text-[#6B7280] mb-4">You may also have the right to:</p>
              <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                <li><strong>Access</strong> your personal information</li>
                <li><strong>Correct</strong> inaccurate information</li>
                <li><strong>Delete</strong> your personal information</li>
                <li><strong>Opt-out</strong> of marketing communications</li>
              </ul>
              <p className="text-[#6B7280] mt-4">
                To exercise these rights, contact us at <strong>baptiste@bpcorp.eu</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">What Happens After You Opt-Out</h2>
              <p className="text-[#6B7280] mb-4">After you opt-out:</p>
              <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                <li>We will <strong>not share</strong> your new requests with finance partners (unless you provide new consent)</li>
                <li>We will <strong>stop</strong> using your data for advertising purposes</li>
                <li>You will <strong>not be discriminated against</strong> for exercising this right (same service quality, no price difference)</li>
              </ul>
              <p className="text-[#6B7280] mt-4">
                <strong>Note:</strong> Opting out does not delete your existing data. To request deletion, see our <Link href="/privacy" className="text-[#00B8A9] underline">Privacy Policy</Link>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">State-Specific Information</h2>
              
              <div className="space-y-6">
                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">California (CCPA/CPRA)</h3>
                  <p className="text-[#6B7280]">
                    California Civil Code Section 1798.83 permits California residents to request certain information regarding our disclosure of personal information to third parties for their direct marketing purposes.
                  </p>
                </div>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Virginia (VCDPA)</h3>
                  <p className="text-[#6B7280]">
                    Virginia residents have the right to opt-out of targeted advertising and the sale of personal data under the Virginia Consumer Data Protection Act.
                  </p>
                </div>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Colorado (CPA)</h3>
                  <p className="text-[#6B7280]">
                    Colorado residents have the right to opt-out of targeted advertising and the sale of personal data under the Colorado Privacy Act.
                  </p>
                </div>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Connecticut (CTDPA)</h3>
                  <p className="text-[#6B7280]">
                    Connecticut residents have the right to opt-out of targeted advertising and the sale of personal data under the Connecticut Data Privacy Act.
                  </p>
                </div>

                <div className="bg-[#F5F7FA] p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Utah (UCPA)</h3>
                  <p className="text-[#6B7280]">
                    Utah residents have the right to opt-out of targeted advertising and the sale of personal data under the Utah Consumer Privacy Act.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">Questions</h2>
              <p className="text-[#6B7280] mb-2">For any questions regarding your privacy rights:</p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-[#6B7280]"><strong>Email:</strong> baptiste@bpcorp.eu</p>
                <p className="text-[#6B7280]"><strong>Address:</strong> BP Les Cannisses KFT, 1077 Budapest, Rózsa utca 38/A, Hungary</p>
              </div>
            </section>

            <div className="bg-gradient-to-r from-[#00B8A9] to-[#00E5D0] p-6 rounded-xl text-white">
              <h3 className="text-xl font-bold mb-3">Submit a Privacy Rights Request</h3>
              <p className="mb-4">
                To submit a request to exercise your privacy rights, please email us:
              </p>
              <a 
                href="mailto:baptiste@bpcorp.eu?subject=Privacy Rights Request"
                className="inline-block bg-white text-[#00B8A9] hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-all"
              >
                Send Privacy Rights Request
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

