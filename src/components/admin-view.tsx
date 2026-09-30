import { PinPad } from "@/components/pin-pad";
import { ServerMonitor } from "@/components/server-monitor";
import { TerminalCli } from "@/components/terminal-cli";
import { ControlPanel } from "@/components/control-panel";
import { useAppStore, useCopy } from "@/lib/store";

type Props = {
  galleryId?: string | null;
  projectId?: string | null;
};

export function AdminView({ galleryId, projectId }: Props) {
  const isAdmin = useAppStore((s) => s.isAdmin);
  const copy = useCopy();

  if (isAdmin) {
    return (
      <div className="flex flex-col gap-5">
        <header>
          <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
            {copy("adminOnly")}
          </p>
          <h1 className="font-display mt-1 text-2xl font-semibold">
            {copy("control")}
          </h1>
        </header>
        <ControlPanel
          focusGalleryId={galleryId}
          focusProjectId={projectId}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5">
      <header>
        <p className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
          {copy("admin")}
        </p>
        <h1 className="font-display mt-1 text-2xl font-semibold">
          {copy("loginTitle")}
        </h1>
      </header>
      <div className="grid gap-4 lg:grid-cols-[minmax(0,20rem)_1fr]">
        <PinPad />
        <div className="flex flex-col gap-4">
          <ServerMonitor />
          <TerminalCli />
        </div>
      </div>
    </div>
  );
}
