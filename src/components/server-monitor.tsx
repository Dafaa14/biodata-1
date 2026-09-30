import { useEffect, useMemo, useState } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import { Cpu, HardDrive, Timer } from "lucide-react";
import { useCopy } from "@/lib/store";

function rand(min: number, max: number) {
  return min + Math.random() * (max - min);
}

export function ServerMonitor() {
  const copy = useCopy();
  const [cpu, setCpu] = useState(32);
  const [ram, setRam] = useState(41);
  const [started] = useState(() => Date.now());
  const [now, setNow] = useState(() => Date.now());
  const [series, setSeries] = useState(() =>
    Array.from({ length: 24 }, (_, i) => ({ i, v: 28 + rand(0, 18) })),
  );

  useEffect(() => {
    const id = window.setInterval(() => {
      setCpu((n) => Math.min(92, Math.max(12, n + rand(-8, 8))));
      setRam((n) => Math.min(88, Math.max(22, n + rand(-4, 4))));
      setNow(Date.now());
      setSeries((prev) => {
        const next = prev.slice(1);
        next.push({ i: (prev.at(-1)?.i ?? 0) + 1, v: 20 + rand(0, 50) });
        return next;
      });
    }, 1400);
    return () => window.clearInterval(id);
  }, []);

  const uptime = useMemo(() => {
    const s = Math.floor((now - started) / 1000);
    const h = String(Math.floor(s / 3600)).padStart(2, "0");
    const m = String(Math.floor((s % 3600) / 60)).padStart(2, "0");
    const sec = String(s % 60).padStart(2, "0");
    return `${h}:${m}:${sec}`;
  }, [now, started]);

  const tiles = [
    { icon: Cpu, label: copy("cpu"), value: `${cpu.toFixed(0)}%` },
    { icon: HardDrive, label: copy("ram"), value: `${ram.toFixed(0)}%` },
    { icon: Timer, label: copy("uptime"), value: uptime },
  ];

  return (
    <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
      <h2 className="font-display text-lg font-semibold">{copy("monitor")}</h2>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {tiles.map((tile) => {
          const Icon = tile.icon;
          return (
            <div key={tile.label} className="rounded-xl bg-bg px-3 py-3">
              <Icon className="size-3.5 text-muted" />
              <p className="font-display mt-2 text-lg font-semibold tabular">
                {tile.value}
              </p>
              <p className="font-mono text-[10px] tracking-widest text-subtle uppercase">
                {tile.label}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 h-24">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={series}>
            <Area
              type="monotone"
              dataKey="v"
              stroke="var(--color-accent)"
              fill="var(--color-accent)"
              fillOpacity={0.16}
              strokeWidth={1.5}
              isAnimationActive={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
