import React from "react"
import { productsData } from "../utils/data"
import { BasketIcon } from "../assets/icons"

function ProductItem({ title }) {
  return (
    <section className="products">
      <h1 className="text-gray-800 text-2xl mb-6 mt-6 font-extrabold">
        {title}
      </h1>
      <div className="gap-4 grid max-[450px]:grid-cols-1! grid-cols-5 max-xl:grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2">
        {productsData.map((item) => (
          <div
            className="cursor-pointer border p-3 relative flex flex-col gap-2 border-gray-300 rounded-2xl"
            key={item.id}
          >
            <div className="absolute left-3 top-3 bg-red-600 text-white rounded-2xl text-[12px] font-bold px-3">
              <p>{item.top}</p>
            </div>
            <img src={item.img} alt="" className="object-contain" />
            <p>{item.title}</p>
            <div className="border max-w-40 text-center rounded-lg">
              <p>{item.from}</p>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-lg font-medium">{item.costs}</p>
              <a href="/">
                <div className="z-10 bg-red-600 rounded-lg w-10 h-10 flex items-center justify-center">
                  <BasketIcon />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProductItem
