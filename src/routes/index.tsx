import { createFileRoute } from "@tanstack/react-router";
import { AppShell } from "@/components/app-shell";
import { HydrateGate } from "@/components/hydrate-gate";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <HydrateGate>
      <AppShell />
    </HydrateGate>
  );
}
