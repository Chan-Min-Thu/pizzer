import { useInView } from "react-intersection-observer";

export default function Button({name,onClick,disabled,type}) {
    const {ref ,inView:scroll} = useInView({threshold:0.4,triggerOnce:true})
    const base = 'block text-sm rounded-full uppercase bg-yellow_400  font-semibold  text-secondary duration-300 hover:bg-yellow-300 focus:bg-yellow_300 focus:outline-none focus:ring focus:ring-yellow_300 focus:ring-offset-2 disabled:cursor-not-allowed';
    const styles = {
        primary: base + ' px-4 py-3 md:px-6 md:py-4 w-auto',
        small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs w-30',
        round: base + ' px-2.5 py-0.75 md:px-3.5 md:py-1.5 text-xl',
        secondary:
          'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
      };
  return (
    <button ref={ref} onClick={onClick} className={`${scroll?"animate-fade animate-delay-800 animate-ease-in":"opacity-0"} `+styles[type]} disabled={disabled}>{name}</button>
  )
}
