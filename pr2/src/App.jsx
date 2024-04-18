import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Client from "./components/Client/Client";
import Aboutus from './components/Aboutus/Aboutus';
import Whyus from './components/Whyus/Whyus';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Cta from './components/Cta/Cta';
import Portfolio from './components/Portfolio/Portfolio';
import Team from './components/Team/Team';
import Pricing from './components/Pricing/Pricing';
import Faq from './components/Faq/Faq';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Banner />
      <Client />
      <Aboutus />
      <Whyus />
      <Skills />
      <Services />
      <Cta />
      <Portfolio />
      <Team />
      <Pricing />
      <Faq />
      <Contact />
      <Footer />
    </>
  )
}

export default App
