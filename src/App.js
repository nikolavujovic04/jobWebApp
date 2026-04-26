import './App.css';
import './styles/global.css'
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'

function App() {
  return (
    <>
      <Navbar />
      <div className="app_main">
        <Home />
      </div>
      <Footer />
    </>
  );
}

export default App;