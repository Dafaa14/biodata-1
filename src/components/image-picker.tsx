import { useRef, useState } from "react";
import { ImagePlus, LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SafeImage } from "@/components/safe-image";
import { fileToCompressedDataUrl } from "@/lib/read-image";
import { useCopy } from "@/lib/store";
import { cn } from "@/lib/utils";

type Props = {
  value: string;
  onChange: (next: string) => void;
  square?: boolean;
};

export function ImagePicker({ value, onChange, square }: Props) {
  const copy = useCopy();
  const inputRef = useRef<HTMLInputElement>(null);
  const [busy, setBusy] = useState(false);
  const urlValue = value.startsWith("data:") ? "" : value;

  async function handleFile(file: File | undefined) {
    if (!file) return;
    setBusy(true);
    try {
      const data = await fileToCompressedDataUrl(file);
      onChange(data);
      toast.success(copy("imageReady"));
    } catch {
      toast.error(copy("imageFail"));
    } finally {
      setBusy(false);
      if (inputRef.current) inputRef.current.value = "";
    }
  }

  return (
    <div className="space-y-2">
      <SafeImage
        src={value}
        alt={copy("photo")}
        className={cn(
          "rounded-xl",
          square ? "size-28" : "aspect-video w-full",
        )}
      />
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => void handleFile(e.target.files?.[0])}
      />
      <Button
        type="button"
        variant="secondary"
        className="w-full"
        disabled={busy}
        onClick={() => inputRef.current?.click()}
      >
        {busy ? (
          <LoaderCircle className="size-4 animate-spin" />
        ) : (
          <ImagePlus className="size-4" />
        )}
        {copy("pickImage")}
      </Button>
      <Input
        value={urlValue}
        placeholder={copy("orPasteUrl")}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
