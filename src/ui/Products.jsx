import { Link, useFetcher} from "react-router-dom";
// import { getMenu } from "../services/apiRestaurant";
import MenuItem from "../features/menu/MenuItem";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

function Products() {
    const fetcher = useFetcher();
    const {ref,inView:scroll}  = useInView({
        threshold:0.1,
        triggerOnce:true,
    })
    useEffect(()=>{
        if(!fetcher.data && fetcher.state === "idle"){
            fetcher.load("/menu")
        }
    },[fetcher])

    return (
        <div ref={ref} className={`bg-primary md:h-[50vh] h-[75vh] pt-5 mb-22  `}>
            <div className={` text-secondary font-inter flex justify-between md:w-[70vw] w-[95vw] md:px-8 px-4 mx-auto ${scroll?"animate-fade":"opacity-0"} animate-delay-200 animate-ease-in animate-duration-100`}>
                <h1 className="text-2xl font-semibold">Popular Products</h1>
                <Link to={"/menu"}><h2 className=" underline">More &gt;&gt;</h2></Link>
            </div>
            <div className={`flex md:w-[70vw] w-[90vw] md:pt-5 pt-40 overflow-hidden mx-auto scroller ${scroll?"animate-fade":"opacity-0"} animate-delay-700 animate-ease-in animate-duration-150`}>
                <div className="flex w-[60vw] mx-auto scroll ">
                    {fetcher.data?.map(menu => <MenuItem pizza={menu} key={menu.id} />)}
                    {fetcher.data?.map(menu => <MenuItem pizza={menu} key={menu.id} />)}
                </div>
            </div>
        </div>
    )
}

export default Products;



