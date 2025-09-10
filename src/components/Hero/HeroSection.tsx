'use client';

import Link from 'next/link';
import { texts } from '@/data/texts';
import Image from 'next/image';


export default function HeroSection() {

  return (
    <section className="flex h-screen relative w-full items-center justify-center">
      <Image
        src="/images/background-hero.jpg"
        alt="Imagem de fundo Hero"
        fill
        className="object-cover z-0"
        priority
      />
      <div className="gradient" /> {/* Gradient overlay */}

      <div className='z-10 coluna md:flex-row w-full justify-center items-center '>
        <div className='flex justify-center '>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={300}
            height={300}
            className='opacity-50'
          />
        </div>

        <div className='flex coluna w-full md:w-1/2 justify-center items-center text-center md:text-left mt-4 md:mt-0'>
          <div className="space-y-6 p-3">
            <h1 className="title">
              {texts.heroSection.title}
            </h1>
            <p className="subtitle">
              {texts.heroSection.subtitle}
            </p>
            <Link href="/equipe" passHref className="btn">Ver Equipe</Link>
          </div>
        </div>
      </div>

    </section>
  );
}