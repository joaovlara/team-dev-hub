'use client';

import Link from 'next/link';
import { texts } from '@/data/texts';
import Image from 'next/image';


export default function HeroSection() {

  return (
    <section className="flex h-[70vh] relative w-full items-center justify-center text-white">
      <Image
        src="/images/background-hero.jpg"
        alt="Imagem de fundo Hero"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 via-gray-900/60 to-black" />
      <div className='z-10 flex flex-col md:flex-row items-center justify-center p-4 text-center md:text-left'>
        <div className='mb-4 md:mb-0 md:mr-10'>
          <img src="/images/logo.png" alt="Logo" className='opacity-50 w-32 md:w-48' />
        </div>

        <div className='flex flex-col max-w-xl'>
          <div className="ml-4 space-y-2">
            <h1 className="text-4xl md:text-5xl font-bold">
              {texts.heroSection.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400">
              {texts.heroSection.subtitle}
            </p>
            <Link href="/contact" passHref>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 transform hover:scale-105">
                button
              </button>
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
}