'use client';

import { members } from "@/data/members";
import { techColorMap } from "@/data/colors";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CollapsibleContact from "@/components/CollapsibleContact/CollapsibleContact";

export default function MemberCard({ params }: { params: { id: string } }) {
  const memberId = parseInt(params.id);
  const memberIndex = members.findIndex((m) => m.id === memberId);

  if (memberIndex === -1) {
    return <div>Membro não encontrado</div>;
  }

  const member = members[memberIndex];

  const prevMemberId = memberIndex > 0 ? members[memberIndex - 1].id : members[members.length - 1].id;
  const nextMemberId = memberIndex < members.length - 1 ? members[memberIndex + 1].id : members[0].id;

  return (
    <section className="min-h-screen bg-stone-900 text-amber-5 flex flex-col justify-center items-center text-amber-100 p-4">
      <div className="flex flex-col md:flex-row items-center justify-center w-full">

        {/* Navegação Esquerda (visível em telas maiores) */}
        <Link href={`/equipe/${prevMemberId}`} className="icon-navigation hidden md:block">
          <ChevronLeft size={48} />
        </Link>

        <div className="flex flex-col md:flex-row w-full max-w-4xl lg:w-[75vw] xl:w-[65vw] shadow-md p-4 sm:p-8 border-2 border-stone-500 text-amber-50 my-16">
          <div className="flex flex-col w-full md:w-1/3 items-center mb-6 md:mb-0">
            <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 -mt-16 md:-mt-24">
              <Image
                src="/images/image.jpg"
                alt="Nome do Membro"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-stone-600"
              />
            </div>
            <div className="space-y-2 flex flex-col w-full text-center md:text-left mt-4">
              <h1 className="text-2xl lg:text-3xl font-bold">{member.name}</h1>
              <p className={`text-md lg:text-lg md:pl-8 ${member.color}`}>{member.role}</p>
            </div>
          </div>

          {/* Descrição */}
          <div className="flex flex-col w-full md:w-2/3 space-y-6 md:pl-8">

            <div className="separator">
              <h2 className="card-title">Sobre</h2>
              <p className="text-justify text-stone-400">{member.description}</p>
            </div>

            <div className="separator">
              <h2 className="card-title">Tecnologias:</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {member.technologies.map((tech) => (
                  <span key={tech}
                    className={`budget ${techColorMap[tech]}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {member.contacts && (
              <div className="separator">
                <CollapsibleContact contacts={member.contacts} />
              </div>
            )}

          </div>
        </div>

        {/* Navegação Direita (visível em telas maiores) */}
        <Link href={`/equipe/${nextMemberId}`} className="icon-navigation hidden md:block">
          <ChevronRight size={48} />
        </Link>
      </div>

      {/* Navegação (visível apenas em mobile) */}
      <div className="flex md:hidden justify-between w-full max-w-xs mt-4">
        <Link href={`/equipe/${prevMemberId}`} className="icon-navigation">
          <ChevronLeft size={48} />
        </Link>
        <Link href={`/equipe/${nextMemberId}`} className="icon-navigation">
          <ChevronRight size={48} />
        </Link>
      </div>
    </section>
  )
}