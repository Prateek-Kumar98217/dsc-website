import About from "@/components/about";
import NavBar from "@/components/navBar";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Pillar from "@/components/pillar";
import Footer from "@/components/footer";
import Events from "@/components/timeline";
//Title animations feel stale, but I can't be bothered to make more animations
//Or mayber during development I have stared at them a bit too much
//The website is not remotely responsive... that meams the mobile version is kinda nightmare

export default function Home(){
  return(
    <main >
      <Hero />
      <NavBar />
      <About />
      <Pillar />
      <Events />
      <Contact />
      <Footer />
    </main>
  )
}