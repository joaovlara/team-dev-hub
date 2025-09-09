import { FaJira, FaBitbucket, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="flex justify-center items-center gap-5 p-10 separator">
        <FaJira size={45} className="footer-icon" />
        <FaBitbucket size={45} className="footer-icon" />
        <MdEmail size={45} className="footer-icon" />
        <FaUser size={45} className="footer-icon" />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full p-3 gap-3 separator">
        <div className="flex">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} className="opacity-70"/>
        </div>
        <div className="flex flex-col text-center">
          <Link href="/about" className="link">Sobre</Link>
          <Link href="/equipe" className="link">Equipe</Link>
          <Link href="/publicador" className="link">Publicador</Link>
        </div>
      </div>
      <p className="text-center copyright p-5 w-full">
        © 2024 Bom Jesus | Developed by João Lara
      </p>
    </footer>
  );
}