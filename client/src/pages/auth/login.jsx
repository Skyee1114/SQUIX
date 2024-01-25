import React from "react";
import { useEffect, useState, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { login } from '../../actions/auth';
import Button from "../../components/Buttons/Button";
import InputText from "../../components/InputText";
import FacebookIcon from "../../assets/img/socials/facebook.png";
import GoogleIcon from "../../assets/img/socials/google_2.png";
import GoogleHoverIcon from "../../assets/img/socials/google2_.png";
import FacebookHoverIcon from "../../assets/img/socials/facebook_.png";
import { UserContext } from "../../contexts/UserContext";
import { useTranslation } from 'react-i18next';

export default function Login() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)
  const [emailerror, setEmialError] = useState('');  
  const [passworderror, setPasswordError] = useState('');

  const [formData, setFormdata] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormdata({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Email validation using regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      // Set error message for invalid email
      setEmialError('Please include a valid email');
      return;
    }
    // Clear error message if email is valid
    setEmialError('');

    if (password.length < 6) {
      // Set error message for short password
      setPasswordError('Password should be 6 or more characters');
      return;
    }
  
    // Clear error message if email and password are valid
    setPasswordError('');       

    login({email, password}).then(data => {if(data) {setUser(data); navigate("/")}}).catch(err => console.error(err));
  };

  return (
    <div>
      <div className="absolute -z-10 w-full h-[1250px] bg-[url('./assets/img/auth-bg-320.jpg')] sm:bg-[url('./assets/img/auth-bg-834.jpg')] xl:bg-[url('./assets/img/auth-bg-1920.jpg')] bg-no-repeat 5xl:bg-cover bg-top">
      </div>         

      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">  
          <div className="flex flex-col gap-8 pb-5 xl:pb-24 pt-8 2xl:pt-16">
            <div className="text-center text-white text-[18px] md:text-[20px] 2xl:text-[54px] leading-[26px] md:leading-[28px] 2xl:leading-[78px] font-bold  uppercase">
              {t('authtitle')}
            </div>
            <div className="flex flex-col mx-auto">
              <form className='form' onSubmit={onSubmit}>
                <div className="flex flex-col 2xl:flex-row mx-auto">
                  <div className=" 2xl:w-[600px] 3xl:w-[654px] 2xl:h-[700px] 3xl:h-[750px] p-8 xl:p-12 3xl:p-20 bg-white rounded-tr-[3px] 2xl:rounded-tr-none rounded-tl-[3px] 2xl:rounded-bl-[3px] shadow flex-col justify-between items-start gap-4 2xl:gap-0 inline-flex relative">
                    
                    <div className="text-black text-[18px] md:text-[24px] 2xl:text-[54px] leading-[16px] md:leading-[21px] 2xl:leading-[78px] font-bold uppercase">
                      {t('login')}
                    </div>
                    <div className="w-[7.88px] 2xl:w-[15.12px] h-[52px] 2xl:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-8 xl:top-12 2xl:top-16 3xl:top-24" />
                    <div className="text-black text-[14px] 2xl:text-[23px] leading-[16px] 2xl:leading-[26px] font-normal">
                      {t('alreadyhaveanaccount')}
                    </div>
                    
                    <div className="2xl:h-[227px] flex-col justify-start items-start gap-4 2xl:gap-[31px] w-full flex">                    
                      <InputText
                        name={"email"}
                        value={email}
                        placeholder={t('email')}
                        error={false}
                        success={false}
                        required
                        onChange={(e) => onChange(e)}
                      />
                      {emailerror && <div className="text-red-500">{t('emailerror')}</div>}
                      <InputText
                        name={"password"}
                        value={password}
                        type={"password"}
                        placeholder={t('password')}
                        error={false}
                        success={false}
                        minLength='6'
                        required
                        onChange={(e) => onChange(e)}
                      />
                      {passworderror && <div className="text-red-500">{t('passworderror')}</div>}
                      <Button
                        text={t('login')}
                        className={"w-full text-center flex items-center justify-center"}
                      />                    
                    </div>
                    
                    <div className="flex-col justify-start items-start gap-4 2xl:gap-[30px] flex">
                      <div className="text-black text-[14px] 2xl:text-[23px] leading-[20px] 2xl:leading-[33px] font-bold">
                        {t('orloginvia')}
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
                  <div className="2xl:w-[600px] 3xl:w-[654px] 2xl:h-[700px] 3xl:h-[750px] p-8 xl:p-12 3xl:p-20 bg-[#F5F5F5] rounded-bl-[3px] 2xl:rounded-bl-none 2xl:rounded-tr-[3px] rounded-br-[3px] flex-col justify-between items-start gap-4 2xl:gap-0 inline-flex relative">
                    <div className="text-black text-[18px] md:text-[24px] 2xl:text-[54px] leading-[16px] md:leading-[21px] 2xl:leading-[78px] font-bold uppercase">
                      {t('signup')}
                    </div>
                    <div className="w-[7.88px] 2xl:w-[15.12px] h-[52px] 2xl:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-8 xl:top-12 2xl:top-16 3xl:top-24" />
                    
                    <div className="2xl:h-[309.43px] flex-col justify-start items-start gap-4 2xl:gap-[115px] flex">
                      <div className="self-stretch 2xl:h-[131.43px] text-black text-[14px] 2xl:text-[23px] leading-[16px] 2xl:leading-[26px] font-normal text-left">
                      {t('signupintro')}
                      </div>
                      <div className="w-full">
                        <div className="hidden md:block">
                          <Link to={"/auth/register"}>
                            <Button
                              text={t('registernewaccount')}
                              className={"w-full text-center flex items-center justify-center"}
                            />
                          </Link>
                          
                        </div>
                        <div className="block md:hidden">
                          <Link to={"/auth/register"}>
                            <Button
                              text={t('register')}
                              className={"w-full text-center flex items-center justify-center"}
                            />
                          </Link>                      
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
                </div>
              </form>
            </div>
              
          </div>   
        </div>
      </div>   
    </div>
  );
}
