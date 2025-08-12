import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* About Header */}
      <div className="bg-cream py-12 sm:py-16">
        <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-dark-gray font-playfair mb-4">
            About Furniro
          </h1>
          <p className="text-secondary-600 max-w-2xl mx-auto px-2">
            Crafting beautiful spaces with premium furniture since 2010
          </p>
        </div>
      </div>

      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Our Story */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray font-playfair">
              Our Story
            </h2>
            <p className="text-secondary-600 leading-relaxed">
              Founded in 2010, Furniro began as a small family business with a
              simple mission: to create beautiful, functional furniture that
              transforms houses into homes. What started in a modest workshop
              has grown into a trusted name in premium furniture design.
            </p>
            <p className="text-secondary-600 leading-relaxed">
              We believe that furniture is more than just functional pieces –
              it's about creating spaces where memories are made, where families
              gather, and where life unfolds. Every piece we craft tells a story
              of quality, craftsmanship, and attention to detail.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Our Workshop"
              className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray font-playfair mb-4">
              Our Values
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto px-2">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-gray font-playfair">
                Quality First
              </h3>
              <p className="text-secondary-600 px-2 sm:px-0">
                We use only the finest materials and time-tested techniques to
                ensure every piece meets our high standards.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-gray font-playfair">
                Customer Love
              </h3>
              <p className="text-secondary-600 px-2 sm:px-0">
                Your satisfaction is our priority. We're here to help you create
                the perfect space for your lifestyle.
              </p>
            </div>

            <div className="text-center space-y-4 sm:col-span-2 md:col-span-1">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto">
                <svg
                  className="w-8 h-8 text-primary-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-dark-gray font-playfair">
                Sustainability
              </h3>
              <p className="text-secondary-600 px-2 sm:px-0">
                We're committed to responsible sourcing and eco-friendly
                practices that protect our planet.
              </p>
            </div>
          </div>
        </div>

        {/* Team */}
        <div className="mb-16 lg:mb-20">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-dark-gray font-playfair mb-4">
              Meet Our Team
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto px-2">
              The passionate people behind Furniro
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[{
              name: "Sarah Johnson",
              role: "Founder & CEO",
              img: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300",
              desc: "With 15 years in furniture design, Sarah leads our vision of creating timeless pieces."
            },{
              name: "Michael Chen",
              role: "Head of Design",
              img: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300",
              desc: "Michael brings innovative design concepts that blend modern aesthetics with functionality."
            },{
              name: "Emily Rodriguez",
              role: "Quality Manager",
              img: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
              desc: "Emily ensures every piece meets our rigorous quality standards before reaching customers."
            }].map((member, i) => (
              <div key={i} className="text-center space-y-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-dark-gray font-playfair">{member.name}</h3>
                  <p className="text-primary-500 font-medium">{member.role}</p>
                  <p className="text-secondary-600 text-sm mt-2 px-3">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-light-gray rounded-lg p-8 sm:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {[
              { value: "10K+", label: "Happy Customers" },
              { value: "500+", label: "Products" },
              { value: "50+", label: "Cities" },
              { value: "13+", label: "Years Experience" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-2xl sm:text-4xl font-bold text-primary-500 font-playfair mb-2">{stat.value}</div>
                <div className="text-secondary-600 text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
