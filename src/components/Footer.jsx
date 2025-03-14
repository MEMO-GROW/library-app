import React from "react";
import { FaInstagram, FaInstagramSquare } from "react-icons/fa";
import { FaFacebook, FaFaceFrown, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return(
      <div>
      <footer className="bg-[#222] text-[#fafafa] py-10 px-6">
          <div className="max-w-7xl mx-auto text-center">
              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-3">
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
  
              {/* Copyright Section */}
              <div className="text-center text-sm mt-10 border-t border-gray-600 pt-4">
                  © 2025 MEMO. All rights reserved.
              </div>
          </div>
      </footer>
  </div>
  

    )
};

export default Footer;