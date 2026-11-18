"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { profile, heroTags } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import LinkedinIcon from "./icons/LinkedinIcon";
import GithubIcon from "./icons/GithubIcon";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-grid"
    >
      <div className="absolute inset-0 bg-radial-fade pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 w-full grid lg:grid-cols-[1fr_340px] gap-10 lg:gap-14 items-center">
        <div className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mono-tag text-green text-sm mb-5 flex items-center gap-2"
          >
            <span className="h-2 w-2 rounded-full bg-green inline-block shadow-[0_0_10px_2px_rgba(57,255,143,0.7)]" />
            available for select projects
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground max-w-3xl"
          >
            Hi, I&apos;m {profile.name.split(" ")[0]}
            <span className="text-green glow-text">.</span>
            <br />
            I build{" "}
            <span className="text-green glow-text">AI agents</span> &amp;
            intelligent software.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-6 max-w-xl text-muted text-base sm:text-lg leading-relaxed"
          >
            AI Engineer &amp; Full-Stack Developer based in {profile.location}.
            Founder of{" "}
            <a
              href={profile.finet}
              target="_blank"
              rel="noreferrer"
              className="text-green hover:underline"
            >
              Finet AI
            </a>
            . I work across AI agents, LLM applications, and full-stack
            product development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-8 flex flex-wrap gap-2"
          >
            {heroTags.map((tag) => (
              <span
                key={tag}
                className="mono-tag text-xs px-3 py-1.5 rounded-full border border-surface-border bg-surface text-muted"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-green text-[#06140d] font-semibold px-5 py-3 text-sm hover:bg-green-dim transition-colors"
            >
              View my work <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-surface-border px-5 py-3 text-sm text-foreground hover:border-green-dim hover:text-green transition-colors"
            >
              Get in touch
            </a>

            <div className="flex items-center gap-3 ml-2">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted hover:text-green transition-colors"
              >
                <GithubIcon size={20} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted hover:text-green transition-colors"
              >
                <LinkedinIcon size={20} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative order-1 lg:order-2 mx-auto lg:mx-0"
        >
          <div className="relative mx-auto w-[220px] sm:w-[260px] lg:w-[300px] aspect-[3/4] rounded-2xl overflow-hidden border border-green-dim/40 glow-border bg-surface">
            <Image
              src={profile.photo}
              alt={profile.name}
              fill
              sizes="(max-width: 1024px) 260px, 300px"
              className="object-cover object-top grayscale-[15%] contrast-105"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          </div>

          {/* corner brackets for a techy HUD feel */}
          <span className="absolute -top-2 -left-2 h-6 w-6 border-t-2 border-l-2 border-green rounded-tl-md" />
          <span className="absolute -top-2 -right-2 h-6 w-6 border-t-2 border-r-2 border-green rounded-tr-md" />
          <span className="absolute -bottom-2 -left-2 h-6 w-6 border-b-2 border-l-2 border-green rounded-bl-md" />
          <span className="absolute -bottom-2 -right-2 h-6 w-6 border-b-2 border-r-2 border-green rounded-br-md" />

          <div className="mono-tag absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] px-3 py-1 rounded-full bg-background border border-surface-border text-green">
            yeabsera.abebe
          </div>
        </motion.div>
      </div>
    </section>
  );
}
