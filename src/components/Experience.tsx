"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 border-t border-surface-border bg-background-elevated"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="02"
          title="Experience"
          subtitle="A mix of AI engineering, product building, and business development."
        />

        <div className="relative pl-6 sm:pl-8 border-l border-surface-border space-y-10">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role + exp.org}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 h-3 w-3 rounded-full bg-green shadow-[0_0_10px_2px_rgba(57,255,143,0.6)]" />

              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-foreground">
                  {exp.role}{" "}
                  <span className="text-green font-normal">— {exp.org}</span>
                </h3>
                <span className="mono-tag text-xs text-muted-dim">
                  {exp.period}
                  {exp.type ? ` · ${exp.type}` : ""}
                </span>
              </div>

              <ul className="mt-3 space-y-1.5">
                {exp.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-sm text-muted leading-relaxed flex gap-2"
                  >
                    <span className="text-green-dim mt-1.5 shrink-0">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
