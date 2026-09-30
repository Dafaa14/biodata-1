import { useMemo, useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FilterBar } from "@/components/filter-bar";
import { DetailModal, type DetailPayload } from "@/components/detail-modal";
import { MediaCard } from "@/components/media-card";
import { useAppStore, useCopy } from "@/lib/store";
import type { FilterId } from "@/lib/types";

type Props = {
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export function ProjectsView({ onEdit, onDelete }: Props) {
  const projects = useAppStore((s) => s.projects);
  const copy = useCopy();
  const isAdmin = useAppStore((s) => s.isAdmin);
  const setView = useAppStore((s) => s.setView);
  const [filter, setFilter] = useState<FilterId>("Semua");
  const [detail, setDetail] = useState<DetailPayload>(null);

  const items = useMemo(
    () =>
      projects.filter((row) => filter === "Semua" || row.category === filter),
    [projects, filter],
  );

  return (
    <div className="flex flex-col gap-5">
      <header>
        <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
          {copy("projects")}
        </p>
        <h1 className="font-display mt-1 text-2xl font-semibold">
          {copy("latestProjects")}
        </h1>
      </header>
      <FilterBar value={filter} onChange={setFilter} count={items.length} />
      {items.length === 0 ? (
        <div className="rounded-2xl bg-surface px-6 py-16 text-center shadow-[var(--shadow-border)]">
          <p className="font-display text-lg">{copy("empty")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {items.map((item, i) => (
            <div key={item.id} className="flex flex-col">
              <MediaCard
                sku={String(i + 1).padStart(3, "0")}
                title={item.title}
                category={item.category}
                imageUrl={item.imageUrl}
                description={item.description}
                href={item.liveUrl || item.repoUrl}
                onDetail={() =>
                  setDetail({
                    title: item.title,
                    category: item.category,
                    imageUrl: item.imageUrl,
                    description: item.description,
                    href: item.liveUrl || item.repoUrl,
                    tags: item.tags,
                  })
                }
                onEdit={
                  isAdmin
                    ? () => {
                        setView("admin");
                        onEdit?.(item.id);
                      }
                    : undefined
                }
                onDelete={isAdmin ? () => onDelete?.(item.id) : undefined}
              />
              <div className="mt-2 flex flex-wrap gap-1.5 px-1">
                {item.tags.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
                {item.liveUrl ? (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2 text-xs"
                    onClick={() =>
                      window.open(item.liveUrl, "_blank", "noopener,noreferrer")
                    }
                  >
                    <ExternalLink className="size-3" />
                    {copy("liveDemo")}
                  </Button>
                ) : null}
                {item.repoUrl ? (
                  <Button
                    size="sm"
                    variant="ghost"
                    className="h-7 px-2 text-xs"
                    onClick={() =>
                      window.open(item.repoUrl, "_blank", "noopener,noreferrer")
                    }
                  >
                    <Github className="size-3" />
                    {copy("repo")}
                  </Button>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      )}
      <DetailModal item={detail} onClose={() => setDetail(null)} />
    </div>
  );
}
