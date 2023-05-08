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
        link: "mailto:contact@idta.in",
        label: "contact@idta.in",
      },
      {
        link: "tel:+919433996985",
        label: "+91 94339 96985",
      },
    ],
  },
];


export type { FooterItems };
export default FOOTER_ITEMS;
