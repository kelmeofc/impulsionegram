import Link from "next/link";
import Logo from "./logo";
import { BurgerMenu } from "./burger-menu";

export function Header() {
    const menu = [{
        text: 'Seguidores',
        link: '#',
        expanded: false,
    }, {
        text: 'Curtidas',
        link: '#',
        expanded: false,
    }, {
        text: 'Visualizações',
        link: '#',
        expanded: false,
    }, {
        text: 'Comentários',
        link: '#',
        expanded: false,
    }];

    return (
        <header className="bg-white border-b-0.5 border-opacity-50 border-[#1A002D] py-5">
            <div className="container flex items-center justify-between">
                <Logo />

                <nav>
                    <ul className="flex align-items-center justify-between gap-10">
                        {menu.map(op => {
                            return (
                                <li>
                                    <Link
                                        className="text-lg font-semibold text-[#887A94]"
                                        aria-expanded={op.expanded}
                                        href={op.link}
                                    >
                                        {op.text}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>

                <BurgerMenu />
            </div>
        </header>
    );
}