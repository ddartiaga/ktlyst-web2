import { MenuItem } from "../nav/NavItem";

export const items: MenuItem[] = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "About",
        href: "/about-us"
    },
    {
        label: "Products",
        href: "/",
        categories: [
            {
                label: "Uninterruptible Power Supply (UPS)",
                href: "#",
            },
            {
                label: "Laptops and Desktops",
                href: "#",
            },
            
        ]
    },
    {
        label: "Services",
        href: "/",
        categories: [
            {
                label: "Web and Mobile Development",
                href: "#",
            },
            {
                label: "IT Manpower",
                href: "#",
            },
            // {
            //     label: "Level-2",
            //     href: "#home",
            //     subcategories: [
            //         {
            //             label: "Level-2-1",
            //             href: "#home",
            //         },
            //         {
            //             label: "Level-2-2",
            //             href: "#home",
            //         },
            //         {
            //             label: "Level-2-3",
            //             href: "#home",
            //         },
            //     ]
            // },
        ]
    },
    {
        label: "Partner Program",
        href: "/"
    },
    {
        label: "Contact Us",
        href: "/contact-us"
    },
];