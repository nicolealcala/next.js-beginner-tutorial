import React from "react";
import colors from "@/lib/colors";

const BUTTON_COLORS = {
  green: {
    backgroundColor: colors.lightGreen,
    color: colors.darkGreen,
  },
  pink: {
    backgroundColor: colors.lightPink,
    color: colors.darkPink,
  },
  blue: {
    backgroundColor: colors.lightBlue,
    color: colors.darkBlue,
  },
  purple: {
    backgroundColor: colors.lightPurple,
    color: colors.darkPurple,
  },
  yellow: {
    backgroundColor: colors.lightYellow,
    color: colors.darkYellow,
  },
};
const Button = (props) => {
  const { backgroundColor, color } = BUTTON_COLORS[props.color] || {};

  return (
    <button
      onClick={props.onClick}
      style={{ backgroundColor, color }}
      className={`px-4 py-3 border-1 ${props.className}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
