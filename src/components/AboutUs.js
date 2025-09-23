import React from "react";

// About page for the Heroku Back-to-School AI Challenge entry
// Tailwind CSS classes are used for styling. If Tailwind isn't set up,
// you can replace the className strings with your preferred styling.

const TechPill = ({ label }) => (
  <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium">
    {label}
  </span>
);

export default function AboutUs() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      {/* Header / Hero */}
      <section className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">About This App</h1>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">
          This project is our submission to the <a
            href="https://dev.to/devteam/join-the-heroku-back-to-school-ai-challenge-3000-in-prizes-just-for-students-2me4"
            className="underline decoration-2 underline-offset-4 hover:opacity-80"
            target="_blank" rel="noreferrer"
          >Heroku Back‑to‑School AI Challenge</a>. The goal is to build a helpful
          campus assistant that can answer questions with accurate, sourced information.
        </p>
      </section>

      {/* What it does */}
      <section className="mb-10 rounded-2xl border p-6 shadow-sm">
        <h2 className="text-2xl font-semibold">What it does</h2>
        <p className="mt-3 text-gray-700">
          The app provides conversational answers to common student questions by combining
          a large language model with documents relevant to AB Tech. We use
          Retrieval‑Augmented Generation (RAG) so responses are grounded in the latest
          indexed sources rather than model guesswork.
        </p>
        <ul className="mt-4 list-disc pl-6 text-gray-800 space-y-2">
          <li>
            <span className="font-medium">Indexed sources:</span> the AB Tech website
            (abtech.edu) and the official College Handbook (PDF). These are chunked,
            embedded, and kept searchable for the assistant.
          </li>
          <li>
            <span className="font-medium">Grounded answers:</span> the assistant looks up
            relevant passages first, then asks the model to formulate a concise answer
            based on those passages.
          </li>
        </ul>
      </section>

      {/* Tech stack */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold">Tech stack</h2>
        <div className="mt-4 flex flex-wrap gap-2">
          <TechPill label="React" />
          <TechPill label="RAG (Retrieval‑Augmented Generation)" />
          <TechPill label="Claude AI (API)" />
          <TechPill label="Heroku Vector Database" />
          <TechPill label="Embeddings for semantic search" />
        </div>
        <p className="mt-4 text-gray-700">
          React powers the frontend experience. We use <span className="font-medium">Claude AI</span>
          for language understanding and generation, while <span className="font-medium">Heroku Vector
          Database</span> stores embeddings that enable fast, semantic retrieval of relevant content
          during chat. The combination is what makes RAG work.
        </p>
      </section>

      {/* How it works at a glance */}
      <section className="mb-10 rounded-2xl border p-6 shadow-sm">
        <h3 className="text-xl font-semibold">How it works (at a glance)</h3>
        <ol className="mt-3 list-decimal pl-6 space-y-2 text-gray-800">
          <li>We crawl and parse AB Tech resources (website + handbook).</li>
          <li>Content is chunked and embedded, then stored in Heroku Vector DB.</li>
          <li>On each question, we retrieve the most relevant chunks.</li>
          <li>Claude synthesizes a clear answer grounded in those chunks.</li>
        </ol>
      </section>

      {/* Notes / Attribution */}
      <section className="text-sm text-gray-600">
        <p>
          <span className="font-medium">Disclaimer:</span> This project is an educational
          prototype for the Heroku challenge and is not officially affiliated with A‑B Tech.
          Source coverage may evolve as we iterate.
        </p>
      </section>
    </main>
  );
}
