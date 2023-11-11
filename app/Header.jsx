import Container from "../components/containers/Container"
import Image from "next/image"
import leftBannerImage from "../public/images/our-story.webp"
import rightBannerImage from "../public/images/wag-butter-feeding.webp"

const Header = function Header({ children }) {
  return (
    <header className="relative z-20">
      <Container className="bg-[#1f273c] text-center pt-2 pb-2 font-[500] text-xs text-white">
        <p>Thanks for visiting! Free shipping on orders of $70 or more!</p>
      </Container>

      <Container className="flex flex-wrap justify-center">
        <Container className="relative grow overflow-hidden">
          <div className="absolute w-[150px] h-[150px] bg-theme-primary z-10 rotate-45 bottom-[75px] right-[-75px]"></div>
          <div className="absolute w-[150px] h-[150px] bg-theme-primary z-10 rotate-45 bottom-[-75px] right-[-75px]"></div>
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
          <div className="absolute w-[150px] h-[150px] bg-theme-primary z-10 rotate-45 bottom-[75px] left-[-75px]"></div>
          <div className="absolute w-[150px] h-[150px] bg-theme-primary z-10 rotate-45 bottom-[-75px] left-[-75px]"></div>
          <Image
              alt="Left Banner"
              priority={true}
              fill
              src={rightBannerImage}
              className="object-cover object-[10%_10%]"
          />
        </Container>
      </Container>
    </header>
  )
}

Header.Title = ({ children, title }) => {
    return (
        <h1 aria-label={title}>{children}</h1>
    )
}

export default Header;