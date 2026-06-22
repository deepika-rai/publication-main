import { assets, features } from '../assets/assets'

const BottomBanner = () => {
  return (
    <div className='mt-16'>
      <p className='text-2xl md:text-3xl font-semibold text-black-700'>Why Choose Us?</p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-7xl mt-4'>
          {features.map((feature, index) => (
            <div
              key={index}
              className='bg-white rounded-xl p-6 shadow-md border-2 border-transparent hover:bg-green-100 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center'
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className='w-10 h-10 mb-4'
              />
              <h3 className='text-lg font-semibold mb-1'>{feature.title}</h3>
              <p className='text-sm text-gray-500'>{feature.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default BottomBanner
