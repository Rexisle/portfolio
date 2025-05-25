'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Centered, rounded navbar container */}
      <div className="fixed top-5 left-1/2 transform -translate-x-1/2 z-50 bg-[#03001427] backdrop-blur-md shadow-lg shadow-[#2A0E61]/50 rounded-full px-6 py-2">
        <div className="hidden md:flex items-center justify-between space-x-6 text-gray-200 font-tech">
          {/* Logo */}
          <Link href="#home" className="flex items-center">
            <Image
              src="/ee.png"
              alt="Logo"
              width={50}
              height={50}
              draggable={false}
              className="cursor-pointer"
            />
          </Link>

          {/* Navigation Links */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.title}
              href={link.link}
              className="cursor-pointer hover:text-[rgb(112,66,248)] relative"
            >
              <span className="absolute inset-0 rounded-full border border-[rgba(112,66,248,0.38)] hover:shadow-[0_0_10px_rgba(112,66,248,0.8)] transition-shadow"></span>
              <span className="relative px-3 py-1">{link.title}</span>
            </Link>
          ))}

          {/* Social Icons */}
          {SOCIALS.map(({ link, name, icon: Icon }) => (
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              key={name}
            >
              <Icon className="h-5 w-5 text-white" />
            </Link>
          ))}
        </div>

        {/* Hamburger (for mobile) */}
        <div className="md:hidden flex items-center justify-between w-full">
          <Link href="#home">
            <Image
              src="/ee.png"
              alt="Logo"
              width={50}
              height={50}
              draggable={false}
              className="cursor-pointer"
            />
          </Link>
          <button
            className="text-white text-3xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-[80px] left-0 w-full bg-[#030014] p-5 flex flex-col items-center text-gray-300 md:hidden z-40">
          <div className="flex flex-col items-center gap-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="cursor-pointer hover:text-[rgb(112,66,248)] transition text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-6 mt-6">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
              >
                <Icon className="h-8 w-8 text-white" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
