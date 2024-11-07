import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { updateUser}  from './userSlice';
import Button from '../../ui/Button';

function CreateUser({user}) {
  const [username, setUsername] = useState(user);
  const navigate = useNavigate();
  const {ref,inView:scroll} = useInView({
    threshold:0.1,
    triggerOnce:true
  })
  const dispatch  = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(updateUser(username))
    navigate("menu")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={ref}
      className={`${scroll?"animate-fade animate-ease animate-delay-300":"opacity-0"} focus:border-yellow_400 focus:ring focus:ring-yellow_400 bg-yellow_300 md:w-[400px] w-full border-none outline-none rounded-full px-5 py-2 mt-5`} 
      placeholder="Please Type Your First Name..."
        type="text"
        defaultValue={user}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
        <div className='mt-5'>
          <Button name="Start Ordering" type="small" disabled={username ===""?true:false}/>
        </div>
    </form>
  );
}

export default CreateUser;
