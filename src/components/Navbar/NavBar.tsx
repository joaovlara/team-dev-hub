"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 text-white transition-colors duration-300 ${
        scrolled ? "bg-gradient-to-b from-black/80 to-transparent" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-6">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/images/logo.png" alt="Logo" width={50} height={100} />
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/about" className="hover:text-gray-300">
            Sobre
          </Link>
          <Link href="/equipe" className="hover:text-gray-300">
            Equipe
          </Link>
          <Link href="/publicador" className="hover:text-gray-300">
            Publicador
          </Link>
        </div>
      </nav>
    </header>
  );
}