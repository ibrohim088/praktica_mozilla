import React from "react";

const More = () => {
  return (
    <div>
      <div className="w-full h-[px] bg-gray-300">
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
        <div className="flex flex-wrap h-[2700px] mt-20">
          {/* what is it brouzer */}
          <div className="w-[435px] h-[420px] rounded-md border-[2.5px] ml-[79px]">
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
          <div className="w-[435px] h-[370px] rounded-md border-[2.5px] ml-[28.7px]">
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
          <div className="w-[435px] h-[490px] rounded-md hover:border-[2.5px] ml-[28px]">
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
                Браузер в режиме инкогнито: <br /> Что на самом деле это
                означает
              </li>
              <li className="text-[17.3px]">
                Firefox называет это приватным просмотром, <br /> Chrome
                называет это режимом инкогнито. Оба <br /> позволяют
                просматривать веб-страницы без <br /> сохранения истории
                просмотров.
              </li>
            </ul>
          </div>
          {/* dezinformatsiya */}
          <div className="w-[435px] h-[490px] rounded-md hover:border-[2.5px] ml-[80px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237]"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/avoid-misinformation.de85ffb0ad1d.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Избегайте дезинформации в <br /> Интернете - Firefox здесь,
                чтобы <br /> помочь
              </li>
              <li className="text-[17.3px]">
                Ознакомьтесь с советами, чтобы видеть меньше <br />{" "}
                дезинформации и сосредоточиться на том, что для <br /> вас
                важно.
              </li>
            </ul>
          </div>
          {/* upgrate your brouzer firefox */}
          <div className="w-[435px] h-[520px] rounded-md hover:border-[2.5px] ml-[27px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/update-browser.1bcec20443cd.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Обновите свой браузер до <br /> быстрого, безопасного и <br />{" "}
                надёжного Firefox.{" "}
              </li>
              <li className="text-[17.3px]">
                Браузер Firefox создан для защиты вашей <br /> приватности на
                каждом шаге — ведь это самый <br /> быстрый способ избавить вас
                медленной загрузки <br /> страниц, неприятной рекламы и
                трекеров.
              </li>
            </ul>
          </div>
          {/* windows firefox */}
          <div className="w-[435px] h-[430px] rounded-md hover:border-[2.5px] ml-[28.5px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/firefox-windows.fb074139b590.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Firefox борется за вас на <br /> Windows
              </li>
              <li className="text-[17.3px]">
                Лёгкий импорт настроек и закладок после загрузки <br /> Firefox
                для Windows.
              </li>
            </ul>
          </div>
          {/* firefox respect your prime */}
          <div className="w-[435px] h-[480px] rounded-md hover:border-[2.5px] ml-[80px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/firefox-mac.610a83847fd9.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Firefox уважает вашу <br /> приватность на Mac.
              </li>
              <li className="text-[17.3px]">
                Firefox не шпионит за вашими поисковыми <br /> запросами. Мы не
                даём известным сторонним <br /> кукам отслеживать вас и
                предоставляем вам <br /> полный контроль.
              </li>
            </ul>
          </div>
          {/* firefox linex */}
          <div className="w-[435px] h-[400px] rounded-md hover:border-[2.5px] ml-[27px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/firefox-linux.69355e68bccb.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Firefox для Linux
              </li>
              <li className="text-[17.3px]">
                Новая школа встречает старую школу с самым <br /> быстрым
                браузером.
              </li>
            </ul>
          </div>
          {/* firefox 64-bit and 32-bit windows */}
          <div className="w-[435px] h-[400px] rounded-md hover:border-[2.5px] ml-[29px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/firefox-64-bit.189781f6f2d0.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Firefox для 64-битной Windows
              </li>
              <li className="text-[17.3px]">
                Мы заботимся о безопасности ваших данных, чтобы <br /> вам не
                приходилось это делать.
              </li>
            </ul>
          </div>
          {/* firefox dnla chrome */}
          <div className="w-[435px] h-[450px] rounded-md hover:border-[2.5px] ml-[80px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/firefox-chromebook.9754eb459605.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Браузер Firefox для Chromebook
              </li>
              <li className="text-[17.3px]">
                Хотя на Chromebook уже установлен Chrome, если <br /> вы
                загрузите и будете использовать Firefox в <br /> качестве
                основного браузера, то это даст вам <br />
                некоторые преимущества
              </li>
            </ul>
          </div>
          {/* firefox quantum */}
          <div className="w-[435px] h-[470px] rounded-md hover:border-[2.5px] ml-[28px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/firefox-quantum.c80d6257207b.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Firefox Quantum
              </li>
              <li className="text-[17.3px]">
                Firefox Quantum произвел революцию в разработке Firefox. В 2017
                году мы создали новый, молниеносно быстрый браузер, который
                постоянно совершенствуется. Firefox Quantum — это браузер
                Firefox.
              </li>
            </ul>
          </div>
          {/* languages firefox */}
          <div className="w-[435px] h-[470px] rounded-md hover:border-[2.5px] ml-[28px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/firefox-all.c7cee32f45b1.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Выберите, какой браузер Firefox <br /> загрузить на вашем языке
              </li>
              <li className="text-[17.3px]">
                Мы считаем, что у каждого должен быть доступ к <br /> Интернету,
                поэтому мы делаем браузер Firefox <br /> доступным на более чем
                90 языках с помощью <br /> волонтёров со всего мира.
              </li>
            </ul>
          </div>
          {/* blokirovka sifrovoga atpechatka */}
          <div className="w-[435px] h-[490px] rounded-md hover:border-[2.5px] ml-[80px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/fingerprint.95e4fde97fe1.png"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
                Блокировка сборщиков <br /> цифровых отпечатков
              </li>
              <li className="text-[17.3px]">
                Сбор цифровых отпечатков — это более <br /> агрессивный вид
                онлайн-отслеживания, чем <br /> обычное отслеживание с помощью
                кук, поэтому <br /> браузер Firefox блокирует его.
              </li>
            </ul>
          </div>
          {/* perevodit intrnet */}
          <div className="w-[435px] h-[420px] rounded-md hover:border-[2.5px] ml-[28px] mt-[px]">
            {/* img */}
            <img
              className="w-[431px] h-[237] mix-blend-multiply"
              loading="lazy"
              src="https://www.mozilla.org/media/img/firefox/more/firefox-all.c7cee32f45b1.jpg"
              alt=""
            />
            {/* title */}
            <ul className="pl-1.5 pt-2">
              <li className="font-bold text-[25.5px] hover:underline decoration-1 underline-offset-[6px]">
              Переводите Интернет
              </li>
              <li className="text-[17.3px]">
              Переводите с более 100 языков на свой язык прямо в браузере Firefox — проще, чем когда-либо <br /> раньше.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default More;
