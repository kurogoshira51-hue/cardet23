import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

function App() {
  return (
    <div style={{ background: '#050507', minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Services />
      <Gallery />
      <Location />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
