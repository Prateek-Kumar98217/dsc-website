import { BentoTilt, BentoCard } from "./bentoGrid"
//Why the hell is ther so much empty space at the end of the componenet?

const Pillar: React.FC = () => (
  <section className="bg-black">
    <div className="container mx-auto px-3 md:px-10">
      {/* Header section */}
      {/*
      <div className="px-5 py-32">
        <p className="font-circular-web text-lg text-blue-50">
          Into the Metagame Layer
        </p>
        <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
          Immerse yourself in a rich and ever-expanding universe where a vibrant
          array of products converge into an interconnected overlay experience
          on your world.
        </p>
      </div>
        */}
      {/* Large feature */}
      <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
        <BentoCard
          src="background.jpg"
          title={
            <>
              <b>CONNECT</b>
            </>
          }
          description="Become part of a vibrant community of developers and innovators. Engage with like-minded peers, industry leaders, and mentors who share your passion for technology."
        />
      </BentoTilt>

      {/* Grid of smaller features */}
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7">
        <BentoTilt className="row-span-1 md:col-span-1 md:row-span-2">
          <BentoCard
            src="background.jpg"
            title={
              <>
                <b>LEARN</b>
              </>
            }
            description="Explore the latest technology with hands-on workshops, events, and collaborative projects. Enhance your skills and gain practical experience."
          />
        </BentoTilt>

        <BentoTilt className="row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="background.jpg"
            title={
              <>
                <b>BUILD</b>
              </>
            }
            description="Transform ideas into impactful solutions. Work on cutting-edge projects that address community needs and leave a lasting impression."
          />
        </BentoTilt>
        <BentoTilt className="row-span-1 ms-32 md:col-span-1 md:ms-0">
          <BentoCard
            src="background.jpg"
            title={
              <>
                <b>GROW</b>
              </>
            }
            description="Expand your horizons through mentorship, leadership roles, and community impact. Shape the future of tech while growing as an individual and innovator."
          />
        </BentoTilt>
      </div>
    </div>
  </section>
);

export default Pillar;
