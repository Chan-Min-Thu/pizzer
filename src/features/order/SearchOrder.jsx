import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function SearchOrder() {
    const [query,setQuery] = useState("");
    const navigate = useNavigate();
    function handleSubmit(e){   
        e.preventDefault();
        if(!query) return;
        navigate(`/order/${query}`)
        setQuery("")
    }
  return (
    <form onSubmit={handleSubmit}>
    <input className="bg-yellow_300 w-full border-none outline-none px-5 py-2 mt-5"
     placeholder="Search Your Order..."
    value={query}
    onChange={(e)=>setQuery(e.target.value)}/>
    </form>
  )
}
