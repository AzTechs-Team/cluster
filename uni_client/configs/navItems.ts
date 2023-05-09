interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Explore",
        href: "/explore",
    },
    {
        label: "Profile",
        href: "/profile",
    },
    // {
    //     label: "Dashboard",
    //     href: "/dashboard",
    // },
];

export default NAV_ITEMS;
export type { NavItem };
