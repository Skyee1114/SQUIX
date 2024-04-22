import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { useEffect, useState} from "react";
import PORTUGUESEImg from "../assets/img/portugal.svg";
import ENGLISHImg from "../assets/img/united-kingdom.svg";
import KOREANImg from "../assets/img/south-korea.svg";
import RUSSIANImg from "../assets/img/russia.svg";
import SPANISHImg from "../assets/img/spain.svg";
import { useTranslation } from 'react-i18next';

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectLang() {

  const langImages = {
    english: ENGLISHImg,
    russian: RUSSIANImg,
    korean: KOREANImg,
    spanish: SPANISHImg,
    portuguese: PORTUGUESEImg,
  };

  const langlocales = {
    english : 'ENGLISH',
    russian : 'РУССКИЙ',
    korean : '한국어',
    spanish : 'ESPAÑOL',
    portuguese : 'PORTUGUÊS'
  };

  const { i18n } = useTranslation(); 

  const [lang, setLang] = useState('');

  useEffect(() => {
    setLang(i18n.language ? i18n.language : 'english');
  }, []);

  
  
  const LangButtonClick = (index) => {
    setLang(index);
    i18n.changeLanguage(index)  
  };  

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className="inline-flex items-center w-full 2xl:w-[230px] justify-between gap-x-2 bg-[#070811] text-white px-2 2xl:px-5 h-[40px] 2xl:h-[50px] text-[14px] 2xl:text-[18px] font-bold shadow-sm hover:bg-[#202340] transition duration-300 hover:text-[#FFA801]">
        <div className="flex gap-2 items-center">
          <img src={langImages[lang]} alt={lang} className="w-[20px] 2xl:w-[30px]" />
          <p>{langlocales[lang]}</p>  
        </div>              
        <svg
          className="w-2 2xl:w-4 h-2 2xl:h-4"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-300"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-full 2xl:w-[230px] origin-top-right divide-y divide-[#070811] bg-[#070811] shadow-lg focus:outline-none text-[14px] font-bold">
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-5 py-[4px] 2xl:py-[10px] text-xs 2xl:text-sm text-white flex items-center gap-2 cursor-pointer"
                )}
                onClick={() =>LangButtonClick('english')}
              >
                <img src={ENGLISHImg} alt="english" className="w-[16px] 2xl:w-[20px]" />
                English
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-5 py-[4px] 2xl:py-[10px] text-xs 2xl:text-sm text-white flex items-center gap-2 cursor-pointer"
                )}
                onClick={() =>LangButtonClick('russian')}
              >
                <img src={RUSSIANImg} alt="russian" className="w-[16px] 2xl:w-[20px]"/>
                Русский
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-5 py-[4px] 2xl:py-[10px] text-xs 2xl:text-sm text-white flex items-center gap-2 cursor-pointer"
                )}
                onClick={() =>LangButtonClick('korean')}
              >
                <img src={KOREANImg} alt="korean" className="w-[16px] 2xl:w-[20px]"/>
                한국어
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-5 py-[4px] 2xl:py-[10px] text-xs 2xl:text-sm text-white flex items-center gap-2 cursor-pointer"
                )}
                onClick={() =>LangButtonClick('spanish')}
              >
                <img src={SPANISHImg} alt="spanish" className="w-[16px] 2xl:w-[20px]"/>
                Español
              </div>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <div
                className={classNames(
                  active ? "bg-[#202340] transition duration-300 hover:text-[#FFA801]" : "",
                  "px-5 py-[4px] 2xl:py-[10px] text-xs 2xl:text-sm text-white flex items-center gap-2 cursor-pointer"
                )}
                onClick={() =>LangButtonClick('portuguese')}
              >
                <img src={PORTUGUESEImg} alt="portuguese" className="w-[16px] 2xl:w-[20px]"/>
                Português
              </div>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
