import { articles } from "../data/articlesData";

export default function ArticlesPage() {
   return (
    <main className="h-auto flex flex-col items-center bg-[#f5f4fc] py-[10.2em] px-[3.5em]">
    <header className="relative text-center mt-12 mb-[3.5em]">
      <h1 className="text-4xl font-bold text-[#474747] mt-[0.67em]">
        <span className="opacity-70">/</span>
        articles
        <span className="opacity-70">.</span>
        </h1>
    </header>
    <section className="w-full max-w-4xl space-y-8">
        {articles.map((article) => (
          <div
            key={article.id}
            className="border-b border-gray-300 pb-6 mb-6 last:border-b-0"
          >
            <p className="text-sm text-gray-500 mb-2">{article.date}</p>
            <h2 className="text-2xl font-bold text-[#474747]">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {article.title}
              </a>
            </h2>
            <p className="text-gray-600 mt-2">{article.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
}