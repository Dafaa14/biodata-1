import { CATEGORIES, type FilterId } from "@/lib/types";
import { useCopy } from "@/lib/store";
import { cn } from "@/lib/utils";

const FILTERS: FilterId[] = ["Semua", ...CATEGORIES];

type Props = {
  value: FilterId;
  onChange: (v: FilterId) => void;
  count: number;
};

export function FilterBar({ value, onChange, count }: Props) {
  const copy = useCopy();
  const labels: Record<FilterId, string> = {
    Semua: copy("all"),
    Networking: copy("networking"),
    "Web Dev": copy("webdev"),
    Sertifikasi: copy("cert"),
    Hardware: copy("hardware"),
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-[11px] tracking-[0.18em] text-subtle uppercase">
        {copy("viewGrid")} · {count} {copy("item")}
      </p>
      <div className="flex flex-wrap gap-1.5">
        {FILTERS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => onChange(id)}
            className={cn(
              "h-9 rounded-full px-3 text-xs font-medium transition-colors duration-150",
              value === id
                ? "bg-accent text-accent-fg"
                : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg",
            )}
          >
            {labels[id]}
          </button>
        ))}
      </div>
    </div>
  );
}
