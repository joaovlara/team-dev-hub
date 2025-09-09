'use client'

import { members } from "@/data/members";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function MemberCard({ params }: { params: { id: string } }) {
  const memberId = parseInt(params.id);
  const memberIndex = members.findIndex((m) => m.id === memberId);

  if (memberIndex === -1) {
    notFound();
  }

  const member = members[memberIndex];

  const previousMemberId = memberIndex > 0 ? members[memberIndex - 1].id : null;
  const nextMemberId = memberIndex < members.length - 1 ? members[memberIndex + 1].id : null;

  return (
    <section className="bg-stone-900 h-screen flex justify-center items-center">


      <div className="flex items-center justify-center">
        <Link href={previousMemberId ? `/equipe/${previousMemberId}` : '#'} passHref>
          <ChevronLeft
            className={`w-12 h-12 text-white 
              ${previousMemberId !== null ? 'cursor-pointer hover:text-gray-300' : 'invisible'}`}
          />
        </Link>

        <div className="flex bg-white shadow-md h-[50vh] w-[80vw] p-8 justify-between text-start">
          <div className="flex flex-col ">
            <Image  
              src={member.image}
              alt={member.name}
              width={150}
              height={150}
            />
            <div>
              <h1 className="">{member.name}</h1>
              <p className="">{member.role}</p>
            </div>
          </div>
          <p className="">{member.description}</p>
        </div>

        <Link href={nextMemberId ? `/equipe/${nextMemberId}` : '#'} passHref>
          <ChevronRight
            className={`w-12 h-12 text-white ${nextMemberId !== null ? 'cursor-pointer hover:text-gray-300' : 'invisible'}`}
          />
        </Link>
      </div>
    </section>
  );
}
