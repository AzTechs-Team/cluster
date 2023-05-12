interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS1: Array<NavItem> = [
    {
        label: "Explore",
        href: "/explore",
    },
    {
        label: "Profile",
        href: "/profile",
    },
];

const NAV_ITEMS2: Array<NavItem> = [
    {
        label: "Dashboard",
        href: "/dashboard",
    },
    {
        label: "Profile",
        href: "/profile",
    },
];

export { NAV_ITEMS1, NAV_ITEMS2 };
export type { NavItem };
