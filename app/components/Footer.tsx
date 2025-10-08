import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1E3A5F] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Image 
              src="/fundstream_transparent.png" 
              alt="fund-stream logo" 
              width={200} 
              height={64}
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4">by BPC Group</p>
            <p className="text-gray-400 text-sm max-w-md">
              We connect your business financing request with qualified financial partners. Free, fast, no obligation.
            </p>
          </div>

          {/* Legal Links */}
          <div className="md:text-right">
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="/privacy" className="text-gray-300 hover:text-[#00B8A9] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-300 hover:text-[#00B8A9] transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="/ccpa" className="text-gray-300 hover:text-[#00B8A9] transition-colors">
                  Do Not Sell My Personal Information (CCPA)
                </a>
              </li>
              <li>
                <a href="mailto:contact@fundstream.com" className="text-gray-300 hover:text-[#00B8A9] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2025 BPC Group. All rights reserved.</p>
            <p className="mt-4 md:mt-0">
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                CCPA Compliant
              </span>
              <span className="mx-3">|</span>
              <span className="inline-flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SSL Secured
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

