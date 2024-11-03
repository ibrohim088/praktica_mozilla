import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="bg-black w-full h-[760px]">
        <div className="">
          <div>
            <img
              className="pt-[120px] ml-[80px]"
              src="https://www.mozilla.org/media/protocol/img/logos/mozilla/logo-word-hor.e20791bb4dd4.svg"
              alt="Mozilla"
              width="112"
              height="32"
            />
            <div>
              <div className="flex border-b-[1px] border-gray-700 w-[1350px] h-[360px] ml-[80px] pt-[15px]">
                {/* title-1 */}
                <ul className="text-white text-[17px] space-y-2">
                  <li className="hover:underline underline-offset-2 font-bold">
                    О компании
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Манифест Mozilla
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Пресс-центр{" "}
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Блог Mozilla
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Карьера
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Контакты
                  </li>
                  <button className="hover:bg-zinc-800 border-[2px] rounded-md flex items-center justify-center gap-2 w-[200px] h-[40px]">
                    <svg
                      className=""
                      width="17"
                      height="17"
                      viewBox="0 0 16 16"
                    >
                      <path
                        className="hover:fill-white"
                        fill="red"
                        d="M1.2,2.2c-1.5,1.5-1.5,4.2,0,5.7L8,15c2.3-2.4,4.5-4.7,6.9-7c1.5-1.5,1.5-4.2,0-5.7c-1.5-1.5-4-1.5-5.6,0L8,3.5 L6.7,2.3C5.1,0.6,2.7,0.6,1.2,2.2"
                      ></path>
                    </svg>
                    <p className="font-bold">Пожертвовать</p>
                  </button>
                </ul>
                {/* title-2 */}
                <ul className="text-white text-[17px] space-y-2 pl-[80px]">
                  <li className="hover:underline underline-offset-2 font-bold">
                    Ресурсы
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Центр приватности
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Размещайте рекламу у <br /> Mozilla
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Стандарты бренда
                  </li>
                </ul>
                {/* title-3 */}
                <ul className="text-white text-[17px] space-y-2 pl-[108px]">
                  <li className="hover:underline underline-offset-2 font-bold">
                    Поддержка
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Помощь по продуктам
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Сообщить об ошибке
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Локализуйте Mozilla
                  </li>
                </ul>
                {/* title-4 */}
                <ul className="text-white text-[17px] space-y-2 pl-[100px]">
                  <li className="hover:underline underline-offset-2 font-bold">
                    Разработчикам
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Developer Edition
                  </li>
                  <li className="hover:underline underline-offset-2">Бета</li>
                  <li className="hover:underline underline-offset-2">
                    Бета для Android
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Nightly
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Nightly для Android
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Enterprise
                  </li>
                  <li className="hover:underline underline-offset-2">
                    Инструменты
                  </li>
                </ul>
                {/* subscribs mozilla */}
                <div>
                  <div>
                    <p className="text-white text-[15px] pl-[130px]">
                      Подписаться на @Mozilla
                    </p>
                    {/* svg */}
                    <div className="flex items-center gap-3 pt-5 w-[200px] ml-[121px]">
                      {/* X */}
                      <svg
                        className="w-[40px] h-[50px]"
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 512 509.64"
                      >
                        <rect width="12" height="12" rx="115.61" ry="115.61" />
                        <path
                          fill="#fff"
                          fill-rule="nonzero"
                          d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                        />
                      </svg>
                      {/* insta */}
                      <svg
                        className="w-[20px] h-[20px] "
                        fill="white"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 56.7 56.7"
                        enable-background="new 0 0 56.7 56.7"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                          />
                          <circle cx="41.5" cy="16.4" r="2.9" />
                          <path
                            d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                          />
                        </g>
                      </svg>
                      {/* linked */}
                      <svg
                        className="w-[25px] h-[25px] "
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                      >
                        <path d="M36.5,6h-25C8.468,6,6,8.468,6,11.5v25c0,3.032,2.468,5.5,5.5,5.5h25c3.032,0,5.5-2.468,5.5-5.5v-25	C42,8.468,39.532,6,36.5,6z M18,34c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1V34z M15.5,18c-1.381,0-2.5-1.119-2.5-2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5C18,16.881,16.881,18,15.5,18z M35,34	c0,0.553-0.447,1-1,1h-3c-0.553,0-1-0.447-1-1v-7.5c0-1.379-1.121-2.5-2.5-2.5S25,25.121,25,26.5V34c0,0.553-0.447,1-1,1h-3	c-0.553,0-1-0.447-1-1V21c0-0.553,0.447-1,1-1h3c0.553,0,1,0.447,1,1v0.541C26.063,20.586,27.462,20,29,20c3.309,0,6,2.691,6,6V34z"></path>
                      </svg>
                      {/* tik tok */}
                      <svg
                        className="w-[25px] h-[25px]"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                      >
                        <path d="M41,4H9C6.243,4,4,6.243,4,9v32c0,2.757,2.243,5,5,5h32c2.757,0,5-2.243,5-5V9C46,6.243,43.757,4,41,4z M37.006,22.323 c-0.227,0.021-0.457,0.035-0.69,0.035c-2.623,0-4.928-1.349-6.269-3.388c0,5.349,0,11.435,0,11.537c0,4.709-3.818,8.527-8.527,8.527 s-8.527-3.818-8.527-8.527s3.818-8.527,8.527-8.527c0.178,0,0.352,0.016,0.527,0.027v4.202c-0.175-0.021-0.347-0.053-0.527-0.053 c-2.404,0-4.352,1.948-4.352,4.352s1.948,4.352,4.352,4.352s4.527-1.894,4.527-4.298c0-0.095,0.042-19.594,0.042-19.594h4.016 c0.378,3.591,3.277,6.425,6.901,6.685V22.323z"></path>
                      </svg>
                      {/* spotify */}
                      <svg
                        className="w-[25px] h-[25px] "
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                      >
                        <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 21.722656 15.701172 C 26.860234 15.760908 31.944063 17.020781 36.585938 19.441406 C 37.320937 19.823406 37.605656 20.730844 37.222656 21.464844 C 36.954656 21.978844 36.432625 22.271437 35.890625 22.273438 C 35.656625 22.273437 35.419266 22.218516 35.197266 22.103516 C 28.444266 18.580516 20.668875 17.757969 13.296875 19.792969 C 12.501875 20.008969 11.672172 19.542141 11.451172 18.744141 C 11.231172 17.945141 11.699047 17.119438 12.498047 16.898438 C 15.537422 16.061438 18.640109 15.66533 21.722656 15.701172 z M 21.789062 22.037109 C 25.989697 22.10748 30.146484 23.131875 33.943359 25.078125 C 34.680359 25.456125 34.97175 26.360656 34.59375 27.097656 C 34.32775 27.615656 33.803766 27.913109 33.259766 27.912109 C 33.028766 27.912109 32.795172 27.860047 32.576172 27.748047 C 27.159172 24.972047 20.919766 24.298562 15.009766 25.851562 C 14.206766 26.060562 13.387734 25.58325 13.177734 24.78125 C 12.967734 23.98025 13.446047 23.160219 14.248047 22.949219 C 16.732797 22.296719 19.268682 21.994887 21.789062 22.037109 z M 21.880859 28.376953 C 25.089717 28.458916 28.264922 29.226094 31.169922 30.652344 C 31.913922 31.017344 32.220469 31.916156 31.855469 32.660156 C 31.595469 33.191156 31.062812 33.499047 30.507812 33.498047 C 30.285812 33.498047 30.060656 33.449703 29.847656 33.345703 C 25.823656 31.370703 21.194453 30.857531 16.814453 31.894531 C 16.000453 32.089531 15.197812 31.58625 15.007812 30.78125 C 14.815812 29.97425 15.313141 29.166563 16.119141 28.976562 C 18.017016 28.526187 19.955545 28.327775 21.880859 28.376953 z"></path>
                      </svg>
                    </div>
                  </div>
                  {/* subscribs 2 */}
                  <div className="mt-10">
                    {/* title */}
                    <p className="text-white text-[15px] pl-[130px]">
                      Подписаться на @Mozilla
                    </p>
                    {/* svg */}
                    <div className="flex items-center gap-3 pt-2 w-[200px] ml-[121px]">
                      {/* X */}
                      <svg
                        className="w-[35px] h-[30px]"
                        xmlns="http://www.w3.org/2000/svg"
                        shape-rendering="geometricPrecision"
                        text-rendering="geometricPrecision"
                        image-rendering="optimizeQuality"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        viewBox="0 0 512 509.64"
                      >
                        <rect width="12" height="12" rx="115.61" ry="115.61" />
                        <path
                          fill="#fff"
                          fill-rule="nonzero"
                          d="M323.74 148.35h36.12l-78.91 90.2 92.83 122.73h-72.69l-56.93-74.43-65.15 74.43h-36.14l84.4-96.47-89.05-116.46h74.53l51.46 68.04 59.53-68.04zm-12.68 191.31h20.02l-129.2-170.82H180.4l130.66 170.82z"
                        />
                      </svg>
                      {/* insta */}
                      <svg
                        className="w-[20px] h-[20px] "
                        fill="white"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 56.7 56.7"
                        enable-background="new 0 0 56.7 56.7"
                        xml:space="preserve"
                      >
                        <g>
                          <path
                            d="M28.2,16.7c-7,0-12.8,5.7-12.8,12.8s5.7,12.8,12.8,12.8S41,36.5,41,29.5S35.2,16.7,28.2,16.7z M28.2,37.7
		c-4.5,0-8.2-3.7-8.2-8.2s3.7-8.2,8.2-8.2s8.2,3.7,8.2,8.2S32.7,37.7,28.2,37.7z"
                          />
                          <circle cx="41.5" cy="16.4" r="2.9" />
                          <path
                            d="M49,8.9c-2.6-2.7-6.3-4.1-10.5-4.1H17.9c-8.7,0-14.5,5.8-14.5,14.5v20.5c0,4.3,1.4,8,4.2,10.7c2.7,2.6,6.3,3.9,10.4,3.9
		h20.4c4.3,0,7.9-1.4,10.5-3.9c2.7-2.6,4.1-6.3,4.1-10.6V19.3C53,15.1,51.6,11.5,49,8.9z M48.6,39.9c0,3.1-1.1,5.6-2.9,7.3
		s-4.3,2.6-7.3,2.6H18c-3,0-5.5-0.9-7.3-2.6C8.9,45.4,8,42.9,8,39.8V19.3c0-3,0.9-5.5,2.7-7.3c1.7-1.7,4.3-2.6,7.3-2.6h20.6
		c3,0,5.5,0.9,7.3,2.7c1.7,1.8,2.7,4.3,2.7,7.2V39.9L48.6,39.9z"
                          />
                        </g>
                      </svg>
                      {/* you tube */}
                      <svg
                        className="w-[20px] h-[20px] "
                        fill=""
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                      >
                        <linearGradient
                          id="PgB_UHa29h0TpFV_moJI9a_9a46bTk3awwI_gr1"
                          x1="9.816"
                          x2="41.246"
                          y1="9.871"
                          y2="41.301"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0" stop-color="#f44f5a"></stop>
                          <stop offset=".443" stop-color="#ee3d4a"></stop>
                          <stop offset="1" stop-color="#e52030"></stop>
                        </linearGradient>
                        <path
                          fill="white"
                          d="M45.012,34.56c-0.439,2.24-2.304,3.947-4.608,4.267C36.783,39.36,30.748,40,23.945,40	c-6.693,0-12.728-0.64-16.459-1.173c-2.304-0.32-4.17-2.027-4.608-4.267C2.439,32.107,2,28.48,2,24s0.439-8.107,0.878-10.56	c0.439-2.24,2.304-3.947,4.608-4.267C11.107,8.64,17.142,8,23.945,8s12.728,0.64,16.459,1.173c2.304,0.32,4.17,2.027,4.608,4.267	C45.451,15.893,46,19.52,46,24C45.89,28.48,45.451,32.107,45.012,34.56z"
                        ></path>
                        <path
                          d="M32.352,22.44l-11.436-7.624c-0.577-0.385-1.314-0.421-1.925-0.093C18.38,15.05,18,15.683,18,16.376	v15.248c0,0.693,0.38,1.327,0.991,1.654c0.278,0.149,0.581,0.222,0.884,0.222c0.364,0,0.726-0.106,1.04-0.315l11.436-7.624	c0.523-0.349,0.835-0.932,0.835-1.56C33.187,23.372,32.874,22.789,32.352,22.44z"
                          opacity=".05"
                        ></path>
                        <path
                          d="M20.681,15.237l10.79,7.194c0.689,0.495,1.153,0.938,1.153,1.513c0,0.575-0.224,0.976-0.715,1.334	c-0.371,0.27-11.045,7.364-11.045,7.364c-0.901,0.604-2.364,0.476-2.364-1.499V16.744C18.5,14.739,20.084,14.839,20.681,15.237z"
                          opacity=".07"
                        ></path>
                        <path
                          fill=""
                          d="M19,31.568V16.433c0-0.743,0.828-1.187,1.447-0.774l11.352,7.568c0.553,0.368,0.553,1.18,0,1.549	l-11.352,7.568C19.828,32.755,19,32.312,19,31.568z"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div className="w-[1050px] h-[160px] ml-[80px]">
                  <ul className="text-white text-[13px] flex gap-6 pt-10 ">
                    <li className="underline ">
                      Уведомление о конфиденциальности веб-сайта
                    </li>
                    <li className="underline">Куки</li>
                    <li className="underline"> Юридическая информация</li>
                    <li className="underline">
                      Правила поведения в сообществе{" "}
                    </li>
                    <li className="underline">Об этом сайте</li>
                  </ul>
                  <ul className="text-white text-[12.7px] pt-10">
                    <li>
                      Посетите сайт некоммерческой материнской компании{" "}
                      <span className="underline">
                        {" "}
                        Mozilla Corporation — Mozilla Foundation
                      </span>
                      .
                    </li>
                    <li>
                      Части этого содержимого созданы участниками проекта
                      mozilla.org ©1998–2024. Содержимое доступно на условиях
                      лицензии{" "}
                      <span className="underline">Creative Commons.</span>
                    </li>
                  </ul>
                </div>
                <div className="w-[300px] text-left pl-[135px] pt-10 space-y-2">
                  <p className="text-white underline ">Язык</p>
                  <select name="Русский" id="Русский" className="w-[160px] h-[30px] rounded-md">
                    Русский
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
