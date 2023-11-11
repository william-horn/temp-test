import Container from "../components/containers/Container"

const NavItem = ({ children }) => {
    return (
        <li className="group transition-all hover:bg-theme-nav-item-hover relative rounded-[10px]">
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
    // background nav color: #e2c077
    <nav className="w-full bg-theme-primary py-2 shadow-[0_-3px_10px_black]">
        <ul className="flex flex-wrap justify-center gap-3">
            <NavItem>Home</NavItem>
            <NavItem>Our Story</NavItem>
            <NavItem>Shop</NavItem>
            <NavItem>Wholesale</NavItem>
            <NavItem>Press</NavItem>
            <Container className="bg-theme-primary flex justify-end items-center px-2 gap-2">
                <button className="py-2 px-3 font-[500] underline">Login</button>
                <p className="h-fit">or</p>
                <button className="py-2 px-3 font-[500] underline">Sign Up</button>
            </Container>
        </ul>
    </nav>
  )
}
