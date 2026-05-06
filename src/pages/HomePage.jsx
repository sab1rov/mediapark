import { BasketIcon, EyeIcon } from "../assets/icons"
import Slider from "../components/Banner/Slider.jsx"
import TodaysMerch from "../components/Banner/TodaysMerch.jsx"
import ProductItem from "../components/ProductItem.jsx"
import {
  productsData,
  articlesData,
  brandsData,
  featuresData,
  categoriesData,
} from "../utils/data.jsx"

function HomePage() {
  return (
    <main className="container mx-auto">
      <section className="banner container mx-auto flex gap-6 items-center max-lg:flex-col p-0">
        <Slider />
        <TodaysMerch />
      </section>
      <div className="container mx-auto mt-6 p-0">
        <h2 className="text-gray-800 text-2xl mb-6 mt-6 font-extrabold">
          Популярные категории
        </h2>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {categoriesData.map((item) => (
            <a key={item.id} href="/">
              <div className="bg-gray-100 rounded-xl p-4 flex items-center justify-between hover:shadow-md cursor-pointer transition">
                <span className="text-sm font-medium">{item.title}</span>
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-12 h-12 object-contain"
                />
              </div>
            </a>
          ))}
        </div>
      </div>

      <ProductItem title="0-0-12 c TBC Nasiya!" />
      <ProductItem title="Высокое качество, высокий уровень!" />
      <ProductItem title="Скидки на холодильники!" />
      <div className="mt-10">
        <h1 className="text-gray-800 text-2xl mb-6 mt-6 font-extrabold">
          Статьи
        </h1>
        <div className="flex gap-3 flex-wrap mb-6">
          {[
            "Все",
            "Приложения",
            "Данные",
            "Программы",
            "Советы",
            "Ноутбук",
            "Все",
            "Приложения",
            "Данные",
            "Программы",
            "Советы",
            "Ноутбук",
          ].map((item, i) => (
            <button
              key={i}
              className="px-4 py-2 bg-gray-200 rounded-full text-sm shadow"
            >
              {item}
            </button>
          ))}
        </div>
        <div className="grid max-[600px]:justify-items-center max-[600px]:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {articlesData.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer bg-white rounded-xl shadow p-3 max-[600px]:items-center"
            >
              <img
                className="h-32 bg-gray-200 rounded-lg mb-3"
                src={item.img}
              />
              <h2 className="font-semibold text-sm mb-2">{item.title}</h2>
              <p className="text-xs text-gray-500 mb-3">{item.desc}</p>
              <div className="flex justify-between text-xs text-gray-400">
                <span className="flex gap-2">
                  <EyeIcon />
                  {item.views}
                </span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-gray-800 text-2xl mb-6 mt-6 font-extrabold">
          Популярные бренды
        </h2>
        <div className="grid max-[350px]:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {brandsData.map((item) => (
            <div
              key={item.key}
              className="cursor-pointer bg-white py-5  flex items-center justify-center rounded-3xl shadow border-2 text-gray-600 font-medium"
            >
              <img src={item.img} className="w-30" alt="" />
            </div>
          ))}
        </div>
      </div>
      <h2 className="text-gray-800 text-2xl mb-6 mt-6 font-extrabold">
        Почему именно Mediapark?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {featuresData.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer bg-white rounded-xl p-4 shadow border-2 border-gray-400"
          >
            {item.img}
            <h3 className="mb-2 text-lg font-bold">{item.title}</h3>
            <p className="text-xs text-gray-500">{item.desc}</p>
          </div>
        ))}
      </div>
    </main>
  )
}

export default HomePage
