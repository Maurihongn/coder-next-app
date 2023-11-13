import React, { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import MenuList from "./MenuList";

const Menu = ({ className }) => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen(!open);
  };

  return (
    <>
      <div onClick={handleMenu} className="lg:hidden text-white">
        <MenuRoundedIcon />
      </div>

      <MenuList open={open} setOpen={setOpen} />
    </>
  );
};

export default Menu;
