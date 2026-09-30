import {
  FolderKanban,
  Images,
  LayoutDashboard,
  LogOut,
  Shield,
  User,
  type LucideIcon,
} from "lucide-react";
import type { CopyKey } from "./i18n";
import type { ViewId } from "./types";

export type NavItem = {
  id: ViewId | "logout";
  label: CopyKey;
  icon: LucideIcon;
};

export const NAV_ITEMS: NavItem[] = [
  { id: "galeri", label: "gallery", icon: Images },
  { id: "beranda", label: "home", icon: LayoutDashboard },
  { id: "profil", label: "profile", icon: User },
  { id: "project", label: "projects", icon: FolderKanban },
  { id: "admin", label: "admin", icon: Shield },
  { id: "logout", label: "logout", icon: LogOut },
];
