
import Image from 'next/image'
import Link from 'next/link'
import Header from './Header'
import Container from '../components/containers/Container'
import Logo from '../public/images/logo.webp'
import Navbar from './Navbar'
import jarImage from '../public/images/bourbon-pecan.webp'
import oatMilkMochaJar from '../public/images/oat-milk-mocha-jar.webp';
import pcrunchJar from '../public/images/pcrunch-jar.webp';
import vcarJar from '../public/images/vcar-jar.webp';

export default function HomePage() {
  return (
    <>
      <main className="h-[1000px] pt-16">
        <Container className="lg:w-[70%] md:w-[80%] mx-auto p-3 flex gap-3">
          <Container className="w-fit">
            <h2 className="p-5 text-center font-[500] text-3xl font-[Oswald] bg-[#e6ad3d] rounded-[50%_1000px_50%_1000px]">Fall 2023 Limited Batch</h2>
            <Container className="p-4">
              <Container className="relative w-[400px] h-[400px]">
                <Image
                  fill
                  src={oatMilkMochaJar}
                  className="rounded-[50%] object-cover shadow-[0_0_5px_black] p-2"
                />
              </Container>
            </Container>
          </Container>
          {/* <h3>Testing</h3> */}
        </Container>
      </main>
      <footer>
      </footer>
    </>
  )
}