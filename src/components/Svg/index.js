import React from "react";

const Svg = ({ name, width = "", height = "", className = "", color = "" }) => {
  const SvgIcon = require(`@/assets/icons/${name}.svg`).default;

  return (
    <SvgIcon
      {...(width ? { width } : {})}
      {...(height ? { height } : {})}
      className={className}
      {...(color ? { color } : {})}
    />
  );
};

export default Svg;