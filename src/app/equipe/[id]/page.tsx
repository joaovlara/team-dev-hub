import { members } from "@/data/members";
import { techColorMap } from "@/data/colors";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";


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
    <section className="h-screen bg-stone-900 text-amber-5 flex justify-center items-center text-amber-100">

      <Link href={`/equipe/${prevMemberId}`} className="text-amber-50 hover:text-amber-200 transition-colors">
        <ChevronLeft size={48} />
      </Link>

      <div className="flex flex-col md:flex-row w-[65vw] shadow-md p-8 border border-stone-500 text-amber-50">
        <div className="flex flex-col w-1/3 items-center">
          <Image
            src="/images/image.jpg"
            alt="Nome do Membro"
            width={300}
            height={300}
            className="relative bottom-20"
          />
          <div className="space-y-2 flex flex-col w-full">
            <h1 className="text-3xl font-bold">{member.name}</h1>
            <p className="text-lg pl-8">{member.role}</p>
          </div>
        </div>

        {/* Descrição */}
        <div className="flex flex-col w-4/6 space-y-6">

          <div className="separator">
            <h2 className="text-2xl font-bold">Sobre</h2>
            <p className="text-justify text-gray-150">{member.description}</p>
          </div>

          <div className="separator">
            <h2 className="text-2xl font-bold">Tecnologias:</h2>
            {member.technologies.map((tech) => (
              <span key={tech}
                className={`inline-block px-2 py-1 rounded-full text-xs font-semibold mr-2 mb-2 ${techColorMap[tech]}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="">
            <h2 className="text-2xl font-bold">Contato:</h2>
            <p className="text-justify text-gray-150">Links para redes sociais</p>
          </div>

        </div>
      </div>
      <Link href={`/equipe/${nextMemberId}`} className="text-amber-50 hover:text-amber-200 transition-colors">
        <ChevronRight size={48} />
      </Link>

    </section>

  )
}