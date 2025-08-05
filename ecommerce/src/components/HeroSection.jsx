import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-cream min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Furniture Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-primary-500 font-medium text-lg tracking-wide uppercase">
                New Arrival
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-primary-500 font-playfair leading-tight">
                Discover Our<br />
                New Collection
              </h1>
              <p className="text-dark-gray text-lg leading-relaxed max-w-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
              </p>
            </div>
            <button className="btn-primary text-lg px-12 py-4 font-semibold">
              BUY NOW
            </button>
          </div>

          {/* Right Content - Floating Card */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="bg-white rounded-lg shadow-2xl p-8 max-w-sm w-full float-animation">
              <div className="space-y-6">
                <div className="aspect-w-16 aspect-h-12 rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Inner Peace Bedroom"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-secondary-600 font-medium">01 — Bed Room</span>
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                      <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                      <div className="w-2 h-2 bg-secondary-300 rounded-full"></div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-dark-gray font-playfair">
                    Inner Peace
                  </h3>
                  <button className="flex items-center text-primary-500 font-medium hover:text-primary-600 transition-colors group">
                    <span className="mr-2">View Details</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-primary-100 rounded-full opacity-50 animate-bounce-gentle"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-primary-200 rounded-full opacity-30 animate-bounce-gentle animation-delay-400"></div>
    </section>
  );
};

export default HeroSection;