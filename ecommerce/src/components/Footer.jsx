import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
} from "lucide-react"; // or use any icon library you prefer

const Footer = () => {
  const quickLinks = ["Home", "Shop", "About", "Contact"];
  const helpLinks = ["Payment Options", "Returns", "Privacy Policies", "Terms of Service"];

  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold text-dark-gray font-playfair">Furniro</span>
            </div>
            <p className="text-secondary-600">
              400 University Drive Suite 200<br />
              Coral Gables, FL 33134 USA
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook" className="text-secondary-600 hover:text-primary-500"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram" className="text-secondary-600 hover:text-primary-500"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter" className="text-secondary-600 hover:text-primary-500"><Twitter size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-secondary-600 hover:text-primary-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Help</h3>
            <ul className="space-y-3">
              {helpLinks.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-secondary-600 hover:text-primary-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-dark-gray mb-4">Subscribe to our Newsletter</h3>
            <form className="flex flex-col space-y-3" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="flex">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border-b border-gray-300 focus:border-primary-500 focus:outline-none bg-transparent"
                  required
                />
                <button
                  type="submit"
                  className="ml-2 px-4 py-2 text-white bg-primary-500 hover:bg-primary-600 transition-colors font-medium"
                >
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-secondary-600">
                Stay updated with our latest products and offers.
              </p>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 border-t border-gray-200 text-center text-sm text-secondary-600">
          <p>© {new Date().getFullYear()} Furniro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
