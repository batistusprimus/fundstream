import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Privacy Policy - fund-stream',
  description: 'Privacy policy for fund-stream - State privacy rights respected (CA, VA, CO, CT, UT)',
};

export default function Privacy() {
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
          
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Privacy Policy</h1>
          <p className="text-sm text-[#6B7280] italic mb-8">Last updated: October 8, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Introduction</h2>
              <p className="text-[#6B7280] mb-4">
                BP Les Cannisses KFT (&ldquo;fund-stream&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This policy explains how we collect, use, and protect your personal data when you use our website fundstream.bpcorp.eu.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">2. Data Controller</h2>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-[#6B7280]"><strong>Company name:</strong> BP Les Cannisses KFT</p>
                <p className="text-[#6B7280]"><strong>Address:</strong> 1077 Budapest, Rózsa utca 38/A, Hungary</p>
                <p className="text-[#6B7280]"><strong>Email:</strong> baptiste@bpcorp.eu</p>
                <p className="text-[#6B7280]"><strong>VAT number:</strong> HU32359815</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">3. Data We Collect</h2>
              <p className="text-[#6B7280] mb-4">We collect the following data when you fill out our form:</p>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Identification data:</h3>
                <ul className="list-disc ml-6 space-y-1 text-[#6B7280]">
                  <li>First and last name</li>
                  <li>Business email</li>
                  <li>Phone number</li>
                  <li>Company name</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Request data:</h3>
                <ul className="list-disc ml-6 space-y-1 text-[#6B7280]">
                  <li>Funding amount needed</li>
                  <li>Purpose of financing</li>
                  <li>Industry</li>
                  <li>Business age</li>
                  <li>State/Location</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Technical data:</h3>
                <ul className="list-disc ml-6 space-y-1 text-[#6B7280]">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Operating system</li>
                  <li>Pages visited</li>
                  <li>Visit duration</li>
                  <li>Traffic source (UTM)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">4. Purposes of Processing</h2>
              <p className="text-[#6B7280] mb-4">Your data is collected for:</p>
              <ol className="list-decimal ml-6 space-y-3 text-[#6B7280]">
                <li><strong>Connecting with finance partners:</strong> Share your request with selected partners (banks, fintechs, brokers) who can respond to your financing need.</li>
                <li><strong>Customer relationship management:</strong> Contact you for additional information, follow up on your request, answer your questions.</li>
                <li><strong>Service improvement:</strong> Analyze site usage, improve user experience, optimize our service.</li>
                <li><strong>Legal obligations:</strong> Comply with legal and regulatory obligations (fraud prevention, state privacy law compliance).</li>
                <li><strong>Marketing (with your consent):</strong> Send you tips and offers to optimize your financing search (only if you checked the optional box).</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">5. Legal Basis for Processing</h2>
              <p className="text-[#6B7280] mb-4">The processing of your data is based on:</p>
              <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                <li><strong>Your consent:</strong> For sharing your data with finance partners (required checkbox).</li>
                <li><strong>Our legitimate interest:</strong> For site analysis and service improvement.</li>
                <li><strong>Legal obligations:</strong> For regulatory compliance and fraud prevention.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">6. Data Recipients</h2>
              <p className="text-[#6B7280] mb-4">Your data may be shared with:</p>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Finance partners:</h3>
                <p className="text-[#6B7280]">With your explicit consent, we share your data with selected finance partners (banks, fintechs, business loan brokers) who can respond to your request. These partners are located throughout the United States.</p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Technical service providers:</h3>
                <ul className="list-disc ml-6 space-y-1 text-[#6B7280]">
                  <li>Vercel (website hosting)</li>
                  <li>GoHighLevel (lead management)</li>
                  <li>Google Analytics (traffic analysis)</li>
                  <li>Meta (Facebook/Instagram - advertising)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">Authorities:</h3>
                <p className="text-[#6B7280]">In case of legal obligation, we may share your data with competent authorities.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">7. International Transfers</h2>
              <p className="text-[#6B7280]">
                Some of our service providers (Google, Meta, Vercel) may transfer your data outside the United States or the European Economic Area. These transfers are governed by appropriate safeguards (Standard Contractual Clauses, etc.).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">8. Data Retention</h2>
              <p className="text-[#6B7280] mb-4">We retain your data:</p>
              <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                <li><strong>Unconverted leads:</strong> 3 years from your request</li>
                <li><strong>Converted leads:</strong> 5 years from the end of the business relationship</li>
                <li><strong>Marketing data:</strong> Until your unsubscription or 3 years without activity</li>
                <li><strong>Technical data (logs):</strong> 13 months</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">9. Your Privacy Rights</h2>
              <p className="text-[#6B7280] mb-4">Depending on your state of residence, you may have the following rights:</p>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">All US Residents</h3>
                <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                  <li><strong>Right to access:</strong> Request a copy of your personal data</li>
                  <li><strong>Right to correct:</strong> Correct inaccurate personal information</li>
                  <li><strong>Right to delete:</strong> Request deletion of your personal information</li>
                  <li><strong>Right to opt-out:</strong> Opt-out of marketing communications</li>
                </ul>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">California (CCPA/CPRA), Virginia (VCDPA), Colorado (CPA), Connecticut (CTDPA), Utah (UCPA)</h3>
                <p className="text-[#6B7280] mb-3">In addition to the rights above, you have:</p>
                <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                  <li><strong>Right to know:</strong> What personal information we collect, use, disclose, and share</li>
                  <li><strong>Right to opt-out of sale/sharing:</strong> Opt-out of the sale or sharing of your personal information</li>
                  <li><strong>Right to limit:</strong> Limit the use of sensitive personal information (CA only)</li>
                  <li><strong>Right to non-discrimination:</strong> Not be discriminated against for exercising your rights</li>
                </ul>
              </div>

              <div className="bg-[#F5F7FA] p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">How to Exercise Your Rights</h3>
                <p className="text-[#6B7280] mb-3">Contact us at: <strong>baptiste@bpcorp.eu</strong></p>
                <p className="text-[#6B7280] mb-3">We will respond to your request within <strong>45 days</strong> (extendable by 45 days if necessary).</p>
                <p className="text-[#6B7280] mb-2">
                  <a href="/privacy-choices" className="text-[#00B8A9] underline font-semibold">Your Privacy Choices</a>
                </p>
                <p className="text-[#6B7280]"><strong>Global Privacy Control (GPC):</strong> We honor GPC signals from your browser.</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">10. Cookies</h2>
              <p className="text-[#6B7280] mb-4">We use cookies for:</p>
              <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                <li><strong>Essential cookies:</strong> Site functionality (no consent required)</li>
                <li><strong>Analytics cookies:</strong> Google Analytics (consent required)</li>
                <li><strong>Advertising cookies:</strong> Meta Pixel (consent required)</li>
              </ul>
              <p className="text-[#6B7280] mt-4">You can manage your cookie preferences via the banner that appears during your first visit.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">11. Security</h2>
              <p className="text-[#6B7280] mb-4">We implement appropriate technical and organizational measures to protect your data against loss, misuse, unauthorized access, disclosure, alteration, or destruction:</p>
              <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                <li>SSL/TLS encryption</li>
                <li>Restricted data access</li>
                <li>Regular backups</li>
                <li>Access monitoring</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">12. Children&apos;s Privacy</h2>
              <p className="text-[#6B7280]">
                Our service is not intended for individuals under 18 years of age. We do not knowingly collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">13. Changes to This Policy</h2>
              <p className="text-[#6B7280]">
                We reserve the right to modify this privacy policy at any time. The last update date is indicated at the top of this page. We encourage you to review this page regularly.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">14. State-Specific Disclosures</h2>
              
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">California</h3>
                <p className="text-[#6B7280] mb-2"><strong>Categories of personal information collected:</strong> Identifiers, commercial information, internet activity, geolocation data.</p>
                <p className="text-[#6B7280] mb-2"><strong>Business purpose:</strong> Lead generation and connection with finance partners.</p>
                <p className="text-[#6B7280] mb-2"><strong>Third parties:</strong> Finance partners, service providers (Vercel, GoHighLevel, Google, Meta).</p>
                <p className="text-[#6B7280] mb-2"><strong>Sale/Sharing:</strong> We share your information with finance partners with your consent. This may be considered a &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; under CCPA/CPRA.</p>
                <p className="text-[#6B7280]"><strong>Sensitive personal information:</strong> We do not collect sensitive personal information as defined by CPRA.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-3">Virginia, Colorado, Connecticut, Utah</h3>
                <p className="text-[#6B7280]">
                  We comply with the Virginia Consumer Data Protection Act (VCDPA), Colorado Privacy Act (CPA), Connecticut Data Privacy Act (CTDPA), and Utah Consumer Privacy Act (UCPA).
                </p>
                <p className="text-[#6B7280] mt-2">
                  You have the right to opt-out of targeted advertising and the sale of personal data. See <a href="/privacy-choices" className="text-[#00B8A9] underline">Your Privacy Choices</a>.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">15. Contact</h2>
              <p className="text-[#6B7280] mb-2">For any questions regarding this policy or the processing of your personal data:</p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-[#6B7280]"><strong>Email:</strong> baptiste@bpcorp.eu</p>
                <p className="text-[#6B7280]"><strong>Address:</strong> BP Les Cannisses KFT, 1077 Budapest, Rózsa utca 38/A, Hungary</p>
              </div>
            </section>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
