import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Service - fund-stream',
  description: 'Terms of service for fund-stream lead generation service',
};

export default function Terms() {
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
          
          <h1 className="text-4xl font-bold text-[#1E3A5F] mb-4">Terms of Service</h1>
          <p className="text-sm text-[#6B7280] italic mb-8">Last updated: October 8, 2025</p>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">1. Service Description</h2>
              <p className="text-[#6B7280] mb-4">
                fund-stream is a lead generation service that connects businesses seeking professional financing with finance partners (banks, fintechs, brokers) throughout the United States.
              </p>
              <div className="bg-[#F5F7FA] p-4 rounded-lg">
                <p className="text-[#6B7280]"><strong>Publisher:</strong> BP Les Cannisses KFT</p>
                <p className="text-[#6B7280]"><strong>Headquarters:</strong> 1077 Budapest, Rózsa utca 38/A, Hungary</p>
                <p className="text-[#6B7280]"><strong>Email:</strong> baptiste@bpcorp.eu</p>
                <p className="text-[#6B7280]"><strong>VAT number:</strong> HU32359815</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">2. Purpose</h2>
              <p className="text-[#6B7280] mb-4">
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the website fundstream.bpcorp.eu.
              </p>
              <p className="text-[#6B7280]">
                By using the site, you agree to these Terms in full.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">3. Nature of Service</h2>
              <p className="text-[#6B7280] mb-4">fund-stream is a <strong>lead generation service</strong>. We are not:</p>
              <ul className="list-none ml-6 space-y-2 text-[#6B7280]">
                <li>❌ A lender or financial institution</li>
                <li>❌ A loan broker or mortgage broker</li>
                <li>❌ A credit repair organization</li>
              </ul>
              <p className="text-[#6B7280] mt-4">
                We do not make <strong>any credit decisions</strong> and do not guarantee <strong>any approval or financing offers</strong>.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">4. How the Service Works</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">4.1 Submitting a Request</h3>
                <p className="text-[#6B7280] mb-2">The user fills out an online form providing:</p>
                <ul className="list-disc ml-6 space-y-1 text-[#6B7280]">
                  <li>Information about their business</li>
                  <li>Information about their financing need</li>
                  <li>Contact information</li>
                </ul>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">4.2 Sharing with Partners</h3>
                <p className="text-[#6B7280]">
                  With the user&apos;s explicit consent, we share their request with selected finance partners who may respond to their need.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">4.3 Contact by Partners</h3>
                <p className="text-[#6B7280]">
                  Interested partners contact the user directly to review their request and, if applicable, propose a financing offer.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">4.4 Relationship Between User and Partners</h3>
                <p className="text-[#6B7280]">
                  fund-stream does not intervene in the relationship between the user and finance partners. All negotiation, contracting, and business relationship occurs directly between the user and the partner.
                </p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">5. Free Service</h2>
              <p className="text-[#6B7280] mb-4">
                The fund-stream service is <strong>100% free</strong> for end users (businesses seeking financing).
              </p>
              <p className="text-[#6B7280]">
                fund-stream is compensated by finance partners only when they contact a user.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">6. No Guarantee of Results</h2>
              <p className="text-[#6B7280] mb-4">fund-stream does not guarantee:</p>
              <ul className="list-none ml-6 space-y-2 text-[#6B7280]">
                <li>❌ That one or more partners will contact the user</li>
                <li>❌ That a financing offer will be proposed</li>
                <li>❌ That a financing offer will be accepted</li>
                <li>❌ A specific response time from partners</li>
                <li>❌ A specific amount, rate, or financing terms</li>
              </ul>
              <p className="text-[#6B7280] mt-4">
                The response times indicated (48-72h) are <strong>typical</strong> and may vary by partner and user profile.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">7. User Obligations</h2>
              <p className="text-[#6B7280] mb-4">The user agrees to:</p>
              <ul className="list-disc ml-6 space-y-2 text-[#6B7280]">
                <li>Provide <strong>accurate, complete, and up-to-date</strong> information</li>
                <li>Not use the service for fraudulent purposes</li>
                <li>Not submit multiple or abusive requests</li>
                <li>Respond to partner solicitations professionally</li>
                <li>Comply with these Terms and applicable law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">8. Liability</h2>
              
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">8.1 fund-stream Liability</h3>
                <p className="text-[#6B7280] mb-3">
                  fund-stream uses all reasonable means to ensure proper site operation and transmission of requests to partners.
                </p>
                <p className="text-[#6B7280] mb-2">However, fund-stream cannot be held liable for:</p>
                <ul className="list-disc ml-6 space-y-1 text-[#6B7280]">
                  <li>Credit decisions made by partners</li>
                  <li>Offers proposed or refused by partners</li>
                  <li>Partner response times</li>
                  <li>Technical interruptions or malfunctions of the site</li>
                  <li>Direct or indirect damages resulting from use of the service</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">8.2 Partner Liability</h3>
                <p className="text-[#6B7280] mb-2">Finance partners are solely responsible for:</p>
                <ul className="list-disc ml-6 space-y-1 text-[#6B7280]">
                  <li>Reviewing financing requests</li>
                  <li>Credit decisions</li>
                  <li>Offers proposed</li>
                  <li>Business relationship with the user</li>
                  <li>Compliance with applicable regulations (federal and state lending laws)</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">9. Personal Data</h2>
              <p className="text-[#6B7280] mb-4">
                The processing of personal data is governed by our <Link href="/privacy" className="text-[#00B8A9] underline">Privacy Policy</Link>.
              </p>
              <p className="text-[#6B7280] mb-4">
                Depending on your state, you may have rights to know, delete, opt-out, correct, and limit the use of your personal data.
              </p>
              <p className="text-[#6B7280]">
                To exercise these rights: <strong>baptiste@bpcorp.eu</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">10. Intellectual Property</h2>
              <p className="text-[#6B7280] mb-4">
                The fund-stream site and all its content (text, images, logos, graphics, source code) are the exclusive property of BP Les Cannisses KFT.
              </p>
              <p className="text-[#6B7280]">
                Any reproduction, representation, modification, publication, or adaptation of any part of the site, by any means or process, is prohibited without prior written authorization.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">11. Hyperlinks</h2>
              <p className="text-[#6B7280]">
                The site may contain links to third-party sites. fund-stream exercises no control over these sites and disclaims all responsibility for their content.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">12. Modification of Terms</h2>
              <p className="text-[#6B7280] mb-4">
                fund-stream reserves the right to modify these Terms at any time. The last update date is indicated at the top of this page.
              </p>
              <p className="text-[#6B7280]">
                Use of the site after modification of the Terms constitutes acceptance of the new Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">13. Applicable Law and Jurisdiction</h2>
              <p className="text-[#6B7280] mb-4">
                These Terms are governed by <strong>Hungarian law</strong>.
              </p>
              <p className="text-[#6B7280]">
                In case of dispute, the parties will attempt to find an amicable solution. Failing that, Hungarian courts will have exclusive jurisdiction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-[#1E3A5F] mb-4">14. Contact</h2>
              <p className="text-[#6B7280] mb-2">For any questions regarding these Terms:</p>
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
