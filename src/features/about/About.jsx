import { useInView } from "react-intersection-observer"

export default function About() {
  const {ref,inView:scroll} = useInView({threshold:0.3,triggerOnce:true})
  return (
    <div ref={ref} className=" bg-opacity-40 amenities bg-success  w-full md:h-[70vh] h-auto">
      <div className="md:w-[50vw] w-[90vw] h-auto mx-auto md:pt-40 pt-32 p-5 font-inter">
      <h1 className={`text-4xl text-secondary font-bold tracking-wider mb-4 ${scroll?"animate-fade-up animate-delay-300":"opacity-0"}`}>About Us</h1>
      <p className={`text-md font-medium tracking-wider text-whitegray ${scroll?"animate-fade-up animate-delay-500":"opacity-0"}`}>Welcome to Pizzer  —where every slice is crafted with passion! We believe that a great pizza is more than just a meal; it is an experience. From our carefully sourced ingredients to our unique, hand-stretched dough, we pour love into every pizza we make. Whether you are here for a cozy night in, a family gathering, or a big party, we have got you covered with options for every occasion. Thank you for letting us bring a slice of happiness to your table!Welcome to Pizzer  —where every slice is crafted with passion! We believe that a great pizza is more than just a meal; it is an experience. From our carefully sourced ingredients to our unique, hand-stretched dough, we pour love into every pizza we make. Whether you are here for a cozy night in, a family gathering, or a big party, we have got you covered with options for every occasion. Thank you for letting us bring a slice of happiness to your table!</p>
      </div>
    </div>
  )
}
