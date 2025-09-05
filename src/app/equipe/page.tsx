import { members } from "@/data/members";
import Link from "next/link";

export default function EquipePage() {
  return (
    <section className="bg-stone-900 py-24 sm:py-32 h-[80vh] flex flex-col justify-center ">
      <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-white sm:text-4xl">
            Conheça nossa equipe
          </h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            Somos um grupo dinâmico de indivíduos apaixonados pelo que fazemos e dedicados a entregar os melhores resultados para nossos clientes.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {members.map((member) => (
            <li key={member.id}>
              <Link href={`/equipe/${member.id}`}>
                <div className="flex items-center gap-x-6">
                  <img
                    alt={member.name}
                    src={member.image}
                    className="size-16 rounded-full outline-1 -outline-offset-1 outline-white/10"
                  />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-white">{member.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-400">{member.role}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}