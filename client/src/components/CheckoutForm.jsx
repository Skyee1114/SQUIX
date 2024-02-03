import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { donate, updatedonatelist } from '../actions/payment';
import { useTranslation } from 'react-i18next';

const CheckoutForm = ({ amount }) => {

  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const data = await donate({ amount });
        const clientSecret = data.clientSecret;
        const result = await stripe.confirmCardPayment(clientSecret, {
          payment_method: paymentMethod.id,
        });

        if (result.error) {
          console.log(result.error.message);
        } else {
          const confirmed_amount = result.paymentIntent.amount;
          const res = await updatedonatelist({confirmed_amount});
          console.log(res);
          console.log('Payment successful');
        }
      } catch (error) {
        console.error('Error processing payment:', error);
      } finally {
        setLoading(false);
      }
    } else {
      console.error('Error creating payment method:', error);
      setLoading(false);
    }
  };

  return (
    <div className="w-[280px] lg:w-[582px] 2xl:w-[801px] lg:h-[200px] 2xl:h-[477px] p-8 2xl:p-20 bg-white rounded-[3px] shadow">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 2xl:gap-20 mb-4">
          <label htmlFor="cardNumber" className="text-black text-[18px] md:text-[24px] 2xl:text-[54px] leading-[16px] md:leading-[21px] 2xl:leading-[78px] font-bold uppercase">
            {t('cardnumber')}
          </label>
          <CardElement
            id="cardNumber"
            className="w-full p-3 border border-gray-300 rounded"
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
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full uppercase bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {loading ? `${t('processing')}...` : `${t('donate')}`}
        </button>
      </form>
    </div>
  );
};

export default CheckoutForm;
