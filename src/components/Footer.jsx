import React from "react";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaFaceFrown, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return(
        <div>
            <footer className="bg-[#222] text-[#fafafa] py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-semibold">BookWormHub</h2>
          <p className="mt-2 text-sm leading-relaxed">
            A platform for readers to discover, organize, and enjoy books
          </p>
        </div>

        {/* About & Information */}
        <div>
          <h3 className="font-medium text-lg">About & Information</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400 transition">About Us</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">How It Works</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Blog</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Careers</a></li>
          </ul>
        </div>

        {/* User Resources */}
        <div>
          <h3 className="font-medium text-lg">User Resources</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-400 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Contact Us</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Community Guidelines</a></li>
            <li><a href="#" className="hover:text-gray-400 transition">Sitemap</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-medium text-lg">Follow Us On</h3>
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="#" className="p-2 bg-[#fafafa] text-[#222] rounded-full hover:bg-[#cbb38c] transition">
              <FaFacebook/>
            </a>
            <a href="#" className="p-2 bg-[#fafafa] text-[#222] rounded-full hover:bg-[#cbb38c] transition">
              <FaXTwitter/>
            </a>
            <a href="#" className="p-2 bg-[#fafafa] text-[#222] rounded-full hover:bg-[#cbb38c] transition">
              <FaInstagramSquare/>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-10 border-t border-gray-600 pt-4">
        © 2025 MEMO. All rights reserved.
      </div>
    </footer>
        </div>

    )
};

export default Footer;