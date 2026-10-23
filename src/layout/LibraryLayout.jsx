import { Outlet } from 'react-router-dom';
import Header from '../components/libraray/Header';
import Footer from '../components/libraray/Footer';

const LibraryLayout = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default LibraryLayout;
