import type {
  Contacts,
  GalleryItem,
  Notice,
  Profile,
  ProjectItem,
  Skill,
} from "./types";

export const DEFAULT_PIN = "1234";
export const MASTER_ALIAS = "admin";

export const defaultProfile: Profile = {
  name: "Fais Aisyan",
  subtitle: "Siswa SMK 9 Surakarta | Kelas 12 TJKT 1",
  bio: "Siswa Teknik Jaringan Komputer dan Telekomunikasi yang merancang infrastruktur seperti meracik struk warung: rapi, cepat, dan siap produksi. Fokus pada MikroTik, Linux Server, Cisco, hardware troubleshooting, dan web development untuk UMKM.",
  education:
    "SMK Negeri 9 Surakarta — Jurusan TJKT (Teknik Jaringan Komputer dan Telekomunikasi), Kelas 12 TJKT 1. Praktikum harian: konfigurasi router, switching, fiber optic, server Linux, dan pembangunan antarmuka web untuk kebutuhan sekolah serta mitra industri.",
  softSkills: [
    "Problem Solving",
    "Komunikasi",
    "Kerja Tim",
    "Ketelitian",
    "Disiplin Shift",
    "Dokumentasi",
  ],
  avatarUrl: "/images/avatar.jpg",
  available: true,
  availabilityLabel: "Open for Hire / Internship",
  cvUrl: "/cv",
};

export const defaultContacts: Contacts = {
  instagram: {
    label: "@faisaisyan",
    url: "https://instagram.com/faisaisyan",
  },
  email: {
    label: "fais.aisyan@gmail.com",
    url: "mailto:fais.aisyan@gmail.com",
  },
  github: {
    label: "github.com/faisaisyan",
    url: "https://github.com/faisaisyan",
  },
  linkedin: {
    label: "/in/faisaisyan",
    url: "https://linkedin.com/in/faisaisyan",
  },
};

export const defaultSkills: Skill[] = [
  { id: "sk-mikrotik", name: "MikroTik", percent: 86 },
  { id: "sk-linux", name: "Linux Server", percent: 81 },
  { id: "sk-cisco", name: "Cisco / Packet Tracer", percent: 76 },
  { id: "sk-web", name: "Web Dev", percent: 72 },
  { id: "sk-hw", name: "Hardware Troubleshooting", percent: 80 },
  { id: "sk-fiber", name: "Fiber Optic", percent: 64 },
];

export const defaultGallery: GalleryItem[] = [
  {
    id: "g-mikrotik",
    title: "Konfigurasi MikroTik RB",
    category: "Networking",
    imageUrl: "/images/mikrotik.jpg",
    description:
      "Setup routing, NAT, firewall filter, dan bandwidth queue pada perangkat MikroTik untuk lab sekolah dan simulasi warung hotspot.",
    link: "https://help.mikrotik.com",
  },
  {
    id: "g-web",
    title: "Dashboard Web UMKM",
    category: "Web Dev",
    imageUrl: "/images/webdev.jpg",
    description:
      "Antarmuka dashboard gelap dengan kartu metrik, filter, dan struk digital — fondasi visual untuk POS warung modern.",
    link: "https://github.com",
  },
  {
    id: "g-cert",
    title: "Sertifikasi Kompetensi TKJ",
    category: "Sertifikasi",
    imageUrl: "/images/sertifikasi.jpg",
    description:
      "Dokumen kompetensi jaringan dan perangkat keras dari program keahlian TJKT — bukti praktik terukur, bukan sekadar teori kelas.",
  },
  {
    id: "g-hw",
    title: "Assembly PC Lab TJKT",
    category: "Hardware",
    imageUrl: "/images/hardware.jpg",
    description:
      "Perakitan, tracing kerusakan, dan maintenance unit lab: PSU, RAM, storage, dan kabelisasi rapi sesuai SOP bengkel.",
  },
  {
    id: "g-cisco",
    title: "Lab Switching Cisco",
    category: "Networking",
    imageUrl: "/images/cisco.jpg",
    description:
      "Topologi VLAN, trunk, dan troubleshooting kabel pada meja lab Cisco. Simulasi Packet Tracer diterjemahkan ke perangkat fisik.",
    link: "https://www.netacad.com",
  },
  {
    id: "g-linux",
    title: "Hardening Ubuntu Server",
    category: "Networking",
    imageUrl: "/images/linux.jpg",
    description:
      "Instalasi layanan web, SSH key-only, ufw, dan monitoring uptime pada Ubuntu Server untuk kebutuhan lab dan demo magang.",
  },
  {
    id: "g-fiber",
    title: "Splicing Fiber Optic",
    category: "Hardware",
    imageUrl: "/images/fiber.jpg",
    description:
      "Tray splice, cleaver, dan ukur redaman. Praktik FTTH skala lab untuk memahami last-mile yang dipakai ISP kota.",
  },
  {
    id: "g-pos",
    title: "Kasir Warung Digital",
    category: "Web Dev",
    imageUrl: "/images/pos.jpg",
    description:
      "Konsep POS malam hari: struk, shift, dan grid produk. Diterjemahkan ke portofolio dashboard tiga kolom ini.",
    link: "https://github.com",
  },
];

export const defaultProjects: ProjectItem[] = [
  {
    id: "p-pos",
    title: "POS Warung Digital",
    description:
      "Sistem kasir ringan untuk warung: katalog, struk, dan status shift. Dibangun sebagai dashboard gelap yang bisa dikelola langsung dari browser.",
    tags: ["React", "Zustand", "Tailwind", "LocalStorage"],
    imageUrl: "/images/pos.jpg",
    liveUrl: "/",
    repoUrl: "https://github.com/faisaisyan",
    category: "Web Dev",
  },
  {
    id: "p-monitor",
    title: "Network Monitoring Desk",
    description:
      "Panel NOC sederhana: CPU, RAM, uptime, dan sparkline tautan. Dirancang untuk piket lab TJKT dan laporan magang.",
    tags: ["Linux", "Recharts", "CLI"],
    imageUrl: "/images/monitoring.jpg",
    liveUrl: "/",
    repoUrl: "https://github.com/faisaisyan",
    category: "Networking",
  },
  {
    id: "p-hotspot",
    title: "Captive Portal SMK 9",
    description:
      "Halaman login hotspot MikroTik bertema sekolah: kuota siswa, voucher guru, dan isolasi VLAN lab.",
    tags: ["MikroTik", "Hotspot", "HTML"],
    imageUrl: "/images/linux.jpg",
    repoUrl: "https://github.com/faisaisyan",
    category: "Networking",
  },
  {
    id: "p-cms",
    title: "Portfolio CMS Lokal",
    description:
      "CMS di dalam portofolio ini: CRUD galeri, project, kontak, dan profil tersimpan di LocalStorage — tanpa server.",
    tags: ["React", "CMS", "SPA"],
    imageUrl: "/images/webdev.jpg",
    liveUrl: "/",
    repoUrl: "https://github.com/faisaisyan",
    category: "Web Dev",
  },
];

export const defaultNotices: Notice[] = [
  {
    id: "n-1",
    title: "Shift magang dibuka",
    body: "Status Open for Hire aktif. Perbarui CV sebelum kirim ke industri.",
    time: "08:12",
    read: false,
  },
  {
    id: "n-2",
    title: "Galeri tersinkron",
    body: "8 karya lab TJKT siap ditampilkan di grid kasir.",
    time: "Kemarin",
    read: false,
  },
  {
    id: "n-3",
    title: "Backup LocalStorage",
    body: "Perubahan admin tersimpan di browser ini. Reset tersedia di panel.",
    time: "Senin",
    read: true,
  },
];
