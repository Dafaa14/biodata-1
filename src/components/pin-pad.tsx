import { useState } from "react";
import { motion } from "framer-motion";
import { Delete, KeyRound } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAppStore, useCopy } from "@/lib/store";
import { cn } from "@/lib/utils";

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "C", "0", "⌫"];

export function PinPad() {
  const login = useAppStore((s) => s.login);
  const copy = useCopy();
  const [pin, setPin] = useState("");
  const [text, setText] = useState("");
  const [shake, setShake] = useState(0);

  function attempt(secret: string) {
    const ok = login(secret);
    if (ok) {
      toast.success(copy("loggedIn"));
      setPin("");
      setText("");
      return;
    }
    setShake((n) => n + 1);
    toast.error(copy("wrongPin"));
  }

  function press(key: string) {
    if (key === "C") {
      setPin("");
      return;
    }
    if (key === "⌫") {
      setPin((p) => p.slice(0, -1));
      return;
    }
    setPin((p) => (p.length >= 8 ? p : p + key));
  }

  return (
    <div className="rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]">
      <div className="mb-4 flex items-center gap-2">
        <KeyRound className="size-4 text-accent" />
        <h2 className="font-display text-lg font-semibold">
          {copy("loginTitle")}
        </h2>
      </div>
      <p className="mb-4 text-sm text-muted">{copy("loginHint")}</p>

      <motion.div
        key={shake}
        animate={shake ? { x: [0, -8, 8, -6, 6, 0] } : { x: 0 }}
        transition={{ duration: 0.32 }}
        className="mb-4 flex h-12 items-center justify-center gap-2 rounded-xl bg-bg"
      >
        {Array.from({ length: Math.max(4, pin.length) }).map((_, i) => (
          <span
            key={i}
            className={cn(
              "size-2.5 rounded-full",
              i < pin.length ? "bg-accent" : "bg-border",
            )}
          />
        ))}
      </motion.div>

      <div className="grid grid-cols-3 gap-2">
        {KEYS.map((key) => (
          <Button
            key={key}
            type="button"
            variant={key === "C" ? "outline" : "secondary"}
            className="h-12 font-mono text-base"
            onClick={() => press(key)}
          >
            {key === "⌫" ? <Delete className="size-4" /> : key}
          </Button>
        ))}
      </div>

      <Button className="mt-3 w-full" onClick={() => attempt(pin)}>
        {copy("enter")}
      </Button>

      <form
        className="mt-5 flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          attempt(text);
        }}
      >
        <Input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={copy("password")}
          autoComplete="off"
        />
        <Button type="submit" variant="secondary">
          {copy("enter")}
        </Button>
      </form>
    </div>
  );
}
