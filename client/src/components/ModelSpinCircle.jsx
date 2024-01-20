export default function SpinCircle() {
    return (    
        <div className="absolute left-[-120px] top-[-280px] hidden 4xl:block">
            <div className="w-[1369px] absolute h-[1369px] mx-auto flex items-center justify-center">
                <svg className="animate-spin" style={{ animation: 'spin 180s linear infinite' }} width="906" height="905" viewBox="0 0 906 905" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="453.143" cy="452.407" r="450.715" stroke="#A9A08A" strokeWidth="3"/>
                    <circle cx="764.414" cy="776.216" r="25.8608" stroke="#A9A08A"/>
                    <circle cx="764.416" cy="776.218" r="10.5898" fill="#A9A08A"/>
                    <circle cx="142.755" cy="128.252" r="13.6519" fill="#A9A08A"/>
                </svg>
            </div>
            <div className="absolute">
                <svg className="animate-spin" style={{ animation: 'spin 180s linear infinite reverse' }} width="1369" height="1369" viewBox="0 0 1369 1369" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="684.144" cy="684.407" r="683.567" stroke="#A9A08A"/>
                    <circle cx="684.144" cy="684.409" r="403.006" stroke="#A9A08A"/>
                    <path d="M1189.86 226.029C1107.81 273.523 1030.75 328.68 959.666 390.522M461.643 1330.7C472.919 1235.2 493.301 1142.5 521.897 1053.47" stroke="#A9A08A"/>
                    <path d="M906.551 38.9176C895.214 134.478 874.759 227.243 846.078 316.317M178.137 1142.96C260.286 1095.43 337.436 1040.22 408.603 978.312" stroke="#A9A08A"/>
                    <path d="M906.626 1330.54C895.347 1235.1 874.971 1142.45 846.392 1053.47M178.211 225.904C260.444 273.486 337.665 328.765 408.891 390.756" stroke="#A9A08A"/>
                    <path d="M1190.3 1143.05C1108.1 1095.5 1030.9 1040.26 959.684 978.314M461.701 38.6167C472.999 134.026 493.388 226.649 521.976 315.596" stroke="#A9A08A"/>
                    <circle cx="178.211" cy="226.03" r="25.8608" stroke="#A9A08A"/>
                    <circle cx="482.635" cy="168.31" r="40.7073" stroke="#A9A08A"/>
                    <circle cx="890.334" cy="1220.75" r="40.7073" stroke="#A9A08A"/>
                    <circle cx="178.212" cy="226.029" r="10.5898" fill="#A9A08A"/>
                </svg>
            </div>
        </div>    
    );
  }
  