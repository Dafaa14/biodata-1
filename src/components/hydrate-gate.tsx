import { useEffect, type ReactNode } from "react";
import { BootScreen } from "@/components/boot-screen";
import { useAppStore } from "@/lib/store";

export function HydrateGate({ children }: { children: ReactNode }) {
  const hydrated = useAppStore((s) => s.hydrated);
  const setHydrated = useAppStore((s) => s.setHydrated);

  useEffect(() => {
    let done = false;
    const finish = () => {
      if (done) return;
      done = true;
      setHydrated(true);
    };

    const persist = useAppStore.persist;
    if (persist.hasHydrated()) {
      finish();
      return;
    }

    const unsub = persist.onFinishHydration(finish);
    void persist.rehydrate();
    if (persist.hasHydrated()) finish();
    const timer = window.setTimeout(finish, 80);

    return () => {
      unsub();
      window.clearTimeout(timer);
    };
  }, [setHydrated]);

  if (!hydrated) return <BootScreen />;
  return children;
}
