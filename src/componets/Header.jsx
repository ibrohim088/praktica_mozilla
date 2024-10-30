import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [productDropdown, setProductDropdown] = useState(false);
  const [whoDropdown, setWhoDropdown] = useState(false);
  const [newsDropdown, setNewsDropdown] = useState(false);

  // brouzer
  const handleMouseEnter = () => {
    setShowDropdown(true); // Показываем меню
  };
  const handleMouseLeave = () => {
    setShowDropdown(false); // Скрываем меню
  };
  // product
  const productMouseLeave = () => {
    setProductDropdown(false); // Скрываем меню
  };
  const productMouseEnter = () => {
    setProductDropdown(true); // Показываем меню
  };
  // who
  const whoMouseLeave = () => {
    setWhoDropdown(false); // Скрываем меню
  };
  const whoMouseEnter = () => {
    setWhoDropdown(true); // Показываем меню
  };
  // news
  const newsMouseLeave = () => {
    setNewsDropdown(false); // Скрываем меню
  };
  const newsMouseEnter = () => {
    setNewsDropdown(true); // Показываем меню
  };

  return (
    <div>
      <div className="flex w-full shadow-md">
        <div className="flex w-2/3 h-[70px] pl-[100px]">
          <img
            src="https://www.mozilla.org/media/protocol/img/logos/mozilla/logo-word-hor.e20791bb4dd4.svg"
            alt="Mozilla"
            width="112"
            height="32"
          />
          <div className="flex gap-[37px] items-center font-bold text-[16px] pl-10">
            <p
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="hover:border-b-[3px] ease-out duration-75 text-center h-8 border-black"
            >
              Браузеры Firefox
            </p>
            <p
              onMouseEnter={productMouseEnter}
              onMouseLeave={productMouseLeave}
              className="hover:border-b-[3px] ease-out duration-75 text-center h-8 border-black"
            >
              Продукты
            </p>
            <p
              onMouseEnter={whoMouseEnter}
              onMouseLeave={whoMouseLeave}
              className="hover:border-b-[3px] ease-out duration-75 text-center h-8 border-black"
            >
              Кто мы
            </p>
            <p
              onMouseEnter={newsMouseEnter}
              onMouseLeave={newsMouseLeave}
              className="hover:border-b-[3px] ease-out duration-75 text-center h-8 border-black"
            >
              Новшества
            </p>
          </div>
        </div>
        <button className="w-[180px] h-9 rounded-md ml-56 mt-3.5 border-[2px] border-blue-700 hover:bg-blue-700 hover:border-none">
          <p className="text-blue-700 hover:text-white text-[15.6px] text-center font-bold font-mono">
            Загрузить Firefox
          </p>
        </button>
      </div>
      {/* hiddinlar */}
      <div>
        {/* brouzer */}
        {showDropdown && (
          <div className="w-[550px] h-[500px] absolute left-[245px] bg-white shadow-lg p-4 mt-2 rounded-md">
            <div>
              <div className="grid grid-cols-2 ml-1.5 gap-2">
                {/* Firefox dla PC */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-3 mt-3"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-2">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Firefox для компьютера
                    </h1>
                    <p className="text-[13px] pt-1">
                      Загрузите некоммерческий <br /> браузер на Windows, Mac
                      или <br /> Linux.
                    </p>
                  </ul>
                </div>
                {/* Firefox dla androit */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-3 mt-3"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-2">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Firefox для Android
                    </h1>
                    <p className="text-[13px] pt-1">
                      Загрузите некоммерческий <br /> браузер на Windows, Mac
                      или <br /> Android.
                    </p>
                  </ul>
                </div>
                {/* Firefox dla iOS */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Firefox для iOS
                    </h1>
                    <p className="text-[13px] pt-1">
                      Загрузите мобильный <br /> браузер для своего <br />{" "}
                      iPhone или iPad.
                    </p>
                  </ul>
                </div>
                {/* Firefox Focus */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/focus/logo.aac3e33175cb.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Firefox Focus{" "}
                    </h1>
                    <p className="text-[13px] pt-1">
                      Просто приватный мобильный веб-сёрфинг.{" "}
                    </p>
                  </ul>
                </div>
                {/* Blog Firefox */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <svg
                    className="w-[40px] h-[40px] ml-5 mt-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#42435a"
                      d="M21.1 7.5c-.2-.2-.2-.5 0-.7l.5-.5c.8-.8 2.1-.8 2.9 0l1.2 1.2c.8.8.8 2.1 0 2.9l-.5.5c-.2.2-.5.2-.7 0l-3.4-3.4zm2.3 4.5c.2.2.2.5 0 .7L12.7 23.4c-.2.2-.4.3-.6.4l-5.7 2.4c-.3.1-.6 0-.7-.3-.1-.1-.1-.3 0-.4L8.1 20c.1-.2.3-.5.4-.6L19.2 8.6c.2-.2.5-.2.7 0l3.5 3.4zM11.5 22.7l-3.9 1.7 1.7-3.9c0-.1.1-.2.2-.2l2.3 2.3c-.1 0-.2.1-.3.1z"
                    ></path>
                  </svg>
                  <ul className="pl-1 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[16px]">
                      Блог Firefox
                    </h1>
                    <p className="text-[10px] pt-1">
                      Узнавайте о новых возможностях <br /> Firefox и находите
                      способы <br />
                      оставаться в безопасности <br /> в Интернете.{" "}
                    </p>
                  </ul>
                </div>
                {/* Primicheniya k Vipusku */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <svg
                    className="w-[60px] h-[60px] ml-3 mt-1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#42435a"
                      d="M2.7 23.6c0 2.4 2 4.4 4.4 4.4h5.6c1.4 0 2.3.5 3.3 1.5 1-1 2-1.5 3.3-1.5h5.6c2.4 0 4.4-2 4.4-4.4V8.4c0-2.4-2-4.4-4.4-4.4h-5.6C18 4 17 4.2 16 5.2c-1-1-2-1.2-3.3-1.2H7.1C4.6 4 2.7 6 2.7 8.4v15.2zm24 0c0 1-.8 1.7-1.7 1.7h-5.6c-1.3 0-2.3.2-3.3 1.2-1-1-2-1.2-3.3-1.2H7.1c-1 0-1.7-.8-1.7-1.7V8.4c0-1 .8-1.7 1.7-1.7h5.6c1.3 0 2.3.5 3.3 1.5 1-1 2-1.5 3.3-1.5h5.6c1 0 1.7.8 1.7 1.7v15.2zM13.3 10.7H8c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h5.3c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-5.3 4h5.3c.4 0 .7-.3.7-.7s-.3-.7-.7-.7H8c-.4 0-.7.3-.7.7s.3.7.7.7zm5.3 4H8c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h5.3c.4 0 .7.3.7.7s-.3.7-.7.7zm-5.3 4h3.4c.4 0 .7-.3.7-.7s-.3-.7-.7-.7H8c-.4 0-.7.3-.7.7s.3.7.7.7z"
                    ></path>
                  </svg>
                  <ul className="pl-3 text-left pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[15px]">
                      Примечания к выпуску
                    </h1>
                    <p className="text-[13px] pt-1">
                      Узнайте подробности о последних обновлениях <br /> Firefox.
                    </p>
                  </ul>
                </div>
              </div>
              <h1 className="font-semibold hover:underline underline-offset-2 text-center pt-6">
                <Link to={"/about"}>Посмотреть все Браузеры Firefox</Link>
              </h1>
            </div>
          </div>
        )}
        {/* prodect */}
        {productDropdown && (
          <div className="w-[550px] h-[610px] absolute left-[300px] bg-white shadow-xl shadow-slate-300 p-4 mt-2 rounded-md">
            <div>
              <div className="grid grid-cols-2 ml-1.5 gap-2">
                {/* mozilla monitor */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/firefox/monitor/logo.d97e5516f9e6.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Mozilla Monitor
                    </h1>
                    <p className="text-[13px] pt-1">
                      Узнайте, не был ли затронут <br /> ваш адрес электронной{" "}
                      <br /> почты утечками данных.
                    </p>
                  </ul>
                </div>
                {/* facebook-kotainer */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <svg
                    class="mt-[14px] ml-[20px] w-[50px] h-[50px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#f80073"
                      d="M27 1H5C2.8 1 1 2.8 1 5v22c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4V5c0-2.2-1.8-4-4-4z"
                    ></path>
                    <path
                      fill="#fff"
                      d="M26 8.8l-1.4-1.4c-.1-.1-.2-.1-.3 0l-1.4 1.4-.1.1v2.8h-2.3V8.9L19 7.4c-.1-.1-.2-.1-.3 0l-1.4 1.4-.1.1v2.8h-2.3V8.9l-1.4-1.4c-.1-.1-.2-.1-.3 0l-1.4 1.4-.1.1v2.8H9.2V8.9L7.8 7.4c-.1-.1-.2-.1-.3 0L6 8.8l-.1.1v15c0 .1.1.2.2.2H9c.1 0 .2-.1.2-.2v-2.8h2.3V24c0 .1.1.2.2.2h2.8c.1 0 .2-.1.2-.2v-2.8H17V24c0 .1.1.2.2.2H20c.1 0 .2-.1.2-.2v-2.8h2.3V24c0 .1.1.2.2.2h2.8c.1 0 .2-.1.2-.2V9c.4-.1.3-.2.3-.2zm-14.7 11H9.2v-6.6h2.3v6.6h-.2zm5.6 0h-2.1v-6.6h2.3v6.6h-.2zm5.7 0h-2.1v-6.6h2.3v6.6h-.2z"
                    ></path>
                  </svg>
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Фейсбук-контейнер
                    </h1>
                    <p className="text-[13px] pt-o.0.5">
                      Получите помощь в предотвращении сбора <br /> ваших данных
                      Фейсбуком <br /> за пределами их сайта.
                    </p>
                  </ul>
                </div>
                {/* Pocket */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/pocket/logo.17446bc33a5d.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Pocket
                    </h1>
                    <p className="text-[13px] pt-1">
                      Сохраняйте и открывайте <br /> для себя лучшие статьи{" "}
                      <br /> со всего Интернета.
                    </p>
                  </ul>
                </div>
                {/* Mozilla VPN */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/mozilla/vpn/logo.c648f487bfb8.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Mozilla VPN
                    </h1>
                    <p className="text-[13px] pt-1">
                      Получите доступ к защите <br /> не только в браузере,{" "}
                      <br /> но и на самих устройствах.
                    </p>
                  </ul>
                </div>
                {/* Firefox relay */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/firefox/relay/logo.683083c53b93.svg"
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Firefox Relay
                    </h1>
                    <p className="text-[13px] pt-1">
                      Регистрируйте новые аккаунты, не сообщая свой <br />{" "}
                      реальный адрес электронной почты.{" "}
                    </p>
                  </ul>
                </div>
                {/* MDN Plus */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/img/nav/icons/icon-mdn-plus.f54475f980ab.svg"
                    c="https://www.mozilla.org/media/protocol/img/logos/firefox/relay/logo.683083c53b93.svg"
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      MDN Plus
                    </h1>
                    <p className="text-[13px] pt-1">
                      Новые функции и инструменты для персонализации MDN{" "}
                    </p>
                  </ul>
                </div>
                {/* Fakespot */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <img
                    className="w-[33px] h-[33px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/img/logos/fakespot/logo-blue.3973b8fe9631.svg"
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Fakespot
                    </h1>
                    <p className="text-[13px] pt-1">
                      Используйте ИИ для обнаружения фальшивых отзывов и
                      мошенников{" "}
                    </p>
                  </ul>
                </div>
              </div>
              <h1 className="font-semibold hover:underline underline-offset-2 text-center pt-2">
                <Link to={"/about"}>Подробнее о Mozilla</Link>
              </h1>
            </div>
          </div>
        )}
        {/* who */}
        {whoDropdown && (
          <div className="w-[550px] h-[600px] absolute left-[520px] bg-white shadow-xl shadow-slate-300 p-4 mt-2 rounded-md">
            <div>
              <div className="grid grid-cols-2 ml-1.5 gap-2">
                {/* manifect mozilla */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[150px] rounded-sm">
                  <svg
                    class="mt-2 ml-3 w-[55px] h-[55px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#42435a"
                      d="M9.5 28.6h13.1c2.6 0 4.6-2.1 4.6-4.6V8.1c0-2.6-2.1-4.6-4.6-4.6H9.5c-2.6 0-4.6 2.1-4.6 4.6V24c-.1 2.5 2 4.6 4.6 4.6zM7.6 8.1c0-1 .8-1.8 1.8-1.8h13.1c1 0 1.8.8 1.8 1.8V24c0 1-.8 1.8-1.8 1.8h-13c-1 0-1.8-.8-1.8-1.8V8.1zm12.6 2.3h-8.4c-.4 0-.7-.3-.7-.7 0-.4.3-.7.7-.7h8.4c.4 0 .7.3.7.7 0 .4-.3.7-.7.7zm-8.4 4.2h8.4c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-8.4c-.4 0-.7.3-.7.7s.3.7.7.7zm8.4 4.2h-8.4c-.4 0-.7-.3-.7-.7s.3-.7.7-.7h8.4c.4 0 .7.3.7.7s-.3.7-.7.7zM11.8 23h3.6c.4 0 .7-.3.7-.7s-.3-.7-.7-.7h-3.6c-.4 0-.7.3-.7.7s.3.7.7.7z"
                    ></path>
                  </svg>
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-[6px] font-bold text-[17px]">
                      Манифест Mozilla
                    </h1>
                    <p className="text-[12.5px] pt-1">
                      Узнайте о ценностях и <br /> принципах, которыми
                      руководствуется наша миссия.
                    </p>
                  </ul>
                </div>
                {/* mozilla fundation */}
                <div className="flex p-1 hover:bg-gray-100 w-[250px] h-[150px] rounded-sm">
                  <svg
                    class="mt-2 ml-3 w-[55px] h-[55px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#42435a"
                      d="M16 9.3V4H2.7v24h26.7V9.3H16zm-8 16H5.3v-2.7H8v2.7zM8 20H5.3v-2.7H8V20zm0-5.3H5.3V12H8v2.7zm0-5.4H5.3V6.7H8v2.6zm5.3 16h-2.7v-2.7h2.7v2.7zm0-5.3h-2.7v-2.7h2.7V20zm0-5.3h-2.7V12h2.7v2.7zm0-5.4h-2.7V6.7h2.7v2.6zm13.4 16H16v-2.7h2.7V20H16v-2.7h2.7v-2.7H16V12h10.7v13.3zM24 14.7h-2.7v2.7H24v-2.7zm0 5.3h-2.7v2.7H24V20z"
                    ></path>
                  </svg>
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-[6px] font-bold text-[17px]">
                      Mozilla Foundation
                    </h1>
                    <p className="text-[12.5px] pt-1">
                      Познакомьтесь с <br /> некоммерческой <br /> организацией,
                      стоящей за <br />
                      Firefox и выступающей за лучший Интернет.
                    </p>
                  </ul>
                </div>
                {/* rukavodstvo */}
                <div className="flex p-1 hover:bg-gray-100 w-[250px] h-[150px] rounded-sm">
                  <svg
                    class="-mt-2 ml-3 w-[90px] h-[90px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#42435a"
                      d="M22.7 13.9V2.7H9.3v11.2c0 .5.2.9.7 1.1l5.6 3.3-1.3 3.1-4.5.4 3.5 3-1.1 4.4L16 27l3.9 2.4-1-4.4 3.5-3-4.5-.4-1.3-3.1 5.6-3.3c.2-.4.5-.8.5-1.3zm-5.4 2.4l-1.3.8-1.3-.8V4h2.7v12.3z"
                    ></path>
                  </svg>
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-[6px] font-bold text-[17px]">
                      Руководство
                    </h1>
                    <p className="text-[12.5px] pt-1">
                      Познакомьтесь с командой, создающей технологии для
                      улучшения Интернета.
                    </p>
                  </ul>
                </div>
                {/* prinimat uchastiye */}
                <div className="flex p-1 hover:bg-gray-100 w-[250px] h-[150px] rounded-sm">
                  <svg
                    class="ml-3 w-[70px] h-[70px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#42435a"
                      d="M12 22.7l4-3.9c-.5-.1-.9-.1-1.3-.1C11.1 18.7 4 20.5 4 24v2.7h12l-4-4zm2.7-6.7c2.9 0 5.3-2.4 5.3-5.3s-2.4-5.3-5.3-5.3-5.3 2.4-5.3 5.3c-.1 2.9 2.3 5.3 5.3 5.3z"
                    ></path>
                    <path
                      fill="#42435a"
                      d="M20.6 27.3L16 22.7l1.9-1.9 2.8 2.8 6.8-6.9 1.9 1.9-8.8 8.7z"
                    ></path>
                  </svg>
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-[6px] font-bold text-[17px]">
                      Принять участие
                    </h1>
                    <p className="text-[12.5px] pt-1">
                      Присоединяйтесь к борьбе за здоровый Интернет.
                    </p>
                  </ul>
                </div>
                {/* valansiya */}
                <div className="flex p-1 hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <svg
                    class="mt-1 ml-3 w-[60px] h-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    width="32"
                    height="32"
                  >
                    <path
                      fill="#42435a"
                      d="M13.3 21.3V20H4v5.3C4 26.8 5.2 28 6.7 28h18.7c1.5 0 2.7-1.2 2.7-2.7V20h-9.3v1.3h-5.5zm13.4-12h-5.3V6.7L18.7 4h-5.3l-2.7 2.7v2.7H5.3c-1.5 0-2.7 1.2-2.7 2.7v4c0 1.5 1.2 2.7 2.7 2.7h8V16h5.3v2.7h8c1.5 0 2.7-1.2 2.7-2.7v-4c0-1.5-1.2-2.7-2.6-2.7zm-8 0h-5.3V6.7h5.3v2.6z"
                    ></path>
                  </svg>
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-[6px] font-bold text-[17px]">
                      Вакансии
                    </h1>
                    <p className="text-[12.5px] pt-1">
                      Работайте в организации, движимой миссией и <br />{" "}
                      создающей продукты,
                      <br /> ставящих людей на 1-е место.
                    </p>
                  </ul>
                </div>
                {/* blaknot */}
                <div className="flex p-1 hover:bg-gray-100 w-[250px] h-[130px] rounded-sm">
                  <svg
                    class="mt-3 ml-3 w-[40px] h-[40px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="#42435a"
                      d="M21.1 7.5c-.2-.2-.2-.5 0-.7l.5-.5c.8-.8 2.1-.8 2.9 0l1.2 1.2c.8.8.8 2.1 0 2.9l-.5.5c-.2.2-.5.2-.7 0l-3.4-3.4zm2.3 4.5c.2.2.2.5 0 .7L12.7 23.4c-.2.2-.4.3-.6.4l-5.7 2.4c-.3.1-.6 0-.7-.3-.1-.1-.1-.3 0-.4L8.1 20c.1-.2.3-.5.4-.6L19.2 8.6c.2-.2.5-.2.7 0l3.5 3.4zM11.5 22.7l-3.9 1.7 1.7-3.9c0-.1.1-.2.2-.2l2.3 2.3c-.1 0-.2.1-.3.1z"
                    ></path>
                  </svg>
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-[6px] font-bold text-[17px]">
                      Блог Mozilla
                    </h1>
                    <p className="text-[12.5px] pt-1">
                      Узнайте о Mozilla и <br /> проблемах, которые <br /> важны
                      для нас.
                    </p>
                  </ul>
                </div>
              </div>
              <h1 className="font-semibold hover:underline underline-offset-2 text-center pt-20">
                <Link to={"/about"}>Подробнее о Mozilla</Link>
              </h1>
            </div>
          </div>
        )}
        {/* news */}
        {newsDropdown && (
          <div className="absolute left-[170px]  w-[560px] h-[350px] bg-white shadow-lg p-4 mt-2.5 rounded-md">
            <div>
              <div className="flex flex-wrap gap-3 ml-2 mt-1">
                {/* firefox devoloper editor */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[150px] rounded-sm">
                  <img
                    className="w-[32px] h-[32px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/developer/logo.41d42822c8fb.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Firefox Developer <br /> Edition
                    </h1>
                    <p className="text-[13px] pt-1">
                      Загрузите версию Firefox,
                      <br /> созданную специально для
                      <br />
                      разработчиков.
                    </p>
                  </ul>
                </div>
                {/* innovaatsiya proect mozilla */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[150px] rounded-sm">
                  <img
                    className="w-[32px] h-[32px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/img/nav/icons/icon-innovation-projects.11f189479119.svg"
                    alt=""
                  />
                  <ul className="pl-3 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Инновационные проекты Mozilla
                    </h1>
                    <p className="text-[13px] pt-1">
                      Откройте для себя способы воплотить яркие идеи в жизнь.
                    </p>
                  </ul>
                </div>
                {/* veb-dokumentasiya MDN */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[150px] rounded-sm">
                  <img
                    className="w-[32px] h-[32px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/img/nav/icons/icon-mdn-web-docs.9ed01cfe71c7.svg"
                    alt=""
                  />
                  <ul className="pl-4 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Веб-документация MDN
                    </h1>
                    <p className="text-[13px] pt-1">
                      Загляните на главную страницу ресурсов для
                      <br />
                      веб-разработчиков.
                    </p>
                  </ul>
                </div>
                {/* common voice */}
                <div className="flex hover:bg-gray-100 w-[250px] h-[150px] rounded-sm">
                  <img
                    className="w-[32px] h-[32px] ml-5 mt-5"
                    width="32"
                    height="32"
                    src="https://www.mozilla.org/media/img/nav/icons/icon-common-voice.127fa3f5dcb0.svg"
                    alt=""
                  />
                  <ul className="pl-4 pt-4">
                    <h1 className=" hover:underline underline-offset-4 font-bold text-[17px]">
                      Common Voise
                    </h1>
                    <p className="text-[13px] pt-1.5">
                      Пожертвуйте свой голос, чтобы будущее Интернета могло
                      слышать всех и каждого.
                    </p>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
