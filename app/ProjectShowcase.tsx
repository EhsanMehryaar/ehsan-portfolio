"use client";

import { useState } from "react";
import type { Project } from "./project-data";

type ProjectShowcaseProps = {
  projects: Project[];
};

export function ProjectShowcase({ projects }: ProjectShowcaseProps) {
  const [openProject, setOpenProject] = useState("");

  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue-700">
          Projects
        </p>
        <h2 className="mt-3 text-4xl font-bold tracking-tight">
          Data science projects
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Applied machine learning, analytics, and dashboard products with
          practical decision-support workflows.
        </p>
      </div>

      <div className="divide-y divide-slate-200 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        {projects.map((project, index) => {
          const isOpen = openProject === project.title;

          return (
            <article
              key={project.title}
              onMouseEnter={() => setOpenProject(project.title)}
              onFocusCapture={() => setOpenProject(project.title)}
              className="group"
            >
              <button
                type="button"
                onClick={() => setOpenProject(project.title)}
                className="flex w-full items-start justify-between gap-6 px-6 py-6 text-left transition hover:bg-blue-50/70 md:px-8"
              >
                <div>
                  <p className="text-sm font-medium text-blue-700">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-4xl text-sm leading-6 text-slate-600 md:text-base">
                    {project.summary}
                  </p>
                </div>
                <span className="mt-2 rounded-full border border-slate-300 bg-slate-50 px-3 py-1 text-sm text-slate-600">
                  {isOpen ? "Expanded" : "Details"}
                </span>
              </button>

              <div
                className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                  isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="grid gap-6 px-6 pb-8 md:px-8 lg:grid-cols-[0.95fr_1.05fr]">
                    <div>
                      <h4 className="text-lg font-semibold">
                        Project Overview
                      </h4>
                      <p className="mt-3 leading-7 text-slate-700">
                        {project.overview}
                      </p>

                      <div className="mt-6 flex flex-wrap gap-4">
                        <a
                          href={project.dashboard.fullUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl bg-blue-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
                        >
                          Open Demo
                        </a>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-xl border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-blue-300 hover:bg-blue-50"
                        >
                          GitHub Repository
                        </a>
                      </div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-3">
                      {project.highlights.map((highlight) => (
                        <div
                          key={highlight.label}
                          className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                        >
                          <h5 className="font-semibold">{highlight.label}</h5>
                          <p className="mt-3 text-sm leading-6 text-slate-700">
                            {highlight.body}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
