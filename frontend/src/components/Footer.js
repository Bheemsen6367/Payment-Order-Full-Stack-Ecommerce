import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-10 pb-4 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: Shop Left | Help Center | Follow Us Right */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 mb-6">

          {/* Shop Links */}
          <div>
            <h2 className="text-lg font-semibold mb-3">Shop</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/category/men" className="hover:underline">Men</Link></li>
              <li><Link to="/category/shirt" className="hover:underline">Shirt</Link></li>
              <li><Link to="/category/home" className="hover:underline">Home</Link></li>
              <li><Link to="/category/pants" className="hover:underline">Pant</Link></li>
            </ul>
          </div>

          {/* Help Section (center) */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold mb-3">Help & Support</h2>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link to="/return-policy" className="hover:underline">Return & Exchange Policy</Link></li>
              <li><Link to="/track-order" className="hover:underline">Track Order</Link></li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div className="text-center  md:text-right">
            <h2 className="text-lg font-semibold mb-3">Follow Us</h2>
            <div className="flex flex- items-center md:items-end gap-3 text-xl">
              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                 className="hover:text-pink-500 hover:scale-110 transition-transform">
                <FaInstagram />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                 className="hover:text-blue-500 hover:scale-110 transition-transform">
                <FaFacebook />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer"
                 className="hover:text-sky-400 hover:scale-110 transition-transform">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer"
                 className="hover:text-blue-300 hover:scale-110 transition-transform">
                <FaLinkedin />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer"
                 className="hover:text-red-500 hover:scale-110 transition-transform">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center text-sm text-gray-300 mb-2">
          <p>Email: <a href="mailto:brathi08@gmail.com" className="hover:underline">brathi08@gmail.com</a></p>
          <p>Phone: <a href="tel:+917474747747" className="hover:underline">7474747747</a></p>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs text-gray-500 border-t pt-2">
          &copy; {new Date().getFullYear()} BabaMart. All Rights Reserved.
          © 2025 
Made in India, for the World 🌍
        </div>

      </div>
    </footer>
  );
};

export default Footer;
