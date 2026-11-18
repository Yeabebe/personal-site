"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { profile } from "@/lib/data";
import { Mail, ExternalLink } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";

// TODO: replace with your real email address.
const EMAIL = "your.email@example.com";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 border-t border-surface-border bg-grid">
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading index="05" title="Get in touch" />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <p className="text-foreground/90 text-lg leading-relaxed">
            Have a project in mind, or want to talk about AI agents, LLM
            applications, or Finet AI? I&apos;m always open to a good
            conversation.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center gap-2 rounded-md bg-green text-[#06140d] font-semibold px-5 py-3 text-sm hover:bg-green-dim transition-colors"
            >
              <Mail size={16} /> Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-surface-border px-5 py-3 text-sm text-foreground hover:border-green-dim hover:text-green transition-colors"
            >
              <LinkedinIcon size={16} /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-surface-border px-5 py-3 text-sm text-foreground hover:border-green-dim hover:text-green transition-colors"
            >
              <GithubIcon size={16} /> GitHub
            </a>
            <a
              href={profile.finet}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-surface-border px-5 py-3 text-sm text-foreground hover:border-green-dim hover:text-green transition-colors"
            >
              <ExternalLink size={16} /> Finet AI
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
