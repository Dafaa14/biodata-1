import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { A as Slot, P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/hydrate-gate-BWLmLuX7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid() {
	if (typeof crypto !== "undefined" && crypto.randomUUID) return crypto.randomUUID();
	return `id_${Math.random().toString(36).slice(2, 10)}`;
}
function initials(name) {
	return name.split(/\s+/).filter(Boolean).slice(0, 2).map((part) => part[0]?.toUpperCase() ?? "").join("");
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 active:scale-[0.96]", {
	variants: {
		variant: {
			default: "bg-accent text-accent-fg hover:bg-accent/90",
			secondary: "bg-surface-2 text-fg shadow-[var(--shadow-border)] hover:shadow-[var(--shadow-border-hover)]",
			outline: "border border-border bg-transparent text-fg hover:bg-surface-2",
			ghost: "text-fg hover:bg-surface-2",
			link: "text-accent underline-offset-4 hover:underline"
		},
		size: {
			default: "h-10 min-h-10 px-4 py-2",
			sm: "h-9 min-h-9 rounded-md px-3",
			lg: "h-11 min-h-11 rounded-lg px-6",
			icon: "size-10 min-h-10 min-w-10"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var badgeVariants = cva("inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide", {
	variants: { variant: {
		default: "border-transparent bg-accent text-accent-fg",
		outline: "border-border text-muted",
		success: "border-transparent bg-success/15 text-success",
		muted: "border-transparent bg-surface-2 text-muted"
	} },
	defaultVariants: { variant: "default" }
});
function Badge({ className, variant, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn(badgeVariants({ variant }), className),
		...props
	});
}
var DEFAULT_PIN = "1234";
var defaultProfile = {
	name: "Fais Aisyan",
	subtitle: "Siswa SMK 9 Surakarta | Kelas 12 TJKT 1",
	bio: "Siswa Teknik Jaringan Komputer dan Telekomunikasi yang merancang infrastruktur seperti meracik struk warung: rapi, cepat, dan siap produksi. Fokus pada MikroTik, Linux Server, Cisco, hardware troubleshooting, dan web development untuk UMKM.",
	education: "SMK Negeri 9 Surakarta — Jurusan TJKT (Teknik Jaringan Komputer dan Telekomunikasi), Kelas 12 TJKT 1. Praktikum harian: konfigurasi router, switching, fiber optic, server Linux, dan pembangunan antarmuka web untuk kebutuhan sekolah serta mitra industri.",
	softSkills: [
		"Problem Solving",
		"Komunikasi",
		"Kerja Tim",
		"Ketelitian",
		"Disiplin Shift",
		"Dokumentasi"
	],
	avatarUrl: "/images/avatar.jpg",
	available: true,
	availabilityLabel: "Open for Hire / Internship",
	cvUrl: "/cv"
};
var defaultContacts = {
	instagram: {
		label: "@faisaisyan",
		url: "https://instagram.com/faisaisyan"
	},
	email: {
		label: "fais.aisyan@gmail.com",
		url: "mailto:fais.aisyan@gmail.com"
	},
	github: {
		label: "github.com/faisaisyan",
		url: "https://github.com/faisaisyan"
	},
	linkedin: {
		label: "/in/faisaisyan",
		url: "https://linkedin.com/in/faisaisyan"
	}
};
var defaultSkills = [
	{
		id: "sk-mikrotik",
		name: "MikroTik",
		percent: 86
	},
	{
		id: "sk-linux",
		name: "Linux Server",
		percent: 81
	},
	{
		id: "sk-cisco",
		name: "Cisco / Packet Tracer",
		percent: 76
	},
	{
		id: "sk-web",
		name: "Web Dev",
		percent: 72
	},
	{
		id: "sk-hw",
		name: "Hardware Troubleshooting",
		percent: 80
	},
	{
		id: "sk-fiber",
		name: "Fiber Optic",
		percent: 64
	}
];
var defaultGallery = [
	{
		id: "g-mikrotik",
		title: "Konfigurasi MikroTik RB",
		category: "Networking",
		imageUrl: "/images/mikrotik.jpg",
		description: "Setup routing, NAT, firewall filter, dan bandwidth queue pada perangkat MikroTik untuk lab sekolah dan simulasi warung hotspot.",
		link: "https://help.mikrotik.com"
	},
	{
		id: "g-web",
		title: "Dashboard Web UMKM",
		category: "Web Dev",
		imageUrl: "/images/webdev.jpg",
		description: "Antarmuka dashboard gelap dengan kartu metrik, filter, dan struk digital — fondasi visual untuk POS warung modern.",
		link: "https://github.com"
	},
	{
		id: "g-cert",
		title: "Sertifikasi Kompetensi TKJ",
		category: "Sertifikasi",
		imageUrl: "/images/sertifikasi.jpg",
		description: "Dokumen kompetensi jaringan dan perangkat keras dari program keahlian TJKT — bukti praktik terukur, bukan sekadar teori kelas."
	},
	{
		id: "g-hw",
		title: "Assembly PC Lab TJKT",
		category: "Hardware",
		imageUrl: "/images/hardware.jpg",
		description: "Perakitan, tracing kerusakan, dan maintenance unit lab: PSU, RAM, storage, dan kabelisasi rapi sesuai SOP bengkel."
	},
	{
		id: "g-cisco",
		title: "Lab Switching Cisco",
		category: "Networking",
		imageUrl: "/images/cisco.jpg",
		description: "Topologi VLAN, trunk, dan troubleshooting kabel pada meja lab Cisco. Simulasi Packet Tracer diterjemahkan ke perangkat fisik.",
		link: "https://www.netacad.com"
	},
	{
		id: "g-linux",
		title: "Hardening Ubuntu Server",
		category: "Networking",
		imageUrl: "/images/linux.jpg",
		description: "Instalasi layanan web, SSH key-only, ufw, dan monitoring uptime pada Ubuntu Server untuk kebutuhan lab dan demo magang."
	},
	{
		id: "g-fiber",
		title: "Splicing Fiber Optic",
		category: "Hardware",
		imageUrl: "/images/fiber.jpg",
		description: "Tray splice, cleaver, dan ukur redaman. Praktik FTTH skala lab untuk memahami last-mile yang dipakai ISP kota."
	},
	{
		id: "g-pos",
		title: "Kasir Warung Digital",
		category: "Web Dev",
		imageUrl: "/images/pos.jpg",
		description: "Konsep POS malam hari: struk, shift, dan grid produk. Diterjemahkan ke portofolio dashboard tiga kolom ini.",
		link: "https://github.com"
	}
];
var defaultProjects = [
	{
		id: "p-pos",
		title: "POS Warung Digital",
		description: "Sistem kasir ringan untuk warung: katalog, struk, dan status shift. Dibangun sebagai dashboard gelap yang bisa dikelola langsung dari browser.",
		tags: [
			"React",
			"Zustand",
			"Tailwind",
			"LocalStorage"
		],
		imageUrl: "/images/pos.jpg",
		liveUrl: "/",
		repoUrl: "https://github.com/faisaisyan",
		category: "Web Dev"
	},
	{
		id: "p-monitor",
		title: "Network Monitoring Desk",
		description: "Panel NOC sederhana: CPU, RAM, uptime, dan sparkline tautan. Dirancang untuk piket lab TJKT dan laporan magang.",
		tags: [
			"Linux",
			"Recharts",
			"CLI"
		],
		imageUrl: "/images/monitoring.jpg",
		liveUrl: "/",
		repoUrl: "https://github.com/faisaisyan",
		category: "Networking"
	},
	{
		id: "p-hotspot",
		title: "Captive Portal SMK 9",
		description: "Halaman login hotspot MikroTik bertema sekolah: kuota siswa, voucher guru, dan isolasi VLAN lab.",
		tags: [
			"MikroTik",
			"Hotspot",
			"HTML"
		],
		imageUrl: "/images/linux.jpg",
		repoUrl: "https://github.com/faisaisyan",
		category: "Networking"
	},
	{
		id: "p-cms",
		title: "Portfolio CMS Lokal",
		description: "CMS di dalam portofolio ini: CRUD galeri, project, kontak, dan profil tersimpan di LocalStorage — tanpa server.",
		tags: [
			"React",
			"CMS",
			"SPA"
		],
		imageUrl: "/images/webdev.jpg",
		liveUrl: "/",
		repoUrl: "https://github.com/faisaisyan",
		category: "Web Dev"
	}
];
var defaultNotices = [
	{
		id: "n-1",
		title: "Shift magang dibuka",
		body: "Status Open for Hire aktif. Perbarui CV sebelum kirim ke industri.",
		time: "08:12",
		read: false
	},
	{
		id: "n-2",
		title: "Galeri tersinkron",
		body: "8 karya lab TJKT siap ditampilkan di grid kasir.",
		time: "Kemarin",
		read: false
	},
	{
		id: "n-3",
		title: "Backup LocalStorage",
		body: "Perubahan admin tersimpan di browser ini. Reset tersedia di panel.",
		time: "Senin",
		read: true
	}
];
var dict = {
	id: {
		brand: "Web Fais Aisyan",
		brandShort: "FA",
		gallery: "Galeri",
		home: "Beranda",
		profile: "Profil",
		projects: "Project",
		admin: "Web Admin",
		logout: "Logout",
		all: "Semua",
		networking: "Networking",
		webdev: "Web Dev",
		cert: "Sertifikasi",
		hardware: "Hardware",
		detail: "Detail",
		visit: "Visit Link",
		edit: "Edit",
		remove: "Hapus",
		downloadCv: "Download CV",
		openHire: "Open for Hire",
		guest: "Tamu",
		adminOn: "Admin",
		shiftOpen: "SHIFT OPEN",
		shiftClosed: "SHIFT TUTUP",
		sku: "SKU",
		item: "item",
		filter: "Filter",
		search: "Cari karya…",
		empty: "Rak masih kosong.",
		emptyHint: "Ubah filter atau tambah item dari Web Admin.",
		heroKicker: "Kasir portofolio · TJKT",
		heroTitle: "Struk keahlian, siap diserahkan ke industri.",
		heroBody: "Dashboard tiga kolom ini menata galeri, project, dan profil Fais Aisyan seperti POS warung modern: cepat dibaca, mudah di-update, dan siap magang.",
		statsWorks: "Karya",
		statsProjects: "Project",
		statsSkills: "Skill",
		featured: "Menu unggulan",
		latestProjects: "Project aktif",
		education: "Pendidikan",
		softSkills: "Soft skills",
		bio: "Bio",
		liveDemo: "Live Demo",
		repo: "Repo",
		tech: "Tech stack",
		loginTitle: "Masuk Admin",
		loginHint: "PIN default 1234 — atau ketik admin.",
		enter: "Masuk",
		pin: "PIN",
		password: "Password",
		wrongPin: "PIN / password salah.",
		loggedIn: "Sesi admin dibuka.",
		loggedOut: "Sesi admin ditutup.",
		resetDone: "Data dikembalikan ke default.",
		saved: "Tersimpan.",
		deleted: "Item dihapus.",
		added: "Item ditambah.",
		control: "Admin Control Panel",
		monitor: "Server Monitor",
		cpu: "CPU",
		ram: "RAM",
		uptime: "Uptime",
		terminal: "Terminal CLI",
		add: "Tambah",
		save: "Simpan",
		cancel: "Batal",
		title: "Judul",
		category: "Kategori",
		imageUrl: "URL Gambar",
		description: "Deskripsi",
		link: "Tautan",
		tags: "Tag (koma)",
		liveUrl: "URL Live",
		repoUrl: "URL Repo",
		contacts: "Kontak",
		availability: "Status ketersediaan",
		cvUrl: "URL CV",
		avatarUrl: "URL Avatar",
		name: "Nama",
		subtitle: "Subtitle",
		reset: "Reset data default",
		resetConfirm: "Semua konten kembali ke pabrik. Lanjut?",
		deleteConfirm: "Hapus item ini dari rak?",
		logoutConfirm: "Keluar dari mode admin?",
		pinNew: "PIN baru",
		skills: "Keahlian",
		percent: "Persen",
		notifications: "Notifikasi",
		lang: "Bahasa",
		close: "Tutup",
		printCv: "Cetak / Simpan PDF",
		cvKicker: "Curriculum Vitae",
		boot: "Booting dashboard…",
		noLink: "Tautan belum diisi.",
		overlayEdit: "Edit kartu",
		overlayDel: "Hapus kartu",
		contactBar: "Kontak",
		profileCard: "Profil kasir",
		menu: "Menu",
		more: "Lainnya",
		viewGrid: "Tampilan rak",
		adminOnly: "Khusus pemilik",
		notAdmin: "Belum masuk sebagai admin.",
		danger: "Zona berbahaya",
		system: "Sistem",
		changePin: "Ubah PIN"
	},
	en: {
		brand: "Web Fais Aisyan",
		brandShort: "FA",
		gallery: "Gallery",
		home: "Home",
		profile: "Profile",
		projects: "Projects",
		admin: "Web Admin",
		logout: "Logout",
		all: "All",
		networking: "Networking",
		webdev: "Web Dev",
		cert: "Certification",
		hardware: "Hardware",
		detail: "Detail",
		visit: "Visit Link",
		edit: "Edit",
		remove: "Delete",
		downloadCv: "Download CV",
		openHire: "Open for Hire",
		guest: "Guest",
		adminOn: "Admin",
		shiftOpen: "SHIFT OPEN",
		shiftClosed: "SHIFT CLOSED",
		sku: "SKU",
		item: "items",
		filter: "Filter",
		search: "Search work…",
		empty: "The rack is empty.",
		emptyHint: "Change filters or add items from Web Admin.",
		heroKicker: "Portfolio register · TJKT",
		heroTitle: "A skill receipt, ready for industry.",
		heroBody: "This three-column desk lays out Fais Aisyan’s gallery, projects, and profile like a modern warung POS: scannable, editable, internship-ready.",
		statsWorks: "Works",
		statsProjects: "Projects",
		statsSkills: "Skills",
		featured: "Featured menu",
		latestProjects: "Active projects",
		education: "Education",
		softSkills: "Soft skills",
		bio: "Bio",
		liveDemo: "Live Demo",
		repo: "Repo",
		tech: "Tech stack",
		loginTitle: "Admin sign-in",
		loginHint: "Default PIN 1234 — or type admin.",
		enter: "Enter",
		pin: "PIN",
		password: "Password",
		wrongPin: "Wrong PIN / password.",
		loggedIn: "Admin shift opened.",
		loggedOut: "Admin shift closed.",
		resetDone: "Content restored to defaults.",
		saved: "Saved.",
		deleted: "Item removed.",
		added: "Item added.",
		control: "Admin Control Panel",
		monitor: "Server Monitor",
		cpu: "CPU",
		ram: "RAM",
		uptime: "Uptime",
		terminal: "Terminal CLI",
		add: "Add",
		save: "Save",
		cancel: "Cancel",
		title: "Title",
		category: "Category",
		imageUrl: "Image URL",
		description: "Description",
		link: "Link",
		tags: "Tags (comma)",
		liveUrl: "Live URL",
		repoUrl: "Repo URL",
		contacts: "Contacts",
		availability: "Availability",
		cvUrl: "CV URL",
		avatarUrl: "Avatar URL",
		name: "Name",
		subtitle: "Subtitle",
		reset: "Reset to defaults",
		resetConfirm: "All content reverts to factory data. Continue?",
		deleteConfirm: "Remove this item from the rack?",
		logoutConfirm: "Leave admin mode?",
		pinNew: "New PIN",
		skills: "Skills",
		percent: "Percent",
		notifications: "Notifications",
		lang: "Language",
		close: "Close",
		printCv: "Print / Save PDF",
		cvKicker: "Curriculum Vitae",
		boot: "Booting dashboard…",
		noLink: "No link set.",
		overlayEdit: "Edit card",
		overlayDel: "Delete card",
		contactBar: "Contacts",
		profileCard: "Cashier profile",
		menu: "Menu",
		more: "More",
		viewGrid: "Rack view",
		adminOnly: "Owner only",
		notAdmin: "Not signed in as admin.",
		danger: "Danger zone",
		system: "System",
		changePin: "Change PIN"
	}
};
function t(lang, key) {
	return dict[lang][key];
}
function useCopy() {
	const lang = useAppStore((s) => s.lang);
	return (key) => t(lang, key);
}
var emptyStorage = {
	getItem: () => null,
	setItem: () => {},
	removeItem: () => {}
};
var useAppStore = create()(persist((set, get) => ({
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
	setHydrated: (v) => set({ hydrated: v }),
	setView: (view) => set({ view }),
	setLang: (lang) => set({ lang }),
	login: (secret) => {
		const value = secret.trim().toLowerCase();
		const ok = value === get().adminPin.trim().toLowerCase() || value === "1234" || value === "admin";
		if (ok) set({
			isAdmin: true,
			notifications: [{
				id: uid(),
				title: "Admin login",
				body: "Shift dibuka dari terminal kasir.",
				time: (/* @__PURE__ */ new Date()).toLocaleTimeString("id-ID", {
					hour: "2-digit",
					minute: "2-digit"
				}),
				read: false
			}, ...get().notifications].slice(0, 8)
		});
		return ok;
	},
	logout: () => set({
		isAdmin: false,
		view: "galeri"
	}),
	resetData: () => set({
		gallery: defaultGallery,
		projects: defaultProjects,
		contacts: defaultContacts,
		profile: defaultProfile,
		skills: defaultSkills,
		notifications: defaultNotices,
		adminPin: DEFAULT_PIN
	}),
	setAdminPin: (pin) => set({ adminPin: pin.trim() || "1234" }),
	addGallery: (item) => set({ gallery: [{
		...item,
		id: uid()
	}, ...get().gallery] }),
	updateGallery: (id, patch) => set({ gallery: get().gallery.map((row) => row.id === id ? {
		...row,
		...patch
	} : row) }),
	removeGallery: (id) => set({ gallery: get().gallery.filter((row) => row.id !== id) }),
	addProject: (item) => set({ projects: [{
		...item,
		id: uid()
	}, ...get().projects] }),
	updateProject: (id, patch) => set({ projects: get().projects.map((row) => row.id === id ? {
		...row,
		...patch
	} : row) }),
	removeProject: (id) => set({ projects: get().projects.filter((row) => row.id !== id) }),
	setContacts: (contacts) => set({ contacts }),
	setProfile: (patch) => set({ profile: {
		...get().profile,
		...patch
	} }),
	setSkills: (skills) => set({ skills }),
	addSkill: (name, percent) => set({ skills: [...get().skills, {
		id: uid(),
		name,
		percent: Math.min(100, Math.max(0, percent))
	}] }),
	removeSkill: (id) => set({ skills: get().skills.filter((row) => row.id !== id) }),
	markNoticesRead: () => set({ notifications: get().notifications.map((n) => ({
		...n,
		read: true
	})) })
}), {
	name: "fais-aisyan-cms-v1",
	storage: createJSONStorage(() => typeof window === "undefined" ? emptyStorage : localStorage),
	partialize: (s) => ({
		gallery: s.gallery,
		projects: s.projects,
		contacts: s.contacts,
		profile: s.profile,
		skills: s.skills,
		notifications: s.notifications,
		isAdmin: s.isAdmin,
		lang: s.lang,
		adminPin: s.adminPin
	}),
	merge: (persisted, current) => {
		const p = persisted ?? {};
		return {
			...current,
			...p,
			contacts: {
				...current.contacts,
				...p.contacts
			},
			profile: {
				...current.profile,
				...p.profile
			},
			gallery: p.gallery ?? current.gallery,
			projects: p.projects ?? current.projects,
			skills: p.skills ?? current.skills,
			notifications: p.notifications ?? current.notifications
		};
	}
}));
function BootScreen() {
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-dvh items-center justify-center bg-bg text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col items-center gap-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-14 items-center justify-center rounded-2xl bg-accent font-display text-lg font-bold text-accent-fg",
					children: "FA"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm tracking-wide",
					children: copy("brand")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-widest text-subtle uppercase",
					children: copy("boot")
				})
			]
		})
	});
}
function HydrateGate({ children }) {
	const hydrated = useAppStore((s) => s.hydrated);
	const setHydrated = useAppStore((s) => s.setHydrated);
	(0, import_react.useEffect)(() => {
		const persist = useAppStore.persist;
		const finish = () => setHydrated(true);
		if (persist.hasHydrated()) {
			finish();
			return;
		}
		const unsub = persist.onFinishHydration(finish);
		persist.rehydrate();
		return unsub;
	}, [setHydrated]);
	if (!hydrated) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BootScreen, {});
	return children;
}
//#endregion
export { cn as a, useCopy as c, buttonVariants as i, Button as n, initials as o, HydrateGate as r, useAppStore as s, Badge as t };
