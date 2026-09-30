import { ExternalLink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SafeImage } from "@/components/safe-image";
import { useCopy } from "@/lib/store";

export type DetailPayload = {
  title: string;
  category?: string;
  imageUrl: string;
  description: string;
  href?: string;
  tags?: string[];
} | null;

type Props = {
  item: DetailPayload;
  onClose: () => void;
};

export function DetailModal({ item, onClose }: Props) {
  const copy = useCopy();

  return (
    <Dialog open={!!item} onOpenChange={(open) => !open && onClose()}>
      <DialogContent>
        {item ? (
          <>
            <DialogHeader>
              <DialogTitle>{item.title}</DialogTitle>
              <DialogDescription className="flex flex-wrap items-center gap-2">
                {item.category ? (
                  <Badge variant="outline">{item.category}</Badge>
                ) : null}
                {item.tags?.map((tag) => (
                  <Badge key={tag} variant="muted">
                    {tag}
                  </Badge>
                ))}
              </DialogDescription>
            </DialogHeader>
            <SafeImage
              src={item.imageUrl}
              alt={item.title}
              className="aspect-video rounded-xl"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
            {item.href ? (
              <Button
                className="mt-4 w-full"
                onClick={() =>
                  window.open(item.href, "_blank", "noopener,noreferrer")
                }
              >
                <ExternalLink className="size-4" />
                {copy("visit")}
              </Button>
            ) : null}
          </>
        ) : null}
      </DialogContent>
    </Dialog>
  );
}
