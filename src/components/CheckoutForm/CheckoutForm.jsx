import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";

function CheckoutForm({price}) {

    const [cardError,setCardError] = useState('');
    const [success,setSuccess] = useState('');
    const stripe = useStripe();
    const [clientSecret,setClientSecret] = useState('');

    useEffect(()=>{
        fetch('https://guarded-shelf-82309.herokuapp.com/create-payment-intend', {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({  price  }),
        })
          .then(res => res.json())
          .then(data => {
              if(data?.clientSecret){
                  setClientSecret(data.clientSecret);
              }
          })
    },[]);

    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!stripe || !elements) {
          return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
          }

          const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card,
          });


          if (error) {
            setCardError(error.message);
            console.log(error);
          } else {
            setCardError('');
          }
          setSuccess('');

          const {paymentIntent, error :intendError} = await stripe.confirmCardPayment(
           clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                  name: 'Jenny Rosen',
                },
              },
            },
          );
            if(intendError){
                setCardError(intendError?.message);
                
            }
            else {
                setCardError('');
                setSuccess('Payment completed successfully');
                console.log(paymentIntent);
            }



        }
    

    return ( 
        
        <form onSubmit={handleSubmit}>
        <CardElement
            options={{
                style: {
                    base: {
                        fontSize: '16px',
                        color: '#424770',
                        '::placeholder': {
                            color: '#aab7c4',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                },
            }}
        />
        <button type="submit" disabled={!stripe } className="mt-10 btn btn-xs btn-block btn-primary">
            Pay
        </button>
        <small className="text-error">{cardError && cardError}</small>
        <small className="text-success">{success && success}</small>
    </form>
     );
}

export default CheckoutForm;