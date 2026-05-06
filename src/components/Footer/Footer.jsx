import TelegramIcon from "../../assets/icons/TelegramIcon"
import Payments from "/images/Payments.png"

function Footer() {
  return (
    <footer className="bg-[#1D242F] text-white mt-10">
      <div className="container mx-auto py-10 grid max-md:grid-cols-1 max-lg:grid-cols-2 max-xl:grid-cols-3 grid-cols-5 gap-8">
        <div>
          <h2 className="text-3xl font-bold mb-4">MEDIAPARK</h2>
          <p className="text-sm font-medium mb-2">
            Возникли вопросы? Готовы помочь:
          </p>
          <p className="font-bold mb-4">+998 71 203 33 33</p>
          <p className="text-sm font-medium mb-2">График работы:</p>
          <p className="text-sm font-bold">Ежедневно: 09:00 – 21:00</p>
        </div>
        <div className="flex flex-col">
          <h3 className="font-semibold mb-2">Способы оплаты</h3>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-14 w-30 flex justify-center items-center bg-gray-700 rounded-xl cursor-pointer">
              <img className="w-18" src={Payments} alt="" />
            </div>
            <div className="h-14 w-30 flex justify-center items-center bg-gray-700 rounded-xl cursor-pointer">
              <img className="w-18" src={Payments} alt="" />
            </div>
            <div className="h-14 w-30 flex justify-center items-center bg-gray-700 rounded-xl cursor-pointer">
              <img className="w-18" src={Payments} alt="" />
            </div>
            <div className="h-14 w-30 flex justify-center items-center bg-gray-700 rounded-xl cursor-pointer">
              <img className="w-18" src={Payments} alt="" />
            </div>
            <div className="h-14 w-30 flex justify-center items-center bg-gray-700 rounded-xl cursor-pointer">
              <img className="w-18" src={Payments} alt="" />
            </div>
            <div className="h-14 w-30 flex justify-center items-center bg-gray-700 rounded-xl cursor-pointer">
              <img className="w-18" src={Payments} alt="" />
            </div>
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Информация</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>О нас</li>
            <li>Гарантия</li>
            <li>Акция</li>
            <li>Наши магазины</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Услуги</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Услуги</li>
            <li>Способы оплаты</li>
            <li>Всё о рассрочке</li>
            <li>Партнёрство</li>
            <li>Возврат товара</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-4">Для покупателей</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Доставка</li>
            <li>Связаться с нами!</li>
            <li>Сервисный центр</li>
            <li>Оставить отзыв</li>
            <li>Вакансии</li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-800 py-4 px-6">
        <div className="container mx-auto flex items-center justify-end gap-4">
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <a href="/">
              <TelegramIcon />
            </a>
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <a href="/">
              <TelegramIcon />
            </a>
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <a href="/">
              <TelegramIcon />
            </a>
          </div>
          <div className="flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full">
            <a href="/">
              <TelegramIcon />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
