import { useState, useRef } from 'react'
import { useSellerContext } from '../../context/SellerContext'
import { assets } from '../../assets/assets';
import { Navigate } from "react-router-dom";
import { toast, Toaster } from 'react-hot-toast';
import ReCAPTCHA from "react-google-recaptcha";

const SellerLogin = () => {
    const { navigate, axios, setIsSeller, isSeller, setSellerRole } = useSellerContext()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const recaptchaRef = useRef(null);

    if (isSeller) {
        return <Navigate to="/seller/dashboard" replace />;
    }

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();

            const captchaToken = recaptchaRef.current?.getValue();
            if (!captchaToken) {
                toast.error("Please complete the captcha");
                return;
            }

            const { data } = await axios.post(
                '/api/seller/login',
                { email, password, captchaToken },
                { withCredentials: true }
            )

            if (data.success) {
                if (![2, 3, 4].includes(data.user.role)) {
                    toast.error("You are not authorized to access admin panel");
                    recaptchaRef.current?.reset();
                    return;
                }

                setIsSeller(true);
                setSellerRole(data.user.role);

                toast.success(data.message);
                navigate('/seller/dashboard', { replace: true });
            } else {
                toast.error(data.message)
                recaptchaRef.current?.reset();
            }
        } catch (error) {
            toast.error(error.response?.data?.message || error.message)
            recaptchaRef.current?.reset();
        }
    }

    return (
        <div className='min-h-screen flex items-center justify-center bg-gray-50'>
            <Toaster
                position="top-right"
                toastOptions={{ style: { zIndex: 999999 } }}
            />
            <form onSubmit={onSubmitHandler} className='w-full max-w-md mx-4'>
                <div className='flex flex-col gap-5 bg-white p-8 rounded-lg shadow-lg border border-gray-100'>
                    <div className='flex flex-col items-center'>
                        <img src={assets.logo} alt="logo" className='w-48 mb-2' />
                        <h3 className='text-2xl font-medium mt-2'>Admin Login</h3>
                    </div>

                    <div className="w-full">
                        <label className='block text-gray-700 mb-1'>Email</label>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Enter your email"
                            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div className="w-full">
                        <label className='block text-gray-700 mb-1'>Password</label>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Enter your password"
                            className="border border-gray-300 rounded w-full p-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-primary hover:bg-primary-dark text-white w-full py-2 rounded-md transition-colors duration-300 mt-2 cursor-pointer"
                    >
                        Login
                    </button>
                    <p><a href="/">Back to Home</a></p>
                </div>
            </form>
        </div>
    )
}

export default SellerLogin;