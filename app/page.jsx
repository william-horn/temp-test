
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Container from '../components/containers/Container'
import Logo from '../public/images/logo.webp'
import Navbar from './Navbar'
import jarImage from '../public/images/bourbon-pecan.webp'

const JarItem = ({ name }) => {
  return (
    <Container useTab className="p-3 w-fit shadow-[0_0_10px_white] rounded-[10px] flex justify-center flex-col items-center">
      <Image
        alt="Jar"
        width={200}
        src={jarImage}
      />
      <h2 className="text-center text-black break-words py-2 uppercase font-[600]">{name}</h2>
    </Container>
  )
}

export default function HomePage() {
  return (
    <>
      <Header>
        <Container className="bg-theme-primary pt-2 pb-4">
          <Header.Title title="Big Spoon Roasters">
            <Link href="/">
              <Image
              alt="Bigspoon Logo"
              priority={true}
              width={200}
              height="auto"
              src={Logo}
              />
            </Link>
          </Header.Title>
        </Container>
      </Header>

      <Navbar>
        <Navbar.Item>Home</Navbar.Item>
        <Navbar.Item>Our Story</Navbar.Item>
        <Navbar.Item>Shop</Navbar.Item>
        <Navbar.Item>Wholesale</Navbar.Item>
        <Navbar.Item>Press</Navbar.Item>
      </Navbar>

      <main className="h-[1000px]">
        <Container className="py-10 px-12 flex flex-wrap gap-10 justify-center">

          <JarItem name="Carrot Cake"/>
          <JarItem name="Lemon Coconut"/>
          <JarItem name="Oat Milk Mocca"/>
          <JarItem name="Crunchy Peanut Butter"/>
          <JarItem name="Chocolate Sea Salt"/>
          <JarItem name="Fiji Ginger"/>
          <JarItem name="Chai Spice"/>
          <JarItem name="Tigerwalk Espresso"/>

        </Container>
      </main>
      <footer>
      </footer>
    </>
  )
}