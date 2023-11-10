import Container from "../components/containers/Container"
import Image from "next/image"
import leftBannerImage from "../public/images/our-story.webp"
import rightBannerImage from "../public/images/wag-butter-feeding.webp"

const Header = function Header({ children }) {
  return (
    <header className="flex flex-wrap justify-center">
      <Container className="relative grow overflow-hidden">
        <div className="absolute w-[150px] h-[150px] bg-[#f7f6f2] z-10 rotate-45 bottom-[75px] right-[-75px]"></div>
        <div className="absolute w-[150px] h-[150px] bg-[#f7f6f2] z-10 rotate-45 bottom-[-75px] right-[-75px]"></div>
        <Image
            alt="Left Banner"
            priority={true}
            fill
            src={leftBannerImage}
            className="object-cover"
        />
      </Container>

      <Container>
        {children}
      </Container>

      <Container className="relative grow overflow-hidden">
        <div className="absolute w-[150px] h-[150px] bg-[#f7f6f2] z-10 rotate-45 bottom-[75px] left-[-75px]"></div>
        <div className="absolute w-[150px] h-[150px] bg-[#f7f6f2] z-10 rotate-45 bottom-[-75px] left-[-75px]"></div>
        <Image
            alt="Left Banner"
            priority={true}
            fill
            src={rightBannerImage}
            className="object-cover object-[10%_10%]"
        />
      </Container>
    </header>
  )
}

Header.Title = ({ children }) => {
    return (
        <h1>{children}</h1>
    )
}

export default Header;