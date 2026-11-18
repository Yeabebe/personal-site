"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { summary, education, languages } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="relative py-24 border-t border-surface-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" title="About" />

        <div className="grid md:grid-cols-5 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="md:col-span-3"
          >
            <p className="text-foreground/90 text-lg leading-relaxed">
              {summary}
            </p>
            <p className="text-muted mt-4 leading-relaxed">
              I enjoy taking ideas from problem definition and research
              through prototyping, implementation, and product delivery —
              working comfortably across both engineering and
              non-technical, business-facing conversations.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 space-y-6"
          >
            <div className="rounded-lg border border-surface-border bg-surface p-5">
              <p className="mono-tag text-xs text-green mb-2">Education</p>
              <p className="text-foreground font-medium">{education.degree}</p>
              <p className="text-muted text-sm mt-1">{education.school}</p>
            </div>

            <div className="rounded-lg border border-surface-border bg-surface p-5">
              <p className="mono-tag text-xs text-green mb-3">Languages</p>
              <ul className="space-y-2">
                {languages.map((l) => (
                  <li
                    key={l.name}
                    className="flex justify-between text-sm text-muted"
                  >
                    <span className="text-foreground/90">{l.name}</span>
                    <span>{l.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
