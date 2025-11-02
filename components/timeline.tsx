import FlowingMenu from './FlowingMenu'
import AnimatedTitle from './animatedTitle';

const Events = () =>{
const demoItems = [
  { link: '#', text: ' Game Of Code 3.0 ', image: 'tech1.webp' },
  { link: '#', text: ' Game Of Code 3.0 ', image: 'tech1.webp' },
  { link: '#', text: ' Game Of Code 3.0 ', image: 'tech1.webp' },
  { link: '#', text: ' Game Of Code 3.0 ', image: 'tech1.webp' }
];

    return(
        <section id="events" className="bg-black rounded-4xl mt-20 p-24">
            <AnimatedTitle title= "Events" containerClass='mt-5 !text-white mb-16'/>
            <div className="relative h-[600px] rounded-2xl">
                <FlowingMenu items={demoItems} />
            </div>
    </section>
    )
}

export default Events