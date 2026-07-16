import { ProjectShowcase } from "./ProjectShowcase";
import { allProjects } from "./project-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-lg font-bold tracking-tight">
            Ehsan Mehryaar
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#skills" className="hover:text-white">
              Skills
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            Data Scientist | Machine Learning | Data Products
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Building practical ML products from raw data to insight.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I&apos;m Ehsan Mehryaar, a data scientist focused on predictive
            modeling, data products, dashboards, and applied machine learning.
            My work connects technical modeling with business and operational
            impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 md:p-10">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-300">
            I am a data scientist with a Ph.D. background in civil engineering
            and experience in Python, SQL, Power BI, machine learning,
            transportation analytics, connected vehicle systems, and real-world
            data analysis. I am currently expanding my portfolio toward machine
            learning products and data science roles in industry.
          </p>
        </div>
      </section>

      <ProjectShowcase projects={allProjects} />

      <section id="skills" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-bold">Skills</h2>

        <div className="mt-8 flex flex-wrap gap-3">
          {[
            "Python",
            "SQL",
            "Power BI",
            "Machine Learning",
            "Scikit-learn",
            "XGBoost",
            "Pandas",
            "NumPy",
            "Streamlit",
            "Plotly",
            "Feature Engineering",
            "Model Evaluation",
            "Entity Resolution",
            "Record Linkage",
            "CTR Prediction",
            "Ad Relevance",
            "Recommendation Engines",
            "Ranking Metrics",
            "NDCG",
            "Lift@K",
            "Synthetic Data",
            "GitHub",
            "Transportation Analytics",
            "LiDAR Analytics",
            "Connected Vehicles",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-slate-200"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 md:p-10">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="mt-4 max-w-2xl text-slate-300">
            I am open to data science, applied machine learning, and analytics
            roles.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="mailto:ehsanmehryaar@gmail.com"
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Email Me
            </a>

            <a
              href="https://github.com/EhsanMehryaar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/emehryaar/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
