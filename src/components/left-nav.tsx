import { NAV_ITEMS } from "@/lib/nav";
import { useAppStore, useCopy } from "@/lib/store";
import type { ViewId } from "@/lib/types";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

type Props = {
  onNavigate?: () => void;
  compact?: boolean;
};

export function LeftNav({ onNavigate, compact }: Props) {
  const view = useAppStore((s) => s.view);
  const isAdmin = useAppStore((s) => s.isAdmin);
  const setView = useAppStore((s) => s.setView);
  const copy = useCopy();
  const logout = useAppStore((s) => s.logout);
  const profile = useAppStore((s) => s.profile);

  return (
    <div className="flex h-full flex-col">
      {!compact ? (
        <div className="px-4 pt-5 pb-3">
          <p className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
            {copy("menu")}
          </p>
          <p className="font-display mt-1 text-sm font-semibold">
            {profile.name.split(" ")[0]} Desk
          </p>
        </div>
      ) : null}
      <nav className="flex flex-1 flex-col gap-1 p-2">
        {NAV_ITEMS.map((item) => {
          const active = item.id === view;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => {
                if (item.id === "logout") {
                  if (isAdmin) {
                    logout();
                    toast.success(copy("loggedOut"));
                  } else {
                    toast.message(copy("notAdmin"));
                  }
                  onNavigate?.();
                  return;
                }
                setView(item.id as ViewId);
                onNavigate?.();
              }}
              className={cn(
                "flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors duration-150",
                item.id === "logout"
                  ? "mt-auto text-muted hover:bg-surface-2 hover:text-fg"
                  : active
                    ? "bg-accent text-accent-fg"
                    : "text-muted hover:bg-surface-2 hover:text-fg",
              )}
            >
              <Icon className="size-4 shrink-0" />
              <span>{copy(item.label)}</span>
            </button>
          );
        })}
      </nav>
      {!compact ? (
        <div className="p-3">
          <div
            className={cn(
              "rounded-xl px-3 py-2 font-mono text-[10px] tracking-[0.18em] uppercase",
              isAdmin
                ? "bg-success/10 text-success"
                : "bg-surface-2 text-subtle",
            )}
          >
            {isAdmin ? copy("shiftOpen") : copy("shiftClosed")}
          </div>
        </div>
      ) : null}
    </div>
  );
}
