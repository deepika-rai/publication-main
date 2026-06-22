import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
import Login from '../components/Login';
import { Toaster } from 'react-hot-toast';

const UserLayout = () => {
  const { showUserLogin } = useAppContext();

  return (
    <>
      <Navbar />
      {showUserLogin && <Login />}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 999999,
          },
        }}
      />
      {/* <div className="px-6 md:px-16 lg:px-24 xl:px-32"> */}
      <Outlet />
      {/* </div> */}
      <Footer />
    </>
  );
};

export default UserLayout;
