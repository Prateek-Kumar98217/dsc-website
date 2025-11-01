import About from "@/components/about";
import NavBar from "@/components/navBar";
import Contact from "@/components/contact";

export default function Home(){
  return(
    <main className="relative min-h-screen w-screen overflow-x-hidden">
    <div className="w-screen h-screen">What the hell is this?</div>
    <About />
    <NavBar />
    <Contact />
    </main>
  )
}