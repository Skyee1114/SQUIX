import React from "react";
import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
  
  return (
    <svg
      className={`${id === open ? "rotate-180" : ""
        } h-5 w-5 transition-transform`}
      width="22"
      height="13"
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="Vector 5"
        d="M1.42773 1.28296L11.2139 11.0691L21 1.28296"
        stroke="black"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(0);
  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="bg-[url('./assets/img/faq-bg.jpg')] bg-cover z-10 bg-[#eee7de] relative text-white">
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative">
        <div className="max-w-[88%] sm:max-w-[95%] 3xl:max-w-[90%] 5xl:max-w-[100%] mx-auto pb-[200px] xl:pb-[290px]">        
        <div className="uppercase text-black font-bold text-[32px] xl:text-[97px] leading-[28px] xl:leading-[140px] pb-8 xl:pb-12 pt-12 xl:pt-20">
          {t('faq')}
        </div>
        <div className="flex flex-col gap-5">
          <Accordion

            className="flex flex-col accordion "

            open={open === 1}
            icon={<Icon id={1} open={open} />}
          >
            <AccordionHeader
              className={`${open === 1 ? "bg-[#E7E3D8]" : "bg-[#F5F5F5] hover:bg-[#F8E7C7] rounded-[3px]"
                } text-sm md:text-base xl:text-3xl font-bold  leading-none text-black uppercase border-none  px-[20px]  md:px-[62px] py-[20px] md:py-[37px] xl:py-[57px] font-['Jost']`}
              onClick={() => handleOpen(1)}
            >
              {t('faq1title')}
            </AccordionHeader>
            <AccordionBody className="bg-[#E7E3D8] px-[20px] md:px-[62px] text-[#575757] text-base xl:text-3xl pt-0 pb-[57px] text-left leading-[normal] font-['Jost'] rounded-[3px]">
              {t('faq1intro')}
            </AccordionBody>
          </Accordion>
          <Accordion
            className="flex flex-col accordion"
            open={open === 2}
            icon={<Icon id={2} open={open} />}
          >
            <AccordionHeader
              className={`${open === 2 ? "bg-[#E7E3D8]" : "bg-[#F5F5F5] hover:bg-[#F8E7C7] rounded-[3px]"
                } text-sm md:text-base xl:text-3xl  font-bold  leading-none text-black uppercase border-none   px-[20px]  md:px-[62px] py-[20px] md:py-[37px] xl:py-[57px] font-['Jost']`}
              onClick={() => handleOpen(2)}
            >
              {t('faq2')}
            </AccordionHeader>
            <AccordionBody className="bg-[#E7E3D8] px-[20px] md:px-[62px] text-[#575757] text-base xl:text-3xl pt-0 pb-[57px] text-left leading-[normal] font-['Jost'] rounded-[3px]">
              {t('faq1intro')}
            </AccordionBody>
          </Accordion>
          <Accordion
            className="flex flex-col accordion"
            open={open === 3}
            icon={<Icon id={3} open={open} />}
          >
            <AccordionHeader
              className={`${open === 3 ? "bg-[#E7E3D8]" : "bg-[#F5F5F5] hover:bg-[#F8E7C7] rounded-[3px]"
                } text-sm md:text-base xl:text-3xl  font-bold  leading-none text-black uppercase border-none   px-[20px]  md:px-[62px] py-[20px] md:py-[37px] xl:py-[57px] font-['Jost']`}
              onClick={() => handleOpen(3)}
            >
              {t('faq3')}
            </AccordionHeader>
            <AccordionBody className="bg-[#E7E3D8] px-[20px] md:px-[62px] text-[#575757] text-base xl:text-3xl pt-0 pb-[57px] text-left leading-[normal] font-['Jost'] rounded-[3px]">
              {t('faq1intro')}
            </AccordionBody>
          </Accordion>
          <Accordion
            className="flex flex-col accordion"
            open={open === 4}
            icon={<Icon id={4} open={open} />}
          >
            <AccordionHeader
              className={`${open === 4 ? "bg-[#E7E3D8] rounded-[3px]" : "bg-[#F5F5F5] hover:bg-[#F8E7C7] rounded-[3px]"
                } text-sm md:text-base xl:text-3xl  font-bold  leading-none text-black uppercase border-none   px-[20px]  md:px-[62px] py-[20px] md:py-[37px] xl:py-[57px] font-['Jost']`}
              onClick={() => handleOpen(4)}
            >
              {t('faq4')}
            </AccordionHeader>
            <AccordionBody className="bg-[#E7E3D8] px-[20px] md:px-[62px] text-[#575757] text-base xl:text-3xl pt-0 pb-[57px] text-left leading-[normal] font-['Jost']  rounded-[3px]">
              {t('faq1intro')}
            </AccordionBody>
          </Accordion>
        </div>
      </div>
      </div>
    </div>
  );
}
