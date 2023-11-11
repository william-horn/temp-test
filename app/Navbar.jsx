import Container from "../components/containers/Container"
import Link from "next/link"

const Navbar = ({ children }) => {
  return (
    // background nav color: #e2c077
    <nav className="w-full bg-theme-primary shadow-[0_-3px_10px_black] sticky top-0 pt-2">
        <ul className="flex flex-wrap justify-center gap-3 pb-2">
            {children}
        </ul>
    </nav>
  )
}

Navbar.Item = ({ children, href }) => {
    return (
        <li className="group transition-all hover:bg-theme-nav-item-hover relative rounded-[10px]">
            <Link href={href}>
                <button className="py-2 px-3 font-medium relative">
                    <span className="text-hide select-none">{children}</span>
                    <span className="absolute w-full h-full left-0 top-0 flex flex-col justify-center">
                        <span className="group-hover:pb-1 transition-all font-[Oswald]">{children}</span>
                    </span>
                </button>
            </Link>
        </li>
    )
}

export default Navbar;