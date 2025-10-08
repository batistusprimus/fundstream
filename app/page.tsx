import Header from './components/Header';
import Hero from './components/Hero';
import ApplicationForm from './components/ApplicationForm';
import HowItWorks from './components/HowItWorks';
import WhyFundStream from './components/WhyFundStream';
import IndustryCoverage from './components/IndustryCoverage';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Disclaimer from './components/Disclaimer';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ApplicationForm />
        <WhyFundStream />
        <IndustryCoverage />
        <SocialProof />
        <FAQ />
        <FinalCTA />
        <Disclaimer />
        <Footer />
      </main>
    </>
  );
}
