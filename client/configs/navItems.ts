interface NavItem {
    label: string;
    subLabel?: string;
    children?: Array<NavItem>;
    href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
    {
        label: "Home",
        href: "/",
    },
    {
        label: "Explore",
        href: "/explore",
    },
    {
        label: "About",
        href: "/about",
    },
];

export default NAV_ITEMS;
export type { NavItem };
