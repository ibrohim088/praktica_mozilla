import React from "react";
import { Link } from "react-router-dom";

const Brouzer = () => {
  return (
    <div>
      {/* title */}
      <div className="flex flex-col justify-center w-full h-[400px] border-b-[10px] border-slate-200">
        <ul className="text-center space-y-5">
          <li className="text-[43px] font-bold leading-[44px]">
            Сравните Firefox с другими <br /> браузерами
          </li>
          <li className="text-[19px]">
            Посмотрите, чем Firefox отличается от других популярных
            веб-браузеров по <br /> функциональности, приватности и простоте
            использования.
          </li>
        </ul>
      </div>
      {/* sravneniya */}
      <div className="w-full h-[400px] flex flex-wrap">
        {/* google sravneniya */}
        <div className="w-[400px] h-[100px] mt-12 ml-[80px] hover:border-blue-700 border-[1px] rounded-md">
          <Link to={"/more for google"}>
            <h1 className="text-[21px] font-bold pl-4 pt-4">
              Сравнение Firefox и Google Chrome
            </h1>
            <p className="text-blue-600 text-[17px] underline pl-4 pt-3">
              Подробнее
            </p>
          </Link>
        </div>
        {/* microsoft edge */}
        <div className="w-[400px] h-[100px] mt-12 ml-[80px] hover:border-blue-700 border-[1px] rounded-md">
          <Link to={"/more for google"}>
            <h1 className="text-[21px] font-bold pl-4 pt-4">
              Сравнение Firefox и Microsoft Edge
            </h1>
            <p className="text-blue-600 text-[17px] underline pl-4 pt-3">
              Подробнее
            </p>
          </Link>
        </div>
        {/* apple safari */}
        <div className="w-[400px] h-[100px] mt-12 ml-[80px] hover:border-blue-700 border-[1px] rounded-md">
          <Link to={"/more for google"}>
            <h1 className="text-[21px] font-bold pl-4 pt-4">
              Сравнение Firefox и Apple Safari
            </h1>
            <p className="text-blue-600 text-[17px] underline pl-4 pt-3">
              Подробнее
            </p>
          </Link>
        </div>
        {/* Bravo */}
        <div className="w-[400px] h-[100px] ml-[80px] hover:border-blue-700 border-[1px] rounded-md">
          <Link to={"/more for google"}>
            <h1 className="text-[21px] font-bold pl-4 pt-4">
              Сравнение Firefox и Brave
            </h1>
            <p className="text-blue-600 text-[17px] underline pl-4 pt-3">
              Подробнее
            </p>
          </Link>
        </div>
        {/* opera */}
        <div className="w-[400px] h-[100px] ml-[80px] hover:border-blue-700 border-[1px] rounded-md">
          <Link to={"/more for google"}>
            <h1 className="text-[21px] font-bold pl-4 pt-4">
              Сравнение Firefox и Opera
            </h1>
            <p className="text-blue-600 text-[17px] underline pl-4 pt-3">
              Подробнее
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brouzer;
