import React from 'react';

const Quotes = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-start p-4 md:p-10 bg-gray-50 gap-y-6 md:gap-x-8 min-h-screen">
      
      {/* Left Section: Image */}
      <div className="w-full md:w-1/2 flex justify-center items-start md:justify-start mt-6 md:mt-0">
        <img
          src="map.png"
          alt="Contact Us"
          className="w-full object-cover rounded-lg shadow-lg"
        />
      </div>
      
      {/* Right Section: Form Card */}
      <div className="w-full md:w-1/2 lg:max-w-xl bg-white p-6 md:p-8 rounded-lg shadow-lg mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-center md:text-left text-[#061C3D]">Write down your Quote here ...</h2>
        <form className="space-y-4">
          
          {/* Name and Email Fields Side by Side */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1">
              <label htmlFor="name" className="font-lexend font-normal text-[var(--Gray-900,#061C3D)]">Name</label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base p-2 text-[#838E9E] font-light"
                placeholder="Your Name"
              />
            </div>
            
            <div className="flex-1">
              <label htmlFor="email" className="font-lexend font-normal text-[var(--Gray-900,#061C3D)]">Email</label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base p-2 text-[#838E9E] font-light"
                placeholder="Your Email"
              />
            </div>
          </div>

          {/* Company Name Field */}
          <div>
            <label htmlFor="company" className="font-lexend font-normal text-[var(--Gray-900,#061C3D)]">Company Name</label>
            <input
              type="text"
              id="company"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base p-2 text-[#838E9E] font-light"
              placeholder="Your Company Name"
            />
          </div>
          
          {/* Product Field */}
          <div>
            <label htmlFor="product" className="font-lexend font-normal text-[var(--Gray-900,#061C3D)]">Product</label>
            <input
              type="text"
              id="product"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base p-2"
              placeholder="Product Name"
            />
          </div>
          
          {/* Message Field */}
          <div>
            <label htmlFor="message" className="font-lexend font-normal text-[var(--Gray-900,#061C3D)]">Message</label>
            <textarea
              id="message"
              rows={4}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-base p-2 text-[#838E9E] font-light"
              placeholder="Your Message"
            ></textarea>
          </div>
          
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#37AE37] text-white py-2 px-4 rounded-md font-semibold shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Request A Quote
          </button>
        </form>
      </div>
      
    </section>
  );
};

export default Quotes;
