import React from "react";
import { Link } from "@mui/material";

const CardLink = ({ children, href }) => {
  return (
    <Link
      href={href}
      target={"_blank"}
      color={"text.primary"}
      underline={"hover"}
      fontSize={"1.2em"}
    >
      {children}
    </Link>
  );
};

export default CardLink;
