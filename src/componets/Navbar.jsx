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
              <Link to={"/pc"}>Компьютер</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link to={"/mobil"}>Мобильный</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link to={"/posibillities"}>Возможности</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link to={"/bourzer"}>Сравнение браузеров</Link>
            </li>
            <li className=" hover:underline underline-offset-2">
              <Link to={"/more"}>Больше</Link>
            </li>
            <li className="flex items-center justify-center gap-1 w-[80px] border-[1.5px] border-black rounded-md">
              <Link to={"/section"}>Home</Link>
              <svg
                className="w-[25px] h-[25px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
              >
                <path d="M39.5,43h-9c-1.381,0-2.5-1.119-2.5-2.5v-9c0-1.105-0.895-2-2-2h-4c-1.105,0-2,0.895-2,2v9c0,1.381-1.119,2.5-2.5,2.5h-9	C7.119,43,6,41.881,6,40.5V21.413c0-2.299,1.054-4.471,2.859-5.893L23.071,4.321c0.545-0.428,1.313-0.428,1.857,0L39.142,15.52	C40.947,16.942,42,19.113,42,21.411V40.5C42,41.881,40.881,43,39.5,43z"></path>
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
