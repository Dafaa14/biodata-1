import { P as require_jsx_runtime } from "../_libs/@radix-ui/react-alert-dialog+[...].mjs";
import { c as useCopy, n as Button, r as HydrateGate, s as useAppStore, t as Badge } from "./hydrate-gate-BWLmLuX7.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { k as ArrowLeft, l as Printer } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cv-BAf4E7jQ.js
var import_jsx_runtime = require_jsx_runtime();
function CvPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HydrateGate, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CvInner, {}) });
}
function CvInner() {
	const profile = useAppStore((s) => s.profile);
	const skills = useAppStore((s) => s.skills);
	const projects = useAppStore((s) => s.projects);
	const contacts = useAppStore((s) => s.contacts);
	const copy = useCopy();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg px-4 py-8 text-fg",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-2xl items-center justify-between print:hidden",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				asChild: true,
				variant: "ghost",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), copy("brand")]
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
				onClick: () => window.print(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), copy("printCv")]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto mt-8 max-w-2xl rounded-2xl bg-surface p-6 shadow-[var(--shadow-border)] md:p-10 print:bg-white print:text-black print:shadow-none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono text-[11px] tracking-[0.22em] text-accent uppercase",
					children: copy("cvKicker")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-2 text-3xl font-semibold",
					children: profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted print:text-neutral-600",
					children: profile.subtitle
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted print:text-neutral-700",
					children: profile.bio
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: copy("education")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm leading-relaxed text-muted print:text-neutral-700",
						children: profile.education
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: copy("tech")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-wrap gap-2",
						children: skills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, {
							variant: "muted",
							children: [
								s.name,
								" ",
								s.percent,
								"%"
							]
						}, s.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: copy("softSkills")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 flex flex-wrap gap-2",
						children: profile.softSkills.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, {
							variant: "outline",
							children: s
						}, s))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-lg font-semibold",
						children: copy("projects")
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-3 space-y-3",
						children: projects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm font-medium",
							children: p.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted print:text-neutral-600",
							children: p.description
						})] }, p.id))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mt-8 border-t border-border pt-4 font-mono text-xs text-muted print:text-neutral-600",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: contacts.email.label }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: contacts.github.label }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: contacts.linkedin.label }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: contacts.instagram.label })
					]
				})
			]
		})]
	});
}
//#endregion
export { CvPage as component };
