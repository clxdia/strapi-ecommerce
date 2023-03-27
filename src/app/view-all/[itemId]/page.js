import Image from "next/image";
import React from "react";
import CartButton from "../../../ui/CartButton";
import Recommendations from "../../../ui/RecsList";
import FaveButton from "../../../ui/FaveButton";

const fetchItem = async (itemId) => {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API + `${itemId}` + "?populate=*",
    {
      next: { revalidate: 60 },
    }
  );
  const item = await res.json();
  return item.data;
};

async function ItemPage({ setFill, fill, params: { itemId } }) {
  const item = await fetchItem(itemId);

  return (
    <main className="md:w-[80%] w-[90%] mt-[2rem] md:mt-[5rem] m-auto font-work">
      <section className="md:flex gap-10">
        <div className=" items-center self-center flex relative">
          <Image
            src={item.attributes.img.data.attributes.url}
            className="w-[100%] md:w-[1500px] md:h-[1000px] object-cover"
            width="1500"
            height="1000"
            alt={item.attributes.title}
          />
        </div>
        <aside className="w-[100%] pt-3 pb-3">
          <div className="h-auto  md:sticky md:top-5">
            <h1 className="md:text-[2rem] text-[1rem] font-black">
              {item.attributes.title}
            </h1>
            <p className="md:text-[1.5rem] mt-4 text-button">
              €{item.attributes.price}
            </p>
            <p className="md:text-[1.3rem] md:text-left text-center mt-4 "></p>
            <p className="mt-5 text-paragraph text-[0.8rem] font-[300]">
              {item.attributes.desc}
            </p>
            <div className="sticky bottom-0 gap-4 flex ">
              <CartButton item={item} />
              <FaveButton setFill={setFill} fill={fill} item={item} />
            </div>
          </div>
        </aside>
      </section>
      <Recommendations />
    </main>
  );
}

export default ItemPage;
