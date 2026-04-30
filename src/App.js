import './App.css';
import './styles/global.css'
import Home from './pages/Home';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import { Routes, Route } from "react-router-dom";
import Register from './pages/Register';
import Jobs from './pages/Jobs';

function App() {
  return (
    <Routes>
      <Route path="/registracija" element={<Register />} />
      <Route path="/*" element={
        <>
          <Navbar />
          <main className="app_main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/poslovi" element={<Jobs/>}/>
            </Routes>
          </main>
          <Footer />
        </>
      } />

    </Routes>
  );
}

export default App;