import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { toast } from "sonner";
import { Header } from "@/components/header";
import { LeftNav } from "@/components/left-nav";
import { RightRail } from "@/components/right-rail";
import { GalleryView } from "@/components/gallery-view";
import { HomeView } from "@/components/home-view";
import { ProfileView } from "@/components/profile-view";
import { ProjectsView } from "@/components/projects-view";
import { AdminView } from "@/components/admin-view";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NAV_ITEMS } from "@/lib/nav";
import { useAppStore, useCopy } from "@/lib/store";
import type { ViewId } from "@/lib/types";
import { cn } from "@/lib/utils";

export function AppShell() {
  const view = useAppStore((s) => s.view);
  const setView = useAppStore((s) => s.setView);
  const copy = useCopy();
  const removeGallery = useAppStore((s) => s.removeGallery);
  const removeProject = useAppStore((s) => s.removeProject);
  const reduce = useReducedMotion();

  const [navOpen, setNavOpen] = useState(false);
  const [railOpen, setRailOpen] = useState(false);
  const [pendingDelete, setPendingDelete] = useState<
    { type: "gallery" | "project"; id: string } | null
  >(null);
  const [galleryFocus, setGalleryFocus] = useState<string | null>(null);
  const [projectFocus, setProjectFocus] = useState<string | null>(null);

  function confirmDelete() {
    if (!pendingDelete) return;
    if (pendingDelete.type === "gallery") removeGallery(pendingDelete.id);
    else removeProject(pendingDelete.id);
    toast.success(copy("deleted"));
    setPendingDelete(null);
  }

  const mobileNav = NAV_ITEMS.filter((i) => i.id !== "logout");

  return (
    <TooltipProvider delayDuration={200}>
      <div className="flex h-dvh flex-col overflow-hidden bg-bg text-fg pos-grain">
        <Header
          onOpenNav={() => setNavOpen(true)}
          onOpenProfile={() => setRailOpen(true)}
        />
        <div className="flex min-h-0 flex-1">
          <aside className="hidden w-56 shrink-0 border-r border-border lg:block">
            <LeftNav />
          </aside>

          <main className="min-w-0 flex-1 overflow-hidden">
            <ScrollArea className="h-full">
              <div className="px-4 py-5 pb-24 md:px-6 md:pb-8">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={view}
                    initial={
                      reduce ? false : { opacity: 0, y: 8, filter: "blur(4px)" }
                    }
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={
                      reduce
                        ? undefined
                        : { opacity: 0, y: -8, filter: "blur(4px)" }
                    }
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {view === "galeri" ? (
                      <GalleryView
                        onEdit={(id) => {
                          setGalleryFocus(id);
                          setView("admin");
                        }}
                        onDelete={(id) =>
                          setPendingDelete({ type: "gallery", id })
                        }
                      />
                    ) : null}
                    {view === "beranda" ? <HomeView /> : null}
                    {view === "profil" ? <ProfileView /> : null}
                    {view === "project" ? (
                      <ProjectsView
                        onEdit={(id) => {
                          setProjectFocus(id);
                          setView("admin");
                        }}
                        onDelete={(id) =>
                          setPendingDelete({ type: "project", id })
                        }
                      />
                    ) : null}
                    {view === "admin" ? (
                      <AdminView
                        galleryId={galleryFocus}
                        projectId={projectFocus}
                      />
                    ) : null}
                  </motion.div>
                </AnimatePresence>
              </div>
            </ScrollArea>
          </main>

          <div className="hidden w-[300px] shrink-0 border-l border-border xl:block">
            <RightRail />
          </div>
        </div>

        <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] lg:hidden">
          <div className="grid grid-cols-5">
            {mobileNav.map((item) => {
              const Icon = item.icon;
              const active = view === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setView(item.id as ViewId)}
                  className={cn(
                    "flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-medium",
                    active ? "text-accent" : "text-muted",
                  )}
                >
                  <Icon className="size-4" />
                  {copy(item.label)}
                </button>
              );
            })}
          </div>
        </nav>

        <Sheet open={navOpen} onOpenChange={setNavOpen}>
          <SheetContent side="left" className="p-0">
            <SheetHeader>
              <SheetTitle>{copy("menu")}</SheetTitle>
            </SheetHeader>
            <LeftNav compact onNavigate={() => setNavOpen(false)} />
          </SheetContent>
        </Sheet>

        <Sheet open={railOpen} onOpenChange={setRailOpen}>
          <SheetContent side="right" className="p-0">
            <SheetHeader>
              <SheetTitle>{copy("profile")}</SheetTitle>
            </SheetHeader>
            <div className="min-h-0 flex-1 overflow-y-auto">
              <RightRail />
            </div>
          </SheetContent>
        </Sheet>

        <AlertDialog
          open={!!pendingDelete}
          onOpenChange={(open) => !open && setPendingDelete(null)}
        >
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>{copy("remove")}</AlertDialogTitle>
              <AlertDialogDescription>
                {copy("deleteConfirm")}
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>{copy("cancel")}</AlertDialogCancel>
              <AlertDialogAction onClick={confirmDelete}>
                {copy("remove")}
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </TooltipProvider>
  );
}
