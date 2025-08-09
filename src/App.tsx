import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import T5Byggeguide from './pages/T5Byggeguide';
import Deler from './pages/Deler';
import Mapping from './pages/Mapping';
import Verktoy from './pages/Verktoy';
import Lovlig from './pages/Lovlig';
import Kontakt from './pages/Kontakt';
import Logo from './components/Logo';

function Header() {
  return (
    <header className="header">
      <div className="header-inner container">
        <NavLink to="/" className="logo" aria-label="Legacy Tuning Hjem">
          <Logo height={30} />
          <span>Legacy Tuning</span>
        </NavLink>
        <nav className="nav">
          <NavLink to="/t5-byggeguide">T5 Byggeguide</NavLink>
          <NavLink to="/deler">Deler</NavLink>
          <NavLink to="/mapping">Mapping</NavLink>
          <NavLink to="/verktøy">Verktøy</NavLink>
          <NavLink to="/lovlig">Lovlig</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
        </nav>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>© {new Date().getFullYear()} Legacy Tuning — Kraft. Presisjon. PD. | Kun for bane/off-road med mindre godkjent.</small>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/t5-byggeguide" element={<T5Byggeguide />} />
          <Route path="/deler" element={<Deler />} />
          <Route path="/mapping" element={<Mapping />} />
          <Route path="/verktøy" element={<Verktoy />} />
          <Route path="/lovlig" element={<Lovlig />} />
          <Route path="/kontakt" element={<Kontakt />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}