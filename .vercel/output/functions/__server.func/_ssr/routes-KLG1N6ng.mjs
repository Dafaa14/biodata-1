import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { P as require_jsx_runtime, a as Overlay2, c as Title2, d as DialogContent$1, f as DialogDescription$1, h as DialogTitle$1, i as Description2, l as Dialog$1, m as DialogPortal$1, n as Cancel, o as Portal2, p as DialogOverlay$1, r as Content2, s as Root2, t as Action, u as DialogClose } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { a as cn, c as useCopy, i as buttonVariants, n as Button, o as initials, r as HydrateGate, s as useAppStore, t as Badge } from "./hydrate-gate-BWLmLuX7.mjs";
import { b as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { C as ExternalLink, D as Bell, E as Cpu, O as ArrowRight, S as FolderKanban, T as Delete, _ as Instagram, b as HardDrive, c as Shield, d as Menu, f as Mail, g as KeyRound, h as LayoutDashboard, i as UserRound, m as Linkedin, n as X, o as Trash2, p as LogOut, r as User, s as Timer, t as ZoomIn, u as Pencil, v as Images, w as Download, x as Github, y as ImageOff } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as motion, r as AnimatePresence, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { a as Root2$1, i as Portal2$1, n as Item2, o as Separator2, r as Label2, s as Trigger, t as Content2$1 } from "../_libs/@radix-ui/react-dropdown-menu+[...].mjs";
import { a as Trigger$1, i as Root3, n as Portal, r as Provider, t as Content2$2 } from "../_libs/@radix-ui/react-tooltip+[...].mjs";
import { n as Root, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
import { t as Root$1 } from "../_libs/radix-ui__react-separator.mjs";
import { n as Area, r as ResponsiveContainer, t as AreaChart } from "../_libs/recharts+[...].mjs";
import { t as Root$2 } from "../_libs/radix-ui__react-label.mjs";
import { n as SwitchThumb, t as Switch$1 } from "../_libs/radix-ui__react-switch.mjs";
import { i as Viewport, n as Scrollbar, r as Thumb, t as Root$3 } from "../_libs/radix-ui__react-scroll-area.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-KLG1N6ng.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DropdownMenu = Root2$1;
var DropdownMenuTrigger = Trigger;
var DropdownMenuContent = import_react.forwardRef(({ className, sideOffset = 8, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal2$1, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$1, {
	ref,
	sideOffset,
	className: cn("z-50 min-w-56 overflow-hidden rounded-xl border border-border bg-surface p-1 text-fg shadow-[var(--shadow-border)]", className),
	...props
}) }));
DropdownMenuContent.displayName = Content2$1.displayName;
var DropdownMenuItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item2, {
	ref,
	className: cn("flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 text-sm outline-none select-none focus:bg-surface-2", className),
	...props
}));
DropdownMenuItem.displayName = Item2.displayName;
var DropdownMenuLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label2, {
	ref,
	className: cn("px-3 py-2 text-xs font-medium text-subtle", className),
	...props
}));
DropdownMenuLabel.displayName = Label2.displayName;
var DropdownMenuSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator2, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-border", className),
	...props
}));
DropdownMenuSeparator.displayName = Separator2.displayName;
var TooltipProvider = Provider;
var Tooltip = Root3;
var TooltipTrigger = Trigger$1;
var TooltipContent = import_react.forwardRef(({ className, sideOffset = 6, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2$2, {
	ref,
	sideOffset,
	className: cn("z-50 rounded-md bg-fg px-2 py-1 text-xs text-bg", className),
	...props
}) }));
TooltipContent.displayName = Content2$2.displayName;
function SafeImage({ src, alt, className, imgClassName }) {
	const [failed, setFailed] = (0, import_react.useState)(false);
	const broken = failed || !src;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("relative overflow-hidden bg-surface-2", className),
		children: broken ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-full min-h-32 w-full flex-col items-center justify-center gap-2 text-subtle",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageOff, { className: "size-5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-lg tracking-wide",
				children: initials(alt || "FA")
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src,
			alt,
			className: cn("h-full w-full object-cover", imgClassName),
			onError: () => setFailed(true)
		})
	});
}
function Header({ onOpenNav, onOpenProfile }) {
	const contacts = useAppStore((s) => s.contacts);
	const profile = useAppStore((s) => s.profile);
	const isAdmin = useAppStore((s) => s.isAdmin);
	const lang = useAppStore((s) => s.lang);
	const setLang = useAppStore((s) => s.setLang);
	const copy = useCopy();
	const notifications = useAppStore((s) => s.notifications);
	const markNoticesRead = useAppStore((s) => s.markNoticesRead);
	const unread = notifications.filter((n) => !n.read).length;
	const [now, setNow] = (0, import_react.useState)(() => /* @__PURE__ */ new Date());
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => setNow(/* @__PURE__ */ new Date()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const channels = [
		{
			key: "instagram",
			icon: Instagram,
			data: contacts.instagram
		},
		{
			key: "email",
			icon: Mail,
			data: contacts.email
		},
		{
			key: "github",
			icon: Github,
			data: contacts.github
		},
		{
			key: "linkedin",
			icon: Linkedin,
			data: contacts.linkedin
		}
	];
	const clock = now.toLocaleTimeString(lang === "id" ? "id-ID" : "en-GB", {
		hour: "2-digit",
		minute: "2-digit",
		second: "2-digit"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex h-16 shrink-0 items-center gap-2 border-b border-border bg-bg px-3 md:px-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				variant: "ghost",
				size: "icon",
				className: "lg:hidden",
				"aria-label": copy("menu"),
				onClick: onOpenNav,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-2.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-9 items-center justify-center rounded-lg bg-accent font-display text-xs font-bold text-accent-fg",
					children: copy("brandShort")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display truncate text-sm font-semibold leading-none",
						children: copy("brand")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 hidden font-mono text-[10px] tracking-widest text-subtle uppercase sm:block",
						children: "POS · TJKT"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mx-auto hidden min-w-0 items-center gap-1 md:flex",
				children: channels.map((ch) => {
					const Icon = ch.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Tooltip, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipTrigger, {
						asChild: true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: ch.data.url,
							target: ch.data.url.startsWith("http") ? "_blank" : void 0,
							rel: "noreferrer",
							className: "flex h-10 max-w-48 items-center gap-2 rounded-lg px-2.5 text-muted transition-colors hover:bg-surface-2 hover:text-fg",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden truncate text-xs lg:inline",
								children: ch.data.label
							})]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipContent, { children: ch.data.label })] }, ch.key);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ml-auto flex items-center gap-1.5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "hidden font-mono text-xs text-subtle tabular xl:inline",
						children: clock
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenu, {
						onOpenChange: (open) => {
							if (open) markNoticesRead();
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuTrigger, {
							asChild: true,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "ghost",
								size: "icon",
								className: "relative",
								"aria-label": copy("notifications"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4" }), unread > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1.5 right-1.5 size-2 rounded-full bg-accent" }) : null]
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuContent, {
							align: "end",
							className: "w-72",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuLabel, { children: copy("notifications") }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DropdownMenuSeparator, {}),
								notifications.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DropdownMenuItem, {
									className: "flex-col items-start gap-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm font-medium",
											children: n.title
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs text-muted",
											children: n.body
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-mono text-[10px] text-subtle",
											children: n.time
										})
									]
								}, n.id))
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex h-10 items-center rounded-lg bg-surface-2 p-1",
						children: ["id", "en"].map((code) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setLang(code),
							className: cn("h-8 min-w-9 rounded-md px-2 font-mono text-[11px] font-medium uppercase transition-colors", lang === code ? "bg-accent text-accent-fg" : "text-muted hover:text-fg"),
							"aria-label": copy("lang"),
							children: code
						}, code))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("hidden items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] tracking-widest uppercase sm:flex", isAdmin ? "bg-success/10 text-success" : "bg-surface-2 text-subtle"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-1.5 rounded-full", isAdmin ? "bg-success" : "bg-subtle") }), isAdmin ? copy("adminOn") : copy("guest")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onOpenProfile,
						className: "flex size-10 items-center justify-center overflow-hidden rounded-full bg-surface-2 xl:pointer-events-none",
						"aria-label": copy("profile"),
						children: profile.avatarUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
							src: profile.avatarUrl,
							alt: profile.name,
							className: "size-10 rounded-full"
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserRound, { className: "size-4 text-muted" })
					})
				]
			})
		]
	});
}
var NAV_ITEMS = [
	{
		id: "galeri",
		label: "gallery",
		icon: Images
	},
	{
		id: "beranda",
		label: "home",
		icon: LayoutDashboard
	},
	{
		id: "profil",
		label: "profile",
		icon: User
	},
	{
		id: "project",
		label: "projects",
		icon: FolderKanban
	},
	{
		id: "admin",
		label: "admin",
		icon: Shield
	},
	{
		id: "logout",
		label: "logout",
		icon: LogOut
	}
];
function LeftNav({ onNavigate, compact }) {
	const view = useAppStore((s) => s.view);
	const isAdmin = useAppStore((s) => s.isAdmin);
	const setView = useAppStore((s) => s.setView);
	const copy = useCopy();
	const logout = useAppStore((s) => s.logout);
	const profile = useAppStore((s) => s.profile);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full flex-col",
		children: [
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pt-5 pb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[10px] tracking-[0.2em] text-subtle uppercase",
					children: copy("menu")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display mt-1 text-sm font-semibold",
					children: [profile.name.split(" ")[0], " Desk"]
				})]
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex flex-1 flex-col gap-1 p-2",
				children: NAV_ITEMS.map((item) => {
					const active = item.id === view;
					const Icon = item.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							if (item.id === "logout") {
								if (isAdmin) {
									logout();
									toast.success(copy("loggedOut"));
								} else toast.message(copy("notAdmin"));
								onNavigate?.();
								return;
							}
							setView(item.id);
							onNavigate?.();
						},
						className: cn("flex min-h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors duration-150", item.id === "logout" ? "mt-auto text-muted hover:bg-surface-2 hover:text-fg" : active ? "bg-accent text-accent-fg" : "text-muted hover:bg-surface-2 hover:text-fg"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: copy(item.label) })]
					}, item.id);
				})
			}),
			!compact ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "p-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("rounded-xl px-3 py-2 font-mono text-[10px] tracking-[0.18em] uppercase", isAdmin ? "bg-success/10 text-success" : "bg-surface-2 text-subtle"),
					children: isAdmin ? copy("shiftOpen") : copy("shiftClosed")
				})
			}) : null
		]
	});
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("relative h-1.5 w-full overflow-hidden rounded-full bg-surface-2", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full bg-accent transition-[transform] duration-500 ease-out",
		style: { transform: `translateX(-${100 - (value ?? 0)}%)` }
	})
}));
Progress.displayName = Root.displayName;
var Separator = import_react.forwardRef(({ className, orientation = "horizontal", decorative = true, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	decorative,
	orientation,
	className: cn("shrink-0 bg-border", orientation === "horizontal" ? "h-px w-full" : "h-full w-px", className),
	...props
}));
Separator.displayName = Root$1.displayName;
function RightRail() {
	const profile = useAppStore((s) => s.profile);
	const skills = useAppStore((s) => s.skills);
	const copy = useCopy();
	const navigate = useNavigate();
	function downloadCv() {
		const url = profile.cvUrl || "/cv";
		if (url.startsWith("http")) {
			window.open(url, "_blank", "noopener,noreferrer");
			return;
		}
		navigate({ to: url });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "flex h-full flex-col gap-3 p-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "receipt-perforation bg-surface" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "px-4 pt-3 pb-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
						children: copy("profileCard")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
							src: profile.avatarUrl,
							alt: profile.name,
							className: "size-14 shrink-0 rounded-xl"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "font-display truncate text-base font-semibold",
								children: profile.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs leading-snug text-muted",
								children: profile.subtitle
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: profile.available ? "relative flex size-2.5" : "relative flex size-2.5",
							children: [profile.available ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" }) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: profile.available ? "relative inline-flex size-2.5 rounded-full bg-success" : "relative inline-flex size-2.5 rounded-full bg-subtle" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: profile.available ? "success" : "muted",
							children: profile.availabilityLabel
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						className: "mt-4 w-full",
						onClick: downloadCv,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), copy("downloadCv")]
					})
				]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl bg-surface shadow-[var(--shadow-border)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4 pt-4 pb-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[10px] tracking-[0.22em] text-subtle uppercase",
						children: copy("tech")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex-1 space-y-4 overflow-y-auto px-4 py-4",
					children: skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1.5 flex items-baseline justify-between gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm font-medium",
							children: skill.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted tabular",
							children: [skill.percent, "%"]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, { value: skill.percent })] }, skill.id))
				})
			]
		})]
	});
}
var CATEGORIES = [
	"Networking",
	"Web Dev",
	"Sertifikasi",
	"Hardware"
];
var FILTERS = ["Semua", ...CATEGORIES];
function FilterBar({ value, onChange, count }) {
	const copy = useCopy();
	const labels = {
		Semua: copy("all"),
		Networking: copy("networking"),
		"Web Dev": copy("webdev"),
		Sertifikasi: copy("cert"),
		Hardware: copy("hardware")
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "font-mono text-[11px] tracking-[0.18em] text-subtle uppercase",
			children: [
				copy("viewGrid"),
				" · ",
				count,
				" ",
				copy("item")
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-1.5",
			children: FILTERS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: () => onChange(id),
				className: cn("h-9 rounded-full px-3 text-xs font-medium transition-colors duration-150", value === id ? "bg-accent text-accent-fg" : "bg-surface text-muted shadow-[var(--shadow-border)] hover:text-fg"),
				children: labels[id]
			}, id))
		})]
	});
}
function MediaCard({ sku, title, category, imageUrl, description, href, onDetail, onEdit, onDelete }) {
	const isAdmin = useAppStore((s) => s.isAdmin);
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "group relative flex flex-col overflow-hidden rounded-2xl bg-surface p-2 shadow-[var(--shadow-border)] transition-[box-shadow,transform] duration-150 hover:shadow-[var(--shadow-border-hover)]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
					src: imageUrl,
					alt: title,
					className: "aspect-[4/3] rounded-xl"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-xl bg-bg/0 transition-colors duration-150 group-hover:bg-bg/20" }),
				isAdmin && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute top-2 right-2 flex gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "secondary",
						className: "size-9 min-h-9 min-w-9",
						"aria-label": copy("overlayEdit"),
						onClick: onEdit,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3.5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						size: "icon",
						variant: "default",
						className: "size-9 min-h-9 min-w-9",
						"aria-label": copy("overlayDel"),
						onClick: onDelete,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col gap-3 px-2 pt-3 pb-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-start justify-between gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "font-mono text-[10px] tracking-widest text-subtle uppercase",
							children: [
								copy("sku"),
								" ",
								sku
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display mt-0.5 truncate text-[15px] font-semibold",
							children: title
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
						variant: "outline",
						children: category
					})]
				}),
				description ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "line-clamp-2 text-xs leading-relaxed text-muted",
					children: description
				}) : null,
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-auto flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: "secondary",
						className: "flex-1",
						onClick: onDetail,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { className: "size-3.5" }), copy("detail")]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						variant: href ? "default" : "outline",
						className: cn("flex-1", !href && "text-muted"),
						onClick: () => {
							if (href) window.open(href, "_blank", "noopener,noreferrer");
						},
						disabled: !href,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3.5" }), copy("visit")]
					})]
				})
			]
		})]
	});
}
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-bg/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 grid w-[min(100%-1.5rem,42rem)] max-h-[min(90dvh,800px)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-2xl border border-border bg-surface p-5 text-fg shadow-[var(--shadow-border)]", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-3 right-3 flex size-10 items-center justify-center rounded-md text-muted transition-colors hover:bg-surface-2 hover:text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mb-4 flex flex-col gap-1 pr-8", className),
		...props
	});
}
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-lg font-semibold", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function DetailModal({ item, onClose }) {
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open: !!item,
		onOpenChange: (open) => !open && onClose(),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: item ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: item.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, {
				className: "flex flex-wrap items-center gap-2",
				children: [item.category ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "outline",
					children: item.category
				}) : null, item.tags?.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
					variant: "muted",
					children: tag
				}, tag))]
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
				src: item.imageUrl,
				alt: item.title,
				className: "aspect-video rounded-xl"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 text-sm leading-relaxed text-muted",
				children: item.description
			}),
			item.href ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				className: "mt-4 w-full",
				onClick: () => window.open(item.href, "_blank", "noopener,noreferrer"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-4" }), copy("visit")]
			}) : null
		] }) : null })
	});
}
function GalleryView({ onEdit, onDelete }) {
	const gallery = useAppStore((s) => s.gallery);
	const copy = useCopy();
	const isAdmin = useAppStore((s) => s.isAdmin);
	const setView = useAppStore((s) => s.setView);
	const [filter, setFilter] = (0, import_react.useState)("Semua");
	const [detail, setDetail] = (0, import_react.useState)(null);
	const reduce = useReducedMotion();
	const items = (0, import_react.useMemo)(() => gallery.filter((row) => filter === "Semua" || row.category === filter), [gallery, filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
				children: copy("gallery")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-2xl font-semibold",
				children: copy("viewGrid")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
				value: filter,
				onChange: setFilter,
				count: items.length
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "rounded-2xl bg-surface px-6 py-16 text-center shadow-[var(--shadow-border)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg",
					children: copy("empty")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted",
					children: copy("emptyHint")
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
					mode: "popLayout",
					children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						layout: !reduce,
						initial: reduce ? false : {
							opacity: 0,
							y: 10
						},
						animate: {
							opacity: 1,
							y: 0
						},
						exit: reduce ? void 0 : {
							opacity: 0,
							y: -8
						},
						transition: {
							duration: .25,
							delay: Math.min(i, 8) * .04
						},
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaCard, {
							sku: String(i + 1).padStart(3, "0"),
							title: item.title,
							category: item.category,
							imageUrl: item.imageUrl,
							description: item.description,
							href: item.link,
							onDetail: () => setDetail({
								title: item.title,
								category: item.category,
								imageUrl: item.imageUrl,
								description: item.description,
								href: item.link
							}),
							onEdit: isAdmin ? () => {
								setView("admin");
								onEdit?.(item.id);
							} : void 0,
							onDelete: isAdmin ? () => onDelete?.(item.id) : void 0
						})
					}, item.id))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailModal, {
				item: detail,
				onClose: () => setDetail(null)
			})
		]
	});
}
function HomeView() {
	const copy = useCopy();
	const profile = useAppStore((s) => s.profile);
	const gallery = useAppStore((s) => s.gallery);
	const projects = useAppStore((s) => s.projects);
	const skills = useAppStore((s) => s.skills);
	const setView = useAppStore((s) => s.setView);
	const reduce = useReducedMotion();
	const featured = gallery.slice(0, 3);
	const fade = reduce ? {} : {
		initial: {
			opacity: 0,
			y: 12,
			filter: "blur(4px)"
		},
		animate: {
			opacity: 1,
			y: 0,
			filter: "blur(0px)"
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.section, {
				...fade,
				className: "overflow-hidden rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
						children: copy("heroKicker")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "font-display mt-3 max-w-2xl text-3xl font-semibold leading-tight md:text-4xl",
						children: copy("heroTitle")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 max-w-xl text-sm leading-relaxed text-muted md:text-base",
						children: copy("heroBody")
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 flex flex-wrap gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							onClick: () => setView("galeri"),
							children: [copy("gallery"), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							variant: "secondary",
							onClick: () => setView("project"),
							children: copy("projects")
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "grid grid-cols-2 gap-3 md:grid-cols-4",
				children: [
					{
						n: gallery.length,
						l: copy("statsWorks")
					},
					{
						n: projects.length,
						l: copy("statsProjects")
					},
					{
						n: skills.length,
						l: copy("statsSkills")
					},
					{
						n: profile.available ? "ON" : "OFF",
						l: copy("openHire")
					}
				].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-2xl bg-surface px-4 py-4 shadow-[var(--shadow-border)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-2xl font-semibold tabular",
						children: s.n
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-xs text-muted",
						children: s.l
					})]
				}, s.l))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-end justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: copy("featured")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "text-xs text-muted hover:text-fg",
					onClick: () => setView("galeri"),
					children: copy("gallery")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3 md:grid-cols-3",
				children: featured.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setView("galeri"),
					className: "overflow-hidden rounded-2xl bg-surface text-left shadow-[var(--shadow-border)] transition-[box-shadow] duration-150 hover:shadow-[var(--shadow-border-hover)]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
						src: item.imageUrl,
						alt: item.title,
						className: "aspect-[16/10]"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							children: item.category
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display mt-2 text-sm font-semibold",
							children: item.title
						})]
					})]
				}, item.id))
			})] })
		]
	});
}
function ProfileView() {
	const profile = useAppStore((s) => s.profile);
	const copy = useCopy();
	const skills = useAppStore((s) => s.skills);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "overflow-hidden rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-5 sm:flex-row sm:items-start",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SafeImage, {
						src: profile.avatarUrl,
						alt: profile.name,
						className: "size-28 shrink-0 rounded-2xl sm:size-32"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
								children: copy("profile")
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "font-display mt-1 text-3xl font-semibold",
								children: profile.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-muted",
								children: profile.subtitle
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-3 flex flex-wrap gap-2",
								children: profile.softSkills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
									variant: "muted",
									children: s
								}, s))
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: copy("bio")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: profile.bio
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: copy("education")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-sm leading-relaxed text-muted",
					children: profile.education
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)] md:p-7",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: copy("tech")
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 grid gap-3 sm:grid-cols-2",
					children: skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between rounded-xl bg-bg px-4 py-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm",
							children: s.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "font-mono text-xs text-muted tabular",
							children: [s.percent, "%"]
						})]
					}, s.id))
				})]
			})
		]
	});
}
function ProjectsView({ onEdit, onDelete }) {
	const projects = useAppStore((s) => s.projects);
	const copy = useCopy();
	const isAdmin = useAppStore((s) => s.isAdmin);
	const setView = useAppStore((s) => s.setView);
	const [filter, setFilter] = (0, import_react.useState)("Semua");
	const [detail, setDetail] = (0, import_react.useState)(null);
	const items = (0, import_react.useMemo)(() => projects.filter((row) => filter === "Semua" || row.category === filter), [projects, filter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
				children: copy("projects")
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-1 text-2xl font-semibold",
				children: copy("latestProjects")
			})] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterBar, {
				value: filter,
				onChange: setFilter,
				count: items.length
			}),
			items.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "rounded-2xl bg-surface px-6 py-16 text-center shadow-[var(--shadow-border)]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg",
					children: copy("empty")
				})
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-4 lg:grid-cols-2",
				children: items.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MediaCard, {
						sku: String(i + 1).padStart(3, "0"),
						title: item.title,
						category: item.category,
						imageUrl: item.imageUrl,
						description: item.description,
						href: item.liveUrl || item.repoUrl,
						onDetail: () => setDetail({
							title: item.title,
							category: item.category,
							imageUrl: item.imageUrl,
							description: item.description,
							href: item.liveUrl || item.repoUrl,
							tags: item.tags
						}),
						onEdit: isAdmin ? () => {
							setView("admin");
							onEdit?.(item.id);
						} : void 0,
						onDelete: isAdmin ? () => onDelete?.(item.id) : void 0
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex flex-wrap gap-1.5 px-1",
						children: [
							item.tags.map((tag) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
								variant: "muted",
								children: tag
							}, tag)),
							item.liveUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "ghost",
								className: "h-7 px-2 text-xs",
								onClick: () => window.open(item.liveUrl, "_blank", "noopener,noreferrer"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExternalLink, { className: "size-3" }), copy("liveDemo")]
							}) : null,
							item.repoUrl ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								size: "sm",
								variant: "ghost",
								className: "h-7 px-2 text-xs",
								onClick: () => window.open(item.repoUrl, "_blank", "noopener,noreferrer"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Github, { className: "size-3" }), copy("repo")]
							}) : null
						]
					})]
				}, item.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailModal, {
				item: detail,
				onClose: () => setDetail(null)
			})
		]
	});
}
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
	type,
	className: cn("flex h-10 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Input.displayName = "Input";
var KEYS = [
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"C",
	"0",
	"⌫"
];
function PinPad() {
	const login = useAppStore((s) => s.login);
	const copy = useCopy();
	const [pin, setPin] = (0, import_react.useState)("");
	const [text, setText] = (0, import_react.useState)("");
	const [shake, setShake] = (0, import_react.useState)(0);
	function attempt(secret) {
		if (login(secret)) {
			toast.success(copy("loggedIn"));
			setPin("");
			setText("");
			return;
		}
		setShake((n) => n + 1);
		toast.error(copy("wrongPin"));
	}
	function press(key) {
		if (key === "C") {
			setPin("");
			return;
		}
		if (key === "⌫") {
			setPin((p) => p.slice(0, -1));
			return;
		}
		setPin((p) => p.length >= 8 ? p : p + key);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(KeyRound, { className: "size-4 text-accent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-lg font-semibold",
					children: copy("loginTitle")
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-sm text-muted",
				children: copy("loginHint")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
				animate: shake ? { x: [
					0,
					-8,
					8,
					-6,
					6,
					0
				] } : { x: 0 },
				transition: { duration: .32 },
				className: "mb-4 flex h-12 items-center justify-center gap-2 rounded-xl bg-bg",
				children: Array.from({ length: Math.max(4, pin.length) }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("size-2.5 rounded-full", i < pin.length ? "bg-accent" : "bg-border") }, i))
			}, shake),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-3 gap-2",
				children: KEYS.map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "button",
					variant: key === "C" ? "outline" : "secondary",
					className: "h-12 font-mono text-base",
					onClick: () => press(key),
					children: key === "⌫" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Delete, { className: "size-4" }) : key
				}, key))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				className: "mt-3 w-full",
				onClick: () => attempt(pin),
				children: copy("enter")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "mt-5 flex gap-2",
				onSubmit: (e) => {
					e.preventDefault();
					attempt(text);
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					value: text,
					onChange: (e) => setText(e.target.value),
					placeholder: copy("password"),
					autoComplete: "off"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					type: "submit",
					variant: "secondary",
					children: copy("enter")
				})]
			})
		]
	});
}
function rand(min, max) {
	return min + Math.random() * (max - min);
}
function ServerMonitor() {
	const copy = useCopy();
	const [cpu, setCpu] = (0, import_react.useState)(32);
	const [ram, setRam] = (0, import_react.useState)(41);
	const [started] = (0, import_react.useState)(() => Date.now());
	const [now, setNow] = (0, import_react.useState)(() => Date.now());
	const [series, setSeries] = (0, import_react.useState)(() => Array.from({ length: 24 }, (_, i) => ({
		i,
		v: 28 + rand(0, 18)
	})));
	(0, import_react.useEffect)(() => {
		const id = window.setInterval(() => {
			setCpu((n) => Math.min(92, Math.max(12, n + rand(-8, 8))));
			setRam((n) => Math.min(88, Math.max(22, n + rand(-4, 4))));
			setNow(Date.now());
			setSeries((prev) => {
				const next = prev.slice(1);
				next.push({
					i: (prev.at(-1)?.i ?? 0) + 1,
					v: 20 + rand(0, 50)
				});
				return next;
			});
		}, 1400);
		return () => window.clearInterval(id);
	}, []);
	const uptime = (0, import_react.useMemo)(() => {
		const s = Math.floor((now - started) / 1e3);
		return `${String(Math.floor(s / 3600)).padStart(2, "0")}:${String(Math.floor(s % 3600 / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;
	}, [now, started]);
	const tiles = [
		{
			icon: Cpu,
			label: copy("cpu"),
			value: `${cpu.toFixed(0)}%`
		},
		{
			icon: HardDrive,
			label: copy("ram"),
			value: `${ram.toFixed(0)}%`
		},
		{
			icon: Timer,
			label: copy("uptime"),
			value: uptime
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface p-5 shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: copy("monitor")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid grid-cols-3 gap-2",
				children: tiles.map((tile) => {
					const Icon = tile.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl bg-bg px-3 py-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-3.5 text-muted" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display mt-2 text-lg font-semibold tabular",
								children: tile.value
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] tracking-widest text-subtle uppercase",
								children: tile.label
							})
						]
					}, tile.label);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 h-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, {
					width: "100%",
					height: "100%",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AreaChart, {
						data: series,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
							type: "monotone",
							dataKey: "v",
							stroke: "var(--color-accent)",
							fill: "var(--color-accent)",
							fillOpacity: .16,
							strokeWidth: 1.5,
							isAnimationActive: false
						})
					})
				})
			})
		]
	});
}
var HELP = ["perintah: help, whoami, ls, neofetch, uptime, skills, ping, clear, login <pin>"];
function TerminalCli() {
	const copy = useCopy();
	const profile = useAppStore((s) => s.profile);
	const skills = useAppStore((s) => s.skills);
	const login = useAppStore((s) => s.login);
	const isAdmin = useAppStore((s) => s.isAdmin);
	const [lines, setLines] = (0, import_react.useState)([{
		kind: "out",
		text: "fais@smk9-tjkt:~$ boot --desk"
	}, {
		kind: "out",
		text: "POS dashboard ready. ketik help."
	}]);
	const [value, setValue] = (0, import_react.useState)("");
	const scroller = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
	}, [lines]);
	function run(raw) {
		const input = raw.trim();
		if (!input) return;
		const [cmd, ...rest] = input.split(/\s+/);
		const arg = rest.join(" ");
		const out = [];
		switch (cmd.toLowerCase()) {
			case "help":
				out.push(...HELP);
				break;
			case "whoami":
				out.push(`${profile.name} · ${profile.subtitle}`);
				break;
			case "ls":
				out.push("galeri/  project/  profil.md  cv  admin/");
				break;
			case "uptime":
				out.push("lab-node up, nginx active (running)");
				break;
			case "skills":
				out.push(skills.map((s) => `${s.name} ${s.percent}%`).join(" · "));
				break;
			case "neofetch":
				out.push("OS: SMK 9 Surakarta · TJKT", "Host: Web Fais Aisyan", "Shell: posh 1.0", `Hire: ${profile.available ? "open" : "closed"}`);
				break;
			case "ping":
				out.push(`PING ${arg || "fais.local"}: 8 bytes from lab ttl=64 time=1ms`);
				break;
			case "clear":
				setLines([]);
				return;
			case "login":
			case "sudo": {
				const ok = login(arg || "1234");
				out.push(ok ? "auth ok · shift open" : "auth failed");
				if (ok) toast.success(copy("loggedIn"));
				break;
			}
			default: out.push(`command not found: ${cmd}`);
		}
		setLines((prev) => [
			...prev,
			{
				kind: "in",
				text: `fais@smk9:~$ ${input}`
			},
			...out.map((text) => ({
				kind: "out",
				text
			}))
		]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "overflow-hidden rounded-2xl bg-bg shadow-[var(--shadow-border)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1.5 border-b border-border px-3 py-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-accent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-warn" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-success" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "ml-2 font-mono text-[11px] text-subtle",
						children: [
							copy("terminal"),
							" ",
							isAdmin ? "· root" : "· guest"
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: scroller,
				className: "h-48 overflow-y-auto px-3 py-2 font-mono text-[12px] leading-relaxed text-muted",
				children: lines.map((line, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: line.kind === "in" ? "text-fg" : "text-muted",
					children: line.text
				}, `${i}-${line.text}`))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex items-center gap-2 border-t border-border px-3 py-2",
				onSubmit: (e) => {
					e.preventDefault();
					run(value);
					setValue("");
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-[12px] text-accent",
					children: "$"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					value,
					onChange: (e) => setValue(e.target.value),
					className: "h-8 flex-1 bg-transparent font-mono text-[12px] text-fg outline-none placeholder:text-subtle",
					placeholder: "help",
					autoCapitalize: "off",
					autoCorrect: "off",
					spellCheck: false
				})]
			})
		]
	});
}
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$2, {
	ref,
	className: cn("text-xs font-medium tracking-wide text-muted uppercase", className),
	...props
}));
Label.displayName = Root$2.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
	className: cn("flex min-h-24 w-full rounded-md border border-border bg-bg px-3 py-2 text-sm text-fg placeholder:text-subtle focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50", className),
	ref,
	...props
}));
Textarea.displayName = "Textarea";
var Switch = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch$1, {
	className: cn("peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-accent data-[state=unchecked]:bg-surface-2", className),
	...props,
	ref,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchThumb, { className: "pointer-events-none block size-5 translate-x-0.5 rounded-full bg-fg transition-transform data-[state=checked]:translate-x-[22px] data-[state=checked]:bg-accent-fg" })
}));
Switch.displayName = Switch$1.displayName;
var TABS = [
	"galeri",
	"project",
	"kontak",
	"profil",
	"skills",
	"sistem"
];
var emptyGallery = {
	title: "",
	category: "Networking",
	imageUrl: "",
	description: "",
	link: ""
};
var emptyProject = {
	title: "",
	category: "Web Dev",
	imageUrl: "",
	description: "",
	tags: [],
	liveUrl: "",
	repoUrl: ""
};
function ControlPanel({ focusGalleryId, focusProjectId }) {
	const copy = useCopy();
	const gallery = useAppStore((s) => s.gallery);
	const projects = useAppStore((s) => s.projects);
	const contacts = useAppStore((s) => s.contacts);
	const profile = useAppStore((s) => s.profile);
	const skills = useAppStore((s) => s.skills);
	const addGallery = useAppStore((s) => s.addGallery);
	const updateGallery = useAppStore((s) => s.updateGallery);
	const removeGallery = useAppStore((s) => s.removeGallery);
	const addProject = useAppStore((s) => s.addProject);
	const updateProject = useAppStore((s) => s.updateProject);
	const removeProject = useAppStore((s) => s.removeProject);
	const setContacts = useAppStore((s) => s.setContacts);
	const setProfile = useAppStore((s) => s.setProfile);
	const addSkill = useAppStore((s) => s.addSkill);
	const removeSkill = useAppStore((s) => s.removeSkill);
	const resetData = useAppStore((s) => s.resetData);
	const setAdminPin = useAppStore((s) => s.setAdminPin);
	const [tab, setTab] = (0, import_react.useState)("galeri");
	const [gForm, setGForm] = (0, import_react.useState)(emptyGallery);
	const [gEdit, setGEdit] = (0, import_react.useState)(null);
	const [pForm, setPForm] = (0, import_react.useState)({
		...emptyProject,
		tagsText: ""
	});
	const [pEdit, setPEdit] = (0, import_react.useState)(null);
	const [contactForm, setContactForm] = (0, import_react.useState)(contacts);
	const [profileForm, setProfileForm] = (0, import_react.useState)({
		...profile,
		softText: profile.softSkills.join(", ")
	});
	const [skillName, setSkillName] = (0, import_react.useState)("");
	const [skillPct, setSkillPct] = (0, import_react.useState)("70");
	const [newPin, setNewPin] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (focusGalleryId) {
			const row = gallery.find((g) => g.id === focusGalleryId);
			if (row) {
				setTab("galeri");
				setGEdit(row.id);
				setGForm({
					title: row.title,
					category: row.category,
					imageUrl: row.imageUrl,
					description: row.description,
					link: row.link ?? ""
				});
			}
		}
	}, [focusGalleryId, gallery]);
	(0, import_react.useEffect)(() => {
		if (focusProjectId) {
			const row = projects.find((p) => p.id === focusProjectId);
			if (row) {
				setTab("project");
				setPEdit(row.id);
				setPForm({
					title: row.title,
					category: row.category,
					imageUrl: row.imageUrl,
					description: row.description,
					tags: row.tags,
					liveUrl: row.liveUrl ?? "",
					repoUrl: row.repoUrl ?? "",
					tagsText: row.tags.join(", ")
				});
			}
		}
	}, [focusProjectId, projects]);
	function saveGallery() {
		if (!gForm.title.trim()) return;
		const payload = {
			...gForm,
			link: gForm.link?.trim() || void 0
		};
		if (gEdit) {
			updateGallery(gEdit, payload);
			toast.success(copy("saved"));
		} else {
			addGallery(payload);
			toast.success(copy("added"));
		}
		setGForm(emptyGallery);
		setGEdit(null);
	}
	function saveProject() {
		if (!pForm.title.trim()) return;
		const payload = {
			title: pForm.title,
			category: pForm.category,
			imageUrl: pForm.imageUrl,
			description: pForm.description,
			tags: pForm.tagsText.split(",").map((t) => t.trim()).filter(Boolean),
			liveUrl: pForm.liveUrl?.trim() || void 0,
			repoUrl: pForm.repoUrl?.trim() || void 0
		};
		if (pEdit) {
			updateProject(pEdit, payload);
			toast.success(copy("saved"));
		} else {
			addProject(payload);
			toast.success(copy("added"));
		}
		setPForm({
			...emptyProject,
			tagsText: ""
		});
		setPEdit(null);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-lg font-semibold",
				children: copy("control")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-1.5",
				children: TABS.map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => setTab(id),
					className: cn("h-9 rounded-full px-3 text-xs font-medium capitalize transition-colors", tab === id ? "bg-accent text-accent-fg" : "bg-bg text-muted hover:text-fg"),
					children: id === "galeri" ? copy("gallery") : id === "project" ? copy("projects") : id === "kontak" ? copy("contacts") : id === "profil" ? copy("profile") : id === "skills" ? copy("skills") : copy("system")
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Separator, { className: "my-4" }),
			tab === "galeri" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-3",
					onSubmit: (e) => {
						e.preventDefault();
						saveGallery();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("title"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: gForm.title,
								onChange: (e) => setGForm({
									...gForm,
									title: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("category"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySelect, {
								value: gForm.category,
								onChange: (category) => setGForm({
									...gForm,
									category
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("imageUrl"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: gForm.imageUrl,
								onChange: (e) => setGForm({
									...gForm,
									imageUrl: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("link"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: gForm.link ?? "",
								onChange: (e) => setGForm({
									...gForm,
									link: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("description"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: gForm.description,
								onChange: (e) => setGForm({
									...gForm,
									description: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: gEdit ? copy("save") : copy("add")
							}), gEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => {
									setGEdit(null);
									setGForm(emptyGallery);
								},
								children: copy("cancel")
							}) : null]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemList, {
					rows: gallery.map((g) => ({
						id: g.id,
						title: g.title,
						meta: g.category
					})),
					onEdit: (id) => {
						const row = gallery.find((g) => g.id === id);
						if (!row) return;
						setGEdit(id);
						setGForm({
							title: row.title,
							category: row.category,
							imageUrl: row.imageUrl,
							description: row.description,
							link: row.link ?? ""
						});
					},
					onDelete: (id) => {
						removeGallery(id);
						toast.success(copy("deleted"));
					},
					editLabel: copy("edit"),
					deleteLabel: copy("remove")
				})]
			}) : null,
			tab === "project" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-6 lg:grid-cols-[1fr_0.9fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "space-y-3",
					onSubmit: (e) => {
						e.preventDefault();
						saveProject();
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("title"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: pForm.title,
								onChange: (e) => setPForm({
									...pForm,
									title: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("category"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategorySelect, {
								value: pForm.category,
								onChange: (category) => setPForm({
									...pForm,
									category
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("imageUrl"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: pForm.imageUrl,
								onChange: (e) => setPForm({
									...pForm,
									imageUrl: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("tags"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: pForm.tagsText,
								onChange: (e) => setPForm({
									...pForm,
									tagsText: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("liveUrl"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: pForm.liveUrl ?? "",
								onChange: (e) => setPForm({
									...pForm,
									liveUrl: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("repoUrl"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: pForm.repoUrl ?? "",
								onChange: (e) => setPForm({
									...pForm,
									repoUrl: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("description"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
								value: pForm.description,
								onChange: (e) => setPForm({
									...pForm,
									description: e.target.value
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "submit",
								children: pEdit ? copy("save") : copy("add")
							}), pEdit ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								type: "button",
								variant: "outline",
								onClick: () => {
									setPEdit(null);
									setPForm({
										...emptyProject,
										tagsText: ""
									});
								},
								children: copy("cancel")
							}) : null]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ItemList, {
					rows: projects.map((p) => ({
						id: p.id,
						title: p.title,
						meta: p.tags.join(" · ")
					})),
					onEdit: (id) => {
						const row = projects.find((p) => p.id === id);
						if (!row) return;
						setPEdit(id);
						setPForm({
							title: row.title,
							category: row.category,
							imageUrl: row.imageUrl,
							description: row.description,
							tags: row.tags,
							liveUrl: row.liveUrl ?? "",
							repoUrl: row.repoUrl ?? "",
							tagsText: row.tags.join(", ")
						});
					},
					onDelete: (id) => {
						removeProject(id);
						toast.success(copy("deleted"));
					},
					editLabel: copy("edit"),
					deleteLabel: copy("remove")
				})]
			}) : null,
			tab === "kontak" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "grid gap-3 sm:grid-cols-2",
				onSubmit: (e) => {
					e.preventDefault();
					setContacts(contactForm);
					toast.success(copy("saved"));
				},
				children: [[
					"instagram",
					"email",
					"github",
					"linkedin"
				].map((key) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-2 rounded-xl bg-bg p-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-mono text-[10px] tracking-widest text-subtle uppercase",
							children: key
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: contactForm[key].label,
							onChange: (e) => setContactForm({
								...contactForm,
								[key]: {
									...contactForm[key],
									label: e.target.value
								}
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: contactForm[key].url,
							onChange: (e) => setContactForm({
								...contactForm,
								[key]: {
									...contactForm[key],
									url: e.target.value
								}
							})
						})
					]
				}, key)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "sm:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: copy("save")
					})
				})]
			}) : null,
			tab === "profil" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "space-y-3",
				onSubmit: (e) => {
					e.preventDefault();
					setProfile({
						name: profileForm.name,
						subtitle: profileForm.subtitle,
						bio: profileForm.bio,
						education: profileForm.education,
						avatarUrl: profileForm.avatarUrl,
						cvUrl: profileForm.cvUrl,
						available: profileForm.available,
						availabilityLabel: profileForm.availabilityLabel,
						softSkills: profileForm.softText.split(",").map((s) => s.trim()).filter(Boolean)
					});
					toast.success(copy("saved"));
				},
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-3 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("name"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: profileForm.name,
								onChange: (e) => setProfileForm({
									...profileForm,
									name: e.target.value
								})
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: copy("subtitle"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								value: profileForm.subtitle,
								onChange: (e) => setProfileForm({
									...profileForm,
									subtitle: e.target.value
								})
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy("bio"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: profileForm.bio,
							onChange: (e) => setProfileForm({
								...profileForm,
								bio: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy("education"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
							value: profileForm.education,
							onChange: (e) => setProfileForm({
								...profileForm,
								education: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy("softSkills"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: profileForm.softText,
							onChange: (e) => setProfileForm({
								...profileForm,
								softText: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy("avatarUrl"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: profileForm.avatarUrl,
							onChange: (e) => setProfileForm({
								...profileForm,
								avatarUrl: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy("cvUrl"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: profileForm.cvUrl,
							onChange: (e) => setProfileForm({
								...profileForm,
								cvUrl: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy("availability"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: profileForm.availabilityLabel,
							onChange: (e) => setProfileForm({
								...profileForm,
								availabilityLabel: e.target.value
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex items-center gap-3 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
							checked: profileForm.available,
							onCheckedChange: (available) => setProfileForm({
								...profileForm,
								available
							})
						}), copy("openHire")]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: copy("save")
					})
				]
			}) : null,
			tab === "skills" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-2 sm:flex-row",
					onSubmit: (e) => {
						e.preventDefault();
						if (!skillName.trim()) return;
						addSkill(skillName.trim(), Number(skillPct) || 0);
						setSkillName("");
						toast.success(copy("added"));
					},
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							placeholder: copy("skills"),
							value: skillName,
							onChange: (e) => setSkillName(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							type: "number",
							min: 0,
							max: 100,
							className: "sm:w-28",
							value: skillPct,
							onChange: (e) => setSkillPct(e.target.value)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							children: copy("add")
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "space-y-2",
					children: skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex items-center justify-between rounded-xl bg-bg px-3 py-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-sm",
							children: [
								s.name,
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "font-mono text-xs text-muted",
									children: [s.percent, "%"]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "ghost",
							onClick: () => {
								removeSkill(s.id);
								toast.success(copy("deleted"));
							},
							children: copy("remove")
						})]
					}, s.id))
				})]
			}) : null,
			tab === "sistem" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					className: "flex flex-col gap-2 sm:flex-row sm:items-end",
					onSubmit: (e) => {
						e.preventDefault();
						setAdminPin(newPin);
						setNewPin("");
						toast.success(copy("saved"));
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: copy("changePin"),
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							value: newPin,
							onChange: (e) => setNewPin(e.target.value),
							placeholder: "1234"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: copy("save")
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-xl border border-border p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm font-semibold",
							children: copy("danger")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted",
							children: copy("resetConfirm")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							className: "mt-3",
							variant: "default",
							onClick: () => {
								if (window.confirm(copy("resetConfirm"))) {
									resetData();
									toast.success(copy("resetDone"));
								}
							},
							children: copy("reset")
						})
					]
				})]
			}) : null
		]
	});
}
function Field({ label, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("flex flex-col gap-1.5", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, { children: label }), children]
	});
}
function CategorySelect({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
		value,
		onChange: (e) => onChange(e.target.value),
		className: "flex h-10 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus:ring-2 focus:ring-accent",
		children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: c,
			children: c
		}, c))
	});
}
function ItemList({ rows, onEdit, onDelete, editLabel, deleteLabel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "max-h-96 space-y-2 overflow-y-auto",
		children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "flex items-center justify-between gap-2 rounded-xl bg-bg px-3 py-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-sm font-medium",
					children: row.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "truncate text-xs text-subtle",
					children: row.meta
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => onEdit(row.id),
					children: editLabel
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					size: "sm",
					variant: "ghost",
					onClick: () => onDelete(row.id),
					children: deleteLabel
				})]
			})]
		}, row.id))
	});
}
function AdminView({ galleryId, projectId }) {
	const isAdmin = useAppStore((s) => s.isAdmin);
	const copy = useCopy();
	if (isAdmin) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] tracking-[0.2em] text-accent uppercase",
			children: copy("adminOnly")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display mt-1 text-2xl font-semibold",
			children: copy("control")
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ControlPanel, {
			focusGalleryId: galleryId,
			focusProjectId: projectId
		})]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col gap-5",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-mono text-[11px] tracking-[0.2em] text-subtle uppercase",
			children: copy("admin")
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display mt-1 text-2xl font-semibold",
			children: copy("loginTitle")
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-4 lg:grid-cols-[minmax(0,20rem)_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PinPad, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServerMonitor, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TerminalCli, {})]
			})]
		})]
	});
}
var AlertDialog = Root2;
var AlertDialogPortal = Portal2;
var AlertDialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Overlay2, {
	className: cn("fixed inset-0 z-50 bg-bg/80", className),
	...props,
	ref
}));
AlertDialogOverlay.displayName = Overlay2.displayName;
var AlertDialogContent = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: cn("fixed top-1/2 left-1/2 z-50 w-[min(100%-1.5rem,24rem)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-surface p-5 text-fg shadow-[var(--shadow-border)]", className),
	...props
})] }));
AlertDialogContent.displayName = Content2.displayName;
function AlertDialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-2", className),
		...props
	});
}
function AlertDialogFooter({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("mt-5 flex justify-end gap-2", className),
		...props
	});
}
var AlertDialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Title2, {
	ref,
	className: cn("font-display text-lg font-semibold", className),
	...props
}));
AlertDialogTitle.displayName = Title2.displayName;
var AlertDialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Description2, {
	ref,
	className: cn("text-sm text-muted", className),
	...props
}));
AlertDialogDescription.displayName = Description2.displayName;
var AlertDialogAction = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
	ref,
	className: cn(buttonVariants(), className),
	...props
}));
AlertDialogAction.displayName = Action.displayName;
var AlertDialogCancel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cancel, {
	ref,
	className: cn(buttonVariants({ variant: "outline" }), className),
	...props
}));
AlertDialogCancel.displayName = Cancel.displayName;
var Sheet = Dialog$1;
var SheetPortal = DialogPortal$1;
var SheetOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	className: cn("fixed inset-0 z-50 bg-bg/80", className),
	...props,
	ref
}));
SheetOverlay.displayName = DialogOverlay$1.displayName;
var SheetContent = import_react.forwardRef(({ side = "left", className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed z-50 flex h-full w-[min(20rem,88vw)] flex-col bg-surface text-fg shadow-[var(--shadow-border)]", side === "left" ? "inset-y-0 left-0" : "inset-y-0 right-0", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute top-3 right-3 flex size-10 items-center justify-center rounded-md text-muted hover:bg-surface-2 hover:text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
SheetContent.displayName = DialogContent$1.displayName;
function SheetHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("border-b border-border p-4 pr-12", className),
		...props
	});
}
var SheetTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-base font-semibold", className),
	...props
}));
SheetTitle.displayName = DialogTitle$1.displayName;
var ScrollArea = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root$3, {
	ref,
	className: cn("relative overflow-hidden", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Viewport, {
		className: "h-full w-full rounded-[inherit]",
		children
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scrollbar, {
		orientation: "vertical",
		className: "flex w-2 touch-none bg-transparent p-px",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Thumb, { className: "relative flex-1 rounded-full bg-border" })
	})]
}));
ScrollArea.displayName = Root$3.displayName;
function AppShell() {
	const view = useAppStore((s) => s.view);
	const setView = useAppStore((s) => s.setView);
	const copy = useCopy();
	const removeGallery = useAppStore((s) => s.removeGallery);
	const removeProject = useAppStore((s) => s.removeProject);
	const reduce = useReducedMotion();
	const [navOpen, setNavOpen] = (0, import_react.useState)(false);
	const [railOpen, setRailOpen] = (0, import_react.useState)(false);
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const [galleryFocus, setGalleryFocus] = (0, import_react.useState)(null);
	const [projectFocus, setProjectFocus] = (0, import_react.useState)(null);
	function confirmDelete() {
		if (!pendingDelete) return;
		if (pendingDelete.type === "gallery") removeGallery(pendingDelete.id);
		else removeProject(pendingDelete.id);
		toast.success(copy("deleted"));
		setPendingDelete(null);
	}
	const mobileNav = NAV_ITEMS.filter((i) => i.id !== "logout");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TooltipProvider, {
		delayDuration: 200,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex h-dvh flex-col overflow-hidden bg-bg text-fg pos-grain",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
					onOpenNav: () => setNavOpen(true),
					onOpenProfile: () => setRailOpen(true)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-h-0 flex-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							className: "hidden w-56 shrink-0 border-r border-border lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeftNav, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
							className: "min-w-0 flex-1 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollArea, {
								className: "h-full",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "px-4 py-5 pb-24 md:px-6 md:pb-8",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
										mode: "wait",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											initial: reduce ? false : {
												opacity: 0,
												y: 8,
												filter: "blur(4px)"
											},
											animate: {
												opacity: 1,
												y: 0,
												filter: "blur(0px)"
											},
											exit: reduce ? void 0 : {
												opacity: 0,
												y: -8,
												filter: "blur(4px)"
											},
											transition: {
												duration: .25,
												ease: [
													.22,
													1,
													.36,
													1
												]
											},
											children: [
												view === "galeri" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GalleryView, {
													onEdit: (id) => {
														setGalleryFocus(id);
														setView("admin");
													},
													onDelete: (id) => setPendingDelete({
														type: "gallery",
														id
													})
												}) : null,
												view === "beranda" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeView, {}) : null,
												view === "profil" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProfileView, {}) : null,
												view === "project" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsView, {
													onEdit: (id) => {
														setProjectFocus(id);
														setView("admin");
													},
													onDelete: (id) => setPendingDelete({
														type: "project",
														id
													})
												}) : null,
												view === "admin" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdminView, {
													galleryId: galleryFocus,
													projectId: projectFocus
												}) : null
											]
										}, view)
									})
								})
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden w-[300px] shrink-0 border-l border-border xl:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightRail, {})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "fixed inset-x-0 bottom-0 z-30 border-t border-border bg-bg/95 pb-[env(safe-area-inset-bottom)] lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-5",
						children: mobileNav.map((item) => {
							const Icon = item.icon;
							const active = view === item.id;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setView(item.id),
								className: cn("flex min-h-14 flex-col items-center justify-center gap-1 text-[10px] font-medium", active ? "text-accent" : "text-muted"),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), copy(item.label)]
							}, item.id);
						})
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
					open: navOpen,
					onOpenChange: setNavOpen,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "left",
						className: "p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: copy("menu") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LeftNav, {
							compact: true,
							onNavigate: () => setNavOpen(false)
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
					open: railOpen,
					onOpenChange: setRailOpen,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SheetContent, {
						side: "right",
						className: "p-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SheetTitle, { children: copy("profile") }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "min-h-0 flex-1 overflow-y-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RightRail, {})
						})]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialog, {
					open: !!pendingDelete,
					onOpenChange: (open) => !open && setPendingDelete(null),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogTitle, { children: copy("remove") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogDescription, { children: copy("deleteConfirm") })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AlertDialogFooter, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogCancel, { children: copy("cancel") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlertDialogAction, {
						onClick: confirmDelete,
						children: copy("remove")
					})] })] })
				})
			]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppShell, {}) });
}
//#endregion
export { Home as component };
