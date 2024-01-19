export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Lining Mongolia",
  description: "Make Your Own Way",
  navItems: [
    {
      label: "Collections",
      href: "/",
    },
    {
      label: "Woman",
      href: "/docs",
      dropdown: [
        {
          label: "Woman1",
          href: "/docs",
        },
        {
          label: "Woman2",
          href: "/docs",
        },
      ],
    },
    {
      label: "Man",
      href: "/pricing",
    },
    {
      label: "Kids",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Collections",
      href: "/",
    },
    {
      label: "Woman",
      href: "/docs",
    },
    {
      label: "Man",
      href: "/pricing",
    },
    {
      label: "Kids",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  links: {
    sponsor: "https://instagram.com/hangobeats",
  },
};
