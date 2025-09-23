import React from "react";
import { 
  Database, 
  Brain, 
  Cloud, 
  Search, 
  Layers 
} from "lucide-react";

// About page for the Heroku Back-to-School AI Challenge entry
// Converted from Tailwind to Bootstrap classes

const TechPill = ({ label, icon: Icon }) => (
  <span className="badge bg-light text-dark border me-2 mb-2 px-3 py-2 d-inline-flex align-items-center">
    {Icon && <Icon size={16} className="me-2" />}
    {label}
  </span>
);

export default function AboutUs() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-8">
          {/* Header / Hero */}
          <section className="mb-5">
            <h1 className="display-4 fw-bold mb-4">About This App</h1>
            <p className="lead text-muted">
              This project is our submission to the{' '}
              <a
                href="https://dev.to/devteam/join-the-heroku-back-to-school-ai-challenge-3000-in-prizes-just-for-students-2me4"
                className="text-decoration-underline"
                target="_blank" 
                rel="noreferrer"
              >
                Heroku Back‑to‑School AI Challenge
              </a>
              . The goal is to build a helpful campus assistant that can answer questions with accurate, sourced information.
            </p>
          </section>

          {/* What it does */}
          <section className="mb-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h2 className="h3 fw-semibold mb-3">What it does</h2>
                <p className="text-muted mb-3">
                  The app provides conversational answers to common student questions by combining
                  a large language model with documents relevant to AB Tech. We use
                  Retrieval‑Augmented Generation (RAG) so responses are grounded in the latest
                  indexed sources rather than model guesswork.
                </p>
                <ul className="list-unstyled ms-3">
                  <li className="mb-3">
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span className="fw-medium">Indexed sources:</span> the AB Tech website
                    (abtech.edu) and the official College Handbook (PDF). These are chunked,
                    embedded, and kept searchable for the assistant.
                  </li>
                  <li>
                    <i className="bi bi-check-circle-fill text-success me-2"></i>
                    <span className="fw-medium">Grounded answers:</span> the assistant looks up
                    relevant passages first, then asks the model to formulate a concise answer
                    based on those passages.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Tech stack */}
          <section className="mb-5">
            <h2 className="h3 fw-semibold mb-3">Tech stack</h2>
            <div className="mb-3">
              <TechPill label="React" icon={Layers} />
              <TechPill label="RAG (Retrieval‑Augmented Generation)" icon={Brain} />
              <TechPill label="Claude AI (API)" icon={Brain} />
              <TechPill label="Heroku Vector Database" icon={Database} />
              <TechPill label="Embeddings for semantic search" icon={Search} />
            </div>
            <p className="text-muted">
              React powers the frontend experience. We use <span className="fw-medium">Claude AI</span>
              {' '}for language understanding and generation, while <span className="fw-medium">Heroku Vector
              Database</span> stores embeddings that enable fast, semantic retrieval of relevant content
              during chat. The combination is what makes RAG work.
            </p>
          </section>

          {/* How it works at a glance */}
          <section className="mb-5">
            <div className="card shadow-sm">
              <div className="card-body p-4">
                <h3 className="h4 fw-semibold mb-3">How it works (at a glance)</h3>
                <ol className="ms-3">
                  <li className="mb-2">We crawl and parse AB Tech resources (website + handbook).</li>
                  <li className="mb-2">Content is chunked and embedded, then stored in Heroku Vector DB.</li>
                  <li className="mb-2">On each question, we retrieve the most relevant chunks.</li>
                  <li>Claude synthesizes a clear answer grounded in those chunks.</li>
                </ol>
              </div>
            </div>
          </section>

          {/* Notes / Attribution */}
          <section className="text-muted small">
            <p className="mb-0">
              <span className="fw-medium">Disclaimer:</span> This project is an educational
              prototype for the Heroku challenge and is not officially affiliated with A‑B Tech.
              Source coverage may evolve as we iterate.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
