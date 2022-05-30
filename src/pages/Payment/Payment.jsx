import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {  Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";



function Payment() {


    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState([]);


    const stripePromise = loadStripe('pk_test_51L51u9DGTXzyHdW6vIXqp20gypSUQSC3lE9YVRmBGJJYEXk51RYTtTm5D6RJnM4CYNqhEBOPTmq7sxPLpsanPxyE00BtqOGMpk');

    const params = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/product/purchase/${params.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))

        fetch(`http://localhost:5000/order/purchase/${params.orderId}`)
            .then(res => res.json())
            .then(data => setOrder(data))


     
    }, []);


   

    return (


        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto mt-10 mb-10 p-5">
            <div className="pb-10">
                <h1>Please pay,</h1>
                <p>${product.price*order.quantity} for {order.quantity} pcs of {product.name}</p>
            </div>

            <Elements stripe={stripePromise}>
               <CheckoutForm></CheckoutForm>
            </Elements>

        </div>

    );
}

export default Payment;