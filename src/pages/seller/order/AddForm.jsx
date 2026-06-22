import React, { useState } from 'react'
import { assets, categories } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const AddBook = () => {
    const [files, setFiles] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [offerPrice, setOfferPrice] = useState('');

    const { axios } = useAppContext();

    const onSubmitHandler = async (event) => {
        try {
            event.preventDefault();

            const bookData = {
                name,
                description: description.split('\n'),
                category,
                price,
                offerPrice
            }

            const formData = new FormData();
            formData.append('bookData', JSON.stringify(bookData));
            for (let i = 0; i < files.length; i++) {
                formData.append('images', files[i])
            }

            const { data } = await axios.post('/api/book/add', formData)

            if (data.success) {
                toast.success(data.message);
                setName('');
                setDescription('')
                setCategory('')
                setPrice('')
                setOfferPrice('')
                setFiles([])
            } else {
                toast.error(data.message)
            }

        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div className="no-scrollbar flex-1 h-[95vh] overflow-y-scroll p-4 bg-gray-50">
            <div className="max-w-4xl mx-auto">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="p-6 border-b border-gray-200">
                        <h2 className="text-xl text-gray-800">Add New Book</h2>
                    </div>
                    
                    <form onSubmit={onSubmitHandler} className="p-6 space-y-6">
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Book Images <p className="text-xs text-gray-500 mb-2">Upload up to 4 images (First image will be the main display)</p></label>
                                
                                <div className="flex flex-wrap items-center gap-4">
                                    {Array(4).fill('').map((_, index) => (
                                        <label key={index} htmlFor={`image${index}`} className="cursor-pointer">
                                            <input 
                                                onChange={(e) => {
                                                    const updatedFiles = [...files];
                                                    updatedFiles[index] = e.target.files[0];
                                                    setFiles(updatedFiles);
                                                }}
                                                type="file" 
                                                id={`image${index}`} 
                                                className="hidden" 
                                                accept="image/*"
                                            />
                                            <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center overflow-hidden hover:border-primary transition-colors">
                                                {files[index] ? (
                                                    <img 
                                                        src={URL.createObjectURL(files[index])} 
                                                        alt="Preview" 
                                                        className="w-full h-full object-cover"
                                                    />
                                                ) : (
                                                    <div className="text-gray-400 text-center p-2">
                                                        <img src={assets.upload_area} alt="Upload" className="mx-auto w-8 h-8" />
                                                        <span className="text-xs block mt-1">Image {index + 1}</span>
                                                    </div>
                                                )}
                                            </div>
                                        </label>
                                    ))}
                                </div>
                            </div>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="book-name" className="block text-sm font-medium text-gray-700 mb-1">Book Name</label>
                                <input 
                                    onChange={(e) => setName(e.target.value)} 
                                    value={name}
                                    id="book-name" 
                                    type="text" 
                                    placeholder="Enter book name" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" 
                                    required 
                                />
                            </div>

                            
                          
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                                <select 
                                    onChange={(e) => setCategory(e.target.value)} 
                                    value={category} 
                                    id="category" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                                    required
                                >
                                    <option value="">Select a category</option>
                                    {categories.map((item, index) => (
                                        <option key={index} value={item.path}>{item.path}</option>
                                    ))}
                                </select>
                            </div>
                            </div>


                            <div>
                                <label htmlFor="book-description" className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                                <textarea 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    value={description}
                                    id="book-description" 
                                    rows={4} 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none" 
                                    placeholder="Enter book description (use new lines for bullet points)"
                                ></textarea>
                            </div>
                            

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="book-price" className="block text-sm font-medium text-gray-700 mb-1">Price (₹)</label>
                                    <input 
                                        onChange={(e) => setPrice(e.target.value)} 
                                        value={price}
                                        id="book-price" 
                                        type="number" 
                                        placeholder="0.00" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" 
                                        min="0"
                                        step="0.01"
                                        required 
                                    />
                                </div>
                                <div>
                                    <label htmlFor="offer-price" className="block text-sm font-medium text-gray-700 mb-1">Offer Price (₹)</label>
                                    <input 
                                        onChange={(e) => setOfferPrice(e.target.value)} 
                                        value={offerPrice}
                                        id="offer-price" 
                                        type="number" 
                                        placeholder="0.00" 
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition" 
                                        min="0"
                                        step="0.01"
                                        required 
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-end">
                            <button 
                                type="submit" 
                                className="px-6 py-2 bg-primary hover:bg-primary-dark text-white font-medium rounded-md shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            >
                                Add Book
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddBook