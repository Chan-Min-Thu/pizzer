import { formatCurrency } from "../../utils/helper";


function OrderItem({ item,isLoadingIngredients,ingredients}) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3 space-y-1">
      <div className="flex justify-between gap-4">
        <p className="font-bold text-md">
          <span>{quantity}&times;</span> {name}
        </p>
        <p>{formatCurrency(totalPrice)}</p>
      </div>
      <p className="pt-2 capitalize italic">{isLoadingIngredients?"Loading...":ingredients.join(", ")}</p>
    </li>
  );
}

export default OrderItem;


