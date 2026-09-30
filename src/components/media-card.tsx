import { ExternalLink, Pencil, Trash2, ZoomIn } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/safe-image";
import { useAppStore, useCopy } from "@/lib/store";
import type { Category } from "@/lib/types";
import { cn } from "@/lib/utils";

type Props = {
  sku: string;
  title: string;
  category: Category;
  imageUrl: string;
  description?: string;
  href?: string;
  onDetail: () => void;
  onEdit?: () => void;
  onDelete?: () => void;
};

export function MediaCard({
  sku,
  title,
  category,
  imageUrl,
  description,
  href,
  onDetail,
  onEdit,
  onDelete,
}: Props) {
  const isAdmin = useAppStore((s) => s.isAdmin);
  const copy = useCopy();

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface p-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:shadow-[var(--shadow-border-hover)]">
      <div className="relative">
        <SafeImage
          src={imageUrl}
          alt={title}
          className="aspect-[4/3] rounded-xl"
        />
        <div className="absolute inset-0 rounded-xl bg-bg/0 transition-colors duration-150 group-hover:bg-bg/20" />
        {isAdmin && (
          <div className="absolute top-2 right-2 flex gap-1">
            <Button
              size="icon"
              variant="secondary"
              className="size-9 min-h-9 min-w-9"
              aria-label={copy("overlayEdit")}
              onClick={onEdit}
            >
              <Pencil className="size-3.5" />
            </Button>
            <Button
              size="icon"
              variant="default"
              className="size-9 min-h-9 min-w-9"
              aria-label={copy("overlayDel")}
              onClick={onDelete}
            >
              <Trash2 className="size-3.5" />
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 px-2 pt-3 pb-2">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="font-mono text-[10px] tracking-widest text-subtle uppercase">
              {copy("sku")} {sku}
            </p>
            <h3 className="font-display mt-0.5 truncate text-[15px] font-semibold">
              {title}
            </h3>
          </div>
          <Badge variant="outline">{category}</Badge>
        </div>
        {description ? (
          <p className="line-clamp-2 text-xs leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
        <div className="mt-auto flex gap-2">
          <Button
            size="sm"
            variant="secondary"
            className="flex-1"
            onClick={onDetail}
          >
            <ZoomIn className="size-3.5" />
            {copy("detail")}
          </Button>
          <Button
            size="sm"
            variant={href ? "default" : "outline"}
            className={cn("flex-1", !href && "text-muted")}
            onClick={() => {
              if (href) window.open(href, "_blank", "noopener,noreferrer");
            }}
            disabled={!href}
          >
            <ExternalLink className="size-3.5" />
            {copy("visit")}
          </Button>
        </div>
      </div>
    </article>
  );
}
