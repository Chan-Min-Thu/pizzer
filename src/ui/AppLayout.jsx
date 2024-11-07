import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './Loader';
import Footer from './Footer';

export default function AppLayout() {
  const navagation = useNavigation();
  const isLoading = navagation.state === "loading";
  if (isLoading) return <Loader />
  return (
    <div className='layout relative'>
      {isLoading && <Loader />}
      <Header />
      <main className=' absolute w-full bg-primary h-[100vh]'>
        <Outlet />
        <Footer />
      </main>
    </div>
  )
}
