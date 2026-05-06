import { todaysmerchData } from "../../utils/data.jsx"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import ProductIcon from "../../assets/icons/BasketIcon.jsx"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

function TodaysMerch() {
  return (
    <div className="container bg-white rounded-3xl border border-gray-300 shadow p-6 max-w-120 max-lg:max-w-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">Товары дня</h2>
        <div className="flex gap-2">
          <p className="font-medium bg-gray-200 rounded-md px-1">0</p>
          <p className="font-medium bg-gray-200 rounded-md px-1">8</p>
          <p className="font-bold">:</p>
          <p className="font-medium bg-gray-200 rounded-md px-1">0</p>
          <p className="font-medium bg-gray-200 rounded-md px-1">0</p>
          <p className="font-bold">:</p>
          <p className="font-medium bg-gray-200 rounded-md px-1">0</p>
          <p className="font-medium bg-gray-200 rounded-md px-1">0</p>
        </div>
      </div>
      <hr className="mb-6 border-gray-300" />
      <Swiper
        modules={[Navigation, Pagination]}
        // pagination={{ clickable: true }}
        loop={true}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        spaceBetween={1}
        slidesPerView={1}
      >
        {todaysmerchData.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex items-center gap-6">
              <img
                src={item.img}
                alt={item.title}
                className="w-45 object-contain"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-yellow-400 text-xs px-2 py-1 rounded-full font-semibold">
                    {item.discount}
                  </span>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                    Скидка
                  </span>
                </div>
                <p className="text-sm mb-2">{item.title}</p>
                <div className="inline-block border rounded-md px-3 py-1 text-sm mb-3">
                  {item.monthly}
                </div>
                <div className="text-gray-400 line-through text-sm">
                  {item.oldPrice}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-bold">{item.price}</div>
                  <a href="/" className="bg-red-600 text-white p-2 rounded-xl">
                    <ProductIcon />
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center gap-10 mt-6">
        <button className="prev-btn w-8 h-8 rounded-full flex items-center justify-center shadow-xl">
          ←
        </button>
        <button className="next-btn w-8 h-8 rounded-full flex items-center justify-center shadow-xl">
          →
        </button>
      </div>
    </div>
  )
}

export default TodaysMerch
