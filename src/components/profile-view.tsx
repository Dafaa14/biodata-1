import { Badge } from "@/components/ui/badge";
import { SafeImage } from "@/components/safe-image";
import { useAppStore, useCopy } from "@/lib/store";

export function ProfileView() {
  const profile = useAppStore((s) => s.profile);
  const copy = useCopy();
  const skills = useAppStore((s) => s.skills);

  return (
    <div className="flex flex-col gap-6">
      <section className="overflow-hidden rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
          <SafeImage
            src={profile.avatarUrl}
            alt={profile.name}
            className="size-28 shrink-0 rounded-2xl sm:size-32"
          />
          <div className="min-w-0">
            <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
              {copy("profile")}
            </p>
            <h1 className="font-display mt-1 text-3xl font-semibold">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm text-muted">{profile.subtitle}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profile.softSkills.map((s) => (
                <Badge key={s} variant="muted">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7">
        <h2 className="font-display text-lg font-semibold">{copy("bio")}</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {profile.bio}
        </p>
      </section>

      <section className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7">
        <h2 className="font-display text-lg font-semibold">
          {copy("education")}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          {profile.education}
        </p>
      </section>

      <section className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7">
        <h2 className="font-display text-lg font-semibold">{copy("tech")}</h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {skills.map((s) => (
            <li
              key={s.id}
              className="flex items-center justify-between rounded-xl bg-bg px-4 py-3"
            >
              <span className="text-sm">{s.name}</span>
              <span className="font-mono text-xs text-muted tabular">
                {s.percent}%
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
