import React from "react";

const LoadingAnimation = () => {
  return (
    <div className="flex justify-center items-center h-20 md:h-64 w-20 md:w-64">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 md:h-64 w-20 md:w-64"></div>
      <style>
        {`
          .loader {
            border-top-color: #3498db;
            -webkit-animation: spinner 1.5s linear infinite;
            animation: spinner 1.5s linear infinite;
          }

          @-webkit-keyframes spinner {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
          }

          @keyframes spinner {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingAnimation;
