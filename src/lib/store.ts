import { create } from "zustand";
import { supabase } from "@/supabaseClient";
import {
  DEFAULT_PIN,
  MASTER_ALIAS,
  defaultContacts,
  defaultGallery,
  defaultNotices,
  defaultProfile,
  defaultProjects,
  defaultSkills,
} from "./defaults";
import type { CopyKey } from "./i18n";
import { t } from "./i18n";
import type {
  Contacts,
  GalleryItem,
  Lang,
  Notice,
  Profile,
  ProjectItem,
  Skill,
  ViewId,
} from "./types";
import { uid } from "./utils";

export type AppState = {
  gallery: GalleryItem[];
  projects: ProjectItem[];
  contacts: Contacts;
  profile: Profile;
  skills: Skill[];
  notifications: Notice[];
  isAdmin: boolean;
  lang: Lang;
  adminPin: string;
  view: ViewId;
  hydrated: boolean;
  
  fetchGallery: () => Promise<void>;
  setHydrated: (v: boolean) => void;
  setView: (v: ViewId) => void;
  setLang: (lang: Lang) => void;
  login: (secret: string) => boolean;
  logout: () => void;
  resetData: () => void;
  setAdminPin: (pin: string) => void;
  addGallery: (item: Omit<GalleryItem, "id">) => Promise<void>;
  updateGallery: (id: string, patch: Partial<GalleryItem>) => Promise<void>;
  removeGallery: (id: string) => Promise<void>;
  addProject: (item: Omit<ProjectItem, "id">) => void;
  updateProject: (id: string, patch: Partial<ProjectItem>) => void;
  removeProject: (id: string) => void;
  setContacts: (contacts: Contacts) => void;
  setProfile: (patch: Partial<Profile>) => void;
  setSkills: (skills: Skill[]) => void;
  addSkill: (name: string, percent: number) => void;
  removeSkill: (id: string) => void;
  markNoticesRead: () => void;
};

export function useCopy() {
  const lang = useAppStore((s) => s.lang);
  return (key: CopyKey) => t(lang, key);
}

export const useAppStore = create<AppState>((set, get) => ({
  gallery: defaultGallery,
  projects: defaultProjects,
  contacts: defaultContacts,
  profile: defaultProfile,
  skills: defaultSkills,
  notifications: defaultNotices,
  isAdmin: false,
  lang: "id",
  adminPin: DEFAULT_PIN,
  view: "galeri",
  hydrated: false,

  fetchGallery: async () => {
    try {
      const { data, error } = await supabase.from("galeri").select("*");
      if (!error && data && data.length > 0) {
        set({ gallery: data });
      }
    } catch (err) {
      console.error("Gagal mengambil data dari Supabase:", err);
    }
  },

  setHydrated: (v) => set({ hydrated: v }),
  setView: (view) => set({ view }),
  setLang: (lang) => set({ lang }),
  login: (secret) => {
    const value = secret.trim().toLowerCase();
    const pin = get().adminPin.trim().toLowerCase();
    const ok =
      value === pin ||
      value === DEFAULT_PIN ||
      value === MASTER_ALIAS;
    if (ok) {
      set({
        isAdmin: true,
        notifications: [
          {
            id: uid(),
            title: "Admin login",
            body: "Shift dibuka dari terminal kasir.",
            time: new Date().toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            read: false,
          },
          ...get().notifications,
        ].slice(0, 8),
      });
    }
    return ok;
  },
  logout: () => set({ isAdmin: false, view: "galeri" }),
  resetData: () =>
    set({
      gallery: defaultGallery,
      projects: defaultProjects,
      contacts: defaultContacts,
      profile: defaultProfile,
      skills: defaultSkills,
      notifications: defaultNotices,
      adminPin: DEFAULT_PIN,
    }),
  setAdminPin: (pin) => set({ adminPin: pin.trim() || DEFAULT_PIN }),

  addGallery: async (item) => {
    const newItem = { ...item, id: uid() };
    set({ gallery: [newItem, ...get().gallery] });
    await supabase.from("galeri").insert([newItem]);
  },

  updateGallery: async (id, patch) => {
    set({
      gallery: get().gallery.map((row) =>
        row.id === id ? { ...row, ...patch } : row,
      ),
    });
    await supabase.from("galeri").update(patch).eq("id", id);
  },

  removeGallery: async (id) => {
    set({ gallery: get().gallery.filter((row) => row.id !== id) });
    await supabase.from("galeri").delete().eq("id", id);
  },

  addProject: (item) =>
    set({ projects: [{ ...item, id: uid() }, ...get().projects] }),
  updateProject: (id, patch) =>
    set({
      projects: get().projects.map((row) =>
        row.id === id ? { ...row, ...patch } : row,
      ),
    }),
  removeProject: (id) =>
    set({ projects: get().projects.filter((row) => row.id !== id) }),
  setContacts: (contacts) => set({ contacts }),
  setProfile: (patch) =>
    set({ profile: { ...get().profile, ...patch } }),
  setSkills: (skills) => set({ skills }),
  addSkill: (name, percent) =>
    set({
      skills: [
        ...get().skills,
        {
          id: uid(),
          name,
          percent: Math.min(100, Math.max(0, percent)),
        },
      ],
    }),
  removeSkill: (id) =>
    set({ skills: get().skills.filter((row) => row.id !== id) }),
  markNoticesRead: () =>
    set({
      notifications: get().notifications.map((n) => ({
        ...n,
        read: true,
      })),
    }),
}));