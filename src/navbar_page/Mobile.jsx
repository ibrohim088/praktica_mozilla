import React from "react";
import { Link } from "react-router-dom";

const Mobile = () => {
  return (
    <div className="w-full h-[2450px]">
      {/* 1-bolim */}
      <div className="w-full h-[650px] flex">
        <div className="pt-32 space-y-8 ml-[85px]">
          <img
            className="w-[65px] h-[65px]"
            width="32"
            height="32"
            src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
            alt=""
          />
          {/* title */}
          <h1 className="text-[53px] leading-[54px] font-semibold pt-4">
            Выбирай свой путь с <br />
            Firefox для мобильных <br /> устройств
          </h1>
          <p className="text-[17px]">
            Firefox для мобильных устройств подстраивается под вас и делает
            просмотр <br /> открытых вкладок, прошлых поисковых запросов и
            любимых сайтов проще, чем <br /> когда-либо ранее.
          </p>
        </div>
        <img
          className="w-[665px] mix-blend-soft-light h-[400px] ml-[70px] mt-[130px]"
          src="https://www.mozilla.org/media/img/firefox/browsers/hero-500.a9dd4e0ac215.jpg"
          srcset="https://www.mozilla.org/media/img/firefox/browsers/hero-500.a9dd4e0ac215.jpg 500w,https://www.mozilla.org/media/img/firefox/browsers/hero-700.f94bac0289d9.jpg 700w,https://www.mozilla.org/media/img/firefox/browsers/hero-900.c804aef9fe81.jpg 900w,https://www.mozilla.org/media/img/firefox/browsers/hero-1100.b018c192228d.jpg 1100w,https://www.mozilla.org/media/img/firefox/browsers/hero-1300.f5826950de56.jpg 1300w"
          sizes="(min-width: 768px) calc(50vw - 192px),calc(100vw - 48px)"
          alt=""
        ></img>
      </div>
      {/* 2-bolim */}
      <div className="w-full h-[700px] flex mt-10">
        {/* 1-android,title */}
        <div className="ml-[81px] pt-12 w-[400px] h-[650px]">
          <img
            className="mix-blend-darken w-[350px] h-[263px] ml-[20px]"
            src="https://www.mozilla.org/media/img/firefox/browsers/mobile/index/firefox-android.03e6d6290e5a.png"
            srcset="https://www.mozilla.org/media/img/firefox/browsers/mobile/index/firefox-android-high-res.0010290959b7.png 2x"
            alt=""
          />
          {/* title */}
          <ul className="pl-1 pt-6 space-y-5">
            <li className="font-semibold text-[27px] hover:underline hover:text-blue-700">
              Firefox для Android
            </li>
            <li className="text-[17px] text-gray-800">
              Бесконечно гибкий, приватный и безопасный, <br /> Firefox для
              Android — молниеносный браузер, <br /> который никогда вас не
              предаст.
            </li>
            <li className="text-[18px] underline text-blue-800">
              <Link to={"/loading"}>Загрузить</Link>
            </li>
            <li className="text-[17px] underline text-blue-800">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* 2-iOS, title */}
        <div className="ml-[81px] pt-12 w-[400px] h-[650px]">
          <img
            className="mix-blend-darken w-[350px] h-[263px] ml-[25px]"
            src="https://www.mozilla.org/media/img/firefox/browsers/mobile/index/firefox-ios.3b63145e7977.jpg"
            srcset="https://www.mozilla.org/media/img/firefox/browsers/mobile/index/firefox-ios-high-res.90d5aa50551e.jpg 2x"
            srcset="https://www.mozilla.org/media/img/firefox/browsers/mobile/index/firefox-android-high-res.0010290959b7.png 2x"
            alt=""
          />
          {/* title */}
          <ul className="pl-1.5 pt-6 space-y-5">
            <li className="font-semibold text-[27px] hover:underline hover:text-blue-700">
              Firefox для iOS
            </li>
            <li className="text-[17px] text-gray-800">
              Получите Улучшенную защиту от отслеживания <br /> и сделайте
              Firefox своим браузером по <br /> умолчанию навсегда на ваших
              iPhone и iPad.
            </li>
            <li className="text-[18px] underline text-blue-800">
              <Link to={"/loading"}>Загрузить</Link>
            </li>
            <li className="text-[17px] underline text-blue-800">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* 3-focus,title */}
        <div className="ml-[81px] pt-12 w-[400px] h-[650px]">
          <img
            className="mix-blend-darken w-[350px] h-[263px] ml-[28px]"
            src="https://www.mozilla.org/media/img/l10n/en-US/firefox/mobile/firefox-focus.388904362512.jpg"
            srcset="https://www.mozilla.org/media/img/l10n/en-US/firefox/mobile/firefox-focus-high-res.33698a403649.jpg 2x"
            alt=""
          />
          {/* title */}
          <ul className="pl-2 pt-6 space-y-5">
            <li className="font-semibold text-[27px] hover:underline hover:text-blue-700">
              Firefox Focus
            </li>
            <li className="text-[17.4px] text-gray-800">
              Ищете современный сверхбыстрый мобильный <br /> браузер с
              функциями приватности нового <br /> уровня? Firefox Focus
              автоматически стирает <br /> всю вашу историю с момента открытия{" "}
              <br /> браузера до его закрытия.
            </li>
            <li className="text-[18px] underline text-blue-800">
              <Link to={"/loading"}>Загрузить</Link>
            </li>
            <li className="text-[17px] underline text-blue-800">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
      </div>
      {/* 3-bolim, saravnit */}
      <div className="flex items-center bg-gray-300 rounded-md w-[928px] h-[350px] mt-10 ml-[298px]">
        <div className="space-y-6 pl-[47px]">
          <h1 className="text-[33.6px] leading-[34px] font-bold">
            Посмотрите, чем <br /> Firefox для ПК <br /> отличается от других{" "}
            <br /> браузеров.
          </h1>
          <p className="text-blue-700 text-[17px] font-bold underline">
            <Link to={"/compare"}>Сравнить</Link>
          </p>
        </div>
        <img
          className="w-[375px] h-[264px] ml-[108px]"
          src="https://www.mozilla.org/media/img/firefox/browsers/dev.d932137aadb7.png"
          srcset="https://www.mozilla.org/media/img/firefox/browsers/dev-high-res.d25249f3c778.png 2x"
          alt=""
        />
      </div>
      {/* login mozilla */}
      <div className="flex w-[1359.5px] h-[500px] rounded-xl bg-black mt-[120px] ml-[82px]">
        <div className="pl-[64px] pt-6">
          {/* title */}
          <h1 className="text-white text-[64px] font-bold leading-[70px]">
            Один логин. <br />
            Вся Mozilla.
          </h1>
          {/* email */}
          <div className="flex flex-col mt-24 space-y-3.5">
            <p className="text-white text-[14px] font-bold">
              Адрес электронной почты
            </p>
            <input
              type="email"
              className="pl-3 placeholder-gray-600 w-[395px] h-[37px] rounded-sm bg-gray-300"
              placeholder="user@example.com"
            />
            <button className="text-white w-[590px] h-[40px] rounded-sm hover:bg-blue-800 font-bold bg-blue-600">
              <Link to={"/next"}>Продолжить</Link>
            </button>
            {/* 2-title */}
            <ul className="space-y-5 text-white text-[12.8px]">
              <li>
                Продолжив, вы принимаете{" "}
                <span className="underline">
                  <Link to={"/"}>Условия предоставления услуг</Link>
                </span>{" "}
                и{" "}
                <span className="underline">
                  <Link to={"/notice"}> Уведомление о конфиденциальности.</Link>
                </span>
              </li>
              <li>
                Уже есть аккаунт?{" "}
                <span className="underline">
                  <Link to={"/enter"}>Войдите</Link>
                </span>{" "}
                или{" "}
                <span className="underline">
                  <Link to={"/see_more"}>узнайте больше</Link>
                </span>{" "}
                о присоединении к Mozilla.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-center gap-5 ml-[285px] w-[400px] h-[100px]">
          {/* firefox */}
          <img
            className="w-[45px] h-[45px]"
            loading="lazy"
            src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
            alt=""
          />
          {/* vpn */}
          <img
            className="w-[45px] h-[45px]"
            loading="lazy"
            src="https://www.mozilla.org/media/protocol/img/logos/mozilla/vpn/logo-flat-white.7310b86a6954.svg"
            alt=""
          />
          {/* pocet */}
          <img
            className="w-[45px] h-[45px]"
            loading="lazy"
            src="https://www.mozilla.org/media/protocol/img/logos/pocket/logo.17446bc33a5d.svg"
            alt=""
          />
          {/* fox relay */}
          <img
            className="w-[45px] h-[45px]"
            loading="lazy"
            src="https://www.mozilla.org/media/protocol/img/logos/firefox/relay/logo-white.d42a8b52e44c.svg"
            alt=""
          />
          {/* mozilla monitor */}
          <img
            className="w-[45px] h-[45px]"
            loading="lazy"
            src="https://www.mozilla.org/media/protocol/img/logos/firefox/monitor/logo.d97e5516f9e6.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Mobile;
