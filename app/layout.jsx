import { Inter } from 'next/font/google'
import './globals.css';
import Wireframe from './wireframe.js';
import Header from './Header';
import Container from '../components/containers/Container';
import Navbar from './Navbar';
import Link from 'next/link';
import Image from 'next/image';
import companyLogo from '../public/images/logo.webp';

// Default google font
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <Wireframe/>
      <head>
        <title>BSR-Variant</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet"/>
      </head>
      <body className="bg-[#f7f6f2] text-black">
        <Header>
          <Container className="bg-theme-primary pt-2 pb-4">
            <Header.Title title="Big Spoon Roasters">
              <Link href="/">
                <Image
                alt="Big Spoon Roasters Logo"
                priority={true}
                width={200}
                height="auto"
                src={companyLogo}
                />
              </Link>
            </Header.Title>
          </Container>
        </Header>

        <Navbar>
          <Navbar.Item href="/">Home</Navbar.Item>
          <Navbar.Item href="/our-story">Our Story</Navbar.Item>
          <Navbar.Item href="/shop">Shop</Navbar.Item>
          <Navbar.Item href="/wholesale">Wholesale</Navbar.Item>
          <Navbar.Item href="/press">Press</Navbar.Item>
          <Navbar.Item href="/news">Learn</Navbar.Item>
        </Navbar>

        {children}
      </body>
    </html>
  )
}

