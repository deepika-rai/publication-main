import { useNavigate } from 'react-router-dom';
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center mt-4">
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto">
          <h1 className="text-primary" style={{ fontSize: '45px' }}>404</h1>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Page Not Found</h2>
          <p className="text-gray-600 mb-6">Sorry, the page you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/')}
            className="cursor-pointer w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
