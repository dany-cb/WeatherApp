import { useNavigate } from "react-router-dom";
import { IoHomeOutline, IoSearch } from "react-icons/io5";
import { BsSpeedometer2 } from "react-icons/bs";
import React from "react";

// eslint-disable-next-line react/display-name
const MenuBar = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  return (
    <ul role="menu" className="menubar" ref={ref}>
      <li className="menubar__home menuitem">
        <IoHomeOutline
          onClick={() => {
            /* Insert Animation here */
            ///////////////////////////
            navigate("/");
          }}
        />
      </li>
      <li className="menubar__search menuitem">
        <IoSearch />
      </li>
      <li className="menubar__temp menuitem">
        <span className="degree">°C</span>
      </li>
      <li className="menubar__unit menuitem">
        <BsSpeedometer2 />
        <span className="metrics">m</span>
      </li>
    </ul>
  );
});

export default MenuBar;
