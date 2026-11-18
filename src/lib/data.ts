export const profile = {
  name: "Yeabsera Abebe",
  role: "AI Engineer | Full-Stack Developer | AI Agents & Intelligent Systems",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/Yeabebe",
  githubLabel: "github.com/Yeabebe",
  linkedin: "https://www.linkedin.com/in/yeabsera-abebe-1a2535297/",
  linkedinLabel: "linkedin.com/in/yeabsera-abebe",
  finet: "https://finet-ai.vercel.app",
  finetLabel: "finet-ai.vercel.app",
  email: "yeabseraabebe.yeab@gmail.com",
  phone: "+251 991059570",
  photo: "/images/yeabsera.jpg",
};

export const summary =
  "AI Engineer and Full-Stack Developer with 2+ years of experience at iCog Labs, spanning AI engineering and business development. I build AI agents, LLM applications, and intelligent software systems — from problem definition and research through prototyping and product delivery. Founder of Finet AI, an AI-powered financial intelligence platform.";

export const heroTags = [
  "AI Agents",
  "LLM Applications",
  "RAG",
  "Generative AI",
  "Full-Stack Development",
];

export type Experience = {
  role: string;
  org: string;
  period: string;
  type?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Chief Executive Officer",
    org: "Finet AI",
    period: "Sep 2026 — Present",
    type: "Self-employed",
    points: [
      "Founded and lead Finet AI, an AI-powered financial intelligence platform combining market data, machine learning, and LLM-based reasoning.",
      "Designed a financial analyst agent and a Data → Context → Analysis → Reasoning → Insight product pipeline.",
    ],
  },
  {
    role: "Business Developer",
    org: "iCog Labs",
    period: "Aug 2024 — Present",
    type: "Part-time",
    points: [
      "Identify clients, partnership opportunities, and new business opportunities for AI solutions.",
      "Conduct market research and communicate technology solutions to prospective partners.",
      "Prepare presentations, proposals, and professional communications for stakeholder engagement.",
    ],
  },
  {
    role: "AI Engineer",
    org: "iCog Labs",
    period: "Jun 2025 — Aug 2026",
    type: "Internship",
    points: [
      "Contributed to AI engineering and research across generative AI, quantum computation, and intelligent systems.",
      "Worked on AI video generation and other generative AI projects.",
      "Explored quantum computation concepts, including ZX-calculus and graph-based representations.",
    ],
  },
  {
    role: "Communications Lead",
    org: "GDG on Campus AASTU",
    period: "Oct 2025 — Sep 2026",
    type: "Part-time",
    points: [
      "Led communication initiatives for Google Developer Groups on Campus, strengthening the campus developer community.",
      "Coordinated event promotion, announcements, and audience engagement; hosted AASTU Tech Fest 2025 as MC.",
      "Received the community's Impact Award for contributions to the developer ecosystem.",
    ],
  },
  {
    role: "Ambassador",
    org: "Stardust",
    period: "Aug 2025 — Present",
    type: "Part-time · Remote",
    points: [
      "Represent Stardust in Ethiopia, promoting STEM education and space science awareness.",
      "Support event organization, outreach, and community engagement for students and young professionals.",
    ],
  },
  {
    role: "Community Lead",
    org: "iCog Labs Community",
    period: "Nov 2024 — Oct 2026",
    type: "Part-time",
    points: [
      "Grew and engaged a community around AI, technology, and innovation.",
      "Connected students and developers with learning and collaboration opportunities.",
    ],
  },
];

export type Project = {
  title: string;
  tag: string;
  description: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Finet AI — Financial Analyst Agent",
    tag: "Generative AI · FinTech",
    description:
      "AI-powered financial intelligence platform combining market data, technical indicators (RSI, MACD, Bollinger Bands), machine learning, and LLM-based reasoning to generate market insights.",
    stack: ["Python", "FastAPI", "React", "LangChain", "Pandas", "Vercel"],
    link: "https://finet-ai.vercel.app",
  },
  {
    title: "AI Video Generation Model",
    tag: "Generative AI · Machine Learning",
    description:
      "Developed and experimented with an AI-based video generation system exploring generative models for producing video content from text and other conditioning inputs.",
    stack: ["Python", "Generative AI", "Machine Learning"],
  },
  {
    title: "AI Agent Experiments",
    tag: "Agentic AI",
    description:
      "Research and development of AI agents capable of using tools, processing information, executing multi-step tasks, and generating contextual responses.",
    stack: ["Python", "LLM APIs", "LangChain", "RAG"],
  },
];

export const skills: { category: string; items: string[] }[] = [
  {
    category: "AI / ML",
    items: [
      "AI Agents & Agentic AI",
      "LLM Applications",
      "RAG",
      "Prompt Engineering",
      "NLP",
      "Generative AI",
      "PyTorch",
    ],
  },
  {
    category: "Software Engineering",
    items: ["Python", "TypeScript / JavaScript", "React.js", "Next.js", "Node.js", "FastAPI", "REST APIs"],
  },
  {
    category: "AI Frameworks & Data",
    items: ["LangChain", "LangGraph", "FAISS / Vector Search", "Pandas", "NumPy", "Streamlit"],
  },
  {
    category: "Product & Business",
    items: ["Product Discovery", "Business Development", "Technical Presales", "Market Research"],
  },
];

export const education = {
  degree: "BSc, Electrical & Computer Engineering",
  school: "Addis Ababa Science & Technology University (AASTU)",
};

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Amharic", level: "Professional" },
  { name: "Afaan Oromo", level: "Professional" },
];
