
import Container from "../../components/containers/Container";
import Image from "next/image";
import jarImage from '../../public/images/bourbon-pecan.webp';

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

export default function Shop() {
  return (
    <main>
      <Container className="py-10 px-12 flex flex-wrap gap-10 justify-center">
          <JarItem name="Carrot Cake"/>
          <JarItem name="Lemon Coconut"/>
          <JarItem name="Oat Milk Mocca"/>
          <JarItem name="Crunchy Peanut Butter"/>
          <JarItem name="Chocolate Sea Salt"/>
          <JarItem name="Fiji Ginger"/>
          <JarItem name="Chai Spice"/>
          <JarItem name="Tigerwalk Espresso"/>
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
  )
}
