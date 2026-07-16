import { ProjectShowcase } from "./ProjectShowcase";
import { allProjects } from "./project-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),_transparent_34%),radial-gradient(circle_at_top_right,_rgba(20,184,166,0.12),_transparent_30%),linear-gradient(to_bottom,_#f8fafc,_#e0f2fe)]" />

      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-lg font-bold tracking-tight">
            Ehsan Mehryaar
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            <a href="#about" className="hover:text-slate-950">
              About
            </a>
            <a href="#projects" className="hover:text-slate-950">
              Projects
            </a>
            <a href="#skills" className="hover:text-slate-950">
              Skills
            </a>
            <a href="#contact" className="hover:text-slate-950">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            Data Scientist | Machine Learning | Data Products
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Building practical ML products from raw data to insight.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
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
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold">About</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-slate-700">
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
            "Machine Learning",
            "Data Science",
            "Predictive Modeling",
            "Statistical Modeling",
            "Classification",
            "Regression",
            "Clustering",
            "Natural Language Processing",
            "Entity Resolution",
            "Recommendation Systems",
            "Feature Engineering",
            "Model Evaluation",
            "Experimentation",
            "Data Visualization",
            "Dashboard Development",
            "Streamlit",
            "Power BI",
            "Pandas",
            "NumPy",
            "Scikit-learn",
            "XGBoost",
            "Plotly",
            "Data Cleaning",
            "Exploratory Data Analysis",
            "Synthetic Data",
            "Business Analytics",
            "Decision Support",
            "GitHub",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
          <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
          <p className="mt-4 max-w-2xl text-slate-700">
            I am open to data science, applied machine learning, and analytics
            roles.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=emehryaar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-400"
            >
              Email Me
            </a>

            <a
              href="https://github.com/EhsanMehryaar"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/emehryaar/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
