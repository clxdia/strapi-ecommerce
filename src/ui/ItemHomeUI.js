import Image from "next/image";
import Link from "next/link";
import FaveButton from "./FaveButton";

const ItemHomeUI = ({ item, fill, toggleFill }) => {
  return (
    <div className="flex-col flex-1 flex-shrink-0 md:w-1/4 md:max-w-[25%] w-1/2 max-w-[50%] mb-10 cursor-pointer">
      <div className="relative">
        <Link href="/view-all/[id]" as={`/view-all/${item.id}`}>
          <div className="bg-white items-center self-center flex hover:shadow-xl h-auto  hover:transition hover:ease-in-out md:hover:scale-105">
            <Image
              src={item.attributes.img.data.attributes.url}
              alt="/"
              className="w-[50vw] h-[25vw] min-w-[160px] min-h-[230px] object-cover relative"
              width="260"
              height="250"
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

      <div className="flex flex-col justify-between h-16 md:w-[15vw] ">
        <h3 className="mt-2  md:text-[15px] text-[13px] decoration-black no-underline hover:underline decoration-solid decoration-1 underline-offset-4">
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
