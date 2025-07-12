import { MenuItem } from "../nav/NavItem";

export const items: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Products",
        href: "#home",
        categories: [
            {
                label: "Statistics",
                href: "#home",
            },
            {
                label: "Our Mission",
                href: "#home",
            },
            {
                label: "Level-2",
                href: "#home",
                subcategories: [
                    {
                        label: "Level-2-1",
                        href: "#home",
                    },
                    {
                        label: "Level-2-2",
                        href: "#home",
                    },
                    {
                        label: "Level-2-3",
                        href: "#home",
                    },
                ]
            },
        ]
    },
    {
        label: "Services",
        href: "#home",
        categories: [
            {
                label: "Statistics",
                href: "#home",
            },
            {
                label: "Our Mission",
                href: "#home",
            },
            {
                label: "Level-2",
                href: "#home",
                subcategories: [
                    {
                        label: "Level-2-1",
                        href: "#home",
                    },
                    {
                        label: "Level-2-2",
                        href: "#home",
                    },
                    {
                        label: "Level-2-3",
                        href: "#home",
                    },
                ]
            },
        ]
    },
    {
        label: "Partner Program",
        href: "#company-profile"
    },
    {
        label: "Contact Us",
        href: "/contact-us"
    },
];