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
      className={`header ${scrolled ? "bg-gradient-to-b from-black/80 to-transparent" : "bg-transparent" }`}
    >
      <nav className="navbar-container">
        <Link href="/" className="text-2xl font-bold">
          <Image src="/images/logo.png" alt="Logo" width={50} height={100} className="opacity-70"/>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/about" className="link">
            Sobre
          </Link>
          <Link href="/equipe" className="link">
            Equipe
          </Link>
          <Link href="/publicador" className="link">
            Publicador
          </Link>
        </div>
      </nav>
    </header> 
  );
}