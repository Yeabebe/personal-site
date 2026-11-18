import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-surface-border py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="mono-tag text-xs text-muted-dim">
          © 2026 {profile.name}. Built with Next.js &amp;
          Tailwind.
        </p>
        <p className="mono-tag text-xs text-muted-dim">{profile.location}</p>
      </div>
    </footer>
  );
}
