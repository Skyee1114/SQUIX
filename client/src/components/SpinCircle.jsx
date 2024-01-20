export default function SpinCircle() {
  return (
    <div className="pt-4 2xl:pt-10">
      <div className="container sm:max-w-[834px] lg:max-w-[1380px] 3xl:max-w-[1690px] 5xl:max-w-[1550px] mx-auto relative ">
        <div className="absolute -top-[1010px] 5xl:-top-[1000px] -left-[100px] 5xl:-left-[160px] hidden 4xl:block ">
            <svg className="animate-spin" style={{ animation: 'spin 180s linear infinite' }} width="1269" height="1269" viewBox="0 0 1269 1269" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="634.844" cy="634.563" r="632.66" transform="rotate(-90 634.844 634.563)" stroke="#85ECFC" strokeOpacity="0.5" strokeWidth="3"/>
            <circle cx="1088.93" cy="198.055" r="36.4669" transform="rotate(-90 1088.93 198.055)" stroke="#85ECFC" strokeOpacity="0.5"/>
            <circle cx="1088.93" cy="198.056" r="14.8506" transform="rotate(-90 1088.93 198.056)" fill="#85ECFC" fillOpacity="0.5"/>
            <circle cx="180.269" cy="1069.83" r="19.1446" transform="rotate(-90 180.269 1069.83)" fill="#85ECFC" fillOpacity="0.5"/>
            </svg>
        </div>  

        <div className="absolute -top-[1340px] 5xl:-top-[1325px] -left-[425px] 5xl:-left-[485px] hidden 4xl:block ">
            <svg className="animate-spin" style={{ animation: 'spin 180s linear infinite reverse' }} width="1920" height="1919" viewBox="0 0 1920 1919" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="959.86" cy="959.563" r="958.795" transform="rotate(-90 959.86 959.563)" stroke="#85ECFC" strokeOpacity="0.5"/>
            <circle cx="959.862" cy="959.562" r="565.353" transform="rotate(-90 959.862 959.562)" stroke="#85ECFC" strokeOpacity="0.5"/>
            <path d="M317.058 250.377C383.66 365.437 461.009 473.498 547.733 573.189M1866.18 1271.59C1732.26 1255.77 1602.26 1227.19 1477.42 1187.09" stroke="#85ECFC" strokeOpacity="0.5"/>
            <path d="M54.664 647.672C188.673 663.57 318.76 692.255 443.673 732.475M1602.9 1669.16C1536.25 1553.95 1458.83 1445.77 1372.01 1345.96" stroke="#85ECFC" strokeOpacity="0.5"/>
            <path d="M1865.96 647.566C1732.12 663.384 1602.19 691.958 1477.42 732.036M316.882 1669.05C383.608 1553.73 461.128 1445.44 548.061 1345.56" stroke="#85ECFC" strokeOpacity="0.5"/>
            <path d="M1603.03 249.756C1536.35 365.037 1458.89 473.299 1372.02 573.161M54.2403 1271.5C188.036 1255.66 317.926 1227.07 442.66 1186.98" stroke="#85ECFC" strokeOpacity="0.5"/>
            <circle cx="317.058" cy="1669.05" r="36.4669" transform="rotate(-90 317.058 1669.05)" stroke="#85ECFC" strokeOpacity="0.5"/>
            <circle cx="236.117" cy="1242.15" r="57.2866" transform="rotate(-90 236.117 1242.15)" stroke="#85ECFC" strokeOpacity="0.5"/>
            <circle cx="1711.99" cy="670.414" r="57.2866" transform="rotate(-90 1711.99 670.414)" stroke="#85ECFC" strokeOpacity="0.5"/>
            <circle cx="317.058" cy="1669.05" r="14.8506" transform="rotate(-90 317.058 1669.05)" fill="#85ECFC" fillOpacity="0.5"/>
            </svg>
        </div>
      </div>
    </div>
    
  );
}
