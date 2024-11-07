import { useCallback, useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BiMenu, BiSearch, BiSolidCartAdd, BiUser } from 'react-icons/bi'
import { RxCross1 } from 'react-icons/rx';
// import "../index.css"
import { getUser } from '../features/user/userSlice';
import { getCarts } from '../features/cart/cartSlice';
import SearchOrder from '../features/order/SearchOrder';



export default function Header() {
  const [menu, setMenu] = useState(false);
  const [navShow, setNavShow] = useState(true)
  const [openSearch,setOpenSearch] = useState(false);
  const [scroll,setScroll] = useState(0);
  const user = useSelector(getUser)
  const carts = useSelector(getCarts)
  const isCart = carts.length ? true:false
  console.log(isCart,)
  const handleScroll = useCallback(() => {
    if (window.scrollY > scroll) {

      setNavShow(false)
    } else {
      setNavShow(true)
    }
    setScroll(window.scrollY)
  }, [scroll])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll])
  

      return (
    <header className='relative w-full h-auto top-0 '>
      <div className={`flex justify-between bg-yellow_400 shadow-lg w-full md:px-32 px-10 py-5 fixed top-0 z-20 transition-transform duration-900 delay-500 ease-linear transform  ${menu === true ? "translate-y-0" : navShow ? `translate-y-0 ` : `translate-y-[-250px]`}`}>
        <Link to="/" className='header-des'>Pizzer</Link>
        <div className='w-[400px] font-inter text-xl self-center font-semibold  md:flex hidden justify-between '>
          <NavLink to="/" className={({ isActive, isPending }) => isPending ? "no-active" : isActive ? "active" : "no-active"}>Home</NavLink>
          <NavLink to="/menu" className={({ isActive, isPending }) => isPending ? "no-active" : isActive ? "active" : "no-active"}>Menus</NavLink>
          <NavLink to="/services" className={({ isActive, isPending }) => isPending ? "no-active" : isActive ? "active" : "no-active"}>Services</NavLink>
          <NavLink to="/about" className={({ isActive, isPending }) => isPending ? "no-active" : isActive ? "active" : "no-active"}>About</NavLink>
        </div>
        <ul className='flex text-2xl w-32 justify-between self-center '>
          <li onClick={()=>setOpenSearch(!openSearch)} className='header-icons'>
            <BiSearch />
          </li>
          <Link to={"/cart"}>
          <li data-content={carts.length > 0 ? carts.length:""} className={`header-icons relative before:content-[attr(data-content)] before:absolute before:top-[-3px] before:right-[-3px] before:text-sm before:flex before:justify-center before:items-center before:rounded-full before:w-5 before:h-5 before:${isCart && "isCart"} `}>
            <span className={`absolute top-[-3px] right-[-3px] text-sm flex justify-center items-center rounded-full w-5 h-5 ${isCart &&"isCart"}`}>{carts.length?carts.length:""}</span>
            <BiSolidCartAdd />
          </li>
          </Link>
          <li className={`${user?"px-1 pt-2 text-primary":" header-icons"}  `}>
          {user!==""?<span className='text-xs md:block hidden pt-1'>{user}</span>:<BiUser className='md:flex hidden text-2xl' />}
            {menu ? <RxCross1 onClick={() => setMenu(false)} className="flex md:hidden animate-fade" />
            :<BiMenu onClick={() => setMenu(true)} className='flex md:hidden animate-fade' /> }
          </li>
        </ul>
      </div>
        <div className={`fixed z-10 transform ${navShow? openSearch === true? "translate-y-[61px]":"translate-y-[-200px]":"translate-y-[-200px]"} w-full transition-transform duration-500 ease-in delay-300`}>
        {/* <input className="bg-yellow_300 w-full border-none outline-none px-5 py-2 mt-5" placeholder="Search Your Order..." /> */}
        <SearchOrder/>
        </div>
        <div className={`md:hidden transform ${menu?'translate-y-[0px]':menu === false?'translate-y-[1000px]':'translate-y-[0px]'} transition-transform duration-900 delay-200 ease-in-out transform  h-[100vh] w-full z-40 fixed top-20  bg-yellow_400`}>
          <NavLink to="/" onClick={(menu)=>setMenu(!menu)} className={({isActive,isPending})=> isPending?"bg-yellow_400":isActive?"active":"bg-yellow_400"}>
            <p className='header-menu'>Home</p>
          </NavLink>
          <NavLink to="/menu" onClick={(menu)=>setMenu(!menu)} className={({isActive,isPending})=> isPending?"bg-yellow_400":isActive?"active":"bg-yellow_400"}>
            <p className='header-menu'>Menus</p>
          </NavLink>
          <NavLink to="/about" onClick={(menu)=>setMenu(!menu)} className={({isActive,isPending})=> isPending?"bg-yellow_400":isActive?"active":"bg-yellow_400"}>
            <p className='header-menu'>About</p>
          </NavLink>
          <NavLink to="/services" onClick={(menu)=>setMenu(!menu)} className={({isActive,isPending})=> isPending?"bg-yellow_400":isActive?"active":"bg-yellow_400"}>
            <p className='header-menu'>Services</p>
          </NavLink>
          <div  className=" bg-yellow_400">
            <p className='header-menu'>User - {user}</p>
          </div>

        </div>
    </header>
  )
}
