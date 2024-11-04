import React from "react";
import { Link } from "react-router-dom";

const LoadingFX = () => {
  return (
    <div>
      <div className="w-full mt-14 flex flex-col items-center h-[1150px]">
        {/* 1-title */}
        <div className="flex justify-center items-center w-[685px] h-[70px] bg-lime-50 rounded-md shadow-2xl">
          <h1 className="">
            Загрузка начнётся автоматически. Она не началась?{" "}
            <span className="font-bold underline decoration-1">
              Попробуйте загрузить снова
            </span>
            .
          </h1>
        </div>
        {/* firefox img */}
        <img
          className="w-[60px] h-[60px] mt-[100px]"
          src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
          alt=""
        />
        {/* title */}
        <h1 className="text-center text-[42.5px] font-bold leading-[40px] pt-[100px]">
          Почти готово! <br /> Теперь{" "}
          <span className="underline decoration-2 decoration-red-400">
            запустите
          </span>{" "}
          только что <br /> загруженный установщик.
        </h1>
        {/* windows title */}
        <div className="flex flex-col items-center w-[500px] h-[320px] rounded-md shadow-2xl mt-[100px]">
          {/* img */}
          <img
            className="w-[132px] h-[28px] mt-6"
            src="https://www.mozilla.org/media/img/logos/windows/logo-windows-black.85f4165e8267.svg"
            alt="Windows"
          />
          {/* title */}
          <h1 className="text-center text-[17px] pt-6">
            Если вы видите предупреждение о том, что <br /> приложение, которое
            вы пытаетесь установить, не <br /> является проверенным приложением
            Microsoft, <br /> щёлкните «Всё равно установить» или{" "}
            <span className="text-blue-600 underline underline-offset-1">
              <Link to={"/windows 11 pro chage settings whit we "}>
                измените <br /> настройки рекомендации приложений.
              </Link>
            </span>
          </h1>
          <p className="text-center text-[17.4px] pt-6 text-blue-600 underline underline-offset-1">
            <Link to={"/windows 11 pro worm settings"}>
              {" "}
              Посетите сайт поддержки для получения <br /> дополнительных
              сведений
            </Link>
          </p>
        </div>
        {/* problem title  */}
        <p className="pt-[80px] text-[17px]">
          Возникли проблемы?{" "}
          <span className="text-blue-600 underline ">
            Получите помощь по установке.
          </span>
        </p>
        <div className="w-full h-[70px] mt-[120px] bg-gray-100">
          <p className="text-blue-600 underline text-center text-[17px] pt-5">
            Загрузить на другом языке или для другой операционной системы.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoadingFX;
