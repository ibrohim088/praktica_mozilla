import React from "react";
import { Link } from "react-router-dom";

const Peca = () => {
  return (
    <div>
      <div className="w-full h-[100%]">
        {/* section 1 */}
        <div className="w-full  h-[600px] flex">
          <div>
            <div className="flex items-center gap-2 ml-[140px] pt-24">
              <img
                className="w-[50px] h-[50px]"
                width="32"
                height="32"
                src="https://www.mozilla.org/media/protocol/img/logos/firefox/browser/logo.eb1324e44442.svg"
                alt=""
              />
              <h1 className="text-[30px] font-semibold">
                Firefox <span className="font-normal"> Browser </span>
              </h1>
            </div>
            <ul className="pl-[140px] mt-10">
              <li className="font-bold text-[40px] leading-tight">
                Получите браузер, <br /> который защищает всё <br /> важное
              </li>
              <li className="text-[20px] pt-4 font-thin">
                Никаких скрытых политик приватности или лазеек для <br />{" "}
                рекламодателей. Просто молниеносный браузер, который <br />{" "}
                никогда вас не предаст.
              </li>
            </ul>
            {/* loading firiefox */}
            <button className="w-[200px] h-[40px] ml-[140px] mt-10 text-center rounded-md bg-blue-600 hover:bg-blue-800 text-white text-[18px] font-semibold">
              <Link to={"/loading fifrefox"}>Загрузить Firefox</Link>
            </button>
            <ul className="text-gray-600 text-[14px] space-y-4 pt-6 pl-[140px]">
              <li className="">Уведомление о конфиденциальности Firefox</li>
              <li className="">Параметры загрузки и другие языки</li>
              <li className=""> Поддержка браузера Firefox</li>
            </ul>
          </div>
          <div>
            <img
              className="ml-[150px] mt-28 shadow-xl shadow-slate-400"
              width="500px"
              height="500px"
              src="https://www.mozilla.org/media/img/firefox/new/desktop/firefox-browser-light-600.cc99f70436ec.png"
              alt=""
            />
          </div>
        </div>
        {/* titile */}
        <h1 className="w-full h-[100px] mt-[140px] text-center font-bold leading-tight text-[40px]">
          Делайте что угодно в Интернете. <br /> Браузер Firefox не следит за
          вами.
        </h1>
        {/* section 2 */}
        <div className="w-full  h-[350px] flex mt-[130px]">
          <div>
            <img
              className=" rounded-md ml-[210px]"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/new/desktop/block-mr1.aa105db19b63.jpg"
              srcset="https://www.mozilla.org/media/img/firefox/new/desktop/block-mr1-high-res.2dabc380db76.jpg 2x"
              alt=""
              width="504"
              height="343"
            />
          </div>
          <ul className="space-y-4 pl-[80px]">
            <li className="leading-tight text-[30px] font-bold">
              Мы блокируем <br />
              рекламные трекеры. Вы <br />
              быстрее работаете в <br />
              Интернете.
            </li>
            <li className="leading-tight text-[17px] text-gray-600">
              Объявления отвлекают и замедляют загрузку веб- <br />
              страниц, в то время как их трекеры отслеживают <br /> каждое ваше
              движение в Интернете. Браузер Firefox <br /> автоматически
              блокирует большинство трекеров, <br /> поэтому нет необходимости
              копаться в настройках <br />
              безопасности.
            </li>
          </ul>
        </div>
        {/* section 3 */}
        <div className="w-full h-[700px]">
          <div className="flex">
            {/* title */}
            <ul className="ml-[300px] mt-[250px] space-y-7">
              <li className="text-[30px] font-bold">Firefox — для всех</li>
              <li className="text-gray-800">
                Доступный более чем на 90 языках и совместимый с <br />
                компьютерами на Windows, Mac и Linux, Firefox <br /> работает
                независимо от того, что вы используете и <br />
                где находитесь. Убедитесь, что ваша операционная <br /> система
                обновлена для его наилучшей работы.
              </li>
              <li className="text-blue-700 hover:text-blue-900 font-bold underline underline-offset-2">
                <Link to={"/look at sisteam"}>
                  Посмотрите системные требования
                </Link>
              </li>
            </ul>
            {/* img */}
            <img
              className="mix-blend-multiply w-[400px] h-[350px] mt-[200px] ml-[100px]"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/everyone.dcedbb8ac2c1.png"
              alt=""
            />
          </div>
        </div>
        {/* section 4 */}
        <div>
          <div className="flex w-full  h-[700px]">
            <img
              className="w-[483px] h-[480px] ml-[250px] mt-[140px] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/new/desktop/devices.837eed3af485.jpg"
              srcset="https://www.mozilla.org/media/img/firefox/new/desktop/devices-high-res.f9183504362a.jpg 2x"
              alt=""
            />
            <ul className="space-y-7 ml-[80px] mt-[230px]">
              <li className="font-bold text-[35px] leading-[40px]">
                Установите Firefox на все <br /> свои устройства
              </li>
              <li className="font-thin text-[15px]">
                Ваша приватность всегда будет с вами. Браузеры <br /> Firefox
                для iOS и Android имеют одинаково строгие <br /> настройки
                приватности, чтобы трекеры не могли <br /> следить за вами в
                Интернете, где бы вы ни <br /> находились.
              </li>
              <div className="flex gap-5">
                <img
                  src="https://www.mozilla.org/media/img/l10n/ru/firefox/android/btn-google-play.f12319397d6b.png"
                  srcset="https://www.mozilla.org/media/img/l10n/ru/firefox/android/btn-google-play-high-res.cf36bc7ee78f.png 2x"
                  alt="Загрузить на Google Play"
                  width="152"
                  height="45"
                />
                <img
                  src="https://www.mozilla.org/media/img/l10n/ru/firefox/ios/btn-app-store.56e181e71900.svg"
                  alt="Загрузить из App Store"
                  width="152"
                  height="45"
                ></img>
              </div>
            </ul>
          </div>
        </div>
        {/* section 5 */}
        <div className="w-full h-[1500px] bg-gray-200">
          <h1 className="font-bold text-[42px] pt-[100px] text-center">
            Делайте всё это с помощью Firefox
          </h1>
          <div>
            {/* 1 bolim */}
            <div className="flex">
              {/* search */}
              <div className="space-y-5 ml-[315px] mt-[110px]">
                <img
                  class="mix-blend-multiply"
                  width="32"
                  height="32"
                  loading="lazy"
                  src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/search.9a8494844596.png"
                  alt=""
                />
                <ul className="space-y-4 text-[15px]">
                  <p className="font-bold text-[25px] leading-8">
                    Ищите умнее и <br /> быстрее
                  </p>
                  <li>Ищите из адресной строки</li>
                  <li>Настройка поисковых систем</li>
                  <li className="leading-5">
                    Умные поисковые <br /> предложения
                  </li>
                  <li className="leading-5">
                    Закладки, история и <br /> открытые вкладки в <br />{" "}
                    результатах
                  </li>
                </ul>
              </div>
              {/* gimini */}
              <div className="space-y-5 ml-[110px] mt-[100px]">
                <img
                  class="mix-blend-multiply w-[40px]"
                  width="32"
                  height="32"
                  loading="lazy"
                  src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/highlights.e07971ba2884.png"
                  alt=""
                />
                <ul className="space-y-4 text-[15px]">
                  <p className="font-bold text-[25px] leading-8">
                    Повысьте свою <br /> продуктивность
                  </p>
                  <li>Работает с продуктами Google</li>
                  <li>
                    Встроенный инструмент для <br /> создания снимков экрана
                  </li>
                  <li>Менеджер закладок</li>
                  <li>Автодополнение URL</li>
                  <li>
                    Синхронизация между <br /> устройствами
                  </li>
                  <li>Режим чтения</li>
                  <li>Проверка орфографии</li>
                  <li>Закреплённые вкладки</li>
                </ul>
              </div>
              {/* transliruyti */}
              <div className="space-y-5 ml-[120px] mt-[100px]">
                <img
                  className="mix-blend-multiply"
                  width="32"
                  height="32"
                  loading="lazy"
                  src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/picture-in-picture.85b50c01d575.png"
                  alt=""
                />
                <ul className="space-y-4 text-[15px]">
                  <p className="font-bold text-[25px] leading-8">
                    Транслируйте, <br /> делитесь и <br /> воспроизводите
                  </p>
                  <li>
                    Блокировка <br /> автовоспроизведения видео <br /> и аудио
                  </li>
                  <li>Картинка в картинке</li>
                  <li>
                    Избранное содержимое в <br /> новой вкладке
                  </li>
                  <li>Делитесь ссылками</li>
                </ul>
              </div>
            </div>
            {/* 2 bolim */}
            <div className="flex">
              {/* maska */}
              <div className="space-y-5 ml-[300px] mt-[150px]">
                <img
                  class="mix-blend-multiply"
                  width="32"
                  height="32"
                  loading="lazy"
                  src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/privacy.6600d165965f.png"
                  alt=""
                />
                <ul className="space-y-4 text-[17px]">
                  <p className="font-bold text-[25px] leading-8">
                    Защитите свою <br /> приватность
                  </p>
                  <li>Блокировка сторонних кук</li>
                  <li className="text-blue-700 hover:text-blue-900 underline underline-offset-3">
                    <Link to={"/block message"}>
                      {" "}
                      Блокировка сборщиков <br /> цифровых отпечатков
                    </Link>
                  </li>
                  <li className="leading-5">
                    Умные поисковые <br /> предложения
                  </li>
                  <li className="leading-5">
                    Закладки, история и <br /> открытые вкладки в <br />{" "}
                    результатах
                  </li>
                </ul>
              </div>
              {/* 3 yuldiz */}
              <div className="space-y-5 ml-[110px] mt-[140px]">
                <img
                  class="mix-blend-multiply w-[40px]"
                  width="32"
                  height="32"
                  loading="lazy"
                  src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/passwords.a3e9f3026396.png"
                  alt=""
                />
                <ul className="space-y-4 text-[15px]">
                  <p className="font-bold text-[25px] leading-8">
                    Защитите свою <br /> личную <br /> информацию
                  </p>
                  <li>
                    Оповещения о взломанных <br /> аккаунтах
                  </li>
                  <li>
                    Встроенный менеджер <br /> паролей
                  </li>
                  <li>Удаление истории</li>
                  <li>Автозаполнение форм</li>
                  <li>Автоматическое обновление</li>
                </ul>
              </div>
              {/* kistichka */}
              <div className="space-y-5 ml-[120px] mt-[150px]">
                <img
                  className="mix-blend-multiply"
                  width="32"
                  height="32"
                  loading="lazy"
                  src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/customize.c7c7ea078776.png"
                  alt=""
                />
                <ul className="space-y-4 text-[15px]">
                  <p className="font-bold text-[25px] leading-8">
                    Настройте свой <br /> браузер
                  </p>
                  <li>Темы</li>
                  <li>Тёмная тема</li>
                  <li>Библиотека расширений</li>
                  <li>Настройте параметры панели поиска</li>
                  <li>Измените макет новой вкладки</li>
                </ul>
              </div>
            </div>
            {/* loading firefox */}
            <div className="text-center mt-24">
              <button className="w-[200px] h-[50px] rounded-md text-white font-semibold text-[17px] bg-blue-600 hover:bg-blue-800">
                <Link to={"/loading firefox"}>Загрузить Firefox</Link>
              </button>
              <p className="text-gray-800 text-[13px] pt-4">
                Уведомление о конфиденциальности Firefox
              </p>
            </div>
          </div>
        </div>
        {/* section 6 */}
        <div className="h-[1000px]">
          {/* titile */}
          <h1 className="text-center text-[45px] font-bold mt-28">
            Сделайте Firefox своим
          </h1>
          <div className="w-full h-[700px]">
            {/* rasm grafika */}
            <div className="relative w-full h-full flex justify-center items-center">
              <svg
                className="absolute z-0  w-[1200px] h-[500px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1242 532"
              >
                <path
                  fill="none"
                  stroke="#ffba2d"
                  strokeWidth="2"
                  d="M1198.8 232.3c4.7 3 6.1 9.1 3.2 13.8l-.2.3c-2.8 4.5-1.3 10.4 3.2 13.2 4.6 2.8 10.5 1.5 13.4-2.9l.2-.3c3.1-4.7 9.4-6 14.2-3.1 4.8 3 6.3 9.3 3.3 14.1-8.9 14.1-27.8 18.3-42 9.5-14.3-8.8-18.7-27.4-9.8-41.4 3-4.7 9.3-6.2 14.1-3.3l.2.1h.2z"
                ></path>
                <linearGradient
                  id="a2"
                  x1="1046.5737"
                  x2="1180.3937"
                  y1="142.2743"
                  y2="50.0583"
                  gradientTransform="matrix(1 0 0 -1 0 519.0001)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#ffda65"></stop>
                  <stop offset="1" stopColor="#ff9741"></stop>
                </linearGradient>
                <circle
                  cx="1096.9"
                  cy="411.4"
                  r="120.5"
                  fill="url(#a2)"
                ></circle>
                <linearGradient
                  id="b2"
                  x1="-83.934"
                  x2="122.2983"
                  y1="-272.8492"
                  y2="-30.4322"
                  gradientTransform="matrix(.766 -.6428 -.6428 -.766 175.4476 172.2943)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#c857f1"></stop>
                  <stop offset="1" stopColor="#2ebffc"></stop>
                </linearGradient>
                <path
                  fill="url(#b2)"
                  d="M45.1 300.6l323-271C421.4-15.3 501-8.3 545.8 45.1l.2.2c44.8 53.4 37.8 132.9-15.5 177.7l-323 271C154 538.7 74.4 531.8 29.7 478.4l-.2-.2c-44.8-53.3-37.8-132.9 15.6-177.6z"
                ></path>
                <path
                  fill="none"
                  stroke="#ff008b"
                  strokeWidth="2"
                  d="M130.5 193.8L522.4 58.9c52.9-18.2 110.5 9.9 128.7 62.8h0c18.2 52.9-9.9 110.5-62.8 128.7L196.5 385.3c-52.9 18.2-110.5-9.9-128.7-62.8h0c-18.3-52.9 9.8-110.5 62.7-128.7z"
                ></path>
                <circle cx="811.9" cy="81.2" r="12" fill="#ff008b"></circle>
                <linearGradient
                  id="c2"
                  x1="733.0189"
                  x2="647.999"
                  y1="-193.4654"
                  y2="-16.5744"
                  gradientTransform="scale(1 -1) rotate(32.997 1111.38555617 211.5247949)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stopColor="#f80089"></stop>
                  <stop offset="1" stopColor="#b833e1"></stop>
                </linearGradient>
                <path
                  fill="url(#c2)"
                  d="M678 256.3L981.8 59.1c58.4-37.9 136.5-21.3 174.5 37.1l.1.2c37.9 58.4 21.3 136.5-37.1 174.5L815.5 468.1C757.1 506 679 489.4 641.1 431l-.1-.2c-38-58.4-21.4-136.5 37-174.5z"
                ></path>
              </svg>
              {/* img and title */}
              <img
                className="relative z-10 top-[69px] w-[930px] h-[397]"
                loading="lazy"
                src="https://www.mozilla.org/media/img/firefox/new/desktop/firefox-new-tab-1000.92fde769e1f5.png"
                srcSet="https://www.mozilla.org/media/img/firefox/new/desktop/firefox-new-tab-2000.e38e9a4bee65.png"
                alt="Firefox New Tab"
              />
            </div>
            {/* title */}
            <div className="flex justify-evenly space-x-[-200px] w-full h-[400px] ">
              {/* 1-title */}
              <ul className="mt-[-30px] space-y-4">
                <p className="text-[25px] font-bold leading-[32px]">
                  Расширения на <br /> любой вкус
                </p>
                <li className="text-[16px] text-gray-700 leading-[22px]">
                  От безопасности до новостей и <br /> игр —{" "}
                  <span className="text-blue-700 hover:text-blue-900 underline">
                    <Link to={"/rasshireniya"}>
                      {" "}
                      расширения найдутся <br /> для всех
                    </Link>
                  </span>
                  . Добавляйте столько, <br /> сколько хотите, пока не станете{" "}
                  <br /> полностью довольны своим <br /> браузером.
                </li>
              </ul>
              {/* 2-title */}
              <ul className="mt-[-30px] space-y-4">
                <p className="text-[25px] font-bold leading-[32px]">
                  Изменяйте внешний <br /> вид браузера
                </p>
                <li className="text-[16px] text-gray-700 leading-[22px]">
                  Переходите со светлой темы на <br /> тёмную в зависимости от{" "}
                  <br /> вашего настроения и <br /> предпочтений или украсьте{" "}
                  <br /> свой мир с помощью <br /> собственной темы (например,{" "}
                  <br /> радужного единорога).
                </li>
              </ul>
              {/* 3-title */}
              <ul className="mt-[-30px] space-y-4">
                <p className="text-[25px] font-bold leading-[32px]">
                  Изменяйте свои <br /> настройки
                </p>
                <li className="text-[16px] text-gray-700 leading-[22px]">
                  Не нужно приспосабливаться. <br /> Измените страницу новой{" "}
                  <br /> вкладки, строку поиска, <br /> закладки и многое
                  другое, <br /> чтобы работать в Интернете так, <br /> как вам
                  нравится.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* section 7 */}
        <div className="w-full h-[1000px] mt-10">
          <h1 className="text-[40px] text-center font-bold leading-[45px] pt-10">
            При поддержке некоммерческой <br /> организации, которая ставит
            людей на <br /> первое место
          </h1>
          <div className="flex">
            {/* 1-bolim */}
            <div className="mt-20 ">
              <img
                className="w-[436px] ml-[95px] h-[463] mix-blend-multiply"
                loading="lazy"
                src="https://www.mozilla.org/media/img/firefox/new/desktop/person-mozilla.5fd76ac595b3.jpg"
                srcset="https://www.mozilla.org/media/img/firefox/new/desktop/person-mozilla-high-res.05eb0b11ed9a.jpg 2x"
                alt=""
              />
              {/* title */}
              <ul className="w-[700px]">
                <li className="text-[25.5px] font-bold pt-10 pl-[80px]">
                  Бросаем вызов статусу-кво с 1998 года
                </li>
                <li className="text-[17px] text-gray-700 pt-4 pl-[80px]">
                  Firefox был создан{" "}
                  <span className="text-blue-700 underline">Mozilla</span> как
                  более быстрая и приватная альтернатива таким браузерам, как
                  Internet Explorer, и теперь Chrome. Сегодня наша <br />{" "}
                  целеустремленная компания и сообщество волонтеров по-прежнему
                  ставят <br /> вашу приватность превыше всего.
                </li>
              </ul>
            </div>
            {/* 2-bolim */}
            <div className="mt-20 ml-5 ">
              <img
                className="w-[436px] ml-[95px] h-[463] mix-blend-multiply"
                loading="lazy"
                src="https://www.mozilla.org/media/img/firefox/new/desktop/person-mozilla.5fd76ac595b3.jpg"
                srcset="https://www.mozilla.org/media/img/firefox/new/desktop/person-mozilla-high-res.05eb0b11ed9a.jpg 2x"
                alt=""
              />
              {/* title */}
              <ul className="w-[700px]">
                <li className="text-[25.5px] font-bold pt-10 pl-[80px]">
                  Ваша приватность — всегда на первом месте
                </li>
                <li className="text-[17px] text-gray-700 pt-4 pl-[80px]">
                  По мере того, как растёт и меняется Интернет, Firefox
                  продолжает уделять <br /> большое внимание вашему праву на
                  приватность — мы называем это <br /> Обещанием по личным
                  данным: Собирать меньше. Держать в безопасности. <br />{" "}
                  Никаких секретов. Ваши данные, действия и жизнь в Интернете
                  защищаются <br /> Firefox.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* section 8 */}
        <div className="w-full h-[1400px]">
          {/* title */}
          <h1 className="text-center text-[40px] font-bold leading-[47px] pt-24">
            Сохраните все свои любимые функции <br /> браузера и откройте новые.
          </h1>
          {/* block-1 */}
          <div className="flex">
            {/* google working */}
            <div className="ml-[247px] mt-24">
              <img
                className="mix-blend-multiply w-[230px] h-[140px]"
                loading="lazy"
                src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/goog.27ed69741426.png"
                alt=""
              />
              <ul className="space-y-3 pl-[49px] pt-7">
                <li className="leading-[25px] text-[22px] font-bold">
                  Работает с <br /> продуктами Google
                </li>
                <li className="leading-[25px]">
                  Все ваши любимые <br /> инструменты Google (такие как, <br />{" "}
                  Gmail и Docs) без проблем <br /> работают в браузере Firefox.
                </li>
              </ul>
            </div>
            {/* facebook-cantainer */}
            <div className="ml-[40px] mt-24">
              <img
                className="mix-blend-multiply w-[235px] h-[140px]"
                loading="lazy"
                src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/contain-mr1.c0bad3e399d4.png"
                alt=""
              />
              {/* title */}
              <ul className="space-y-3 pl-[49px] pt-7">
                <li className="leading-[25px] text-[24px] font-bold">
                  Фейсбук-контейнер
                </li>
                <li className="leading-[25px]">
                  <span className="underline hover:text-blue-900 text-blue-700">
                    <Link to={"/loading"}>Загрузите это расширение</Link>
                  </span>
                  , <br /> чтобы запретить Фейсбуку (и <br /> Инстаграму)
                  следить за вами в <br /> Интернете.
                </li>
              </ul>
            </div>
            {/* async your phone */}
            <div className="ml-[70px] mt-24">
              <img
                className="mix-blend-multiply w-[235px] h-[140px]"
                loading="lazy"
                src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/sync.222890d2637e.png"
                alt=""
              />
              {/* title */}
              <ul className="space-y-3 pl-[34px] pt-7">
                <li className="leading-[25px] text-[24px] font-bold">
                  Синхронизируйте <br /> свои устройства
                </li>
                <li className="leading-[25px]">
                  Firefox доступен на всех ваших <br /> устройствах; возьмите с
                  собой <br /> вкладки, историю и закладки. <br /> Все, что вам
                  нужно, это{" "}
                  <span className="underline underline-offset-1 hover:text-blue-900 text-blue-700">
                    <Link to={"/akkaunt"}>
                      Аккаунт <br /> Mozilla,
                    </Link>
                  </span>{" "}
                  и вы получите доступ к <br />
                  синхронизации и другим <br /> продуктам Mozilla.
                </li>
              </ul>
            </div>
          </div>
          {/* block-2 */}
          <div className="flex mt-[70px]">
            {/* snimik ekrana */}
            <div className="ml-[240px] mt-24">
              <img
                className="mix-blend-multiply w-[240px] h-[150px]"
                loading="lazy"
                src="https://www.mozilla.org/media/img/firefox/new/desktop/ie8/screenshots-mr1.90adf33aeb13.png"
                alt=""
              />
              {/* title */}
              <ul className="space-y-6 pl-[49px] pt-7">
                <li className="leading-[25px] text-[25px] font-bold">
                  Снимки экрана
                </li>
                <li className="leading-[25px]">
                  Сделайте качественный снимок <br /> любого сайта в Интернете с{" "}
                  <br /> помощью нашего инструмента <br />{" "}
                  <span className="text-blue-700 hover:text-blue-900 underline">
                    <Link to={"/photoshop"}>Снимок экрана</Link>
                  </span>
                  , встроенного <br /> прямо в браузер.
                </li>
              </ul>
            </div>
            {/* bezapasnast */}
            <div className="ml-[105px] mt-24">
              <img
                className=" w-[140px] h-[145px]"
                loading="lazy"
                srcset="https://www.mozilla.org/media/img/firefox/new/desktop/etp.a1867ebfc81e.svg"
                alt=""
              />
              {/* title */}
              <ul className="space-y-3 pl-[px] pt-7">
                <li className="leading-[32px] text-[24px] font-bold">
                  Улучшенная защита <br /> от отслеживания <br /> (УЗО)
                </li>
                <li className="leading-[25px]">
                  Firefox автоматически <br /> блокирует сбор и продажу <br />{" "}
                  ваших действий в Интернете <br />
                  <span className="underline hover:text-blue-900 text-blue-700">
                    {" "}
                    <Link to={"/storonniy trak"}>
                      большинством сторонних <br /> трекеров
                    </Link>
                  </span>
                  .
                </li>
              </ul>
            </div>
            {/* kartinka v katinke */}
            <div className="ml-[45px] mt-24">
              <img
                className="mix-blend-multiply w-[235px] h-[140px]"
                loading="lazy"
                srcset="https://www.mozilla.org/media/img/firefox/new/desktop/pinp-mr1.3711ddf0380e.svg"
                alt=""
              />
              {/* title */}
              <ul className="space-y-3 pl-[45px] pt-10">
                <li className="leading-[25px] text-[25px] font-bold">
                  Картинка в <br /> картинке
                </li>
                <li className="leading-[25px]">
                  От просмотра обучающего <br /> материала до наблюдения за{" "}
                  <br /> игрой любимой команды — <br /> смотрите видео, пока{" "}
                  <br /> выполняете другие задачи.
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* the end */}
        {/* loading firefox */}
        <div className="s-full h-[300px] flex flex-col items-center justify-center">
          <button className="w-[200px] h-[50px] rounded-md text-white font-semibold text-[17px] bg-blue-600 hover:bg-blue-800">
            <Link to={"/loading firefox"}>Загрузить Firefox</Link>
          </button>
          <h1 className="text-[13px] text-gray-700 hover:underline underline-offset-2">
            Уведомление о конфиденциальности Firefox
          </h1>
        </div>
        <div className="bg-gray-100 w-full h-[60px] font-bold text-[20px] text-center pt-3">
          <h1 className="text-gray-700">
            Есть вопросы? Вам поможет
            <span className="text-blue-700 hover:text-blue-500 underline underline-offset-4 pl-2">
              <Link to={"/tehabsloga"}>Служба поддержки Mozilla.</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Peca;
