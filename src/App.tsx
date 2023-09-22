import { Outlet } from 'react-router-dom';
import { AuthContextProvider } from './components/context/AuthContext';
import Footer from './components/Footer';
import Navbar from './components/navbar/Navbar';
import SideLogo from './components/SideLogo';

function App() {
  return (
    <AuthContextProvider>
      <Navbar />
      <SideLogo />
      <Outlet />
      <Footer />
    </AuthContextProvider>
  );
}

export default App;
