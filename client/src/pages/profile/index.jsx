import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import defaultAvatar from "../../assets/img/user.png";
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
import { getCurrentProfile, getCurrentAvatar, updateCurrentProfile, updateCurrentAvatar } from "../../actions/profile";
import { UserContext } from "../../contexts/UserContext";

function Profile() {

  const { t, i18n } = useTranslation();

  const [viewTypeProfile, setViewTypeProfile] = useState("general");
  const [typeModal, setTypeModal] = useState("");
  const [sociallinkerror, setSocialLinkError] = useState('');

  const [avatar, setAvatar] = useState(defaultAvatar);
  const [avatarfile, setAvatarFile] = useState(null);

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    // console.log(file)
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        setAvatar(event.target.result);     
      };
      reader.readAsDataURL(file);
    }
  };

  const [linkedTwitter, setLinkedTwitter] = useState("");
  const [linkedArtstation, setLinkedArtstation] = useState("");
  const [linkedFacebook, setLinkedFacebook] = useState("");
  const [linkedLinkedIn, setLinkedLinkedIn] = useState("");
  const [linkedInstagram, setLinkedInstagram] = useState("");
  const [linkedTikTok, setLinkedTikTok] = useState("");
  const [linkedReddit, setLinkedReddit] = useState("");
  const [linkedYoutube, setLinkedYoutube] = useState("");
  const [linkedTelegram, setLinkedTelegram] = useState("");
  const [linkedDiscord, setLinkedDiscord] = useState("");
  const [linkedGoogleAccount, setLinkedGoogleAccount] = useState("");

  const [twitterlink, setTwitterLink] = useState("");
  const [artstationlink, setArtstationLink] = useState("");
  const [facebooklink, setFacebookLink] = useState("");
  const [linkedinlink, setLinkedInLink] = useState("");
  const [instagramlink, setInstagramLink] = useState("");
  const [tiktoklink, setTikTokLink] = useState("");
  const [redditlink, setRedditLink] = useState("");
  const [youtubelink, setYoutubeLink] = useState("");
  const [telegramlink, setTelegramLink] = useState("");
  const [discordlink, setDiscordLink] = useState("");
  const [googleaccountlink, setGoogleAccountLink] = useState("");

  const [name, setName] = useState('Mellosa');
  const [membership, setMembership] = useState('');
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [changepassword, setChangepassword] = useState("");
  const [repeatpassword, setRepeatpassword] = useState("");
  const [sociallink, setSocialLink] = useState("");

  const [nameerror, setNameError] = useState('');
  const [emailerror, setEmailError] = useState('');  
  const [passworderror, setPasswordError] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value); 
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value); 
  };

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value); 
  };

  const handleLastnameChange = (event) => {
    setLastname(event.target.value); 
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value); 
  };

  const handleChangePassword = (event) => {
    setChangepassword(event.target.value); 
  };

  const handleRepeatPassword = (event) => {
    setRepeatpassword(event.target.value); 
  };

  const handleSociallink = (event) => {
    setSocialLink(event.target.value);     
  };

  const handleSocialTab = (index) => {
    setTypeModal(index);
    switch (index) {
      case 'twitter':
        setSocialLink(twitterlink)     
        break;
      case 'artstation':
        setSocialLink(artstationlink)    
        break;
      case 'facebook':
        setSocialLink(facebooklink)      
        break;
      case 'linkedin':
        setSocialLink(linkedinlink)       
        break;
      case 'instagram':
        setSocialLink(instagramlink)     
        break;
      case 'tiktok':
        setSocialLink(tiktoklink)         
        break;
      case 'reddit':
        setSocialLink(redditlink)              
        break;
      case 'youtube':
        setSocialLink(youtubelink)            
        break;
      case 'telegram':
        setSocialLink(telegramlink)             
        break;
      case 'discord':
        setSocialLink(discordlink)           
        break;
      case 'googleaccount':
        setSocialLink(googleaccountlink)               
        break;    
      default:
        break;
    }  
  };

  const handleCloseModal = (event) => {
    if (event.target.classList.contains('bg-opacity-70')) {      
      setTypeModal('');
      setSocialLinkError('');   
    }
    event.stopPropagation();
  };


  const handleLink = () => {
    switch (typeModal) {
      case 'twitter':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedTwitter(typeModal);
          setTwitterLink(sociallink)
          setTypeModal('');
          setSocialLinkError('');              
        }                
        break;
      case 'artstation':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedArtstation(typeModal);    
          setArtstationLink(sociallink)   
          setTypeModal(''); 
          setSocialLinkError('');
        }
        break;
      case 'facebook':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedFacebook(typeModal);  
          setFacebookLink(sociallink)
          setTypeModal('');   
          setSocialLinkError('');
        }           
        break;
      case 'linkedin':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedLinkedIn(typeModal);     
          setLinkedInLink(sociallink)
          setTypeModal('');  
          setSocialLinkError('');
        }         
        break;
      case 'instagram':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedInstagram(typeModal);   
          setInstagramLink(sociallink)  
          setTypeModal('');   
          setSocialLinkError('');
        }        
        break;
      case 'tiktok':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedTikTok(typeModal);      
          setTikTokLink(sociallink)
          setTypeModal('');
          setSocialLinkError('');
        }          
        break;
      case 'reddit':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedReddit(typeModal);   
          setRedditLink(sociallink)
          setTypeModal(''); 
          setSocialLinkError('');
        }            
        break;
      case 'youtube':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedYoutube(typeModal);   
          setYoutubeLink(sociallink)
          setTypeModal(''); 
          setSocialLinkError('');
        }            
        break;
      case 'telegram':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedTelegram(typeModal);  
          setTelegramLink(sociallink)
          setTypeModal(''); 
          setSocialLinkError('');
        }             
        break;
      case 'discord':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedDiscord(typeModal);    
          setDiscordLink(sociallink)
          setTypeModal(''); 
          setSocialLinkError('');
        }           
        break;
      case 'googleaccount':
        if(!sociallink){
          setSocialLinkError(t('sociallinkerror'));
        }
        else {
          setLinkedGoogleAccount(typeModal);  
          setGoogleAccountLink(sociallink)
          setTypeModal('');
          setSocialLinkError('');
        }              
        break;    
      default:
        break;
    }    
  };

  const handleTwitterClose = () => {
    setLinkedTwitter(false);
    setTwitterLink('');
  };
  const handleArtstationClose = () => {
    setLinkedArtstation(false);
    setArtstationLink('');
  };
  const handleFacebookClose = () => {
    setLinkedFacebook(false);
    setFacebookLink('');
  };
  const handleLinkedInClose = () => {
    setLinkedLinkedIn(false);
    setLinkedInLink('');
  };
  const handleInstagramClose = () => {
    setLinkedInstagram(false);
    setInstagramLink('');
  };
  const handleTikTokClose = () => {
    setLinkedTikTok(false);
    setTikTokLink('');
  };
  const handleRedditClose = () => {
    setLinkedReddit(false);
    setRedditLink('');
  };
  const handleYoutubeClose = () => {
    setLinkedYoutube(false);
    setYoutubeLink('');
  };
  const handleTelegramClose = () => {
    setLinkedTelegram(false);
    setTelegramLink('');
  };
  const handleDiscordClose = () => {
    setLinkedDiscord(false);
    setDiscordLink('');
  };
  const handleGoogleAccountClose = () => {
    setLinkedGoogleAccount(false);
    setGoogleAccountLink('');
  };

  const saveChanges = () => {

    const formData = new FormData();
    formData.append('avatar', avatarfile);
    updateCurrentAvatar(formData);

    if (name.length < 1) {
      setNameError(t('nameerror'));
      return;
    }
    setNameError('');   

    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      // Set error message for invalid email
      setEmailError(t('emailerror'));
      return;
    }
    setEmailError('');

    if(changepassword !== repeatpassword) {
      setPasswordError(t('dontmatchpassword'));
      return;
    }    
    if(changepassword.length !== 0 && changepassword.length < 6){
      setPasswordError(t('passworderror'));
      return;
    }
    setPasswordError('');

    const password = changepassword;

    updateCurrentProfile({name, email, password, firstname, lastname, phone, twitterlink, artstationlink, facebooklink, linkedinlink, instagramlink, tiktoklink, redditlink, youtubelink, telegramlink, discordlink, googleaccountlink});       

  }

  const { user } = useContext(UserContext);
  
  useEffect(() => {    
    if(user) {
      // console.log(user);
      getCurrentAvatar().then(data => {
        if(data) {
          const imageUrl = URL.createObjectURL(data)
          setAvatar(imageUrl);
        }
        else {
          setAvatar(defaultAvatar);
        }
      });
      getCurrentProfile().then(data => {
        if(data) {
          setName(data.personalInfo.username);
          setMembership(data.membership);
          setEmail(data.personalInfo.email);
          setFirstname(data.personalInfo.firstname);
          setLastname(data.personalInfo.lastname);
          setPhone(data.personalInfo.phone);
          if(data.connectedSocials.twitter) {
            setTwitterLink(data.connectedSocials.twitter);
            setLinkedTwitter('twitter');
          }
          if(data.connectedSocials.instagram) {
            setInstagramLink(data.connectedSocials.instagram);
            setLinkedInstagram('instagram');
          }
          if(data.connectedSocials.telegram) {
            setTelegramLink(data.connectedSocials.telegram);
            setLinkedTelegram('telegram');
          }
          if(data.connectedSocials.artstation) {
            setArtstationLink(data.connectedSocials.artstation);
            setLinkedArtstation('artstation');
          }
          if(data.connectedSocials.tiktok) {
            setTikTokLink(data.connectedSocials.tiktok);
            setLinkedTikTok('tiktok');
          }
          if(data.connectedSocials.discord) {
            setDiscordLink(data.connectedSocials.discord);
            setLinkedDiscord('discord');
          }
          if(data.connectedSocials.facebook) {
            setFacebookLink(data.connectedSocials.facebook);
            setLinkedFacebook('facebook');
          }
          if(data.connectedSocials.reddit) {
            setRedditLink(data.connectedSocials.reddit);
            setLinkedReddit('reddit');
          }
          if(data.connectedSocials.googleAccount) {
            setGoogleAccountLink(data.connectedSocials.googleAccount);
            setLinkedGoogleAccount('googleaccount');
          }
          if(data.connectedSocials.linkedIn) {
            setLinkedInLink(data.connectedSocials.linkedIn);
            setLinkedLinkedIn('linkedin');
          }
          if(data.connectedSocials.youtube) {
            setYoutubeLink(data.connectedSocials.youtube);
            setLinkedYoutube('youtube');
          }
        }
      });
    }     
  }, [user])
  
  return (
    <>
      <Navbar colorMode="black"/>
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative" >
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto py-8 2xl:py-20">  
          <div className="flex flex-col 2xl:flex-row items-center gap-4 2xl:gap-12 pl-0 2xl:pl-12">
            <div className="relative cursor-pointer">
              <label htmlFor="avatarInput">
                <div
                  className="rounded-full overflow-hidden"
                  style={{ width: '118px', height: '118px' }}
                >
                  <img
                    src={avatar}
                    alt="user"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute left-0 top-0 rounded-full border-4 border-[#FFA801] transition duration-300 opacity-0 hover:opacity-100">
                  <div className="bg-black rounded-full w-[110px] h-[110px] opacity-30"></div>
                  <img
                    src={UserHoverIcon}
                    alt="user_hover"
                    className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </label>
              <input
                type="file"
                id="avatarInput"
                accept="image/*"
                className="hidden"
                onChange={handleAvatarChange}
              />
            </div>
            <div className="font-bold text-black text-left text-[20px] 2xl:text-[54px] leading-[28px] 2xl:leading-[78px]">
              {name}                        
            </div>
            <div className="font-bold text-red-700 text-[20px] 2xl:text-[54px] leading-[28px] 2xl:leading-[78px]">
              {membership}                        
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
                        value={name}
                        onChange={handleNameChange}
                        placeholder="Mellosa"
                      />
                      {nameerror && <div className="text-red-500">{nameerror}</div>}
                    </div>
                    <div className="flex flex-col items-start order-4 md:order-2">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('email')}
                      </label>
                      <InputText
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="raviotar@gmail.com"
                      />
                      {emailerror && <div className="text-red-500">{emailerror}</div>}
                    </div>
                    <div className="flex flex-col items-start order-2 md:order-3">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('firstname')}
                      </label>
                      <InputText
                        type="text"
                        name="first_name"
                        value={firstname}
                        onChange={handleFirstnameChange}
                        placeholder="Olena"
                      />
                    </div>
                    <div className="flex flex-col items-start order-5 md:order-4">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('phone')}
                      </label>
                      <InputText 
                        type="text" 
                        name="phone" 
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+44"  
                        />
                    </div>
                    <div className="flex flex-col items-start order-3 md:order-5">
                      <label className="text-[14px] opacity-50 text-[#616485]">
                        {t('lastname')}
                      </label>
                      <InputText
                        type="text"
                        name="last_name"
                        value={lastname}
                        onChange={handleLastnameChange}
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
                        value={changepassword}
                        onChange={handleChangePassword}
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
                        value={repeatpassword}
                        onChange={handleRepeatPassword}
                        placeholder="********"
                      />
                      {passworderror && <div className="text-red-500">{passworderror}</div>}
                    </div>
                  </div>                  
                </div>
              )}
              
              {viewTypeProfile === "socials" && (
                <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 w-full 2xl:pt-[75px]">
                  <SocialTab
                    text={'twitter'}
                    icon={TwitterIcon}
                    onOpenModal={() => handleSocialTab('twitter')}
                    active={linkedTwitter}
                    onClose={handleTwitterClose}
                  />
                  <SocialTab
                    text={'instagram'}
                    icon={InstagramIcon}
                    onOpenModal={() => handleSocialTab('instagram')}
                    active={linkedInstagram}
                    onClose={handleInstagramClose}
                  />
                  <SocialTab
                    text={'telegram'}
                    icon={TelegramIcon}
                    onOpenModal={() => handleSocialTab('telegram')}
                    active={linkedTelegram}
                    onClose={handleTelegramClose}
                  />
                  <SocialTab
                    text={'artstation'}
                    icon={ArtstationIcon}
                    onOpenModal={() => handleSocialTab('artstation')}
                    active={linkedArtstation}
                    onClose={handleArtstationClose}
                  />
                  <SocialTab
                    text={'tiktok'}
                    icon={TiktokIcon}
                    onOpenModal={() => handleSocialTab('tiktok')}
                    active={linkedTikTok}
                    onClose={handleTikTokClose}
                  />
                  <SocialTab
                    text={'discord'}
                    icon={DiscordIcon}
                    onOpenModal={() => handleSocialTab('discord')}
                    active={linkedDiscord}
                    onClose={handleDiscordClose}
                  />
                  <SocialTab
                    text={'facebook'}
                    icon={FacebookIcon}
                    onOpenModal={() => handleSocialTab('facebook')}
                    active={linkedFacebook}
                    onClose={handleFacebookClose}
                  />
                  <SocialTab
                    text={'reddit'}
                    icon={ReeditIcon}
                    onOpenModal={() => handleSocialTab('reddit')}
                    active={linkedReddit}
                    onClose={handleRedditClose}
                  />
                  <SocialTab
                    text={'googleaccount'}
                    icon={GoogleIcon}
                    onOpenModal={() => handleSocialTab('googleaccount')}
                    active={linkedGoogleAccount}
                    onClose={handleGoogleAccountClose}
                  />
                  <SocialTab
                    text={'linkedin'}
                    icon={LinkedinIcon}
                    onOpenModal={() => handleSocialTab('linkedin')}
                    active={linkedLinkedIn}
                    onClose={handleLinkedInClose}
                  />
                  <SocialTab
                    text={'youtube'}
                    icon={YoutubeIcon}
                    onOpenModal={() => handleSocialTab('youtube')}
                    active={linkedYoutube}
                    onClose={handleYoutubeClose}
                  />                  
                </div>
              )}              
            </div>           
          </div>      
          <div className="py-8 2xl:px-[400px] flex justify-center 2xl:justify-stretch">
            <Button text={t('savechanges')} className={"w-full md:w-[279px] flex justify-center"} onClick={() => saveChanges()}/>
          </div>        
        </div>
      </div>
      {typeModal && (
        <div
          className="w-screen h-screen fixed top-0 left-0 bg-opacity-70 bg-black z-30"
          onClick={handleCloseModal}
        >
          <div className="bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 md:p-8 2xl:p-12 flex flex-col gap-4 2xl:gap-8 w-[280px] md:w-auto">
            <div className="w-[7.88px] 2xl:w-[15.12px] h-[51px] 2xl:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-6 md:top-8 2xl:top-16" />
            <div className="uppercase font-bold text-black text-[18px] md:text-[24px] 2xl:text-[54px] leading-[16px] md:leading-[21px] 2xl:leading-[78px] text-left">
              {i18n.language === 'korean' ? `${t(typeModal)} ${t('linkyour')}` : `${t('linkyour')} ${t(typeModal)}`}
            </div>
            <div className="flex flex-col items-start w-full">
              <label className="text-[14px] leading-[20px] opacity-50 text-[#616485]">
                {t(typeModal)} {t('link')}
              </label>
              <InputText
                type="text"
                name="link"
                value={sociallink}
                onChange={handleSociallink}
                placeholder={i18n.language === 'korean' ? `${t(typeModal)}${t('pastehereyour')}` : `${t('pastehereyour')} ${t(typeModal)}`}                
              />
              {sociallinkerror && <div className="text-red-500">{t('sociallinkerror')}</div>}
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
