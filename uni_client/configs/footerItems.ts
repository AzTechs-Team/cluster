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
    heading: "Resources",
    items: [
      {
        link: "/blogs",
        label: "Blogs",
      },
      {
        link: "/news",
        label: "Drone Info",
      }
    ],
  },
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
        link: "/courses",
        label: "Training",
      },
      {
        link: "/news",
        label: "Guides",
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
