import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <div className='w-full h-full flex flex-col  text-secondary font-inter bg-primary'>
      <div className='md:w-[70vw] w-[90vw] h-full pt-32 pb-10 mx-auto flex flex-col'>
      <Link className='text-start text-yellow_400 underline ' to="/menu">&larr; Back to menu</Link>
      <div className='md:w-[60vw] w-[90vw] mt-40 h-32 flex justify-center items-center mx-auto  bg-success p-5 rounded-md'>
        <h1 className='text-xl'>You do not have selected products.Please select back to menus.</h1>
      </div>
      </div>
    </div>
  );
}

export default EmptyCart;
