interface FooterLink {
  link: string;
  label: string;
}

interface FooterItems {
  heading: string;
  items: Array<FooterLink>;
}

const FOOTER_ITEMS: Array<FooterItems> = [
  {
    heading: "Company",
    items: [
      {
        link: "/about",
        label: "About us",
      }
    ],
  },
  {
    heading: "Products",
    items: [
      {
        link: "/explore",
        label: "Events",
      },
      {
        link: "/pricing",
        label: "Pricing",
      },
    ],
  },
  {
    heading: "Resources",
    items: [
      {
        link: "/",
        label: "Coming soon...",
      },
    ],
  },
  {
    heading: "Connect",
    items: [
      {
        link: "mailto:contact@aztechs.in",
        label: "contact@aztechs.in",
      },
    ],
  },
];


export type { FooterItems };
export default FOOTER_ITEMS;
