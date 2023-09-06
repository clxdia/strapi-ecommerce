import ItemUI from "../../ui/ItemUI";
import AsideWA from "../../ui/AsideWA";
import fetchData from "../../hooks/fetchData";

export const metadata = {
  title: "E-Commerce | Abbigliamento",
};

export default async function Abbigliamento() {
  const items = await fetchData(
    process.env.NEXT_PUBLIC_SHORT_API_URL +
      "?populate=*&filters[categories][title][$in][0]=Uomo&filters[categories][title][$in][1]=Donna"
  );

  return (
    <main className="md:pt-[7rem] pb-[10rem]">
      <div className="md:flex md:w-[90%] m-auto">
        <aside className="md:block hidden mt-[8rem] md:min-w-[300px] md:w-[300px] h-fit font-clash sticky top-[8rem]">
          <AsideWA abbigliamento={"#f07167"} />
        </aside>

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
    </main>
  );
}
