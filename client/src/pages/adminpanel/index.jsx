import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

import InputText from "../../components/InputText";
import { useTranslation } from 'react-i18next';
import { UserContext } from "../../contexts/UserContext";

function AdminPanel() {

  const { t, i18n } = useTranslation();  

  const { user } = useContext(UserContext);
  
  useEffect(() => {    
    if(user) {
      // console.log(user);
      
    }     
  }, [user])
  
  return (
    <>
      <Navbar colorMode="black"/>
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto py-8 2xl:py-20">  
                  
        </div>
      </div>
      
      <Footer />
    </>
  );
}

export default AdminPanel;
