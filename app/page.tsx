import Header from './components/Header';
import Hero from './components/Hero';
import ApplicationForm from './components/ApplicationForm';
import HowItWorks from './components/HowItWorks';
import WhyFundStream from './components/WhyFundStream';
import SocialProof from './components/SocialProof';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
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
        <SocialProof />
        <FAQ />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
}
