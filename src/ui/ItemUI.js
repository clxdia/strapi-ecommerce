import Image from "next/image";
import Link from "next/link";
import FavoriteButton from "./FavoriteButton";

const ItemUI = ({ item }) => {
  return (
    <div className="font-work font-[300] flex-col mb-5 cursor-pointer">
      <Link href="/view-all/[id]" as={`/view-all/${item.id}`}>
        <div className="bg-white items-center self-center flex hover:shadow-xl hover:transition hover:ease-in-out hover:scale-105 relative">
          <Image
            src={item.attributes.img.data.attributes.url}
            alt="/"
            className="md:w-[300px] md:h-[400px] w-[180px] h-[250px] object-cover relative"
            width="250"
            height="350"
          />
          {item.attributes.isNew && (
            <div className="absolute top-0 right-0 bg-headline/10 p-2">
              <p className="text-headline">Novità</p>
            </div>
          )}
          <FavoriteButton />
        </div>
      </Link>
      <h3 className="mt-2 md:w-[300px] w-[150px]">{item.attributes.title}</h3>
      <p className="font-[400] w-fit text-[1.2rem] hover:text-redish hover:ease-out hover:transition">
        €{item.attributes.price}
      </p>
    </div>
  );
};

export default ItemUI;
