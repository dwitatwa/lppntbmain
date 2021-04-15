import React from "react";
import Menu from "@material-ui/core/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import s from "../styles/Dropdown.module.css";
import MenuItem from "@material-ui/core/MenuItem";

export default function Dropdown({ title, children }) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className={s.button} onClick={handleClick}>
        <span>{title}</span>
        <ArrowDropDownIcon />
      </div>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {children.map((item, i) => (
          <MenuItem onClick={handleClose} key={i}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
