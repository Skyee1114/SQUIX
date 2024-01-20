import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import UserImg from "../../assets/img/user.png";
import Button from "../../components/Buttons/Button";
import SocialTab from "../../components/SocialTab";
import TwitterIcon from "../../assets/img/socials/twitter_b.png";
import LinkedinIcon from "../../assets/img/socials/linkedin_b.png";
import FacebookIcon from "../../assets/img/socials/facebook_b.png";
import YoutubeIcon from "../../assets/img/socials/youtube_b.png";
import ArtstationIcon from "../../assets/img/socials/artstation_b.png";
import DiscordIcon from "../../assets/img/socials/discord_b.png";
import TelegramIcon from "../../assets/img/socials/telegram_b.png";
import ReeditIcon from "../../assets/img/socials/redit_b.png";
import GoogleIcon from "../../assets/img/socials/google_b.png";
import InstagramIcon from "../../assets/img/socials/instagram_b.png";
import TiktokIcon from "../../assets/img/socials/tiktok_b.png";
import UserHoverIcon from "../../assets/img/user_hover.svg";
import InputText from "../../components/InputText";
import { useTranslation } from 'react-i18next';

function Profile() {

  const { t, i18n } = useTranslation();

  const [viewTypeProfile, setViewTypeProfile] = useState("general");
  const [typeModal, setTypeModal] = useState("");
  const [linkedSocial, setLinkedSocial] = useState("");

  const handleLink = () => {
    // Additional functionality to handle actual linking can be added here
    // console.log(typeModal);
    setLinkedSocial(typeModal);
    setTypeModal(false);
  };

  const handleClose = () => {
    setLinkedSocial(false);
  };
  return (
    <>
      <Navbar colorMode="black"/>
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto py-8 2xl:py-20">  
          <div className="flex flex-col 2xl:flex-row items-center gap-4 2xl:gap-12 pl-0 2xl:pl-12">
            <div className="relative cursor-pointer">
              <img src={UserImg} alt="user" className="w-[118px]" />
              <div className="absolute left-0 top-0 rounded-full border-4 border-[#FFA801] opacity-0 hover:opacity-100">
                <div className="bg-black rounded-full w-[110px] h-[110px] opacity-30"></div>
                <img
                  src={UserHoverIcon}
                  alt="user_hover"
                  className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
              </div>
            </div>
            <div className="font-bold text-black text-left text-[20px] 2xl:text-[54px] leading-[28px] 2xl:leading-[78px]">
              Mellosa
            </div>
          </div>
          <div className="flex flex-col 2xl:flex-row items-center 2xl:items-stretch pt-4 2xl:pt-12">
            <div className="flex flex-row 2xl:flex-col items-center 2xl:items-stretch py-4 md:px-4 gap-2 md:gap-8  2xl:border-r 2xl:border-[#6164854D] 2xl:min-w-[350px]">
              {viewTypeProfile === "general" ? (
                <Button
                  text={t('generalinfo')}
                  profile={"yes"}
                  className={"2xl:-me-7 text-[13px] md:text-[14px] 2xl:text-[20px] leading-[18px] md:leading-[20px] 2xl:leading-[28px]"}
                  onClick={() => setViewTypeProfile("general")}
                />
              ) : (
                <div
                  className="2xl:ps-[28px] 2xl:text-left uppercase text-[#616485] font-bold text-[13px] md:text-[14px] 2xl:text-[20px] leading-[18px] md:leading-[20px] 2xl:leading-[28pxpx] pt-0 2xl:pt-[22px] cursor-pointer"
                  onClick={() => setViewTypeProfile("general")}
                >
                  {t('generalinfo')}
                </div>
              )}
              {viewTypeProfile === "socials" ? (
                <Button
                  text={t('connectedsocials')}
                  profile={"yes"}
                  className={"2xl:-me-7 text-[13px] md:text-[14px] 2xl:text-[20px] leading-[18px] md:leading-[20px] 2xl:leading-[28px]"}
                  onClick={() => setViewTypeProfile("socials")}
                />
              ) : (
                <div
                  className="2xl:ps-[30px] 2xl:text-left uppercase text-[#616485] font-bold text-[13px] md:text-[14px]  2xl:text-[20px] leading-[18px] md:leading-[20px] 2xl:leading-[28px] cursor-pointer"
                  onClick={() => setViewTypeProfile("socials")}
                >
                  {t('connectedsocials')}
                </div>
              )}
            </div>
            <div className="py-4 2xl:px-[50px] w-full">
              
              {viewTypeProfile === "general" && (
                <div>
                  <div className="pb-3 md:pb-6 2xl:pt-3 font-bold text-black uppercase text-[20px] 2xl:text-[32px] leading-[28px] 2xl:leading-[46px] text-left">
                    {t('personalinfo')}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 2xl:gap-8 w-full">
                    <div className="flex flex-col items-start order-1">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('username')}
                      </label>
                      <InputText
                        type="text"
                        name="username"
                        placeholder="Mellosa"
                      />
                    </div>
                    <div className="flex flex-col items-start order-4 md:order-2">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('email')}
                      </label>
                      <InputText
                        type="text"
                        name="email"
                        placeholder="raviotar@gmail.com"
                      />
                    </div>
                    <div className="flex flex-col items-start order-2 md:order-3">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('firstname')}
                      </label>
                      <InputText
                        type="text"
                        name="first_name"
                        placeholder="Olena"
                      />
                    </div>
                    <div className="flex flex-col items-start order-5 md:order-4">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('phone')}
                      </label>
                      <InputText type="text" name="phone" placeholder="+44" />
                    </div>
                    <div className="flex flex-col items-start order-3 md:order-5">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('lastname')}
                      </label>
                      <InputText
                        type="text"
                        name="last_name"
                        placeholder="Salska"
                      />
                    </div>
                  </div>

                  <div className="pb-3 md:pb-6 pt-8 font-bold text-black uppercase text-[20px] 2xl:text-[32px] leading-[28px] 2xl:leading-[46px] text-left">
                    {t('security')}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-1 gap-4 2xl:gap-8 w-full">
                    <div className="flex flex-col items-start w-full 2xl:w-1/2">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('changepassword')}
                      </label>
                      <InputText
                        type="password"
                        name="password"
                        placeholder="********"
                      />
                    </div>
                    <div className="flex flex-col items-start w-full 2xl:w-1/2">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('repeatpassword')}
                      </label>
                      <InputText
                        type="password"
                        name="confirm_password"
                        placeholder="********"
                      />
                    </div>
                  </div>                  
                </div>
              )}
              
              {viewTypeProfile === "socials" && (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full 2xl:pt-[75px]">
                  <SocialTab
                    text={t('twitter')}
                    icon={TwitterIcon}
                    onOpenModal={() => setTypeModal(t('twitter'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('instagram')}
                    icon={InstagramIcon}
                    onOpenModal={() => setTypeModal(t('instagram'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('telegram')}
                    icon={TelegramIcon}
                    onOpenModal={() => setTypeModal(t('telegram'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('artstation')}
                    icon={ArtstationIcon}
                    onOpenModal={() => setTypeModal(t('artstation'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('tiktok')}
                    icon={TiktokIcon}
                    onOpenModal={() => setTypeModal(t('tiktok'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('discord')}
                    icon={DiscordIcon}
                    onOpenModal={() => setTypeModal(t('discord'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('facebook')}
                    icon={FacebookIcon}
                    onOpenModal={() => setTypeModal(t('facebook'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('reedit')}
                    icon={ReeditIcon}
                    onOpenModal={() => setTypeModal(t('reedit'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('googleaccount')}
                    icon={GoogleIcon}
                    onOpenModal={() => setTypeModal(t('googleaccount'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('linkedin')}
                    icon={LinkedinIcon}
                    onOpenModal={() => setTypeModal(t('linkedin'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />
                  <SocialTab
                    text={t('youtube')}
                    icon={YoutubeIcon}
                    onOpenModal={() => setTypeModal(t('youtube'))}
                    active={linkedSocial}
                    onClose={handleClose}
                  />                  
                </div>
              )}              
            </div>           
          </div>      
          <div className="py-8 2xl:px-[400px] flex justify-center 2xl:justify-stretch">
            <Button text={t('savechanges')} className={"w-full md:w-[279px] flex justify-center"}/>
          </div>        
        </div>
      </div>
      {typeModal && (
        <div
          className="w-screen h-screen fixed top-0 left-0 bg-opacity-70 bg-black z-30"
          onClick={() => setTypeModal("")}
        >
          <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 md:p-8 2xl:p-12 flex flex-col gap-4 2xl:gap-8 w-[280px] md:w-auto">
            <div className="w-[7.88px] 2xl:w-[15.12px] h-[51px] 2xl:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-6 md:top-8 2xl:top-16" />
            <div className="uppercase font-bold text-black text-[18px] md:text-[24px] 2xl:text-[54px] leading-[16px] md:leading-[21px] 2xl:leading-[78px] text-left">
              {i18n.language === 'kr' ? `${typeModal} ${t('linkyour')}` : `${t('linkyour')} ${typeModal}`}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] leading-[20px] opacity-50 text-[#616485]">
                {typeModal} {t('link')}
              </label>
              <InputText
                type="text"
                name="link"
                placeholder={i18n.language === 'kr' ? `${typeModal}${t('pastehereyour')}` : `${t('pastehereyour')} ${typeModal}`}
                
              />
            </div>
            <Button text={t('link')} onClick={handleLink} className={"flex justify-center"} />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default Profile;
