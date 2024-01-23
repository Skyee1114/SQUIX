import React from 'react'
import { useState } from "react";
import InputText from "../../components/InputText";
import FacebookIcon from "../../assets/img/socials/facebook.png";
import GoogleIcon from "../../assets/img/socials/google_2.png";
import GoogleHoverIcon from "../../assets/img/socials/google2_.png";
import FacebookHoverIcon from "../../assets/img/socials/facebook_.png";
import InputCheckBox from "../../components/InputCheckBox";
import Button from "../../components/Buttons/Button";
import { useTranslation } from 'react-i18next';
import { register } from '../../actions/auth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [nameerror, setNameError] = useState('');
  const [emailerror, setEmialError] = useState('');  
  const [passworderror, setPasswordError] = useState('');
  const [checkboxError, setCheckboxError] = useState('');
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const [isSubscribeChecked, setIsSubscribeChecked] = useState(false);

  const [formData, setFormdata] = useState({
    name: '',
    email: '',
    password: ''
  });

  const { name, email, password } = formData;

  const onChange = (e) =>
    setFormdata({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name.length < 1) {
      setNameError(t('nameerror'));
      return;
    }
    setNameError('');   

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      // Set error message for invalid email
      setEmialError(t('emailerror'));
      return;
    }
    setEmialError('');

    if (password.length < 6) {
      // Set error message for short password
      setPasswordError(t('passworderror'));
      return;
    }  
    setPasswordError('');    

    if (!isTermsChecked) {
      // Set error message for unchecked checkbox
      setCheckboxError(t('termserror'));
      return;
    }
    setCheckboxError('');

    register({ name, email, password }).then(data => {
      if(data) {
        navigate("/please-verify")
      } 
      else 
      {
        setEmialError(t('emailvaliderror'))
      } 
    }).catch(err => console.error(err));
    
  };

  return (
    <div>
      <div className="absolute -z-10 w-full h-[800px] 2xl:h-[1250px] bg-[url('./assets/img/auth-bg-320.jpg')] sm:bg-[url('./assets/img/auth-bg-834.jpg')] xl:bg-[url('./assets/img/auth-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
      </div>   
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">  
          <div className="flex flex-col gap-8 pb-10 pt-8 2xl:pt-16">
            <div className="text-center text-white text-[18px] md:text-[20px] 2xl:text-[54px] leading-[26px] md:leading-[28px] 2xl:leading-[78px] font-bold  uppercase">
              {t('authtitle')}
            </div>
            
            <div className="flex flex-col mx-auto">
              <form className='form' onSubmit={onSubmit}>
                <div className=" 2xl:w-[600px] 3xl:w-[654px] 2xl:h-[900px] 3xl:h-[1020px] p-8 xl:p-12 3xl:p-20 bg-white rounded-[3px] shadow flex-col justify-between items-start gap-4 2xl:gap-0 inline-flex relative">
                  <div className="text-black text-[18px] md:text-[24px] 2xl:text-[54px] leading-[16px] md:leading-[21px] 2xl:leading-[78px] font-bold uppercase">
                    {t('signup')}
                  </div>
                  <div className="w-[7.88px] 2xl:w-[15.12px] h-[52px] 2xl:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-8 xl:top-12 2xl:top-16 3xl:top-24" />
                  <div className="flex-col justify-start items-start gap-4 2xl:gap-[31px] flex w-full">
                    <InputText
                      name={"name"}
                      value={name}
                      placeholder={`${t('username')}*`}
                      type={"text"}
                      onChange={(e) => onChange(e)}
                      required
                    />
                    {nameerror && <div className="text-red-500">{nameerror}</div>}
                    <InputText
                      name={"email"}
                      value={email}
                      placeholder={`${t('email')}*`}
                      type={"text"}
                      onChange={(e) => onChange(e)}
                      required
                    />
                    {emailerror && <div className="text-red-500">{emailerror}</div>}
                    <InputText
                      name={"password"}
                      value={password}
                      placeholder={`${t('password')}*`}
                      type={"password"}
                      minLength='6'
                      onChange={(e) => onChange(e)}
                      required
                    />
                    {passworderror && <div className="text-red-500">{passworderror}</div>}
                    <div className="text-black text-[12px] 2xl:text-[14px] leading-[17px] 2xl:leading-[20px] ">
                      *{t('requiredform')}
                    </div>
                    <div className="justify-start items-center gap-2.5 inline-flex text-left">
                      <InputCheckBox setIsChecked={setIsTermsChecked} isChecked={isTermsChecked}/>
                      <div className="w-[176px] 2xl:w-[407px] ">
                        <span className="text-black text-[12px] 2xl:text-[15px] leading-[17px] 2xl:leading-[21px] ">
                          {t('ihavereadandagreetothe')}{" "}
                        </span>
                        <span className="text-amber-500 text-[12px] 2xl:text-[15px] leading-[17px] 2xl:leading-[21px]  underline">
                          {t('termsofservice')}{" "}
                        </span>
                        <span className="text-black text-[12px] 2xl:text-[15px] leading-[17px] 2xl:leading-[21px] ">
                          {t('and')}{" "}
                        </span>
                        <span className="text-amber-500 text-[12px] 2xl:text-[15px] leading-[17px] 2xl:leading-[21px] underline">
                          {t('privacypolicy')}
                        </span>
                      </div>                      
                    </div>
                    {checkboxError && <div className="text-red-500">{checkboxError}</div>}
                    <div className=" justify-start items-center gap-2.5 inline-flex text-left">
                      <InputCheckBox setIsChecked={setIsSubscribeChecked} isChecked={isSubscribeChecked}/>
                      <div className="w-[176px] 2xl:w-[407px]">
                        <span className="text-black text-[12px] 2xl:text-[15px] leading-[17px] 2xl:leading-[21px]">
                          {t('subscribetoournewsteller')}
                        </span>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="hidden md:block">
                        <Button
                          type='submit'
                          value='Register'
                          text={t('registernewaccount')}
                          className={"w-full text-center flex items-center justify-center"}
                        />
                      </div>
                      <div className="block md:hidden">
                        <Button
                          type='submit'
                          value='Register'
                          text={t('register')}
                          className={"w-full text-center flex items-center justify-center"}
                        />
                      </div> 
                    </div>    
                  </div>
                  <div className="flex-col justify-start items-start gap-4 2xl:gap-[30px] flex">
                    <div className="text-black text-[14px] 2xl:text-[23px] leading-[20px] 2xl:leading-[33px] font-bold">
                      {t('orsignupvia')}
                    </div>
                    <div className="inline-flex items-start justify-start gap-5">
                      <div className="relative bg-black rounded-[3px]  cursor-pointer ">
                        <img src={FacebookIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px]" />
                        <img
                          src={FacebookHoverIcon}
                          className="absolute w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                          alt=""
                        />
                      </div>
                      <div className="relative bg-black rounded-[3px]  cursor-pointer ">
                        <img src={GoogleIcon} alt="" className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px]"/>
                        <img
                          src={GoogleHoverIcon}
                          className="absolute w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px] top-0 left-0 transition duration-300 opacity-0 hover:opacity-100"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </form> 
            </div>                         
          </div>
        </div>
      </div>
    </div>    
  );
}
