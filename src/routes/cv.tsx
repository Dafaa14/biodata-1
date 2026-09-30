import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HydrateGate } from "@/components/hydrate-gate";
import { useAppStore, useCopy } from "@/lib/store";

export const Route = createFileRoute("/cv")({ component: CvPage });

function CvPage() {
  return (
    <HydrateGate>
      <CvInner />
    </HydrateGate>
  );
}

function CvInner() {
  const profile = useAppStore((s) => s.profile);
  const skills = useAppStore((s) => s.skills);
  const projects = useAppStore((s) => s.projects);
  const contacts = useAppStore((s) => s.contacts);
  const copy = useCopy();

  return (
    <div className="min-h-dvh bg-bg px-4 py-8 text-fg">
      <div className="mx-auto flex max-w-2xl items-center justify-between print:hidden">
        <Button asChild variant="ghost">
          <Link to="/">
            <ArrowLeft className="size-4" />
            {copy("brand")}
          </Link>
        </Button>
        <Button onClick={() => window.print()}>
          <Printer className="size-4" />
          {copy("printCv")}
        </Button>
      </div>

      <article className="mx-auto mt-8 max-w-2xl rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-10 print:bg-white print:text-black print:shadow-none">
        <p className="font-mono text-[11px] tracking-[0.22em] text-accent uppercase">
          {copy("cvKicker")}
        </p>
        <h1 className="font-display mt-2 text-3xl font-semibold">
          {profile.name}
        </h1>
        <p className="mt-1 text-sm text-muted print:text-neutral-600">
          {profile.subtitle}
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted print:text-neutral-700">
          {profile.bio}
        </p>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold">
            {copy("education")}
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted print:text-neutral-700">
            {profile.education}
          </p>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold">{copy("tech")}</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {skills.map((s) => (
              <Badge key={s.id} variant="muted">
                {s.name} {s.percent}%
              </Badge>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold">
            {copy("softSkills")}
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {profile.softSkills.map((s) => (
              <Badge key={s} variant="outline">
                {s}
              </Badge>
            ))}
          </ul>
        </section>

        <section className="mt-8">
          <h2 className="font-display text-lg font-semibold">
            {copy("projects")}
          </h2>
          <ul className="mt-3 space-y-3">
            {projects.map((p) => (
              <li key={p.id}>
                <p className="text-sm font-medium">{p.title}</p>
                <p className="text-xs text-muted print:text-neutral-600">
                  {p.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 border-t border-border pt-4 font-mono text-xs text-muted print:text-neutral-600">
          <p>{contacts.email.label}</p>
          <p>{contacts.github.label}</p>
          <p>{contacts.linkedin.label}</p>
          <p>{contacts.instagram.label}</p>
        </section>
      </article>
    </div>
  );
}
