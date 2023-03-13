import Image from "next/image";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";
import { IoHeartOutline } from "react-icons/io5";
import FavoriteButton from "./FavoriteButton";

const ItemHomeUI = ({ item }) => {
  return (
    <div className=" font-work font-[300] flex-col">
      <div className="md:w-[250px] md:h-[350px] w-[180px] h-[250px] bg-white items-center self-center flex hover:shadow-xl hover:transition hover:ease-in-out hover:scale-105 relative">
        <Link href="/view-all/[id]" as={`/view-all/${item.id}`}>
          <img
            src={item.attributes.img.data.attributes.url}
            alt="/"
            className="object-cover md:w-[250px] md:h-[350px] w-[180px] h-[250px] relative"
          />
          {item.attributes.isNew && (
            <div className="absolute top-0 right-0 bg-headline/10 p-2">
              <p className="text-headline">Novità</p>
            </div>
          )}
        </Link>
        <FavoriteButton />
      </div>
      <Link
        href="/view-all/[id]"
        as={`/view-all/${item.id}`}
        className="mb-[20px]"
      >
        <h3 className="mt-4 md:w-[250px] w-[150px] ">
          {item.attributes.title}
        </h3>
        <p className="font-[400] w-fit mt-2 text-[1.3rem] hover:text-redish hover:ease-out hover:transition">
          €{item.attributes.price}
        </p>
      </Link>
    </div>
  );
};

export default ItemHomeUI;
