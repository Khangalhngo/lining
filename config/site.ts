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
          label: "Women1",
          href: "/woman1",
        },
        {
          label: "Women2",
          href: "/women2",
        },
      ],
    },
    {
      label: "Men",
      href: "/men",
      dropdown: [
        {
          label: "Men1",
          href: "/men1",
        },
        {
          label: "Men2",
          href: "/men2",
        },
      ],
    },

    {
      label: "Kids",
      href: "/kids",
      dropdown: [
        {
          label: "Kids1",
          href: "/kids1",
        },
        {
          label: "Kids2",
          href: "/kids2",
        },
      ],
    },
    {
      label: "New Arrivals",
      href: "/new-arrivals",
    },
  ],
  navMenuItems: [
    {
      label: "Collections",
      href: "/",
    },
    {
      label: "Women",
      href: "/women",
    },
    {
      label: "Men",
      href: "/men",
    },
    {
      label: "Kids",
      href: "/kids",
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
