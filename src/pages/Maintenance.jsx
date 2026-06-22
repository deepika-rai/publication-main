import { useNavigate } from 'react-router-dom';
import { assets } from "../assets/assets";
const Maintenance = () => {
    const navigate = useNavigate();
    return (
        <div className="px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

                <h2 className="text-2xl my-5 font-bold text-gray-800 mt-[50px]">
                    Website Under Maintenance
                </h2>
                <div className="flex justify-center" >
                    <img src={assets.mainten_icon} alt="menu" className="max-w-[50%]" />
                </div>
                <p className="text-gray-600 mb-6">
                    We’ll be back soon. Sorry for the inconvenience, but we’re performing some maintenance at the moment. We should be back shortly.
                </p>
                <div className="bg-white max-w-md mx-auto">
                    <button
                        onClick={() => navigate('/')}
                        className="cursor-pointer w-md bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition"
                    >
                        Go to Home
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;
