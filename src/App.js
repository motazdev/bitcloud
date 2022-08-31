import './assets/scss/App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import HottestNews from './components/HottestNews';
import MarketTrend from './components/MarketTrend';
import CTrader from './components/CTrader';
import Download from './components/Download';
import SlideShow from './components/SlideShow';
import HowWorks from './components/HowWorks';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <HottestNews />
      <MarketTrend />
      <CTrader />
      <Download />
      <SlideShow />
      <HowWorks />
      <Footer />
    </div>
  );
}

export default App;
