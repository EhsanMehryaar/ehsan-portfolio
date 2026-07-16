"use client";

import { useState } from "react";
import type { DashboardInfo, Project } from "./project-data";

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [dashboardInfo, setDashboardInfo] = useState<DashboardInfo | null>(
    null,
  );

  return (
    <>
      {projects.map((project) => (
        <section
          id={project.eyebrow === "Featured Project" ? "project" : undefined}
          key={project.title}
          className="mx-auto max-w-7xl px-6 py-16 lg:px-8"
        >
          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">
              {project.eyebrow}
            </p>
            <h2 className="mt-3 text-4xl font-bold tracking-tight">
              {project.title}
            </h2>
            <p className="mt-4 max-w-3xl text-slate-300">
              {project.summary}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-8">
              <h3 className="text-2xl font-bold">Project Overview</h3>

              <p className="mt-4 leading-7 text-slate-300">
                {project.overview}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setDashboardInfo(project.dashboard)}
                  className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
                >
                  Open Interactive Dashboard
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15"
                >
                  View GitHub Repository
                </a>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {project.highlights.map((highlight, index) => (
                <div
                  key={highlight.label}
                  className="rounded-3xl border border-white/10 bg-white/[0.06] p-6"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/20 text-blue-200">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-lg font-semibold">{highlight.label}</h4>
                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {highlight.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {dashboardInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="h-[90vh] w-full max-w-7xl overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <h3 className="font-semibold text-white">
                  Interactive Dashboard
                </h3>
                <p className="text-sm text-slate-400">
                  {dashboardInfo.title}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={dashboardInfo.fullUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white hover:bg-white/10"
                >
                  Open New Tab
                </a>

                <button
                  onClick={() => setDashboardInfo(null)}
                  className="rounded-lg bg-white px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-slate-200"
                >
                  Close
                </button>
              </div>
            </div>

            <iframe
              src={dashboardInfo.url}
              title={dashboardInfo.title}
              className="h-[calc(90vh-73px)] w-full bg-white"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </>
  );
}
