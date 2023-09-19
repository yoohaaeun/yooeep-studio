import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import SideLogo from './components/SideLogo';

function App() {
  return (
    <>
      <Navbar />
      <SideLogo />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
