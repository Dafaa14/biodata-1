import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { useAppStore, useCopy } from "@/lib/store";

type Line = { kind: "in" | "out"; text: string };

const HELP = [
  "perintah: help, whoami, ls, neofetch, uptime, skills, ping, clear, login <pin>",
];

export function TerminalCli() {
  const copy = useCopy();
  const profile = useAppStore((s) => s.profile);
  const skills = useAppStore((s) => s.skills);
  const login = useAppStore((s) => s.login);
  const isAdmin = useAppStore((s) => s.isAdmin);
  const [lines, setLines] = useState<Line[]>([
    { kind: "out", text: "fais@smk9-tjkt:~$ boot --desk" },
    { kind: "out", text: "POS dashboard ready. ketik help." },
  ]);
  const [value, setValue] = useState("");
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [lines]);

  function run(raw: string) {
    const input = raw.trim();
    if (!input) return;
    const [cmd, ...rest] = input.split(/\s+/);
    const arg = rest.join(" ");
    const out: string[] = [];

    switch (cmd.toLowerCase()) {
      case "help":
        out.push(...HELP);
        break;
      case "whoami":
        out.push(`${profile.name} · ${profile.subtitle}`);
        break;
      case "ls":
        out.push("galeri/  project/  profil.md  cv  admin/");
        break;
      case "uptime":
        out.push("lab-node up, nginx active (running)");
        break;
      case "skills":
        out.push(skills.map((s) => `${s.name} ${s.percent}%`).join(" · "));
        break;
      case "neofetch":
        out.push(
          "OS: SMK 9 Surakarta · TJKT",
          "Host: Web Fais Aisyan",
          "Shell: posh 1.0",
          `Hire: ${profile.available ? "open" : "closed"}`,
        );
        break;
      case "ping":
        out.push(`PING ${arg || "fais.local"}: 8 bytes from lab ttl=64 time=1ms`);
        break;
      case "clear":
        setLines([]);
        return;
      case "login":
      case "sudo": {
        const ok = login(arg || "1234");
        out.push(ok ? "auth ok · shift open" : "auth failed");
        if (ok) toast.success(copy("loggedIn"));
        break;
      }
      default:
        out.push(`command not found: ${cmd}`);
    }

    setLines((prev) => [
      ...prev,
      { kind: "in", text: `fais@smk9:~$ ${input}` },
      ...out.map((text) => ({ kind: "out" as const, text })),
    ]);
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-bg shadow-[var(--shadow-border)]">
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-accent" />
        <span className="size-2 rounded-full bg-warn" />
        <span className="size-2 rounded-full bg-success" />
        <span className="ml-2 font-mono text-[11px] text-subtle">
          {copy("terminal")} {isAdmin ? "· root" : "· guest"}
        </span>
      </div>
      <div
        ref={scroller}
        className="h-48 overflow-y-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-muted"
      >
        {lines.map((line, i) => (
          <p
            key={`${i}-${line.text}`}
            className={line.kind === "in" ? "text-fg" : "text-muted"}
          >
            {line.text}
          </p>
        ))}
      </div>
      <form
        className="flex items-center gap-2 border-t border-border px-3 py-2"
        onSubmit={(e) => {
          e.preventDefault();
          run(value);
          setValue("");
        }}
      >
        <span className="font-mono text-[12px] text-accent">$</span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="h-8 flex-1 bg-transparent font-mono text-[12px] text-fg outline-none placeholder:text-subtle"
          placeholder="help"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
        />
      </form>
    </div>
  );
}
