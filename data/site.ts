export const siteConfig = {
  name: "Ascendedly",
  legalName: "Ascendedly Technologies",
  tagline: "Software, SEO, and AI for companies that want clear results.",
  description:
    "Ascendedly is a B2B technology and growth agency. We help companies build and improve websites, apps, SEO, marketing, and AI tools that drive real business results.",
  url: "https://www.ascendedly.com",
  ogImage: "/og-image.png",
  email: "hello@ascendedly.com",
  phone: "+92 317 4123457",
  phoneHref: "tel:+923174123457",
  address: {
    line1: "Fort Villas, New Iqbal Park, Main Boulevard",
    line2: "DHA Lahore, Punjab, Pakistan",
    city: "Lahore",
    region: "Punjab",
    postal: "",
    country: "Pakistan",
    full: "Fort Villas, New Iqbal Park, Main Boulevard, DHA Lahore, Punjab, Pakistan",
  },
  /** Google Maps embed query for the office location */
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.2037696540463!2d74.3780177042922!3d31.48548004917213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919050b8052f609%3A0x1b937313bad4cbf1!2sFort%20Villas%20Society!5e0!3m2!1sen!2s!4v1789669754312!5m2!1sen!2s",
  mapLinkUrl: "https://www.google.com/maps/place/Fort+Villas+Society/@31.48548004917213,74.3780177042922,17z",
  hours: "Monday–Friday, 9:00 AM – 5:00 PM PKT",
  keywords: [
    "search engine optimization",
    "growth marketing",
    "enterprise software",
    "AI transformation",
    "B2B digital agency",
    "web development",
    "app development",
    "generative AI consulting",
    "social media marketing",
    "technical SEO",
  ],
  nav: [
    { label: "About Us", href: "/about-us" },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "SEO", href: "/services/seo" },
        { label: "SMM", href: "/services/smm" },
        { label: "Web Development", href: "/services/web-development" },
        { label: "Gen AI", href: "/services/gen-ai" },
        { label: "App Development", href: "/services/app-development" },
      ],
    },
    { label: "Projects", href: "/projects" },
    { label: "Blogs", href: "/blogs" },
    { label: "Contact Us", href: "/contact-us" },
  ],
  social: [
    {
      name: "Facebook",
      href: "https://www.facebook.com/ascendedly",
      title: "Ascendedly on Facebook",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/ascendedly",
      title: "Ascendedly on LinkedIn",
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/ascendedly",
      title: "Ascendedly on Instagram",
    },
  ],
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
