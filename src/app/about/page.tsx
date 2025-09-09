
import { aboutData } from "@/data/about";

export default function AboutPage() {
  return (
    <section className=" h-screen mx-auto px-4 py-8 text-white bg-stone-900 justify-center items-center flex">
      <div className="bg-gray-900 container shadow-lg rounded-lg p-6 md:p-8">
        <h1 className="text-4xl font-bold mb-6 text-white border-b border-gray-700 pb-4">
          README do Projeto
        </h1>
        <div className="space-y-8">
          {aboutData.map((section, index) => (
            <div key={index} className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-semibold text-gray-300">
                {section.title}
              </h2>
              <div
                className="text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: section.content.replace(
                    /`([^`]+)`/g,
                    '<code class="bg-gray-700 rounded-md px-2 py-1 text-sm font-mono">$1</code>'
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
