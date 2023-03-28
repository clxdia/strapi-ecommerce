import React from "react";
import Image from "next/image";
import Link from "next/link";
import FaveButton from "./FaveButton";

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
}

export default async function Recommendations({ fill, toggleFill, item }) {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_SHORT_API_URL + "?populate=*"
  );

  return (
    <>
      <h3 className="mt-40 text-[20px]">Altri hanno acquistato anche</h3>
      <div className=" flex overflow-x-scroll gap-5 mb-10 relative">
        {items.data.map((item) => {
          return (
            <div className="flex flex-col mt-4" key={item.id}>
              <div className=" md:hover:scale-105 h-auto hover:shadow-xl hover:transition hover:ease-in-out items-center self-center flex flex-col relative">
                <Link
                  href="./view-all/[id]"
                  as={`./view-all/${item.id}`}
                  className="w-[100%]"
                >
                  <Image
                    src={item.attributes.img.data.attributes.url}
                    alt="/"
                    className="object-cover md:w-[250px] md:min-w-[250px]  md:min-h-[350px] md:h-[350px] min-w-[180px]  min-h-[210px] w-[180px] h-[250px] relative"
                    width="250"
                    height="250"
                  />
                </Link>
                <div className="absolute bottom-2 right-2 z-[80]">
                  <FaveButton fill={fill} toggleFill={toggleFill} item={item} />
                </div>
              </div>
              <Link
                href="./view-all/[id]"
                as={`./view-all/${item.id}`}
                className="w-[100%]"
              >
                <h3 className="mt-2 md:w-[300px] w-[150px] md:text-[15px] text-[13px] decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4 font-normal">
                  {item.attributes.title}
                </h3>
                <p className="font-[400] w-fit md:text-[16px] text-[14px] text-black">
                  € {item.attributes.price}
                </p>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
