"use client";
//No idea what to do, when these are depreciated now... Maybe switch to another icon library
import { Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-10 flex flex-col items-center gap-5 text-sm">
      {/* Social Icons */}
      <div className="flex gap-6">
        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
          <Instagram className="h-5 w-5 cursor-pointer hover:opacity-70 transition" />
        </Link>

        <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <Linkedin className="h-5 w-5 cursor-pointer hover:opacity-70 transition" />
        </Link>

        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
          <Twitter className="h-5 w-5 cursor-pointer hover:opacity-70 transition" />
        </Link>
      </div>

      {/* Menu Links */}
      <nav className="flex gap-8">
        <Link href="/" className="hover:text-gray-400 transition">
          Home
        </Link>
        <Link href="/about" className="hover:text-gray-400 transition">
          About
        </Link>
        <Link href="/events" className="hover:text-gray-400 transition">
          Event Calendar
        </Link>
        <Link href="/contact" className="hover:text-gray-400 transition">
          Contact
        </Link>
      </nav>

      {/* Copyright */}
      <p className="text-xs opacity-60">
        Copyright © 2025, Developer Students Club
      </p>
    </footer>
  );
};

export default Footer;
