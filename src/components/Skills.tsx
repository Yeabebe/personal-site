"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills } from "@/lib/data";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 border-t border-surface-border bg-background-elevated"
    >
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="04" title="Skills" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-surface-border bg-surface p-5"
            >
              <p className="mono-tag text-sm text-green mb-4">
                {group.category}
              </p>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-muted flex items-center gap-2"
                  >
                    <span className="h-1 w-1 rounded-full bg-green-dim shrink-0" />
                    {item}
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
