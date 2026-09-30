export const CATEGORIES = [
  "Networking",
  "Web Dev",
  "Sertifikasi",
  "Hardware",
] as const;

export type Category = (typeof CATEGORIES)[number];
export type FilterId = "Semua" | Category;
export type Lang = "id" | "en";
export type ViewId = "galeri" | "beranda" | "profil" | "project" | "admin";

export type GalleryItem = {
  id: string;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
  link?: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  liveUrl?: string;
  repoUrl?: string;
  category: Category;
};

export type ContactChannel = {
  label: string;
  url: string;
};

export type Contacts = {
  instagram: ContactChannel;
  email: ContactChannel;
  github: ContactChannel;
  linkedin: ContactChannel;
};

export type Profile = {
  name: string;
  subtitle: string;
  bio: string;
  education: string;
  softSkills: string[];
  avatarUrl: string;
  available: boolean;
  availabilityLabel: string;
  cvUrl: string;
};

export type Skill = {
  id: string;
  name: string;
  percent: number;
};

export type Notice = {
  id: string;
  title: string;
  body: string;
  time: string;
  read: boolean;
};
