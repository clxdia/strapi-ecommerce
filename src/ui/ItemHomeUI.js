import Image from "next/image";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import FaveButton from "./FaveButton";

const ItemHomeUI = ({ item, fill, toggleFill }) => {
  return (
    <div className="font-work font-[300] flex-col mb-10 cursor-pointer">
      <div className="relative md:w-[250px] md:h-[350px] w-[160px] h-[230px] ">
        <Link href="/view-all/[id]" as={`/view-all/${item.id}`}>
          <div className="bg-white items-center self-center flex hover:shadow-xl hover:transition-all transition-all ease-in-out hover:ease-in-out md:hover:scale-105 relative md:w-[250px] md:h-[350px]">
            <Image
              src={item.attributes.img.data.attributes.url}
              alt="/"
              className="object-cover md:w-[250px] md:h-[350px] w-[160px] h-[230px] relative"
              width="150"
              height="150"
            />
            {item.attributes.isNew && (
              <div className="absolute top-4 right-0 bg-white p-[7px] rounded-l-full">
                <p className="text-redish text-[13px] font-ligth">Novità</p>
              </div>
            )}
          </div>
        </Link>
        <div className="absolute bottom-2 right-2 z-[80]">
          <FaveButton fill={fill} toggleFill={toggleFill} item={item} />
        </div>
      </div>
      <div className="flex flex-col justify-between h-16 md:w-[250px]">
        <h3 className="mt-2 w-auto md:text-[15px] text-[13px] decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4">
          {item.attributes.title}
        </h3>
        <p className="font-[400] w-fit md:text-[16px] text-[14px] text-redish">
          € {item.attributes.price}
        </p>
      </div>
    </div>
  );
};

export default ItemHomeUI;
