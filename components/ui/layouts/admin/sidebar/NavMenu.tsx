import clsx from "clsx";
import React from "react";
import Link from "next/link";
import PseudoLink from "@/components/ui/layouts/PseudoLink";

export type MenuSubItem = {
    id: string;
    label: string;
    path: string;
    new: boolean;
};

export type MenuItem = {
    id: string;
    label: string;
    path?: string;
    new: boolean;
    subitems?: MenuSubItem[];
};

export type Subcategory = {
    id: string;
    label: string;
    new: boolean;
    count: number;
    icon: string;
    path?: string;
    items: MenuItem[];
};

export type Category = {
    id: string;
    label: string;
    subcategory: Subcategory[];
};

export type SideMenu = {
    categories: Category[];
};



export default function NavMenu({ item }: { item: SideMenu }) {
    return (
        <ul className="main-menu">
            {item.categories.map((cat) =>
                <React.Fragment key={cat.id}>
                    <li className="slide__category mt-4 py-0">
                        <span className="category-name text-primary fs-bold">
                            {cat.label}
                        </span>
                    </li>

                    {cat.subcategory.map((subcat) => (
                        <li className={clsx("slide has-sub")} key={subcat.id}>
                            <Link href={subcat.path ?? ""} className="side-menu__item py-1">
                                <span><i className={`${subcat.icon} side-menu__icon`} /></span>
                                <span className="side-menu__label">
                                    {subcat.label}
                                    {subcat.items.length > 0 && (
                                        <span className="badge bg-warning-transparent ms-2">
                                            {subcat.items.length}
                                        </span>
                                    )}
                                    {subcat.new && (
                                        <span className="badge bg-secondary-transparent ms-2">
                                            New
                                        </span>
                                    )}
                                </span>
                                {subcat.items.length > 0 && (
                                    <i className="fe fe-chevron-right side-menu__angle" />
                                )}
                            </Link>

                            <ul className="slide-menu child1">
                                <li className="slide side-menu__label1">
                                    <PseudoLink>{subcat.label}</PseudoLink>
                                </li>

                                {subcat.items.map(
                                    (subcatitem) => (
                                        <React.Fragment key={subcatitem.id}>
                                            <li className="slide">
                                                <a href={subcatitem.path} className="side-menu__item">
                                                    {subcatitem.label}
                                                    {subcatitem.new && (
                                                        <span className="badge bg-secondary-transparent ms-2">
                                                            New
                                                        </span>
                                                    )}
                                                </a>
                                            </li>
                                        </React.Fragment>
                                    )
                                )}
                            </ul>
                        </li>
                    ))}
                </React.Fragment>
            )}
        </ul>
    );
}