import PropTypes from "prop-types";
import React from "react";
import LeftArrowMobile from "../assets/img/left_arrow_tag_mobile.svg"
import LeftArrowBig from "../assets/img/left_arrow_tag_big.svg"
import RightArrowMobile from "../assets/img/right_arrow_tag_mobile.svg"
import RightArrowBig from "../assets/img/right_arrow_tag_big.svg"

export const Tag = ({ size, text }) => {
    return (
        <div className={size === "mobile" ? "flex h-[18px]" : "flex"}>
            <img className={`group ${size}`} alt="Group" src={size === "mobile" ? LeftArrowMobile : LeftArrowBig} width={size === "mobile" ? 11 : 17} height={size === "mobile" ? 18 : 27} />
            <div className={size === "mobile" ? "pt-[1px] -mx-[1.5008px]" : "pt-[1px] -mx-[1.5008px]"}>
                <div className={size === "mobile" ? "text-[10px] leading-[14px] border-y-[1.5008px] border-y-[#FFA801]" : "text-sm leading-[21px] border-y-[2px] border-y-[#FFA801] font-bold"}>{text}</div>
            </div>
            <img className={`group ${size}`} alt="Group" src={size === "mobile" ? RightArrowMobile : RightArrowBig} width={size === "mobile" ? 11 : 17} height={size === "mobile" ? 18 : 27} />
        </div>
    );
};

Tag.propTypes = {
    size: PropTypes.oneOf(["mobile", "big"]),
    text: PropTypes.string,
};

export default Tag;