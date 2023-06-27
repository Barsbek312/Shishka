import React, { useState, useEffect } from "react";
import ws from './WrapperSelect.module.css';
import arrow from './../../../../assets/images/common__images/arrow.svg';
import region from './../../../../assets/images/entrance__icons/region.svg';
import birthday from './../../../../assets/images/entrance__icons/birthday.svg';

const WrapperSelect = ({alignFlex=false,
  isOpen,
  setIsOpen,
  paddingLeftInput = 0,
  paddingRightInput = 0,
  borderSelect = false,
  isNeedIcon = false,
  icon = "",
  isNeedArrow = false,
  setSelectedOption,
  startOption = "",
  selectedOption,
  justifyContentText = 0,
  listOfItems,
  zindex=2,
}) => {
  const toggleOptionsList = () => {
    setIsOpen(!isOpen);
  };

  const [optionsHeight, setOptionsHeight] = useState(0);

  const optionsLength = Object.keys(listOfItems).length;

  useEffect(() => {
    if(startOption === "День" || startOption === "Месяц" || startOption === "Год") {
        setOptionsHeight(10 + 2 * 50);
    } else if (optionsLength > 5) {
      setOptionsHeight(30 + 5 * 50);
    } else {
      setOptionsHeight(20 + (optionsLength || 3) * 50);
    }
  }, [optionsLength, Option, startOption]);

  return (
    <div className={ws.custom_select}>
      <div
        style={{
          paddingLeft: paddingLeftInput,
          paddingRight: paddingRightInput,
          border: borderSelect ? "0.7px solid #333333" : 0,
          backgroundImage: isNeedIcon ? `url(${icon === "birthday" ? birthday : region})` : "",
        }}
        className={`${ws.select_trigger}`}
        onClick={toggleOptionsList}
      >
        <span
          style={{ justifyContent: justifyContentText }}
          className={ws.selected_option}
        >
          {selectedOption}
        </span>
        {isNeedArrow && (
          <span className={ws.select_arrow}>
            <img
              className={isOpen ? ws.arrow_top : ""}
              src={arrow}
              alt="arrow_down"
            />
          </span>
        )}
      </div>
      <ul
        className={`${ws.options_list} ${isOpen ? ws.open : ""} ${alignFlex ? ws.options__list_flex : ""}`}
        style={{ maxHeight: isOpen ? optionsHeight : 0, zIndex: zindex, padding: isOpen ? alignFlex ? "20px 15px 100px" : 0 : 0 }}
      >
        {listOfItems}
      </ul>
    </div>
  );
};

export default WrapperSelect;