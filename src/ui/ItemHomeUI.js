import Image from "next/image";
import Link from "next/link";
import { BsHeart } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import FaveButton from "./FaveButton";

const ItemHomeUI = ({ item, fill, toggleFill }) => {
  return (
    <div className=" font-work font-[300] flex-col mb-10 cursor-pointer">
      <div className="relative">
        <Link href="/view-all/[id]" as={`/view-all/${item.id}`}>
          <div className="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-white items-center self-center flex hover:shadow-xl hover:transition-all transition-all ease-in-out hover:ease-in-out hover:scale-105">
            <Image
              src={item.attributes.img.data.attributes.url}
              alt="/"
              className="object-cover md:w-[250px] md:h-[350px] w-[180px] h-[250px] relative"
              width="250"
              height="350"
            />
            {item.attributes.isNew && (
              <div className="absolute top-0 right-0 bg-headline/10 p-2">
                <p className="text-headline">Novità</p>
              </div>
            )}
          </div>
        </Link>
        <div className="absolute bottom-2 right-2 z-[80]">
          <FaveButton fill={fill} toggleFill={toggleFill} item={item} />
        </div>
      </div>
      <h3 className="mt-2 md:w-[250px] w-[150px] ">{item.attributes.title}</h3>
      <p className="font-[400] w-fit text-[1rem] hover:text-redish hover:ease-out hover:transition">
        €{item.attributes.price}
      </p>
    </div>
  );
};

export default ItemHomeUI;
