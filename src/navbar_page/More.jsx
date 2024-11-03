import React from "react";

const More = () => {
  return (
    <div>
      <div className="w-full h-[1200px]">
        <div className="flex w-full h-[600px] bg-blue-950">
          <ul className="w-[700px] pl-[82px] pt-[250px] space-y-6 text-white font-bold">
            <h1 className="text-[42px] leading-[40px]">
              Узнайте больше о Firefox, его <br /> истории, функциях и миссии
            </h1>
            <p className="w-[364px] h-[40px] text-[17px] text-center pt-2 rounded-md bg-blue-600">
              Часто задаваемые вопросы по Firefox
            </p>
          </ul>
          <img
            className="w-[648px] h-[550px] ml-[105px] mt-[50px]"
            src="https://www.mozilla.org/media/img/firefox/more/privacy-hero-700.cbbd154ab1c0.png"
            alt=""
          />
        </div>
        <div className="flex mt-20">
          {/* what is it brouzer */}
          <div className="w-[431px] h-[420px] rounded-md border-[2.5px] ml-[82px]">
            {/* img */}
            <img
              className="w-[431px] h-[237]"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/what-is-a-browser.56f495565eca.jpg"
              alt=""
              class="mzp-c-card-image"
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline">
                Что такое веб-браузер?
              </li>
              <li className="text-[17.3px]">
                Браузер перенесёт вас в любую точку Интернета, и <br /> вы
                сможете просматривать текст, изображения и <br /> видео, где бы
                вы ни находились.
              </li>
            </ul>
          </div>
          {/* web-brouzer storie */}
          <div className="w-[431px] h-[370px] rounded-md border-[2.5px] ml-[33px]">
            {/* img */}
            <img
              className="w-[431px] h-[237]"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/browser-history.606e48fb3e3e.jpg"
              alt=""
              class="mzp-c-card-image"
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline">
              История веб-браузеров
              </li>
              <li className="text-[17.3px]">
              Firefox существовал почти с самого начала.
              </li>
            </ul>
          </div>
          {/* brouzer vnutri */}
          <div className="w-[431px] h-[490px] rounded-md border-[2.5px] ml-[33px]">
            {/* img */}
            <img
              className="w-[431px] h-[237]"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/incognito-browser.2f30fddfa665.jpg"
              alt=""
              class="mzp-c-card-image"
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline">
              Браузер в режиме инкогнито: <br /> Что на самом деле это означает
              </li>
              <li className="text-[17.3px]">
              Firefox называет это приватным просмотром, <br /> Chrome называет это режимом инкогнито. Оба <br /> позволяют просматривать веб-страницы без <br /> сохранения истории просмотров.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
