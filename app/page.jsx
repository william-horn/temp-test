
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
        <Container className="pt-2 pb-4">
          <Link href="/">
            <Image
            alt="Bigspoon Logo"
            priority={true}
            width={200}
            height="auto"
            src={Logo}
            />
          </Link>
        </Container>
      </Header>
      <Navbar></Navbar>
      <main>
      </main>
      <footer>
      </footer>
    </>
  )
}