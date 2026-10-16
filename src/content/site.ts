// Edit this file to update portfolio content. No layout code lives here.

export const siteConfig = {
  name: "Ayush Bajpai",
  shortName: "AB",
  role: "Mobile Application Developer",
  eyebrow: "Android & Software Engineer",
  headline: "Building mobile experiences that work beautifully in the real world.",
  intro:
    "I build production-ready mobile applications using Flutter and Native Android, combining clean architecture, native integrations, reliable APIs, and thoughtful user experiences.",
  location: "Gurugram, India",
  // Hero image. Place the file in /public/images and reference it from "/images/...".
  // Set to "" to show the code panel instead.
  photo: "/images/ayush.webp",
  photoAlt: "Portrait of Ayush Bajpai",
  availability: "Open to opportunities",
  email: "bajpaiayush12345@gmail.com",
  phone: "+91 6394484961",
  url: "https://ayushbajpai.dev", // update once deployed
  social: {
    github: "https://github.com/", // TODO: add your GitHub username
    linkedin: "https://www.linkedin.com/in/", // TODO: add your LinkedIn slug
    leetcode: "https://leetcode.com/", // TODO: add your LeetCode username
    geeksforgeeks: "https://www.geeksforgeeks.org/", // TODO: add your GfG profile
  },
};

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  title: "Engineering approach",
  lead:
    "I care about software that keeps working after launch: in low-signal areas, on budget devices, and under real user behaviour.",
  paragraphs: [
    "I build maintainable mobile applications on Clean Architecture and MVVM, separating UI, domain, and data layers so features stay testable as the codebase grows. In my current role that means a 33+ module Flutter app managed with Riverpod.",
    "A lot of my work sits at the boundary between Flutter and native Android. I write Kotlin for foreground services, call and notification handling, and expose it to Dart through MethodChannels, so the app can do things a pure cross-platform layer cannot.",
    "Beyond UI, I integrate the systems products depend on: REST APIs, offline storage, Firebase services, subscriptions through Google Play Billing and Razorpay, deep links, and install-referrer attribution.",
    "When something breaks in production, I trace it with Crashlytics and Android Studio profilers, fix the root cause, and leave the code clearer than I found it.",
  ],
  principles: [
    { title: "Architecture first", body: "Clean boundaries between UI, domain, and data. Code that is easy to reason about and change." },
    { title: "Native where it matters", body: "Bridge Flutter to Kotlin for services, calls, and notifications instead of working around platform limits." },
    { title: "Reliable integrations", body: "APIs, payments, storage, and analytics wired carefully with offline and failure states handled." },
    { title: "Production discipline", body: "Crash-free rates, ANRs, memory, and frame times treated as features, not afterthoughts." },
  ],
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  points: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "AIVO Technologies",
    role: "Android Developer",
    location: "Gurugram",
    start: "Jun 2026",
    end: "Present",
    summary: "Production AI assistant application with 33+ modules.",
    points: [
      "Develop Flutter features with Dart, Riverpod, and Clean Architecture across a 33+ module production app.",
      "Build native Kotlin integrations for foreground services, call and notification handling, and Flutter–Android MethodChannels.",
      "Integrate REST APIs with Dio and Retrofit, offline storage with Drift (SQLite), and Firebase FCM, Analytics, Crashlytics, and Remote Config.",
      "Implement subscriptions with Google Play Billing and Razorpay, a referral system via the Play Install Referrer API and deep links, and localisation in 19+ languages.",
      "Troubleshoot production crashes and ANRs using Crashlytics and Android Studio profiling tools.",
    ],
    stack: ["Flutter", "Dart", "Kotlin", "Riverpod", "Drift", "Firebase", "Play Billing", "Razorpay"],
  },
  {
    company: "Witzeal Technologies",
    role: "Game Developer",
    location: "Gurugram",
    start: "Jul 2025",
    end: "Mar 2026",
    summary: "Multiplayer Android game features in Java and LibGDX.",
    points: [
      "Developed Android game features in Java using LibGDX: gameplay logic, sprite rendering, and touch controls.",
      "Built reusable UI components and animations with Scene2D; packed assets into TextureAtlas sheets to reduce draw calls.",
      "Integrated REST APIs and real-time socket events for multiplayer state, timers, and score synchronisation.",
      "Fixed production crashes and optimised frame rate, memory usage, and APK size for low-end devices.",
    ],
    stack: ["Java", "LibGDX", "Scene2D", "WebSockets", "REST"],
  },
];

export type Project = {
  slug: string;
  category: string;
  name: string;
  description: string;
  role: string;
  challenge: string;
  stack: string[];
  links: { label: string; href: string }[]; // leave empty if not available
  visual: "assistant" | "native" | "payments" | "game" | "blog" | "apartment" | "web";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "ai-assistant",
    category: "AI-powered mobile assistant",
    name: "MySA — My Smart Assistant",
    description:
      "A production AI personal assistant for Android that answers and makes calls on your behalf, manages reminders, tasks, notes, and documents, and syncs with your calendar. 33+ feature modules, 19+ languages.",
    role: "Android Developer at AIVO Technologies. Feature development across the Flutter layer, native Kotlin integrations for call handling and foreground services, subscriptions, and release stability.",
    challenge:
      "Keeping a 33+ module codebase coherent: Clean Architecture with Riverpod for state, strict layer boundaries, and Remote Config driven rollouts so features can ship and be switched safely. Native call and notification handling had to stay reliable across Android versions and OEM battery policies.",
    stack: ["Flutter", "Dart", "Kotlin", "Riverpod", "Clean Architecture", "Drift", "Firebase", "Play Billing", "19+ locales"],
    links: [{ label: "Visit mysmartassistant.ai", href: "https://mysmartassistant.ai/" }],
    visual: "assistant",
    featured: true,
  },
  {
    slug: "native-bridge",
    category: "Native Android and Kotlin integrations",
    name: "Flutter ↔ Android Native Bridge",
    description: "Kotlin layer giving a Flutter app access to foreground services, calls, and system notifications.",
    role: "Designed and implemented the MethodChannel contracts and the Kotlin services behind them.",
    challenge:
      "Keeping long-running foreground services alive across Android versions and OEM battery policies while exposing a clean, typed Dart API over MethodChannel.",
    stack: ["Kotlin", "Android Services", "MethodChannel", "Notifications", "Deep Links"],
    links: [],
    visual: "native",
  },
  {
    slug: "subscriptions",
    category: "Subscriptions and payments",
    name: "Subscriptions, Payments & Referrals",
    description: "In-app subscriptions and one-time purchases with referral attribution for a production Android app.",
    role: "Built the billing flow end to end, from Play Billing and Razorpay integration to entitlement handling.",
    challenge:
      "Reconciling purchase state between Google Play Billing, Razorpay, and the backend so entitlements stay correct across reinstalls, refunds, and network failures.",
    stack: ["Google Play Billing", "Razorpay", "Install Referrer API", "Deep Links", "Firebase Analytics"],
    links: [],
    visual: "payments",
  },
  {
    slug: "multiplayer-game",
    category: "Multiplayer Android game",
    name: "Real-time Multiplayer Game",
    description: "Android game built in Java with LibGDX, featuring live multiplayer rounds, timers, and score sync.",
    role: "Game Developer. Gameplay logic, Scene2D UI, asset pipeline, and socket integration.",
    challenge:
      "Holding a stable frame rate on low-end devices while synchronising multiplayer state over sockets. Solved with TextureAtlas packing to cut draw calls and careful memory profiling.",
    stack: ["Java", "LibGDX", "Scene2D", "TextureAtlas", "WebSockets"],
    links: [],
    visual: "game",
  },
  {
    slug: "blog-platform",
    category: "Full-stack web application",
    name: "Blog Platform",
    description: "Full-stack blogging platform with OTP registration, Google OAuth, and S3-backed media.",
    role: "Built the REST API, authentication flows, and the responsive React front end.",
    challenge:
      "Secure, low-friction onboarding: OTP email verification through Nodemailer alongside Google OAuth, with image uploads served from AWS S3.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Firebase", "AWS S3"],
    links: [{ label: "GitHub", href: "https://github.com/" }], // TODO: add repo URL
    visual: "blog",
  },
  {
    slug: "apartment-management",
    category: "Full-stack web application",
    name: "Apartment Management System",
    description: "Role-based management system for tenants, visitors, vehicles, and entry/exit records.",
    role: "Designed the layered Spring Boot REST API and the Next.js admin interface.",
    challenge:
      "Modelling Admin, Secretary, and Security roles with distinct workflows and permissions over shared records without duplicating business logic.",
    stack: ["Spring Boot", "MySQL", "Next.js", "Tailwind CSS"],
    links: [{ label: "GitHub", href: "https://github.com/" }], // TODO: add repo URL
    visual: "apartment",
  },
];

export const skillGroups = [
  { title: "Mobile Development", items: ["Flutter", "Dart", "Native Android", "Kotlin", "Java", "Jetpack", "Gradle"] },
  { title: "Architecture & State", items: ["Clean Architecture", "MVVM", "Riverpod", "SOLID", "OOP"] },
  { title: "APIs & Backend Integration", items: ["REST APIs", "Dio", "Retrofit", "WebSockets", "JSON"] },
  { title: "Storage & Cloud", items: ["SQLite", "Drift", "Firebase", "FCM", "Remote Config", "AWS S3", "MySQL", "MongoDB"] },
  { title: "Payments & Analytics", items: ["Google Play Billing", "Razorpay", "Install Referrer API", "Firebase Analytics", "Crashlytics"] },
  { title: "Tools", items: ["Android Studio", "VS Code", "Git", "GitHub", "Android Profiler"] },
];

export const education = [
  { degree: "Master of Computer Applications (MCA)", school: "Tezpur University", year: "2025", note: "CGPA 6.99" },
  { degree: "Bachelor of Science (B.Sc.)", school: "Chhatrapati Shahu Ji Maharaj University", year: "2021", note: "68.44%" },
];

export const codingProfiles = [
  { label: "LeetCode", value: "600+ problems", href: siteConfig.social.leetcode },
  { label: "GeeksforGeeks", value: "312+ problems", href: siteConfig.social.geeksforgeeks },
];

// Dedicated case study for the company marketing website.
export const website = {
  eyebrow: "Company website",
  name: "mysmartassistant.ai",
  url: "https://mysmartassistant.ai/",
  tagline: "Marketing site for MySA, the AI assistant for calls, reminders, and documents.",
  description:
    "Designed and built the public website for MySA from scratch in hand-written HTML, CSS, and JavaScript. No framework overhead, so pages stay light and load fast on mobile networks. The site carries the full growth stack: search and answer-engine optimisation, ad attribution, session analytics, and Razorpay checkout.",
  role: "Sole developer. Front end, performance, SEO/AEO, analytics and attribution wiring, payment integration, and deployment.",
  capabilities: [
    {
      title: "Performance",
      body: "Static HTML with critical CSS inlined, deferred scripts, compressed assets, and lazy-loaded media for a fast first paint and smooth scrolling.",
    },
    {
      title: "SEO & AEO",
      body: "Semantic structure, structured data, Open Graph and canonical tags, and answer-engine friendly content so AI assistants and search engines can read and cite the site. Supports agentic browsing.",
    },
    {
      title: "Analytics & attribution",
      body: "Google Tag Manager as the single tag layer, feeding Google Analytics, the Meta Pixel and Conversions API, and Microsoft Clarity. UTM parameters captured and persisted for campaign reporting.",
    },
    {
      title: "Payments & integrations",
      body: "Razorpay checkout for plans, plus third-party SDKs loaded on demand so they never block rendering.",
    },
  ],
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Google Tag Manager",
    "Google Analytics",
    "Meta Pixel",
    "Microsoft Clarity",
    "Razorpay",
    "UTM tracking",
    "Structured data",
  ],
};

export const contact = {
  heading: "Have a product to build or an engineering problem to solve?",
  body: "I'm currently based in Gurugram and open to conversations about mobile engineering roles, native integrations, and production-grade Flutter work.",
};
