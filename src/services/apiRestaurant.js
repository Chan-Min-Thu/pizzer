
const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function  getMenus() {
   const res = await fetch(`${API_URL}/menu`)
   if(!res.ok) throw Error("Failed getting menus.")
   const data = await res.json();
   return data.data
}


export async function getOrder(id) {
    const res = await fetch(`${API_URL}/order/${id}`)
    if(!res.ok) throw Error("Failed getting order.");
    const data = await res.json();
    return data.data
}

export async function createOrder(newOrder) {
   try{
    const res = await fetch(`${API_URL}/order`,{
        method:"POST",
        body:JSON.stringify(newOrder),
        headers:{
            "content-type":"application/json"
        }
    })
    if(!res.ok) throw Error("Failed...")
    const data = await res.json();
    return data.data;
   }catch(error){
    throw Error("Failed getting order...")
   }
}

export async function updateOrder(id,updateObj){
    try{
        const res = await fetch(`${API_URL}/order/${id}`,{
            method:"PATCH",
            body:JSON.stringify(updateObj),
            headers:{
                'Content-type':"application/json",
            }
        });
        if(!res.ok) throw Error("Failed...");
    }
    catch(error){
        throw Error("Failed updating your order...")
    }
}

// export async function updateOrder(id,updateObj) {
//     try {
//         const res = await fetch(`${API_URL}/order/${id}`,{
//             method:"PATCH",
//             body:JSON.stringify(updateObj),
//             headers:{
//                 'Content-type':"application/json",
//             }
//         });
//         if(!res.ok) throw Error("Failed... ");
//         // We don't need to return the data;
//     } catch (error) {
//         throw Error("Failed updating your order...")
//     }
// }