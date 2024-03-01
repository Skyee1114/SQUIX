import React from 'react';
import { useEffect } from "react";
import { useLocation, Navigate } from 'react-router-dom'
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from "../../components/CheckoutForm";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useTranslation } from 'react-i18next';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const StripePayment = () => { 

  const { t } = useTranslation();
  const location = useLocation();
  const amount = location.state && location.state.amount; 

  useEffect(() => {    
    window.scrollTo(0, 0);
  }, []);

  if (!amount) {
    return <Navigate to="/donate" />;  // Redirect to an error page if amount is not available
  }
  
  return (
    <>
      <Navbar colorMode="black" />
      <div>
        <div className="absolute -z-10 w-full h-[800px] 2xl:h-[1250px] bg-[url('./assets/img/verify-bg-320.jpg')] sm:bg-[url('./assets/img/verify-bg-834.jpg')] xl:bg-[url('./assets/img/verify-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
        </div>   
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">  
            <div className="flex flex-col gap-8 pb-8 sm:pb-24 xl:pb-40 2xl:pb-48 pt-8 2xl:pt-16">
              <div className="text-center text-white text-[18px] md:text-[20px] 2xl:text-[54px] leading-[26px] md:leading-[28px] 2xl:leading-[78px] font-bold  uppercase">
                {t('stripetitle')}
              </div>
              <div className='flex mx-auto'>
                <Elements stripe={stripePromise}>
                  <CheckoutForm amount={amount} />      
                </Elements>
              </div>              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
    );
};

export default StripePayment;


