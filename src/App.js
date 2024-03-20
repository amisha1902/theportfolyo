import Home from './pages/home';
// import logo from './logo.svg';
import './App.css';
import Preloader from './components/Preloader';
import MobileNavbar from './components/MobileNavbar';
import Header from './components/Header';
import ElementTilt from './components/ElementTilt';
import TabContent from './components/TabContent';
import CustomCursor from './components/CustomCursor';
import DataFetcher from './components/DataFetcher';
import Services from './components/Services';
import About from './components/About';
import Project from './components/Projects';
import Review from './components/Review';
import Contact from './components/Contact';
function App() {
  
    return (
        
        <div className="App">
        <Home />
      <Preloader />
      <MobileNavbar />
      <Header />
      <ElementTilt />
      <TabContent />
      <CustomCursor />
      <DataFetcher/>
      <Services/>
      <About/>
      <Project/>
      <Review/>
      <Contact/>
            {/* Add other components here */}
    </div>
    );

}

export default App;
