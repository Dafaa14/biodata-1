import { useEffect, useState, type ReactNode } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { ImagePicker } from "@/components/image-picker";
import { CATEGORIES, type Category, type GalleryItem, type ProjectItem } from "@/lib/types";
import { useAppStore, useCopy } from "@/lib/store";
import { cn } from "@/lib/utils";

const TABS = ["galeri", "project", "kontak", "profil", "skills", "sistem"] as const;
type Tab = (typeof TABS)[number];

const emptyGallery: Omit<GalleryItem, "id"> = {
  title: "",
  category: "Networking",
  imageUrl: "",
  description: "",
  link: "",
};

const emptyProject: Omit<ProjectItem, "id"> = {
  title: "",
  category: "Web Dev",
  imageUrl: "",
  description: "",
  tags: [],
  liveUrl: "",
  repoUrl: "",
};

type Props = {
  focusGalleryId?: string | null;
  focusProjectId?: string | null;
};

export function ControlPanel({ focusGalleryId, focusProjectId }: Props) {
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

  const [tab, setTab] = useState<Tab>("galeri");
  const [gForm, setGForm] = useState(emptyGallery);
  const [gEdit, setGEdit] = useState<string | null>(null);
  const [pForm, setPForm] = useState({ ...emptyProject, tagsText: "" });
  const [pEdit, setPEdit] = useState<string | null>(null);
  const [contactForm, setContactForm] = useState(contacts);
  const [profileForm, setProfileForm] = useState({
    ...profile,
    softText: profile.softSkills.join(", "),
  });
  const [skillName, setSkillName] = useState("");
  const [skillPct, setSkillPct] = useState("70");
  const [newPin, setNewPin] = useState("");

  useEffect(() => {
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
          link: row.link ?? "",
        });
      }
    }
  }, [focusGalleryId, gallery]);

  useEffect(() => {
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
          tagsText: row.tags.join(", "),
        });
      }
    }
  }, [focusProjectId, projects]);

  function saveGallery() {
    if (!gForm.title.trim()) return;
    const payload = {
      ...gForm,
      link: gForm.link?.trim() || undefined,
    };
    try {
      if (gEdit) {
        updateGallery(gEdit, payload);
        toast.success(copy("saved"));
      } else {
        addGallery(payload);
        toast.success(copy("added"));
      }
      setGForm(emptyGallery);
      setGEdit(null);
    } catch {
      toast.error(copy("storageFull"));
    }
  }

  function saveProject() {
    if (!pForm.title.trim()) return;
    const payload: Omit<ProjectItem, "id"> = {
      title: pForm.title,
      category: pForm.category,
      imageUrl: pForm.imageUrl,
      description: pForm.description,
      tags: pForm.tagsText
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean),
      liveUrl: pForm.liveUrl?.trim() || undefined,
      repoUrl: pForm.repoUrl?.trim() || undefined,
    };
    try {
      if (pEdit) {
        updateProject(pEdit, payload);
        toast.success(copy("saved"));
      } else {
        addProject(payload);
        toast.success(copy("added"));
      }
      setPForm({ ...emptyProject, tagsText: "" });
      setPEdit(null);
    } catch {
      toast.error(copy("storageFull"));
    }
  }

  return (
    <div className="rounded-2xl bg-surface p-4 shadow-[var(--shadow-border)] md:p-6">
      <h2 className="font-display text-lg font-semibold">{copy("control")}</h2>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {TABS.map((id) => (
          <button
            key={id}
            type="button"
            onClick={() => setTab(id)}
            className={cn(
              "h-9 rounded-full px-3 text-xs font-medium capitalize transition-colors",
              tab === id
                ? "bg-accent text-accent-fg"
                : "bg-bg text-muted hover:text-fg",
            )}
          >
            {id === "galeri"
              ? copy("gallery")
              : id === "project"
                ? copy("projects")
                : id === "kontak"
                  ? copy("contacts")
                  : id === "profil"
                    ? copy("profile")
                    : id === "skills"
                      ? copy("skills")
                      : copy("system")}
          </button>
        ))}
      </div>
      <Separator className="my-4" />

      {tab === "galeri" ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              saveGallery();
            }}
          >
            <Field label={copy("title")}>
              <Input
                value={gForm.title}
                onChange={(e) => setGForm({ ...gForm, title: e.target.value })}
              />
            </Field>
            <Field label={copy("category")}>
              <CategorySelect
                value={gForm.category}
                onChange={(category) => setGForm({ ...gForm, category })}
              />
            </Field>
            <Field label={copy("photo")}>
              <ImagePicker
                value={gForm.imageUrl}
                onChange={(imageUrl) => setGForm({ ...gForm, imageUrl })}
              />
            </Field>
            <Field label={copy("link")}>
              <Input
                value={gForm.link ?? ""}
                onChange={(e) => setGForm({ ...gForm, link: e.target.value })}
              />
            </Field>
            <Field label={copy("description")}>
              <Textarea
                value={gForm.description}
                onChange={(e) =>
                  setGForm({ ...gForm, description: e.target.value })
                }
              />
            </Field>
            <div className="flex gap-2">
              <Button type="submit">{gEdit ? copy("save") : copy("add")}</Button>
              {gEdit ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setGEdit(null);
                    setGForm(emptyGallery);
                  }}
                >
                  {copy("cancel")}
                </Button>
              ) : null}
            </div>
          </form>
          <ItemList
            rows={gallery.map((g) => ({
              id: g.id,
              title: g.title,
              meta: g.category,
            }))}
            onEdit={(id) => {
              const row = gallery.find((g) => g.id === id);
              if (!row) return;
              setGEdit(id);
              setGForm({
                title: row.title,
                category: row.category,
                imageUrl: row.imageUrl,
                description: row.description,
                link: row.link ?? "",
              });
            }}
            onDelete={(id) => {
              removeGallery(id);
              toast.success(copy("deleted"));
            }}
            editLabel={copy("edit")}
            deleteLabel={copy("remove")}
          />
        </div>
      ) : null}

      {tab === "project" ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <form
            className="space-y-3"
            onSubmit={(e) => {
              e.preventDefault();
              saveProject();
            }}
          >
            <Field label={copy("title")}>
              <Input
                value={pForm.title}
                onChange={(e) => setPForm({ ...pForm, title: e.target.value })}
              />
            </Field>
            <Field label={copy("category")}>
              <CategorySelect
                value={pForm.category}
                onChange={(category) => setPForm({ ...pForm, category })}
              />
            </Field>
            <Field label={copy("photo")}>
              <ImagePicker
                value={pForm.imageUrl}
                onChange={(imageUrl) => setPForm({ ...pForm, imageUrl })}
              />
            </Field>
            <Field label={copy("tags")}>
              <Input
                value={pForm.tagsText}
                onChange={(e) =>
                  setPForm({ ...pForm, tagsText: e.target.value })
                }
              />
            </Field>
            <Field label={copy("liveUrl")}>
              <Input
                value={pForm.liveUrl ?? ""}
                onChange={(e) =>
                  setPForm({ ...pForm, liveUrl: e.target.value })
                }
              />
            </Field>
            <Field label={copy("repoUrl")}>
              <Input
                value={pForm.repoUrl ?? ""}
                onChange={(e) =>
                  setPForm({ ...pForm, repoUrl: e.target.value })
                }
              />
            </Field>
            <Field label={copy("description")}>
              <Textarea
                value={pForm.description}
                onChange={(e) =>
                  setPForm({ ...pForm, description: e.target.value })
                }
              />
            </Field>
            <div className="flex gap-2">
              <Button type="submit">{pEdit ? copy("save") : copy("add")}</Button>
              {pEdit ? (
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setPEdit(null);
                    setPForm({ ...emptyProject, tagsText: "" });
                  }}
                >
                  {copy("cancel")}
                </Button>
              ) : null}
            </div>
          </form>
          <ItemList
            rows={projects.map((p) => ({
              id: p.id,
              title: p.title,
              meta: p.tags.join(" · "),
            }))}
            onEdit={(id) => {
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
                tagsText: row.tags.join(", "),
              });
            }}
            onDelete={(id) => {
              removeProject(id);
              toast.success(copy("deleted"));
            }}
            editLabel={copy("edit")}
            deleteLabel={copy("remove")}
          />
        </div>
      ) : null}

      {tab === "kontak" ? (
        <form
          className="grid gap-3 sm:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            setContacts(contactForm);
            toast.success(copy("saved"));
          }}
        >
          {(
            [
              "instagram",
              "email",
              "github",
              "linkedin",
            ] as const
          ).map((key) => (
            <div key={key} className="space-y-2 rounded-xl bg-bg p-3">
              <p className="font-mono text-[10px] tracking-widest text-subtle uppercase">
                {key}
              </p>
              <Input
                value={contactForm[key].label}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    [key]: { ...contactForm[key], label: e.target.value },
                  })
                }
              />
              <Input
                value={contactForm[key].url}
                onChange={(e) =>
                  setContactForm({
                    ...contactForm,
                    [key]: { ...contactForm[key], url: e.target.value },
                  })
                }
              />
            </div>
          ))}
          <div className="sm:col-span-2">
            <Button type="submit">{copy("save")}</Button>
          </div>
        </form>
      ) : null}

      {tab === "profil" ? (
        <form
          className="space-y-3"
          onSubmit={(e) => {
            e.preventDefault();
            try {
              setProfile({
                name: profileForm.name,
                subtitle: profileForm.subtitle,
                bio: profileForm.bio,
                education: profileForm.education,
                avatarUrl: profileForm.avatarUrl,
                cvUrl: profileForm.cvUrl,
                available: profileForm.available,
                availabilityLabel: profileForm.availabilityLabel,
                softSkills: profileForm.softText
                  .split(",")
                  .map((s) => s.trim())
                  .filter(Boolean),
              });
              toast.success(copy("saved"));
            } catch {
              toast.error(copy("storageFull"));
            }
          }}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            <Field label={copy("name")}>
              <Input
                value={profileForm.name}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, name: e.target.value })
                }
              />
            </Field>
            <Field label={copy("subtitle")}>
              <Input
                value={profileForm.subtitle}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, subtitle: e.target.value })
                }
              />
            </Field>
          </div>
          <Field label={copy("bio")}>
            <Textarea
              value={profileForm.bio}
              onChange={(e) =>
                setProfileForm({ ...profileForm, bio: e.target.value })
              }
            />
          </Field>
          <Field label={copy("education")}>
            <Textarea
              value={profileForm.education}
              onChange={(e) =>
                setProfileForm({ ...profileForm, education: e.target.value })
              }
            />
          </Field>
          <Field label={copy("softSkills")}>
            <Input
              value={profileForm.softText}
              onChange={(e) =>
                setProfileForm({ ...profileForm, softText: e.target.value })
              }
            />
          </Field>
          <Field label={copy("photo")}>
            <ImagePicker
              square
              value={profileForm.avatarUrl}
              onChange={(avatarUrl) =>
                setProfileForm({ ...profileForm, avatarUrl })
              }
            />
          </Field>
          <Field label={copy("cvUrl")}>
            <Input
              value={profileForm.cvUrl}
              onChange={(e) =>
                setProfileForm({ ...profileForm, cvUrl: e.target.value })
              }
            />
          </Field>
          <Field label={copy("availability")}>
            <Input
              value={profileForm.availabilityLabel}
              onChange={(e) =>
                setProfileForm({
                  ...profileForm,
                  availabilityLabel: e.target.value,
                })
              }
            />
          </Field>
          <label className="flex items-center gap-3 text-sm">
            <Switch
              checked={profileForm.available}
              onCheckedChange={(available) =>
                setProfileForm({ ...profileForm, available })
              }
            />
            {copy("openHire")}
          </label>
          <Button type="submit">{copy("save")}</Button>
        </form>
      ) : null}

      {tab === "skills" ? (
        <div className="space-y-4">
          <form
            className="flex flex-col gap-2 sm:flex-row"
            onSubmit={(e) => {
              e.preventDefault();
              if (!skillName.trim()) return;
              addSkill(skillName.trim(), Number(skillPct) || 0);
              setSkillName("");
              toast.success(copy("added"));
            }}
          >
            <Input
              placeholder={copy("skills")}
              value={skillName}
              onChange={(e) => setSkillName(e.target.value)}
            />
            <Input
              type="number"
              min={0}
              max={100}
              className="sm:w-28"
              value={skillPct}
              onChange={(e) => setSkillPct(e.target.value)}
            />
            <Button type="submit">{copy("add")}</Button>
          </form>
          <ul className="space-y-2">
            {skills.map((s) => (
              <li
                key={s.id}
                className="flex items-center justify-between rounded-xl bg-bg px-3 py-2"
              >
                <span className="text-sm">
                  {s.name}{" "}
                  <span className="font-mono text-xs text-muted">
                    {s.percent}%
                  </span>
                </span>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    removeSkill(s.id);
                    toast.success(copy("deleted"));
                  }}
                >
                  {copy("remove")}
                </Button>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {tab === "sistem" ? (
        <div className="space-y-5">
          <form
            className="flex flex-col gap-2 sm:flex-row sm:items-end"
            onSubmit={(e) => {
              e.preventDefault();
              setAdminPin(newPin);
              setNewPin("");
              toast.success(copy("saved"));
            }}
          >
            <Field label={copy("changePin")} className="flex-1">
              <Input
                value={newPin}
                onChange={(e) => setNewPin(e.target.value)}
                placeholder="1234"
              />
            </Field>
            <Button type="submit">{copy("save")}</Button>
          </form>
          <div className="rounded-xl border border-border p-4">
            <p className="font-display text-sm font-semibold">{copy("danger")}</p>
            <p className="mt-1 text-sm text-muted">{copy("resetConfirm")}</p>
            <Button
              className="mt-3"
              variant="default"
              onClick={() => {
                if (window.confirm(copy("resetConfirm"))) {
                  resetData();
                  toast.success(copy("resetDone"));
                }
              }}
            >
              {copy("reset")}
            </Button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function Field({
  label,
  children,
  className,
}: {
  label: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <Label>{label}</Label>
      {children}
    </div>
  );
}

function CategorySelect({
  value,
  onChange,
}: {
  value: Category;
  onChange: (v: Category) => void;
}) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value as Category)}
      className="flex h-10 w-full rounded-md border border-border bg-bg px-3 text-sm text-fg outline-none focus:ring-2 focus:ring-accent"
    >
      {CATEGORIES.map((c) => (
        <option key={c} value={c}>
          {c}
        </option>
      ))}
    </select>
  );
}

function ItemList({
  rows,
  onEdit,
  onDelete,
  editLabel,
  deleteLabel,
}: {
  rows: { id: string; title: string; meta: string }[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
  editLabel: string;
  deleteLabel: string;
}) {
  return (
    <ul className="max-h-96 space-y-2 overflow-y-auto">
      {rows.map((row) => (
        <li
          key={row.id}
          className="flex items-center justify-between gap-2 rounded-xl bg-bg px-3 py-2"
        >
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{row.title}</p>
            <p className="truncate text-xs text-subtle">{row.meta}</p>
          </div>
          <div className="flex shrink-0 gap-1">
            <Button size="sm" variant="ghost" onClick={() => onEdit(row.id)}>
              {editLabel}
            </Button>
            <Button size="sm" variant="ghost" onClick={() => onDelete(row.id)}>
              {deleteLabel}
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}
