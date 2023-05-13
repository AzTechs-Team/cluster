interface FooterLink {
  link: string;
  label: string;
}

interface FooterItems {
  heading: string;
  items: Array<FooterLink>;
}

const FOOTER_ITEMS: Array<FooterItems> = [
  // {
  //   heading: "Company",
  //   items: [
  //     {
  //       link: "/blogs",
  //       label: "Blogs",
  //     },
  //     {
  //       link: "/news",
  //       label: "Drone Info",
  //     }
  //   ],
  // },
  // {
  //   heading: "Company",
  //   items: [
  //     {
  //       link: "/about",
  //       label: "About us",
  //     }
  //   ],
  // },
  {
    heading: "Profile",
    items: [
      {
        link: "/profile",
        label: "Details",
      },
      {
        link: "/profile/edit",
        label: "Edit",
      },
    ],
  },
  {
    heading: "Support",
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
