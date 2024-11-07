import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Menus from "./features/menu/Menus"
import Menu from "./features/menu/Menu"
import {getFromMenus} from "./utils/getMenus"
import Cart from "./features/cart/Cart"
import CreateOrder,{action as createOrderAction} from "./features/order/CreateOrder"
import Order,{loader as orderLoader} from "./features/order/Order"
import { action as updateOrderAction } from "./features/order/UpdateOrder"
import AppLayout from "./ui/AppLayout"
import Home from "./ui/Home"
import Error from "./ui/Error"
import About from "./features/about/About"
import Services from "./features/services/Services"


const router = createBrowserRouter([
  {
    element:<AppLayout/>,
    errorElement:<Error/>,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path:"/menu",
        element:<Menus/>,
        loader:getFromMenus
      },
      {
        path:"/menu/:id",
        element:<Menu/>,
        loader:getFromMenus ,
        errorElement:<Error/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/order/new",
        element:<CreateOrder/>,
        action:createOrderAction,
        errorElement:<Error/>
      },
      {
        path:"/order/:orderId",
        element:<Order/>,
        loader:orderLoader,
        errorElement:<Error/>,
        action:updateOrderAction
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"/services",
        element:<Services/>
      }
    ]},
  
])

function App() {

  return (
   <RouterProvider router={router}/>
  )
}

export default App
