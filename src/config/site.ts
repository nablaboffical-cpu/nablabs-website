// Central place to edit brand details, copy, pricing and links.
// Nothing in this file is a secret. Secrets never belong in the code.

export const site = {
  name: "NabLabs",
  tagline: "Your Business Growth Lab",
  description:
    "NabLabs builds intelligent AI systems and high-performing websites that help businesses win customers, save time, and scale with confidence.",
  // Set NEXT_PUBLIC_SITE_URL in Vercel once you have the final address.
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  // Optional contact details. Leave unset until real ones exist.
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  socials: [
    { label: "LinkedIn", href: process.env.NEXT_PUBLIC_LINKEDIN_URL || "" },
    { label: "Instagram", href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "" },
    { label: "X", href: process.env.NEXT_PUBLIC_X_URL || "" },
  ],
} as const;

export const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || "";

export const nav = [
  { label: "AI Solutions", href: "#ai-solutions", id: "ai-solutions" },
  { label: "Web Development", href: "#web-development", id: "web-development" },
  { label: "Pricing", href: "#pricing", id: "pricing" },
  { label: "Our Process", href: "#process", id: "process" },
] as const;

export const benefits = ["Save Time", "Capture More Leads", "Build for Growth"];

export const problems = [
  {
    title: "Follow-ups arrive too late",
    body: "An inquiry comes in on Friday evening and gets a reply on Monday. By then, the customer has already talked to someone else.",
  },
  {
    title: "Your team is buried in admin",
    body: "Copying details between spreadsheets, inboxes and chat apps takes hours that could go to real customers.",
  },
  {
    title: "Customers wait for simple answers",
    body: "The same questions about prices, hours and availability come in all day, and every one waits for a person.",
  },
  {
    title: "Your website gets visits, not inquiries",
    body: "People land on the site, can't see what to do next, and leave without getting in touch.",
  },
  {
    title: "Your tools don't talk to each other",
    body: "Leads live in one place, bookings in another and customer notes somewhere else, so nobody sees the full picture.",
  },
];

export type Service = {
  title: string;
  problem: string;
  solution: string;
  benefit: string;
};

export const aiServices: Service[] = [
  {
    title: "AI Customer Support",
    problem: "Customers wait for answers to common questions.",
    solution:
      "Answer common questions, organize inquiries, and route complex issues to the right person.",
    benefit: "Faster replies for customers and fewer interruptions for your team.",
  },
  {
    title: "WhatsApp & Messaging Automation",
    problem: "Conversations and reminders depend on someone being online.",
    solution:
      "Automate suitable customer conversations, reminders and follow-ups through supported messaging integrations.",
    benefit: "Consistent communication without constant manual effort.",
  },
  {
    title: "Lead Capture & Follow-Up Systems",
    problem: "Interested customers slip away before anyone replies.",
    solution:
      "Capture inquiries, qualify potential customers against agreed criteria, and support timely follow-ups and appointment booking.",
    benefit: "More of your inquiries get a timely, organized response.",
  },
  {
    title: "Business Workflow Automation",
    problem: "Repetitive data entry eats into productive hours.",
    solution:
      "Connect your business tools, reduce repetitive data entry, and automate suitable operational processes.",
    benefit: "Less busywork and fewer manual mistakes.",
  },
  {
    title: "CRM & Intelligent Integrations",
    problem: "Customer information is scattered across tools.",
    solution:
      "Connect customer information and business applications to improve lead tracking and team visibility.",
    benefit: "One clearer view of your leads and customers.",
  },
];

export const webServices: Service[] = [
  {
    title: "Business Websites & Landing Pages",
    problem: "Your website doesn't turn visitors into inquiries.",
    solution:
      "Professional, responsive websites designed around your audience and conversion goals.",
    benefit: "A site that represents your business well and invites contact.",
  },
  {
    title: "Custom Web Applications",
    problem: "Off-the-shelf software doesn't fit the way you work.",
    solution:
      "Browser-based applications that solve specific business problems through tailored features and workflows.",
    benefit: "Software shaped around your process, not the other way round.",
  },
  {
    title: "SaaS Products & MVPs",
    problem: "You have a product idea but no working version.",
    solution:
      "Turn your idea into a working product, with features such as authentication, dashboards and subscriptions where appropriate.",
    benefit: "A real product you can put in front of users and learn from.",
  },
  {
    title: "Client Portals & Business Dashboards",
    problem: "Customers and staff lack one place to see what matters.",
    solution:
      "Organized, secure interfaces for customers, staff and management.",
    benefit: "Clearer information and fewer back-and-forth messages.",
  },
  {
    title: "AI-Powered Web Applications",
    problem: "You want AI in your product but only where it earns its place.",
    solution:
      "Integrate practical AI capabilities into custom web products when they serve a genuine business need.",
    benefit: "AI that supports a real goal, not a gimmick.",
  },
];

export type Plan = {
  name: string;
  price: string; // Edit the number here. Always shown as a starting price in USD.
  summary: string;
  features: string[];
  highlight?: boolean;
};

export const aiPlans: Plan[] = [
  {
    name: "AI Automation Starter",
    price: "750",
    summary: "Suitable for a clearly defined, small automation need.",
    features: [
      "One focused automation workflow",
      "Integration with relevant business tools",
      "Basic testing and handover",
    ],
  },
  {
    name: "AI Growth System",
    price: "2,000",
    summary: "A more comprehensive system with several connected steps.",
    features: [
      "A more comprehensive automation system",
      "Multiple connected workflow steps",
      "Relevant integrations and qualification logic",
      "Testing, documentation and handover",
    ],
    highlight: true,
  },
  {
    name: "Custom AI Business System",
    price: "5,000",
    summary: "For more complex requirements, scoped around your business.",
    features: [
      "Tailored AI and automation implementation",
      "Multiple workflows or integrations as agreed",
      "More complex business requirements",
      "Custom scope and implementation plan",
    ],
  },
];

export const webPlans: Plan[] = [
  {
    name: "Business Website",
    price: "750",
    summary: "A professional site that is ready to receive inquiries.",
    features: [
      "Professional multi-section website",
      "Responsive design",
      "Core contact and inquiry functionality",
      "Basic on-page SEO setup",
    ],
  },
  {
    name: "Growth Website",
    price: "1,500",
    summary: "A custom design with more pages and stronger lead capture.",
    features: [
      "Custom-designed business website",
      "More extensive page structure",
      "Enhanced interactions and lead capture",
      "Relevant third-party integrations",
    ],
    highlight: true,
  },
  {
    name: "Custom Web Application",
    price: "3,000",
    summary: "Features are defined together during discovery.",
    features: [
      "Custom application development",
      "Features defined during discovery",
      "Scope may include authentication, dashboards and database integration",
      "Final pricing based on project complexity",
    ],
  },
];

export const pricingNotes = [
  "All prices are starting prices in USD, not fixed quotes. The final fee depends on scope, integrations, complexity and agreed deliverables.",
  "Hosting, software subscriptions, API usage, messaging fees and ongoing maintenance may cost extra.",
  "Larger projects receive a tailored proposal after a discovery call.",
];

export const processSteps = [
  {
    title: "Discover",
    body: "We learn about your business, current challenges, goals and the tools you already use.",
  },
  {
    title: "Design",
    body: "We define the right solution, scope and deliverables before anything is built.",
  },
  {
    title: "Build",
    body: "We develop, integrate and test the agreed solution.",
  },
  {
    title: "Launch & Improve",
    body: "We deploy, hand over documentation, and agree on ongoing support where required.",
  },
];

export type LabItem = {
  kind: "workflow" | "inbox" | "landing" | "dashboard";
  title: string;
  body: string;
};

// Concept builds only. Replace with real case studies when they exist.
export const labItems: LabItem[] = [
  {
    kind: "workflow",
    title: "AI Lead Qualification Workflow",
    body: "A concept showing how an inquiry could be scored against agreed criteria and routed to the right next step.",
  },
  {
    kind: "inbox",
    title: "Automated Customer Inquiry System",
    body: "A concept of common questions answered automatically, with complex ones passed to a person.",
  },
  {
    kind: "landing",
    title: "Premium Business Landing Page",
    body: "A concept page layout focused on one clear action for the visitor.",
  },
  {
    kind: "dashboard",
    title: "Sample SaaS Dashboard",
    body: "A concept dashboard layout that places the key numbers and recent activity in one view.",
  },
];

export const faqs = [
  {
    q: "What does NabLabs do?",
    a: "NabLabs has two focus areas. We build AI solutions and business automation, and we build websites and web applications. Both aim at the same outcome: helping your business win customers and save time.",
  },
  {
    q: "How can AI automation help my business?",
    a: "It can take over repetitive work such as answering common questions, following up on inquiries, entering data between tools and sending reminders. Your team then spends more time on work that needs a person. The benefit depends on your processes, which is what we look at first.",
  },
  {
    q: "Do I need technical knowledge to work with NabLabs?",
    a: "No. You describe the problem in your own words and we explain the options in plain English. We handle the technical decisions and walk you through them.",
  },
  {
    q: "Can you integrate with my existing software?",
    a: "Often yes, when the tools offer a supported way to connect. During discovery we check what you use today and tell you honestly what is practical and what is not.",
  },
  {
    q: "How much does a project cost?",
    a: "Our packages show starting prices in USD. The final fee depends on scope, integrations, complexity and agreed deliverables, and larger projects receive a tailored proposal. Hosting, subscriptions, API usage and messaging fees may be extra.",
  },
  {
    q: "How long will a project take?",
    a: "It depends on the scope and how quickly decisions and materials come back to us. After discovery we can give you a realistic estimate for your specific project.",
  },
  {
    q: "Do you offer maintenance and ongoing support?",
    a: "Ongoing support can be agreed where it is needed, as part of the Launch & Improve step. We discuss what that looks like for your project, and what it costs, before you commit.",
  },
  {
    q: "What happens during the discovery call?",
    a: "We talk through what you are trying to improve, how things work today and which tools you use. Then we suggest a practical next step. There is no obligation to continue.",
  },
];
