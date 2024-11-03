import React from "react";
import { Link } from "react-router-dom";

const Posibillities = () => {
  return (
    <div>
      <div className="flex flex-col justify-center w-full h-[500px] bg-slate-100">
        <ul className="text-center">
          <li className="text-[41px] font-bold ">Функции браузера Firefox</li>
          <li>
            Firefox — это быстрый, лёгкий, ориентированный на приватность
            браузер, <br /> работающий на всех ваших устройствах.
          </li>
        </ul>
      </div>
      {/* 2-bolim */}
      <div className="w-full h-[550px] flex pt-20">
        {/* firefox quickli */}
        <div className="w-[663px] hover:outline outline-slate-200 outline-[3.5px] hover:underline decoration-1 rounded-md h-[500px] ml-[85px]">
          <img
            className="w-[763px]"
            loading="lazy"
            src="https://www.mozilla.org/media/img/firefox/features/fast.227ecf89f442.png"
            srcset="https://www.mozilla.org/media/img/firefox/features/fast-high-res.7226d92f0913.png 2x"
            alt=""
            class="mzp-c-card-image"
          />
          <h1 className="pl-2 text-[25.6px] font-bold">
            Firefox становится быстрее
          </h1>
          <p className="pl-2 text-[17.3px]">
            Последние тесты скорости браузера доказывают, что Firefox быстрее,
            чем <br /> когда-либо.
          </p>
        </div>
        {/* konfidiratsiya */}
        <div className="w-[663px] hover:outline outline-slate-200 outline-[3.5px] hover:underline decoration-1 rounded-md h-[500px] ml-[32px]">
          <img
            className="w-[763px]"
            loading="lazy"
            src="https://www.mozilla.org/media/img/firefox/features/private.fb634ede9bf5.png"
            srcset="https://www.mozilla.org/media/img/firefox/features/private-high-res.ccb8d487970e.png 2x"
            alt=""
            class="mzp-c-card-image"
          />
          <h1 className="pl-2 text-[24.8px] font-bold">
            Является ли Firefox конфиденциальным браузером?
          </h1>
          <p className="pl-2 text-[17px]">
            Мы сосредоточены на вашем праве на неприкосновенность частной жизни.{" "}
            <br /> Ваши данные, ваша активность в Интернете, ваша жизнь в
            Интернете защищены <br /> с помощью Firefox.
          </p>
        </div>
      </div>
      {/* 3-bolim */}
      <div className="w-full flex flex-wrap h-[1200px]">
        {/* free menajment */}
        <div className="w-[400px] h-[170px] ml-[84px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold">
              Бесплатный менеджер паролей
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Получите помощь в создании новых паролей, <br /> автоматическом
              заполнении онлайн-форм и <br /> автоматическом входе в систему.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* sinxronizatsiya */}
        <div className="w-[400px] h-[170px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold">
              Синхронизация браузера Firefox{" "}
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Получите доступ к своим закладкам Firefox, <br /> паролям,
              открытым вкладкам и многому <br /> другому с любого устройства.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* meneger zakladok */}
        <div className="w-[400px] h-[170px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold">Менеджер закладок</li>
            <li className="text-[16.9px] leading-[20px]">
              Организуйте свои закладки с помощью папок <br /> и тегов.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* prime podmiska */}
        <div className="w-[400px] h-[170px] ml-[84px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold">
              Режим приватного просмотра
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Автоматически удаляйте куки и стирайте <br /> историю браузера при
              его закрытии.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* personalizatsiya firefox */}
        <div className="w-[400px] h-[170px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
              Персонализируйте свой браузер <br /> Firefox
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Выбирайте, как будет выглядеть ваш <br /> браузер, с помощью тысяч
              бесплатных тем.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* dopolneniy i rasshireniy */}
        <div className="w-[400px] h-[170px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
              Дополнения и расширения <br /> браузера Firefox
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Добавляйте в свой браузер новые <br /> инструменты, возможности и
              забавные вещи.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* vkladka brauzera */}
        <div className="w-[400px] h-[210px] ml-[84px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
              Закрепленные вкладки браузера
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Держите ваши любимые страницы <br /> открытыми и на расстоянии
              одного клика. <br /> Используйте закрепленные вкладки, чтобы{" "}
              <br /> следить за своей электронной почтой или <br />{" "}
              мессенджерами.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* pipetka */}
        <div className="w-[400px] h-[210px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
              Инструмент «Пипетка»
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Определите точный цвет на странице и <br /> скопируйте его
              шестнадцатеричный код.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* redaktor PDF */}
        <div className="w-[400px] h-[210px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
              Редактор PDF
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Просматривайте и редактируйте PDF-файлы <br /> прямо в Firefox.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* blokirovka sifrovoga otpechatka */}
        <div className="w-[400px] h-[180px] ml-[84px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
              Блокировка цифровых отпечатков
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Избавьтесь от навязчивой рекламы, которая <br /> преследует вас
              повсюду, с помощью <br /> встроенных средств блокировки сборщиков{" "}
              <br /> цифровых отпечатков в Firefox.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* blokiruyte reklami trekov */}
        <div className="w-[400px] h-[180px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
              Блокировка рекламных трекеров
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Firefox автоматически блокирует более 2000 <br /> рекламных
              трекеров, следящих за вами в <br /> Интернете.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* perevodi internet */}
        <div className="w-[400px] h-[180px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
              Переводите Интернет
            </li>
            <li className="text-[16.9px] leading-[20px]">
              Переводите веб-сайты на ваш язык прямо в <br /> браузере Firefox,
              не делясь своими данными <br /> с кем-либо ещё.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
        {/* kartinka v kartinke */}
        <div className="w-[400px] h-[160px] ml-[80px] rounded-md border-[1px] border-gray-400 hover:underline decoration-1 hover:border-blue-700">
          <ul className="space-y-3.5 pl-5 pt-2.5">
            <li className="text-[20.8px] font-bold leading-[25px]">
            Картинка в картинке
            </li>
            <li className="text-[16.9px] leading-[20px]">
            Есть чем заняться и что посмотреть? <br /> Делайте это одновременно, используя <br /> функцию «Картинка в картинке» в Firefox.
            </li>
            <li className="text-blue-700 underline">
              <Link to={"/more"}>Подробнее</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Posibillities;
