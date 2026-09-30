import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/safe-image";
import { Badge } from "@/components/ui/badge";
import { useAppStore, useCopy } from "@/lib/store";

export function HomeView() {
  const copy = useCopy();
  const profile = useAppStore((s) => s.profile);
  const gallery = useAppStore((s) => s.gallery);
  const projects = useAppStore((s) => s.projects);
  const skills = useAppStore((s) => s.skills);
  const setView = useAppStore((s) => s.setView);
  const reduce = useReducedMotion();
  const featured = gallery.slice(0, 3);

  const fade = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 12, filter: "blur(4px)" },
        animate: { opacity: 1, y: 0, filter: "blur(0px)" },
      };

  return (
    <div className="flex flex-col gap-8">
      <motion.section
        {...fade}
        className="overflow-hidden rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-8"
      >
        <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
          {copy("heroKicker")}
        </p>
        <h1 className="font-display mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl">
          {copy("heroTitle")}
        </h1>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base">
          {copy("heroBody")}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button onClick={() => setView("galeri")}>
            {copy("gallery")}
            <ArrowRight className="size-4" />
          </Button>
          <Button variant="secondary" onClick={() => setView("project")}>
            {copy("projects")}
          </Button>
        </div>
      </motion.section>

      <section className="grid grid-cols-2 gap-3 md:grid-cols-4">
        {[
          { n: gallery.length, l: copy("statsWorks") },
          { n: projects.length, l: copy("statsProjects") },
          { n: skills.length, l: copy("statsSkills") },
          {
            n: profile.available ? "ON" : "OFF",
            l: copy("openHire"),
          },
        ].map((s) => (
          <div
            key={s.l}
            className="rounded-2xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]"
          >
            <p className="font-display text-2xl font-semibold tabular">{s.n}</p>
            <p className="mt-1 text-xs text-muted">{s.l}</p>
          </div>
        ))}
      </section>

      <section>
        <div className="mb-3 flex items-end justify-between">
          <h2 className="font-display text-lg font-semibold">
            {copy("featured")}
          </h2>
          <button
            type="button"
            className="text-xs text-muted hover:text-fg"
            onClick={() => setView("galeri")}
          >
            {copy("gallery")}
          </button>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {featured.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setView("galeri")}
              className="overflow-hidden rounded-2xl bg-surface text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]"
            >
              <SafeImage
                src={item.imageUrl}
                alt={item.title}
                className="aspect-[16/10]"
              />
              <div className="p-3">
                <Badge variant="outline">{item.category}</Badge>
                <p className="font-display mt-2 text-sm font-semibold">
                  {item.title}
                </p>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}
