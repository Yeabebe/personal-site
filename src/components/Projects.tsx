"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 border-t border-surface-border">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="03"
          title="Selected Projects"
          subtitle="AI products and research built around agents, generative models, and reasoning."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="group relative rounded-xl border border-surface-border bg-surface p-6 flex flex-col hover:border-green-dim/60 transition-colors"
            >
              <div className="flex items-start justify-between">
                <p className="mono-tag text-xs text-green mb-3">{p.tag}</p>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-dim group-hover:text-green transition-colors"
                    aria-label={`Open ${p.title}`}
                  >
                    <ArrowUpRight size={18} />
                  </a>
                )}
              </div>

              <h3 className="text-foreground font-semibold text-lg leading-snug">
                {p.title}
              </h3>

              <p className="text-muted text-sm mt-3 leading-relaxed flex-1">
                {p.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="mono-tag text-[11px] px-2 py-1 rounded border border-surface-border text-muted-dim"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
