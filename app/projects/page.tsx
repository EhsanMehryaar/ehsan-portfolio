import Link from "next/link";
import { ProjectShowcase } from "../ProjectShowcase";
import { otherProjects } from "../project-data";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.25),_transparent_35%),radial-gradient(circle_at_top_right,_rgba(14,165,233,0.18),_transparent_30%),linear-gradient(to_bottom,_#020617,_#0f172a)]" />

      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Ehsan Mehryaar
          </Link>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="/#about" className="hover:text-white">
              About
            </Link>
            <Link href="/#project" className="hover:text-white">
              Featured Project
            </Link>
            <Link href="/projects" className="text-white">
              Projects
            </Link>
            <Link href="/#skills" className="hover:text-white">
              Skills
            </Link>
            <Link href="/#contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <p className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
          Portfolio Projects
        </p>
        <h1 className="mt-6 max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
          Applied machine learning and analytics products.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          A collection of data science projects focused on dashboards,
          prediction systems, advertising analytics, and decision support.
        </p>
      </section>

      <ProjectShowcase projects={otherProjects} />
    </main>
  );
}
