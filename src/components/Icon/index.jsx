import React from "react";
import ChevronLeftIcon from "../assets/icons/ChevronLeftIcon";
import ChevronRightIcon from "../assets/icons/ChevronRightIcon";
import PlusIcon from "../assets/icons/PlusIcon";
import MinusIcon from "../assets/icons/MinusIcon";
import PaperclipIcon from "../assets/icons/PaperclipIcon";
import DefaultIcon from "../assets/icons/DefaultIcon";

const IconComponent = ({ icon, color }) => {
  switch (icon) {
    case "ChevronLeftIcon":
      return <ChevronLeftIcon color={color} />;
    case "ChevronRightIcon":
      return <ChevronRightIcon color={color} />;
    case "PlusIcon":
      return <PlusIcon color={color} />;
    case "MinusIcon":
      return <MinusIcon color={color} />;
    case "PaperclipIcon":
      return <PaperclipIcon color={color} />;
    default:
      return <DefaultIcon color={color} />;
  }
};

export default IconComponent;
