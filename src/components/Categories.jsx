import React from "react";
import { categories } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const baseURL = import.meta.env.VITE_BACKEND_URL;

const Categories = () => {
  const { bookCategory, navigate } = useAppContext();
  // console.log("Categories=========",bookCategory);
  
  

  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-semibold text-black-700">
        Categories
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 mt-6 gap-6">
        {bookCategory.map((category, index) => (
          <div
            key={index}
            className="group  rounded-lg cursor-pointer p-4 bg-white flex flex-col justify-center items-center shadow-md transition-all duration-300 border-2 border-transparent hover:bg-green-100 hover:shadow-xl"
            onClick={() => {
              navigate(`/books/${category.catUrl}/${category.id}`);
              scrollTo(0, 0);
            }}
          >
            <div className="rounded-full flex items-center justify-center transition">
              <img
                src={`${baseURL}${category.catImage}`}
                alt={category.catName}
                className="w-50 h-50 object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-800 group-hover:text-green-700">
              {category.catName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
