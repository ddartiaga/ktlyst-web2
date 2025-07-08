import clsx from "clsx";
import Link from "next/link";

type Subcategory = {
    label: string;
    href: string;
}

type Category = {
    label: string;
    href: string;
    subcategories?: Subcategory[];
}

type MenuItem = {
    label: string;
    href: string;
    categories?: Category[];
}

export const NavItem = ({ item }: { item: MenuItem }) => {
    return (
        <li className={clsx("slide", item.categories && "has-sub")}>

            <Link href={item.href} className="side-menu__item">
                <span className="side-menu__label">{item.label}</span>
                {item.categories && (
                    <i className="fe fe-chevron-right side-menu__angle op-8" />
                )}
            </Link>

            {/* loop through categories */}
            {item.categories && (
                <ul className="slide-menu child1">

                    {item.categories.map((category) => (
                        category.subcategories ? (
                            <li key={category.label} className="slide has-sub">
                                <a href={category.href} className="side-menu__item">
                                    {category.label}
                                    <i className="fe fe-chevron-right side-menu__angle op-8" />
                                </a>
                                <ul className="slide-menu child2">

                                    {/* loop through subcategories */}
                                    {category.subcategories.map((subcategory) => (
                                        <li key={subcategory.label} className="slide" >
                                            <a href={subcategory.href} className="side-menu__item">
                                                {subcategory.label}
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </li>
                        ) : (
                            <li key={category.label} className="slide">
                                <a href={category.href} className="side-menu__item">
                                    {category.label}
                                </a>
                            </li>
                        )
                    ))}

                </ul>
            )}
        </li>
    );
}

export type { MenuItem, Category, Subcategory };