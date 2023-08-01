import React from "react";
import Image from "next/image";
import Link from "next/link";
import FaveButton from "./FaveButton";
import fetchData from "../hooks/fetchData";

export default async function Recommendations({ fill, toggleFill }) {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_SHORT_API_URL + "?populate=*"
  );

  return (
    <>
      <h3 className="md:mt-40 mt-20 text-[20px]">
        Altri hanno acquistato anche
      </h3>
      <div className=" flex overflow-x-scroll gap-5 mb-[10rem] relative">
        {items.data.map((item) => {
          return (
            <div
              className="flex flex-col mt-4 md:w-[250px] md:min-w-[250px]"
              key={item.id}
            >
              <div className="md:hover:scale-105 h-auto sm, md:hover:shadow-xl hover:transition hover:ease-in-out md:w-[250px] md:min-w-[250px] flex flex-col relative">
                <Link href="./[id]" as={`./${item.id}`}>
                  <Image
                    src={item.attributes.img.data.attributes.url}
                    alt={item.attributes.title}
                    className="object-cover md:w-[250px] md:min-w-[200px]  md:min-h-[350px] md:h-[350px] min-w-[180px] md:max-w-[250px]  min-h-[210px] w-[180px] h-[250px] relative"
                    width="200"
                    height="200"
                  />
                </Link>
                <div className="cursor-pointer absolute bottom-2 right-2 z-[80]">
                  <FaveButton fill={fill} toggleFill={toggleFill} item={item} />
                </div>
              </div>
              <Link href="./view-all/[id]" as={`./view-all/${item.id}`}>
                <h3 className="mt-2 md:w-auto w-[150px] md:text-[15px] text-[13px] decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4 font-normal">
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
