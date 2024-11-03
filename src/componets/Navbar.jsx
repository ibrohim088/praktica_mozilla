import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-gray-50 w-full h-12 mt-1">
      <div className="flex justify-around pt-2 space-x-[540px]">
        <div className="flex items-center gap-2">
          <img
            class="c-sub-navigation-icon"
            src="https://www.mozilla.org/media/protocol/img/logos/firefox/logo.fedb52c912d6.svg"
            width="24"
            height="24"
            alt=""
          />
          <p className="font-semibold text-[18px] pl">Firefox</p>
        </div>
        <div>
          <ul className="flex items-center gap-5">
            <li className="font-bold hover:underline underline-offset-2">
              <Link to={"/"}>Компьютер</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link to={"/mobil"}>Мобильный</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link to={"/posibillities"}>Возможности</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link to={"/brouzer"}>Сравнение браузеров</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link to={"/more"}>Больше</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
