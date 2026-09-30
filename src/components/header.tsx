import { useEffect, useState } from "react";
import {
  Bell,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SafeImage } from "@/components/safe-image";
import { useAppStore, useCopy } from "@/lib/store";
import { cn } from "@/lib/utils";

type Props = {
  onOpenNav: () => void;
  onOpenProfile: () => void;
};

export function Header({ onOpenNav, onOpenProfile }: Props) {
  const contacts = useAppStore((s) => s.contacts);
  const profile = useAppStore((s) => s.profile);
  const isAdmin = useAppStore((s) => s.isAdmin);
  const lang = useAppStore((s) => s.lang);
  const setLang = useAppStore((s) => s.setLang);
  const copy = useCopy();
  const notifications = useAppStore((s) => s.notifications);
  const markNoticesRead = useAppStore((s) => s.markNoticesRead);
  const unread = notifications.filter((n) => !n.read).length;
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 1000);
    return () => window.clearInterval(id);
  }, []);

  const channels = [
    { key: "instagram", icon: Instagram, data: contacts.instagram },
    { key: "email", icon: Mail, data: contacts.email },
    { key: "github", icon: Github, data: contacts.github },
    { key: "linkedin", icon: Linkedin, data: contacts.linkedin },
  ] as const;

  const clock = now.toLocaleTimeString(lang === "id" ? "id-ID" : "en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 border-b border-border bg-bg px-3 md:px-4">
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        aria-label={copy("menu")}
        onClick={onOpenNav}
      >
        <Menu className="size-5" />
      </Button>

      <div className="flex min-w-0 items-center gap-2.5">
        <div className="flex size-9 items-center justify-center rounded-lg bg-accent font-display text-xs font-bold text-accent-fg">
          {copy("brandShort")}
        </div>
        <div className="min-w-0">
          <p className="font-display truncate text-sm font-semibold leading-none">
            {copy("brand")}
          </p>
          <p className="mt-1 hidden font-mono text-[10px] tracking-widest text-subtle uppercase sm:block">
            POS · TJKT
          </p>
        </div>
      </div>

      <div className="mx-auto hidden min-w-0 items-center gap-1 md:flex">
        {channels.map((ch) => {
          const Icon = ch.icon;
          return (
            <Tooltip key={ch.key}>
              <TooltipTrigger asChild>
                <a
                  href={ch.data.url}
                  target={ch.data.url.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex h-10 max-w-48 items-center gap-2 rounded-lg px-2.5 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                >
                  <Icon className="size-4 shrink-0" />
                  <span className="hidden truncate text-xs lg:inline">
                    {ch.data.label}
                  </span>
                </a>
              </TooltipTrigger>
              <TooltipContent>{ch.data.label}</TooltipContent>
            </Tooltip>
          );
        })}
      </div>

      <div className="ml-auto flex items-center gap-1.5">
        <span className="hidden font-mono text-xs text-subtle tabular xl:inline">
          {clock}
        </span>

        <DropdownMenu
          onOpenChange={(open) => {
            if (open) markNoticesRead();
          }}
        >
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="relative"
              aria-label={copy("notifications")}
            >
              <Bell className="size-4" />
              {unread > 0 ? (
                <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-accent" />
              ) : null}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-72">
            <DropdownMenuLabel>{copy("notifications")}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {notifications.map((n) => (
              <DropdownMenuItem
                key={n.id}
                className="flex-col items-start gap-0.5"
              >
                <span className="text-sm font-medium">{n.title}</span>
                <span className="text-xs text-muted">{n.body}</span>
                <span className="font-mono text-[10px] text-subtle">
                  {n.time}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex h-10 items-center rounded-lg bg-surface-2 p-1">
          {(["id", "en"] as const).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => setLang(code)}
              className={cn(
                "h-8 min-w-9 rounded-md px-2 font-mono text-[11px] font-medium uppercase transition-colors",
                lang === code
                  ? "bg-accent text-accent-fg"
                  : "text-muted hover:text-fg",
              )}
              aria-label={copy("lang")}
            >
              {code}
            </button>
          ))}
        </div>

        <div
          className={cn(
            "hidden items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase sm:flex",
            isAdmin
              ? "bg-success/10 text-success"
              : "bg-surface-2 text-subtle",
          )}
        >
          <span
            className={cn(
              "size-1.5 rounded-full",
              isAdmin ? "bg-success" : "bg-subtle",
            )}
          />
          {isAdmin ? copy("adminOn") : copy("guest")}
        </div>

        <button
          type="button"
          onClick={onOpenProfile}
          className="flex size-10 items-center justify-center overflow-hidden rounded-full bg-surface-2 xl:pointer-events-none"
          aria-label={copy("profile")}
        >
          {profile.avatarUrl ? (
            <SafeImage
              src={profile.avatarUrl}
              alt={profile.name}
              className="size-10 rounded-full"
            />
          ) : (
            <UserRound className="size-4 text-muted" />
          )}
        </button>
      </div>
    </header>
  );
}
