import PropTypes from "prop-types";
import React from "react";

export default function Item({ title, content }) {
  const [isOpen, setIsOpen] = React.useState(true);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      className="bg-[#F5F5F5] rounded-[3px] px-[62px] py-[57px] hover:bg-[#F8E7C7] cursor-pointer transition-all ease-in-out duration-300"
      onClick={toggle}
    >
      <div className="flex flex-row items-center justify-between">
        <div className="text-3xl font-bold text-black uppercase">
          {isOpen ? title : content}
        </div>
        <div>
          <img src="./img/arrow_down.svg" alt="" />
        </div>
      </div>
    </div>
  );
}

Item.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};
