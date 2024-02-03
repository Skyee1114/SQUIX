import React from "react";
import CloseIcon from "../assets/img/close_w.svg";
import { useTranslation } from 'react-i18next';

function SocialTab({ text, icon, onOpenModal, onClose, active }) {
  const { t, i18n } = useTranslation();
  // console.log(active, "active");
  // Method to handle the close icon click
  const handleCloseClick = (event) => {
    // Prevent event from bubbling up to the parent div
    event.stopPropagation();
    onClose();
  };
  return (
    <div
      className={`px-6 py-2 flex items-center justify-between rounded-[3px] w-full bg-[#F5F5F5] cursor-pointer hover:bg-[#FFE8BC] ${
        text === active && "bg-[#FFD687]"
      }`}
    >
      <div
        className="flex items-center w-full"
        onClick={() => onOpenModal(text)}
      >
        <img src={icon} alt={text} />
        <div className="font-bold text-black text-[14px] 2xl:text-[20px] leading-[20px] 2xl:leading-[28px]">
        {i18n.language === 'kr' ? `${t(text)} ` : ''}{text === active ? `${t('unlink')}` : `${t('link')}`} {i18n.language !== 'kr' ? t(text) : ''}
        </div>
      </div>
      {text === active && (
        <img
          src={CloseIcon}
          alt="close"
          className="z-30"
          onClick={handleCloseClick}
        />
      )}
    </div>
  );
}

export default SocialTab;
