export function formatCurrency(value){
    return new Intl.NumberFormat("en",{
        style:"currency",
        currency:"EUR",
    }).format(value);
}

export function formatDate(dateStr){
    return new Intl.DateTimeFormat('en',{
        day:"numeric",
        month:"short",
        hour:"2-digit",
        minute:"2-digit"
    }).format(new Date(dateStr))
}

export function calcMinutesLeft(dateStr){
    const d1 = new Date().getTime();
    const d2 = new Date(dateStr).getTime();
    return Math.round((d2-d1)/60000);
}

export const baseStyle = (scroll,delay)=>`${scroll && "animate-fade-up "}  animate-delay-${delay} opactiy-0 animate-ease`

export const reviews = [
    {
      id: 1,
      name: "Sarah J.",
      imgUrl:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Absolutely loved the pizza! The crust was perfectly crispy, and the toppings were fresh and flavorful. I ordered for a party, and everyone was raving about it. Delivery was right on time, too. I’ll definitely be ordering again soon!"
    },
    {
      id: 2,
      name: "Mark R.",
      imgUrl:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Great pizza overall. The flavors were spot on, and they didn’t skimp on toppings. I opted for cash on delivery, and the process was smooth and hassle-free. Only wish they offered more sauce options!"
    },
    {
      id: 3,
      name: "Emily W.",
      imgUrl:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Best pizza in town, hands down! I tried their new specialty pizza, and it was fantastic. My order arrived hot and fresh, and I loved the option to customize toppings for everyone in the family. Highly recommend for pizza lovers."
    },
    {
      id: 4,
      name: "James K.",
      imgUrl:"https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      review: "Solid pizza experience. I ordered for myself, and it came faster than I expected. The crust was just the right thickness, and I could tell they used quality ingredients. Would love to see a vegan option in the future, but I'll definitely be back!"
    }
  ]