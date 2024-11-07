import { useFetcher } from 'react-router-dom'
import Button from '../../ui/Button'
import { updateOrder } from '../../services/apiRestaurant';

export default function UpdateOrder() {
    const fetcher = useFetcher();
    return (
        <fetcher.Form method='PATCH' className=' items-end'>
            <Button name="Make Priority" type="primary" />
        </fetcher.Form>
    )
}


export async function action({request,params}) {
    const data = {priority:true}
    await updateOrder(params.orderId,data)
    console.log("update",request,params)
    return null;
}