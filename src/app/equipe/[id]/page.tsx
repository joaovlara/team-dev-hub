'use client'

import { members } from "@/data/members";
import { techColorMap } from "@/data/colors";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MemberPage({ params }: { params: { id: string } }) {
  const memberId = parseInt(params.id);
  const memberIndex = members.findIndex((m) => m.id === memberId);

  if (memberIndex === -1) {
    notFound();
  }

  const member = members[memberIndex];

  const previousMemberId = memberIndex > 0 ? members[memberIndex - 1].id : null;
  const nextMemberId = memberIndex < members.length - 1 ? members[memberIndex + 1].id : null;

  return (
    <section className="bg-stone-900 min-h-screen flex justify-center items-center p-4">
      <div className="flex items-center justify-center w-full max-w-6xl">
        <Link href={previousMemberId ? `/equipe/${previousMemberId}` : '#'} passHref>
          <ChevronLeft
            className={`w-12 h-12 text-white 
              ${previousMemberId !== null ? 'cursor-pointer hover:text-gray-300 transition-colors' : 'invisible'}`}
          />
        </Link>

        <div className="flex flex-col md:flex-row bg-stone-1000 shadow-lg rounded-lg border-4 border-stone-700 h-auto md:h-[60vh] w-full max-w-4xl p-8 mx-4">
          <div className="flex flex-col items-center justify-center md:items-start md:w-1/3 pr-8">
            <Image
              src={member.image}
              alt={member.name}
              width={250}
              height={250}
              className="rounded-full object-cover w-48 h-48 md:w-full md:h-auto"
            />
            <div className="text-center md:text-left mt-4">
              <h1 className="text-3xl font-bold text-stone-100">{member.name}</h1>
              <p className="text-lg text-stone-300">{member.role}</p>
            </div>
          </div>
          <div className="flex flex-col justify-center md:w-2/3 mt-8 md:mt-0">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-stone-100 border-b-2 border-stone-600 pb-2 mb-4">Sobre</h2>
              <p className="text-stone-300 leading-relaxed">{member.description}</p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-stone-100 border-b-2 border-stone-600 pb-2 mb-4">Tecnologias</h2>
              <div className="flex flex-wrap gap-2">
                {member.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-3 py-1 rounded-full text-sm font-medium ${techColorMap[tech] || 'bg-gray-400 text-white'}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Link href={nextMemberId ? `/equipe/${nextMemberId}` : '#'} passHref>
          <ChevronRight
            className={`w-12 h-12 text-white ${nextMemberId !== null ? 'cursor-pointer hover:text-gray-300 transition-colors' : 'invisible'}`}
          />
        </Link>
      </div>
    </section>
  );
}
