
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Container from '../components/containers/Container'
import Logo from '../public/images/logo.webp'
import Navbar from './Navbar'

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

      </main>
      <footer>
      </footer>
    </>
  )
}