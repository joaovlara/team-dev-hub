import { FaJira, FaBitbucket, FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black md-h-[30vh] text-gray-300">
      <div className="flex justify-center items-center gap-5 p-10 border-b border-stone-700">
        <FaJira size={45} className="text-white" />
        <FaBitbucket size={45} className="text-white" />
        <MdEmail size={45} className="text-white" />
        <FaUser size={45} className="text-white" />
      </div>
      <div className="flex flex-col md:flex-row justify-around items-center w-full p-3 gap-3 border-b border-stone-800">
        <div className="flex">
          <Image src="/images/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="flex flex-col text-center">
          <Link href="/about">Sobre</Link>
          <Link href="/equipe">Equipe</Link>
          <Link href="/publicador">Publicador</Link>
        </div>
      </div>
      <p className="text-center p-5 w-full">
        © 2024 Bom Jesus | Developed by João Vitor de Lara
      </p>
    </footer>
  );
}