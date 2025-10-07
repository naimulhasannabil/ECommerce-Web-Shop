import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Contact Header */}
      <div className="bg-cream py-12 sm:py-16 px-4">
        <div className="container-custom text-center">
          <h1 className="text-3xl sm:text-5xl font-bold text-dark-gray font-playfair mb-4">
            Contact Us
          </h1>
          <p className="text-secondary-600 max-w-2xl mx-auto text-sm sm:text-base">
            Get in touch with us. We'd love to hear from you.
          </p>
        </div>
      </div>

      <div className="container-custom py-12 sm:py-16 px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-gray font-playfair mb-4 sm:mb-6">
                Get In Touch
              </h2>
              <p className="text-secondary-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                Have a question about our products or need help with your order? We're here to help! 
                Reach out to us through any of the channels below, and we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-gray mb-1">Address</h3>
                  <p className="text-secondary-600 text-sm sm:text-base">
                    400 University Drive Suite 200<br />
                    Coral Gables, FL 33134 USA
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-gray mb-1">Phone</h3>
                  <p className="text-secondary-600 text-sm sm:text-base">
                    Mobile: +(84) 546-6789<br />
                    Hotline: +(84) 456-6789
                  </p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-gray mb-1">Working Time</h3>
                  <p className="text-secondary-600 text-sm sm:text-base">
                    Monday-Friday: 9:00 - 22:00<br />
                    Saturday-Sunday: 9:00 - 21:00
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-dark-gray mb-4">Follow Us</h3>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                {/* social icons unchanged */}
                {/** ... your SVG icons remain exactly the same */}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-light-gray p-6 sm:p-8 rounded-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-dark-gray font-playfair mb-4 sm:mb-6">
              Send Us A Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark-gray mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-dark-gray mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-dark-gray mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="input-field"
                  placeholder="Enter subject"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-gray mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="input-field resize-none"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12 sm:mt-16 px-4 lg:px-0">
          <div className="bg-light-gray rounded-lg p-6 sm:p-8 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-dark-gray font-playfair mb-3 sm:mb-4">
              Visit Our Showroom
            </h3>
            <p className="text-secondary-600 mb-4 sm:mb-6 text-sm sm:text-base">
              Come see our furniture collection in person at our beautiful showroom
            </p>
            <div className="bg-secondary-200 h-48 sm:h-64 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto text-secondary-400 mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-secondary-600 text-sm sm:text-base">Interactive Map Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
