import React from "react";
import {
  Database,
  Brain,
  Cloud,
  Search,
  Layers,
  BookOpen,
  MessageSquare,
  Cpu,
  SearchCheck,
  Heart,
  Clock,
  GitBranch,
  Activity,
  Settings,
  Shield
} from "lucide-react";

const TechPill = ({ label, icon: Icon, variant = "light" }) => (
  <span className={`badge bg-${variant} text-dark border me-2 mb-2 px-3 py-2 d-inline-flex align-items-center`}>
    {Icon && <Icon size={14} className="me-2" />}
    {label}
  </span>
);

const FeatureCard = ({ icon: Icon, title, description }) => (
  <div className="col-md-6 col-lg-4 mb-4">
    <div className="card h-100 border-1 shadow-sm">
      <div className="card-body text-center p-4">
        <div className="mb-3">
          <Icon size={40} className="text-primary" />
        </div>
        <h5 className="fw-semibold mb-3">{title}</h5>
        <p className="text-muted small mb-0">{description}</p>
      </div>
    </div>
  </div>
);

export default function AboutUs() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-10 col-xl-9">
          
          {/* Hero Section */}
          <section className="text-center mb-5">
            <div className="mb-4">
              <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2 fs-6 fw-medium">
                Heroku Back-to-School AI Challenge 2025
              </span>
            </div>
            <h1 className="display-4 fw-bold text-dark mb-4">
              Blazer AI
              <span className="text-primary">.</span>
            </h1>
            <p className="lead text-muted mb-4 mx-auto" style={{maxWidth: '600px'}}>
              An intelligent campus assistant powered by Retrieval-Augmented Generation, 
              designed to provide accurate, sourced information to <span style={{whiteSpace: 'nowrap'}}>A-B</span> Tech students and staff.
            </p>
            <a
              href="https://dev.to/devteam/join-the-heroku-back-to-school-ai-challenge-3000-in-prizes-just-for-students-2me4"
              className="btn btn-outline-primary"
              target="_blank" 
              rel="noreferrer"
            >
              View Challenge Details
            </a>
          </section>

          {/* Key Features */}
          <section className="mb-5">
            <div className="text-center mb-4">
              <h2 className="h3 fw-bold mb-3">Intelligent Information Retrieval</h2>
              <p className="text-muted">Advanced AI capabilities designed for academic environments</p>
            </div>
            <div className="row">
              <FeatureCard 
                icon={Search}
                title="Semantic Search"
                description="Advanced vector embeddings enable contextual understanding beyond keyword matching"
              />
              <FeatureCard 
                icon={BookOpen}
                title="Multi-Source Integration"
                description="Comprehensive indexing of official handbook, policies, and website content"
              />
              <FeatureCard 
                icon={MessageSquare}
                title="Conversational Interface"
                description="Natural language processing with source attribution and academic context"
              />
            </div>
          </section>

          {/* Architecture Overview */}
          <section className="mb-5">
            <div className="card border-1 shadow-sm">
              <div className="card-body p-4 p-md-5">
                <h2 className="h3 fw-bold mb-4">Technical Architecture</h2>
                
                <div className="row align-items-center mb-4">
                  <div className="col-lg-8">
                    <h4 className="h5 fw-semibold mb-3">Retrieval-Augmented Generation (RAG)</h4>
                    <p className="text-muted mb-3">
                      Our implementation combines large language models with institution-specific 
                      knowledge bases to ensure responses are both intelligent and factually grounded 
                      in official A-B Tech resources.
                    </p>
                  </div>
                  <div className="col-lg-4 text-center">
                    <Brain size={80} className="text-primary opacity-75" />
                  </div>
                </div>
{/* Heroku Integration */}
<section className="mb-5">
  <div className="card border-1 shadow-sm">
    <div className="card-body p-4 p-md-5">
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-3 mb-3">
        <h2 className="h3 fw-bold mb-0">Heroku Integration & Deployment</h2>
        <span className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
          Deployed on Heroku
        </span>
      </div>

      <p className="text-muted mb-4">
        Blazer AI is built and deployed on the Heroku platform to keep student-facing services
        fast, reliable, and easy to iterate. We use Heroku’s managed data, CI-friendly deploys,
        and operational tooling to ship new features with confidence.
      </p>

      <div className="row">
        <FeatureCard
          icon={GitBranch}
          title="Pipelines & Review Apps"
          description="Every pull request spins up a temporary app so we can preview changes before merging. Promotion flows push builds from staging to production with one click."
        />
        <FeatureCard
          icon={Clock}
          title="Scheduler Jobs"
          description="Nightly crawls refresh handbook/website content and regenerate embeddings on a worker dyno using Heroku Scheduler."
        />
        <FeatureCard
          icon={Database}
          title="Heroku Postgres + pgvector"
          description="Official docs are embedded and indexed in Postgres with pgvector for high-quality semantic retrieval."
        />
        <FeatureCard
          icon={Database}
          title="Heroku Data for Redis"
          description="Hot answers and conversation state are cached to reduce latency and keep response times snappy."
        />
        <FeatureCard
          icon={Shield}
          title="Config Vars & Secrets"
          description="Claude keys, database URLs, and app settings are managed via Heroku Config Vars—no secrets in code."
        />
        <FeatureCard
          icon={Activity}
          title="Metrics & Logs"
          description="Built-in Heroku Metrics and structured logs help us monitor performance, errors, and model usage trends."
        />
      </div>

      <div className="border-top pt-4 mt-4">
        <h5 className="fw-semibold mb-3">Dyno Topology</h5>
        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="bg-light rounded p-3 h-100">
              <div className="fw-semibold text-primary mb-2">Web Dyno</div>
              <small className="text-muted">Serves the React UI + API gateway</small>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-light rounded p-3 h-100">
              <div className="fw-semibold text-primary mb-2">Worker Dyno</div>
              <small className="text-muted">Crawling, chunking, embeddings, batch tasks</small>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="bg-light rounded p-3 h-100">
              <div className="fw-semibold text-primary mb-2">Scheduler</div>
              <small className="text-muted">Nightly/weekly maintenance jobs</small>
            </div>
          </div>
        </div>
      </div>

      <div className="border-top pt-4 mt-4">
        <h5 className="fw-semibold mb-3">Why Heroku for Students</h5>
        <ul className="text-muted mb-0">
          <li className="mb-2"><strong>Simple Git-based deploys:</strong> Push to main and ship.</li>
          <li className="mb-2"><strong>PR-level previews:</strong> Review Apps make teamwork faster.</li>
          <li className="mb-2"><strong>Managed data:</strong> Postgres + Redis without ops overhead.</li>
          <li className="mb-0"><strong>Built-in observability:</strong> Metrics & logs out of the box.</li>
        </ul>
      </div>
    </div>
  </div>
</section>

                <div className="mb-4">
                  <h5 className="fw-semibold mb-3">Technology Stack</h5>
                  <div className="mb-3">
                    {/* Core app / AI */}
                    <TechPill label="React 19" icon={Layers} />
                    <TechPill label="Node.js" icon={Cpu} />
                    <TechPill label="Claude AI API" icon={Brain} />
                    <TechPill label="Vector Embeddings" icon={Search} />
                    <TechPill label="Semantic Search" icon={SearchCheck} />

                    {/* Heroku platform */}
                    <TechPill label="Heroku Platform" icon={Cloud} />
                    <TechPill label="Heroku Dynos (Web & Worker)" icon={Cpu} />
                    <TechPill label="Heroku Pipelines & Review Apps" icon={GitBranch} />
                    <TechPill label="Heroku Config Vars (Secrets)" icon={Shield} />
                    <TechPill label="Heroku Buildpacks" icon={Settings} />
                    <TechPill label="Heroku Scheduler (Jobs)" icon={Clock} />
                    <TechPill label="Heroku Metrics & Logs" icon={Activity} />

                    {/* Data on Heroku */}
                    <TechPill label="Heroku Postgres + pgvector" icon={Database} />
                    <TechPill label="Heroku Data for Redis (Cache)" icon={Database} />
                  </div>
                </div>

                <div className="border-top pt-4">
                  <h5 className="fw-semibold mb-3">Data Processing Pipeline</h5>
                  <div className="row text-center">
                    <div className="col-md-3 mb-3">
                      <div className="bg-light rounded p-3 h-100">
                        <div className="fw-semibold text-primary mb-2">1. Ingestion</div>
                        <small className="text-muted">Web scraping and document parsing</small>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="bg-light rounded p-3 h-100">
                        <div className="fw-semibold text-primary mb-2">2. Processing</div>
                        <small className="text-muted">Content chunking and embedding generation</small>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="bg-light rounded p-3 h-100">
                        <div className="fw-semibold text-primary mb-2">3. Storage</div>
                        <small className="text-muted">Vector database indexing</small>
                      </div>
                    </div>
                    <div className="col-md-3 mb-3">
                      <div className="bg-light rounded p-3 h-100">
                        <div className="fw-semibold text-primary mb-2">4. Retrieval</div>
                        <small className="text-muted">Contextual answer generation</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Data Sources */}
          <section className="mb-5">
            <div className="row">
              <div className="col-md-6 mb-4">
                <div className="card h-100 border-1 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="h5 fw-semibold mb-3">Knowledge Base</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="bi bi-globe text-primary me-2"></i>
                        <strong>AB Tech Website:</strong> Complete institutional content
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-file-earmark-pdf text-primary me-2"></i>
                        <strong>Student Handbook:</strong> Official policies and procedures
                      </li>
                      <li className="mb-0">
                        <i className="bi bi-book text-primary me-2"></i>
                        <strong>Academic Catalog:</strong> Course descriptions and requirements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-4">
                <div className="card h-100 border-1 shadow-sm">
                  <div className="card-body p-4">
                    <h4 className="h5 fw-semibold mb-3">Performance Metrics</h4>
                    <ul className="list-unstyled">
                      <li className="mb-2">
                        <i className="bi bi-lightning text-primary me-2"></i>
                        <strong>Response Time:</strong> Sub-second for cached queries
                      </li>
                      <li className="mb-2">
                        <i className="bi bi-check-circle text-primary me-2"></i>
                        <strong>Source Attribution:</strong> All responses include citations
                      </li>
                      <li className="mb-0">
                        <i className="bi bi-shield-check text-primary me-2"></i>
                        <strong>Content Accuracy:</strong> Grounded in official documentation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer / Disclaimer */}
          <section className="border-top pt-4">
            <div className="row align-items-center">
              <div className="col-md-8">
                <p className="text-muted small mb-0">
                  <strong>Academic Project Disclaimer:</strong> This application is an educational 
                  prototype developed for the Heroku Back-to-School AI Challenge and is not officially 
                  affiliated with Asheville-Buncombe Technical Community College.
                </p>
              </div>
              <div className="col-md-4 mt-3 mt-md-0">
                <small className="text-muted">Built with <Heart size={18} color="red" /> by Zachary Massey for AB Tech students and staff. Hosted on Heroku</small>
              </div>
            </div>
          </section>

        </div>
      </div>
    </main>
  );
}
