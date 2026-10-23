import React, { useEffect, useState } from "react";
import { toast, Toaster } from 'react-hot-toast';
// import { Eye, EyeOff } from 'lucide-react';
import { useSellerContext } from "../../context/SellerContext";

const UpdatePassword = () => {
  const { axios, sellerRole, sellerId } = useSellerContext();
  // console.log("===sellerId======>",sellerId);

  const [oldpassword, setOldPassword] = useState("");
  const [newpassword, setNewPassword] = useState("");
  const [retypepassword, setRetypePassword] = useState("");

  const [showNewPassword, setShowNewPassword] = useState(false);
  const [errors, setErrors] = useState({});

  // Password rule: at least 5 characters, one uppercase letter, one special character
  const validatePassword = (password) => {
    const minLength = /.{5,}/;
    const upperCase = /[A-Z]/;
    const specialChar = /[!@#$%^&*(),.?":{}|<>_\-+=~`[\]/\\;']/;

    if (!minLength.test(password)) {
      return "Password must be at least 5 characters long";
    }
    if (!upperCase.test(password)) {
      return "Password must contain at least one uppercase letter";
    }
    if (!specialChar.test(password)) {
      return "Password must contain at least one special character";
    }
    return "";
  };

  const validateForm = () => {
    const newErrors = {};

    const passwordError = validatePassword(newpassword);
    if (passwordError) {
      newErrors.newpassword = passwordError;
    }

    if (retypepassword !== newpassword) {
      newErrors.retypepassword = "Passwords do not match";
    }

    if (!oldpassword) {
      newErrors.oldpassword = "Old password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors before submitting");
      return;
    }

    try {
      const passwordData = {
        id: sellerId,
        oldpassword: oldpassword,
        newpassword: newpassword,
      };

      const { data } = await axios.put(
        "/api/user/updatePassword",
        passwordData
      );

      if (data.success) {
        toast.success(data.message);
        setOldPassword("");
        setNewPassword("");
        setRetypePassword("");
        setErrors({});
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    //   fetchQuestionsStats()
  }, []);

  return (
    <div className="flex-1 min-h-[95vh] overflow-y-auto">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-2xl text-primary">Change password</h2>
        </div>
        <Toaster />

        {/* Form Card */}
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
          <form onSubmit={onSubmitHandler} className="space-y-6" noValidate>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

              {/* Old Password */}
              <div>
                <label htmlFor="oldPassword" className="block text-md font-medium text-gray-700 mb-1">
                  Old Password
                </label>
                <input
                  value={oldpassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  id="oldPassword"
                  type="password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                    errors.oldpassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.oldpassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.oldpassword}</p>
                )}
              </div>

              {/* New Password */}
              <div>
                <label htmlFor="newPassword" className="block text-md font-medium text-gray-700 mb-1">
                  New Password
                </label>
                <div className="relative">
                  <input
                    value={newpassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    id="newPassword"
                    type={showNewPassword ? "text" : "password"}
                    className={`w-full px-4 py-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                      errors.newpassword ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                    tabIndex={-1}
                  >
                    {/* {showNewPassword ? <EyeOff size={18} /> : <Eye size={18} />} */}
                  </button>
                </div>
                {errors.newpassword ? (
                  <p className="text-red-500 text-sm mt-1">{errors.newpassword}</p>
                ) : (
                  <p className="text-gray-400 text-xs mt-1">
                    Min 5 characters, 1 uppercase letter, 1 special character
                  </p>
                )}
              </div>

              {/* Retype Password */}
              <div>
                <label htmlFor="retypePassword" className="block text-md font-medium text-gray-700 mb-1">
                  Retype Password
                </label>
                <input
                  value={retypepassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  id="retypePassword"
                  type="password"
                  className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition ${
                    errors.retypepassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.retypepassword && (
                  <p className="text-red-500 text-sm mt-1">{errors.retypepassword}</p>
                )}
              </div>

            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-primary hover:bg-primary-dull text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
              >
                Update password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdatePassword;
