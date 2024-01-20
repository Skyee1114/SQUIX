import React, { useState, useEffect } from "react";
import SelectDivision from "./SelectDivision";
import SelectPosition from "./SelectPosition";
import Button from "./Buttons/Button";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import InputText from "./InputText";
import { StyledDropZone } from "react-drop-zone";
import "react-drop-zone/dist/styles.css";
import GoogleBlueIcon from "../assets/img/socials/blue_google.png";
import GoogleHoverIcon from "../assets/img/socials/google_.png";
import { useTranslation } from 'react-i18next';


const Careers = () => {
  
  const { t, i18n } = useTranslation();

  const [state, setState] = useState({ file: undefined });

  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(`${t('dropfilehere')} *.pdf, *.jpg, *.png, *.pptx, 10mb max`);
  }, [t]);

  // const [label, setLabel] = useState(
  //   `${t('dropfilehere')} *.pdf, *.jpg, *.png, *.pptx, 10mb max`
  // );

  const setFile = (file, text) => {
    setState({ file });
  };

  // useEffect(() => {
  //   if (state.file) setLabel(state.file.name);
  //   else setLabel("Drop file here</br>*.pdf, *.jpg, *.png, *.pptx, 10mb max");
  // }, [state]);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      height: "70vh",
    },
    overlay: {
      backgroundColor: "#000000b0",
      zIndex:10
    },
  };
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }  

  return (
    <div className="bg-[#F5F1ED]">
      <div className="text-white h-[200px] 2xl:h-[373px] bg-radial-gradient ">
        <img src="./img/careers_back.png" alt="" className="absolute right-0" />
        <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
          <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-[20px] lg:gap-[100px] 3xl:gap-[170px] pt-6 md:pt-12 2xl:pt-28">
              <div className="text-[32px] lg:text-[63px] 2xl:text-[97px] font-bold uppercase">{t('careers')}</div>
              <div className=" flex flex-row gap-[20px] 2xl:gap-[30px]">
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[14px] 2xl:text-[20px]">{t('division')}</span>
                  <SelectDivision />
                </div>
                <div className="flex flex-col items-start gap-1">
                  <span className="text-[14px] 2xl:text-[20px]">{t('position')}</span>
                  <SelectPosition />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto -mt-8">
          <div className="relative overflow-x-auto">
            <div className="w-full text-left">
              <div>
                {["1", "2", "3", "4", "5"].map((item, index) => {
                  return (
                    <div key={index} className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-2 lg:gap-6 2xl:gap-12 3xl:gap-24 bg-white border-b-4 border-[#F5F1ED]">
                      <div
                        scope="row"
                        className="px-4 2xl:px-6 py-0 lg:py-4 text-black font-bold uppercase text-[20px] 2xl:text-[30px]"
                      >
                        {t('environmentartist')}
                      </div>
                      <div className="flex flex-row gap-2 lg:gap-6 2xl:gap-12 3xl:gap-24">
                        <div className="px-4 2xl:px-6 py-0 lg:py-4 text-[14px] 2xl:text-[25px] text-black">{t('remote')}</div>
                        <div className="px-4 2xl:px-6 py-0 lg:py-4 text-[14px] 2xl:text-[25px] text-black">
                          {t('fulltime')}
                        </div>
                      </div>
                      
                      <div className="px-4 2xl:px-6 py-0 lg:py-4 text-[25px] text-[#00A3FF] ">
                        <Link to={""} className="flex items-center gap-1 text-[14px] 2xl:text-[20px]">
                          <div className="relative">
                            <img
                              src={GoogleBlueIcon}
                              className="w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px]"
                              alt=""
                            />
                            <img
                              src={GoogleHoverIcon}
                              className="absolute top-0 left-0 transition duration-300 opacity-0 hover:opacity-100 w-[29px] 2xl:w-[50px] h-[29px] 2xl:h-[50px]"
                              alt=""
                            />
                          </div>
                          {t('viewonartstation')}
                        </Link>
                      </div>
                      <div className=" lg:right-4 pb-2 lg:pb-0  px-4 lg:px-4 w-full lg:w-auto">
                        <Button onClick={openModal} text={t('apply')} className="lg:px-[30px] w-full flex justify-center "></Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}
          >
            <div className="w-[300px] md:w-[600px] lg:w-[654px] p-8 md:p-20 gap-[20px] md:gap-[70px] bg-white rounded-tl-[3px] rounded-bl-[3px]  flex-col  items-start inline-flex relative z-50">
              <img src="img/close.svg" className='absolute right-2 top-2 w-[10px] md:w-[20px]' alt="" onClick={closeModal}/>
              <div className="text-black text-[20px] md:text-[54px] font-bold font-['Jost'] uppercase leading-none ">
                {t('apply')}
              </div>
              <div className="w-[8px] md:w-[15.12px] h-[24px] md:h-[44.62px] bg-gradient-to-b from-amber-500 to-orange-500 rounded-[3px] absolute left-0 top-6 md:top-20" />
              <div className="flex-col justify-start items-start gap-[10px] md:gap-[31px] flex w-full">
                <InputText
                  name={"username"}
                  placeholder={`${t('name')}*`}
                  error={false}
                  success={false}
                  type={"text"}
                />
                <InputText
                  name={"role"}
                  placeholder={`${t('role')}*`}
                  error={false}
                  type={"text"}
                  success={false}
                />
                <InputText
                  name={"email"}
                  placeholder={`${t('email')}*`}
                  error={false}
                  success={false}
                  type={"text"}
                />
                <InputText
                  name={"portfolio"}
                  placeholder={`${t('portfoliolink')}*`}
                  error={false}
                  success={false}
                  type={"text"}
                />
                <textarea
                  className="text-base md:text-xl bg-[#F5F5F5] text-[#606485] px-[12px] md:px-[33px] py-[4px] md:py-[11px] rounded-[1px] h-[120px] md:h-[182px] w-full resize-none outline-none border-none focus-within:outline-[#606485] focus-within:outline-1"
                  name="coverletter"
                  placeholder={`${t('coveringletter')}*`}
                ></textarea>
                {/* <FileUploader
                  handleChange={handleChange}
                  name="file"
                  types={fileTypes}
                  label="Drop file here</br>*.pdf, *.jpg, *.png, *.pptx, 10mb max"
                  className="w-full"
                  // dropMessageStyle={backgroundColor :'red'}
                /> */}
                <div className="">
                  <StyledDropZone
                    className=""
                    label={label}
                    onDrop={(file, text) => console.log(file)}
                  >
                  </StyledDropZone> 
                </div>
                
                <Button
                  text={t('apply')}
                  className={
                    "w-full text-center flex items-center justify-center"
                  }
                />
              </div>
            </div>
          </Modal>
          <div className="flex flex-col items-center gap-6 pt-12 pb-32">
            <span className="text-black font-bold text-[20px] 2xl:text-[40px] uppercase">
              {t('didnotfindsuitablerole')}
            </span>
            <Button text={t('sendusyourcv')}></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
