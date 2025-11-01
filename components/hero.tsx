import AnimatedHeroTitle from "./animatedHeroTitle";
import FadeInText from "./fadeInText";

const Hero = ()=>{
    return (
        <section id="hero" className="min-h-screen w-screen flex justify-around">
            <div className="relative mb-8 mt-56 flex flex-col gap-5">
                <AnimatedHeroTitle 
                title= "Developer <br />Student <br />Club" 
                containerClass="mt-5 !text-white"/>
                <div className="flex flex-col gap-1 text-4xl text-gray-500 sm:px-8 md:text-[2rem] mx-36">
                    <FadeInText text="Empowering students to learn, collaborate," />
                    <FadeInText text="and build real-world tech solutions."/>
                </div>
            </div>
            <div className="relative mb-8 mt-56 flex flex-col gap-5">
                <img 
                src="background.jpg" 
                alt="hero-image"
                height={750}
                width={750}/>
            </div>
        </section>
    )
}

export default Hero;