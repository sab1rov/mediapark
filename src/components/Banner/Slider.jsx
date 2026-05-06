import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"

function Slider() {
  return (
    <div className="w-full rounded-3xl overflow-hidden h-85">
      <Swiper
        pagination={true}
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        style={{ width: "100%", height: "100%" }}
      >
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider
