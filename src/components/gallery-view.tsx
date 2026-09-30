import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FilterBar } from "@/components/filter-bar";
import { MediaCard } from "@/components/media-card";
import { DetailModal, type DetailPayload } from "@/components/detail-modal";
import { useAppStore, useCopy } from "@/lib/store";
import type { FilterId } from "@/lib/types";

type Props = {
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
};

export function GalleryView({ onEdit, onDelete }: Props) {
  const gallery = useAppStore((s) => s.gallery);
  const copy = useCopy();
  const isAdmin = useAppStore((s) => s.isAdmin);
  const setView = useAppStore((s) => s.setView);
  const [filter, setFilter] = useState<FilterId>("Semua");
  const [detail, setDetail] = useState<DetailPayload>(null);
  const reduce = useReducedMotion();

  const fetchGallery = useAppStore((s) => s.fetchGallery);

  useEffect(() => {
    fetchGallery();
  }, [fetchGallery]);

  const items = useMemo(
    () =>
      gallery.filter((row) => filter === "Semua" || row.category === filter),
    [gallery, filter],
  );
 

  return (
    <div className="flex flex-col gap-5">
      <header>
        <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
          {copy("gallery")}
        </p>
        <h1 className="font-display mt-1 text-2xl font-semibold">
          {copy("viewGrid")}
        </h1>
      </header>
      <FilterBar value={filter} onChange={setFilter} count={items.length} />
      {items.length === 0 ? (
        <div className="rounded-2xl bg-surface px-6 py-16 text-center shadow-[var(--shadow-border)]">
          <p className="font-display text-lg">{copy("empty")}</p>
          <p className="mt-1 text-sm text-muted">{copy("emptyHint")}</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 2xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                layout={!reduce}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25, delay: Math.min(i, 8) * 0.04 }}
              >
                <MediaCard
                  sku={String(i + 1).padStart(3, "0")}
                  title={item.title}
                  category={item.category}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  href={item.link}
                  onDetail={() =>
                    setDetail({
                      title: item.title,
                      category: item.category,
                      imageUrl: item.imageUrl,
                      description: item.description,
                      href: item.link,
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
      <DetailModal item={detail} onClose={() => setDetail(null)} />
    </div>
  );
}
