
const NavItem = ({ children }) => {
    return (
        <li className="group transition-all hover:bg-[#e8d08f] relative">
            <button className="py-2 px-3 font-medium relative">
                <span className="text-hide">{children}</span>
                <span className="absolute w-full h-full left-0 top-0 flex flex-col justify-center">
                    <span className="group-hover:pb-1 transition-all font-[Oswald]">{children}</span>
                </span>
            </button>
        </li>
    )
}

export default function Navbar() {
  return (
    <nav className="bg-[#e2c077] w-full">
        <ul className="flex flex-wrap justify-center gap-3">
            <NavItem>Home</NavItem>
            <NavItem>About Us</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Wholesale</NavItem>
            <NavItem>Press</NavItem>
        </ul>
    </nav>
  )
}
