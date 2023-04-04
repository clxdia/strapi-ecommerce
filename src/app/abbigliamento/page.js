import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import ItemUI from "../../ui/ItemUI";
import AsideWA from "../../ui/AsideWA";

async function fetchData(url) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("failed");
  }
  return res.json();
}

export default async function Abbigliamento() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_SHORT_API_URL +
      "?populate=*&filters[categories][title][$in][0]=Uomo&filters[categories][title][$in][1]=Donna"
  );

  return (
    <main className="md:pt-[7rem] pb-[10rem]">
      <div className="md:flex md:w-[90%] m-auto">
        <AsideWA abbigliamento={"#f07167"} />
        <div>
          <h1 className="text-[2rem] md:text-left text-center text-black font-clash font-medium pt-10 pb-10">
            ABBIGLIAMENTO
          </h1>
          <div className="md:w-[100%] w-[90%] m-auto ">
            <div className="flex flex-wrap h-full md:gap-5 gap-[3vw] sm:gap-auto">
              {items.data.map((item) => (
                <ItemUI item={item} key={item.id} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="flex flex-col m-auto justify-center mt-10 md:mt-[5rem]">
        <Link href="/uomo" className="m-auto justify-center flex flex-col">
          <h3 className="text-[1.2rem]">Uomo</h3>
          <div className="m-auto">
            <BsArrowRightShort size={30} className="hover:text-redish" />
          </div>
        </Link>
      </section>
    </main>
  );
}
