import { useLoaderData, useNavigation } from "react-router-dom";
import MenuItem from "./MenuItem";
import Loader from "../../ui/Loader";

function Menus() {
  const menus = useLoaderData();
  const navigation = useNavigation()
  const isLoading = navigation.state === "loading"
  if(isLoading) return <Loader/>
  return <div className="bg-primary">
    <div className="flex flex-row md:w-[60vw] w-[90vw] md:justify-start justify-center flex-wrap px-2 pt-20 mx-auto overflow-hidden">
    {menus?.map((menu)=><MenuItem pizza={menu} key={menu.id}/>)}
    </div>
  </div>;
}
export default Menus;

