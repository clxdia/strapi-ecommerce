import Image from "next/image";
import Link from "next/link";
import FaveButton from "./FaveButton";

const ItemUI = ({ item, fill, toggleFill }) => {
  return (
    <div className="font-satoshi flex-col mb-5 cursor-pointer flex-shrink-0 md:w-[23%] sm:w-[31%] w-[48%]">
      <div className="relative w-fit">
        <Link href="/view-all/[id]" as={`/view-all/${item.id}`} className="">
          <div className="bg-white items-center self-center flex hover:shadow-xl h-auto hover:transition hover:ease-in-out md:hover:scale-105">
            <Image
              src={item.attributes.img.data.attributes.url}
              alt="/"
              className="md:w-[60vw] md:h-[25vw] w-[45vw] h-[60vw] sm:w-[70vw] sm:h-[40vw] object-cover relative"
              width="260"
              height="250"
            />
            {item.attributes.isNew && (
              <div className="absolute top-4 right-0 bg-white p-[7px] pl-[12px] rounded-l-full">
                <p className="text-tealish md:text-[18px] text-[15px] font-light">
                  Novità
                </p>
              </div>
            )}
          </div>
        </Link>
        <div className="absolute bottom-2 right-2 z-[80]">
          <FaveButton fill={fill} toggleFill={toggleFill} item={item} />
        </div>
      </div>
      <div className="flex flex-col justify-between h-16 md:w-[15vw]">
        <h3 className="font-satoshi mt-2 md:w-fit md:text-[15px] text-[13px] decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4">
          {item.attributes.title}
        </h3>
        <p className="font-medium w-fit md:text-[16px] text-[14px] text-redish">
          € {item.attributes.price}
        </p>
      </div>
    </div>
  );
};

export default ItemUI;
