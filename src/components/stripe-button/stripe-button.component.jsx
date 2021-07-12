import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100
    const publishableKey = 'pk_test_51JCRpjJgqbpHvaPqfzBlOwrMh0bDIVq64rBDsKPYFOvJWL0mHIyNJxMhiRQ6sRqixU0q6o0hTcTF2IJCdM1WmTOu00MGGdNNer'
    
    const onToken = token => {
        console.log(token);
        alert("Payment Successful")
    }

    return (
        <StripeCheckout
            label='PAY NOW'
            name='CRWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='PAY NOW'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton