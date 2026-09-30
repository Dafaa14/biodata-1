import { useEffect, useState } from "react";
import { ImageOff } from "lucide-react";
import { cn, initials } from "@/lib/utils";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  imgClassName?: string;
};

export function SafeImage({ src, alt, className, imgClassName }: Props) {
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
  }, [src]);
  const broken = failed || !src;

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-surface-2",
        className,
      )}
    >
      {broken ? (
        <div className="flex h-full min-h-32 w-full flex-col items-center justify-center gap-2 text-subtle">
          <ImageOff className="size-5" />
          <span className="font-display text-lg tracking-wide">
            {initials(alt || "FA")}
          </span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className={cn("h-full w-full object-cover", imgClassName)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
