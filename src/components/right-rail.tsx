import { Download } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { SafeImage } from "@/components/safe-image";
import { useAppStore, useCopy } from "@/lib/store";

export function RightRail() {
  const profile = useAppStore((s) => s.profile);
  const skills = useAppStore((s) => s.skills);
  const copy = useCopy();
  const navigate = useNavigate();

  function downloadCv() {
    const url = profile.cvUrl || "/cv";
    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }
    void navigate({ to: url as "/" });
  }

  return (
    <aside className="flex h-full flex-col gap-3 p-3">
      <section className="overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        <div className="receipt-perforation bg-surface" />
        <div className="px-4 pt-3 pb-4">
          <p className="font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">
            {copy("profileCard")}
          </p>
          <div className="mt-3 flex items-center gap-3">
            <SafeImage
              src={profile.avatarUrl}
              alt={profile.name}
              className="size-14 shrink-0 rounded-xl"
            />
            <div className="min-w-0">
              <h2 className="font-display truncate text-base font-semibold">
                {profile.name}
              </h2>
              <p className="text-xs leading-snug text-muted">
                {profile.subtitle}
              </p>
            </div>
          </div>
          <div className="mt-3 flex items-center gap-2">
            <span
              className={
                profile.available
                  ? "relative flex size-2.5"
                  : "relative flex size-2.5"
              }
            >
              {profile.available ? (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" />
              ) : null}
              <span
                className={
                  profile.available
                    ? "relative inline-flex size-2.5 rounded-full bg-success"
                    : "relative inline-flex size-2.5 rounded-full bg-subtle"
                }
              />
            </span>
            <Badge variant={profile.available ? "success" : "muted"}>
              {profile.availabilityLabel}
            </Badge>
          </div>
          <Button className="mt-4 w-full" onClick={downloadCv}>
            <Download className="size-4" />
            {copy("downloadCv")}
          </Button>
        </div>
      </section>

      <section className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]">
        <div className="px-4 pt-4 pb-2">
          <p className="font-mono text-[10px] tracking-[0.22em] text-subtle uppercase">
            {copy("tech")}
          </p>
        </div>
        <Separator />
        <ul className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
          {skills.map((skill) => (
            <li key={skill.id}>
              <div className="mb-1.5 flex items-baseline justify-between gap-2">
                <span className="text-sm font-medium">{skill.name}</span>
                <span className="font-mono text-xs text-muted tabular">
                  {skill.percent}%
                </span>
              </div>
              <Progress value={skill.percent} />
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
