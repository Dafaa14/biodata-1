import { useCopy } from "@/lib/store";

export function BootScreen() {
  const copy = useCopy();
  return (
    <div className="flex min-h-dvh items-center justify-center bg-bg text-fg">
      <div className="flex flex-col items-center gap-4">
        <div className="flex size-14 items-center justify-center rounded-2xl bg-accent font-display text-lg font-bold text-accent-fg">
          FA
        </div>
        <p className="font-display text-sm tracking-wide">{copy("brand")}</p>
        <p className="font-mono text-[11px] tracking-widest text-subtle uppercase">
          {copy("boot")}
        </p>
      </div>
    </div>
  );
}
