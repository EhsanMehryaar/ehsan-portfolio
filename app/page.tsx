"use client";

import { useState } from "react";

export default function Home() {
  const [showDashboard, setShowDashboard] = useState(false);

  const dashboardUrl =
    "https://ad-relevance-ctr-prediction-a6cwqh6yt5ljqkret9wchb.streamlit.app?embedded=true";

  const dashboardUrlFull =
    "https://ad-relevance-ctr-prediction-a6cwqh6yt5ljqkret9wchb.streamlit.app";

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a)]" />

      {/* Navigation */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#" className="text-lg font-bold tracking-tight">
            Ehsan Mehryaar
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">
              About
            </a>
            <a href="#project" className="hover:text-white">
              Project
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

      {/* Hero */}
      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
            Data Scientist | Machine Learning | Data Products
          </p>

          <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Building practical ML products from raw data to insight.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            I’m Ehsan Mehryaar, a data scientist focused on predictive modeling,
            data products, dashboards, and applied machine learning. My work
            connects technical modeling with business and operational impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#project"
              className="rounded-xl bg-blue-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
            >
              View Featured Project
            </a>

            <button
              onClick={() => setShowDashboard(true)}
              className="rounded-xl border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
            >
              Open Live Dashboard
            </button>
          </div>
        </div>

      </section>

      {/* About */}
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

      {/* Project */}
      <section id="project" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
            Featured Project
          </p>
          <h2 className="mt-3 text-4xl font-bold tracking-tight">
            Ad Relevance & CTR Prediction
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            A portfolio-ready machine learning project aligned with advertising,
            ranking, recommendation, and business optimization problems.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Project Summary */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
            <h3 className="text-2xl font-bold">Project Overview</h3>

            <p className="mt-4 leading-7 text-slate-300">
              This project predicts ad click-through rate and evaluates ad
              relevance using machine learning. It demonstrates an end-to-end
              data science workflow, including data preparation, feature
              engineering, model training, evaluation, and dashboard-based
              interpretation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => setShowDashboard(true)}
                className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
              >
                Open Interactive Dashboard
              </button>

              <a
                href="https://github.com/EhsanMehryaar/Ad-Relevance-CTR-Prediction"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
              >
                View GitHub Repository
              </a>
            </div>
          </div>

          {/* Problem Approach Outcome */}
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
                01
              </div>
              <h4 className="text-lg font-semibold">Problem</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Estimate whether users are likely to click on ads and identify
                signals that improve ad relevance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
                02
              </div>
              <h4 className="text-lg font-semibold">Approach</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Built a machine learning pipeline using structured ad/user
                features, feature engineering, model evaluation, and performance
                comparison.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
                03
              </div>
              <h4 className="text-lg font-semibold">Outcome</h4>
              <p className="mt-3 text-sm leading-6 text-slate-300">
                Created a deployable ML dashboard showing model performance,
                calibration, lift, feature importance, and live CTR prediction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
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
            "CTR Prediction",
            "Ad Relevance",
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

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 md:p-10">
          <h2 className="text-3xl font-bold">Let’s Connect</h2>
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

      {/* Dashboard Modal */}
      {showDashboard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="h-[90vh] w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h3 className="font-semibold text-white">
                  Interactive Dashboard
                </h3>
                <p className="text-sm text-slate-400">
                  Ad Relevance & CTR Prediction
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={dashboardUrlFull}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Open New Tab
                </a>

                <button
                  onClick={() => setShowDashboard(false)}
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </div>

            <iframe
              src={dashboardUrl}
              title="Ad Relevance CTR Prediction Dashboard"
              className="h-[calc(90vh-73px)] w-full bg-white"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </main>
  );
}