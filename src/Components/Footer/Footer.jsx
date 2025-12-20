import React from 'react'

import {
  Facebook,
  Linkedin,
  Instagram,
  
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-gray-300 pt-14 pb-8">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            Freelance Marketplace
          </h2>
          <p className="text-sm leading-relaxed">
            Freelance Marketplace is a reliable freelance marketplace where employers
            and freelancers connect, collaborate, and grow together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">Home</a>
            </li>
            <li>
              <a href="/all-jobs" className="hover:text-white">All Jobs</a>
            </li>
            <li>
              <a href="/add-job" className="hover:text-white">Add a Job</a>
            </li>
            <li>
              <a href="/my-accepted-tasks" className="hover:text-white">
                My Accepted Tasks
              </a>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Job Categories
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Digital Marketing</li>
            <li>Graphic Design</li>
            <li>Content Writing</li>
            <li>Video Editing</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>
          {/* <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-indigo-400" />
              support@freelancemp.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-indigo-400" />
              +880 1234 567890
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-indigo-400" />
              Bangladesh
            </li>
          </ul> */}
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">
              <Facebook />
            </a>
           
            <a href="#" className="hover:text-white">
              <Linkedin />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6">
        <div className="max-w-6xl mx-auto items-center justify-center">

          <p className="text-sm text-center">
            © {new Date().getFullYear()} Freelance Marketplace. All rights reserved.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
