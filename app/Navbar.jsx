import Container from "../components/containers/Container"
import Link from "next/link"
import Image from "next/image"
import shoppingCartIcon from '../public/images/shopping-cart.png'

const Navbar = ({ children }) => {
  return (
    // background nav color: #e2c077
    <nav className="w-full bg-theme-primary shadow-[0_-3px_10px_black] sticky top-0 pt-2 z-[1000]">
        <Container className="relative">
            {/* Webpage navigation buttons */}
            <ul className="flex flex-wrap justify-center gap-3 pb-2">
                {children}
            </ul>

            {/* Login/Signup buttons */}
            <Container className="bg-theme-primary flex justify-center items-center px-2 pb-2 gap-2 z-20 relative top-0 right-0 lg:absolute lg:h-full">
                <button className="py-2 px-3 underline">Login</button>
                <p className="h-fit">or</p>
                <button className="py-2 px-3 underline">Sign Up</button>
                <button className="ml-2 py-2 px-4 bg-theme-nav-item-hover rounded-[10px] flex gap-2 font-[500]">
                    <span className="text-[#45482d]">Cart</span>
                    <Image
                        alt="Shopping Cart"
                        width={25}
                        src={shoppingCartIcon}
                    />
                </button>
            </Container>
        </Container>
    </nav>
  )
}

Navbar.Item = ({ children, href }) => {
    return (
        <li className="group transition-all hover:bg-theme-nav-item-hover relative rounded-[10px]">
            <Link href={href}>
                <div className="py-2 px-3 font-medium relative text-center">
                    <span className="text-hide select-none">{children}</span>
                    <span className="absolute w-full h-full left-0 top-0 flex flex-col justify-center">
                        <span className="group-hover:pb-1 transition-all font-[Oswald]">{children}</span>
                    </span>
                </div>
            </Link>
        </li>
    )
}

export default Navbar;